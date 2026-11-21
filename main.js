/* ==========================================================
   Shared layout + helpers. Header/footer are injected here so
   you only edit navigation in one place (HUB.NAV in data.js).
   ========================================================== */
(function () {
  "use strict";
  const C = HUB.CONFIG;

  /* ---------- Helpers shared by page scripts ---------- */
  const U = (window.HUBUTIL = {});

  U.esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // localStorage that never throws (private mode, blocked storage, etc.)
  U.store = {
    get(k, fallback) { try { const v = localStorage.getItem(k); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  U.today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };

  U.fmtDate = (iso) => {
    const d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Status after applying the auto-close rule: a past deadline always means closed.
  U.jobStatus = (job) => {
    if (job.deadline) {
      const end = new Date(job.deadline + "T23:59:59");
      if (end < new Date()) return "closed";
    }
    return (job.status || "rolling").toLowerCase();
  };
  U.STATUS_LABEL = { open: "Open", rolling: "Rolling", opens: "Opens soon", closed: "Closed" };
  U.STATUS_CLASS = { open: "tag-ok", rolling: "tag-ok", opens: "tag-warn", closed: "tag-bad" };
  U.STATUS_ORDER = { open: 0, rolling: 1, opens: 2, closed: 3 };

  U.isNew = (job, days) => {
    if (!job.added) return false;
    const age = (new Date() - new Date(job.added + "T12:00:00")) / 86400000;
    return age >= 0 && age <= (days || 10);
  };

  // Academic-year position: Aug = 0 … May = 9, Jun/Jul = 10/11
  U.acadIndex = (m) => (m - 8 + 12) % 12;
  U.currentMonthNumber = () => new Date().getMonth() + 1;

  // Minimal, quote-aware CSV parser (for the optional Google Sheet feed)
  U.parseCSV = (text) => {
    const rows = []; let row = [], cell = "", q = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (q) {
        if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (ch === '"') q = false;
        else cell += ch;
      } else if (ch === '"') q = true;
      else if (ch === ",") { row.push(cell); cell = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); cell = "";
        if (row.length > 1 || row[0] !== "") rows.push(row);
        row = [];
      } else cell += ch;
    }
    if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
    return rows;
  };

  // Loads jobs from the Google Sheet (if configured) or falls back to the seed list.
  U.loadJobs = async () => {
    const base = HUB.JOBS.slice();
    if (C.jobsCsvUrl) {
      try {
        const res = await fetch(C.jobsCsvUrl, { cache: "no-store" });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const rows = U.parseCSV(await res.text());
        const head = rows.shift().map((h) => h.trim().toLowerCase());
        const yes = (v) => /^(true|yes|1|x)$/i.test((v || "").trim());
        const fromSheet = rows.map((r) => {
          const o = {}; head.forEach((h, i) => (o[h] = (r[i] || "").trim()));
          o.id = o.id || "sheet-" + (o.title + o.org).toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 50);
          o.deadline = /^\d{4}-\d{2}-\d{2}$/.test(o.deadline) ? o.deadline : null;
          o.cc = yes(o.cc); o.confirm = yes(o.confirm); o.hide = yes(o.hide);
          o.status = (o.status || "rolling").toLowerCase();
          o.field = o.field || "Other"; o.location = o.location || "";
          return o;
        }).filter((o) => o.hide || (o.title && o.org && o.url));
        const map = new Map(base.map((j) => [j.id, j]));
        fromSheet.forEach((o) => map.set(o.id, o));
        const jobs = [...map.values()].filter((j) => !j.hide);
        return { jobs, source: "sheet", added: fromSheet.filter((o) => !o.hide).length };
      } catch (e) { console.warn("Sheet feed unavailable, using built-in list.", e); }
    }
    return { jobs: base, source: "local" };
  };

  /* ---------- Logos (favicon service with letter fallback) ---------- */
  U.logo = (domain, name, size) => {
    const letter = U.esc((name || "?").trim().charAt(0).toUpperCase());
    const cls = "logo" + (size === "lg" ? " logo-lg" : "");
    if (!domain) return `<span class="${cls} fallback" aria-hidden="true">${letter}</span>`;
    return `<span class="${cls}" aria-hidden="true"><img loading="lazy" alt="" src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128" data-fallback="${letter}"></span>`;
  };
  // swap broken / tiny favicons for a letter tile
  document.addEventListener("error", (e) => {
    const im = e.target;
    if (im && im.tagName === "IMG" && im.dataset && im.dataset.fallback) {
      const p = im.parentNode; p.classList.add("fallback"); p.textContent = im.dataset.fallback;
    }
  }, true);

  /* ---------- Mobile nav (header HTML is static in every page) ---------- */
  function wireNav() {
    const host = document.getElementById("site-header");
    if (!host) return;
    const btn = host.querySelector(".nav-toggle"), list = host.querySelector(".nav-links");
    if (!btn || !list) return;
    const set = (open) => { list.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
    btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
    list.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { set(false); } });
    document.addEventListener("click", (e) => { if (!host.contains(e.target)) set(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 1120) set(false); });
  }

  function reveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }

  document.addEventListener("DOMContentLoaded", () => { wireNav(); reveal(); });
})();





