/* ==========================================================
   Timeline with Summer (soph/junior), Senior Jobs, and Senior Grad School tracks.
   Checked items persist per-browser (localStorage, if allowed).
   ========================================================== */
(function () {
  "use strict";
  const U = HUBUTIL, esc = U.esc;
  const $ = (s) => document.querySelector(s);
  const T = HUB.TIMELINE;
  const KEY = "ccphys-timeline-v1";
  const MONTH_NAMES = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let track = U.store.get(KEY + "-track", "summer");
  if (!T[track]) track = "industry";
  let checks = U.store.get(KEY + "-checks", {});

  const out = $("#timeline"), blurb = $("#track-blurb"), bar = $("#progress-bar"), pct = $("#progress-pct"), thisMonth = $("#this-month");
  const tabs = document.querySelectorAll("#track-tabs [role=tab]");
  const cur = U.currentMonthNumber();
  const curIdx = U.acadIndex(cur);

  const id = (tr, m, i) => `${tr}-${m}-${i}`;

  function render() {
    const data = T[track];
    blurb.textContent = data.blurb;
    tabs.forEach((t) => { const on = t.dataset.track === track; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; });

    out.innerHTML = data.months.map((mo) => {
      const idx = U.acadIndex(mo.m);
      const isNow = idx === curIdx;
      const isPast = curIdx <= 9 && idx < curIdx;
      return `<div class="t-month ${isNow ? "now" : ""} ${isPast ? "past" : ""}" id="m-${mo.m}">
        <div class="t-card">
          <div class="t-head"><h3>${esc(mo.name)}</h3>${isNow ? '<span class="tag tag-gold">This month</span>' : isPast ? '<span class="tag">Earlier</span>' : ""}</div>
          <ul class="t-items">${mo.items.map((it, i) => {
            const cid = id(track, mo.m, i);
            return `<li><label><input type="checkbox" data-id="${cid}" ${checks[cid] ? "checked" : ""}><span class="${it.hard ? "hard" : ""}">${it.hard ? "Deadline · " : ""}${esc(it.t)}</span></label></li>`;
          }).join("")}</ul>
        </div></div>`;
    }).join("");
    updateProgress();
    renderNow();
  }

  function updateProgress() {
    const data = T[track]; let total = 0, done = 0;
    data.months.forEach((mo) => mo.items.forEach((_, i) => { total++; if (checks[id(track, mo.m, i)]) done++; }));
    const p = total ? Math.round((done / total) * 100) : 0;
    bar.style.width = p + "%"; pct.textContent = `${done} of ${total} done`;
    bar.parentElement.setAttribute("aria-valuenow", p);
  }

  function renderNow() {
    const mo = T[track].months.find((m) => U.acadIndex(m.m) === curIdx);
    if (!mo) {
      thisMonth.innerHTML = `<p class="muted" style="margin:0">The calendar runs August–May. Browse below to plan ahead.</p>`;
      return;
    }
    const hard = mo.items.filter((i) => i.hard);
    const show = (hard.length ? hard : mo.items).slice(0, 3);
    thisMonth.innerHTML = `<h4 style="margin-bottom:.5rem">Right now: ${esc(mo.name)}</h4>
      <ul class="plain-list">${show.map((i) => `<li>${esc(i.t)}</li>`).join("")}</ul>
      <p style="margin:1rem 0 0"><a href="#m-${mo.m}" class="btn btn-ghost btn-sm">Jump to ${esc(mo.name)}</a></p>`;
  }

  function setTrack(t) {
    track = t; U.store.set(KEY + "-track", t); render();
    try { history.replaceState(null, "", "#" + t); } catch (e) { /* ignore */ }
  }

  tabs.forEach((t) => {
    t.addEventListener("click", () => setTrack(t.dataset.track));
    t.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const all = [...tabs]; const next = all[(all.indexOf(t) + (e.key === "ArrowRight" ? 1 : all.length - 1)) % all.length];
        next.focus(); setTrack(next.dataset.track);
      }
    });
  });
  out.addEventListener("change", (e) => {
    const cb = e.target.closest("input[type=checkbox]"); if (!cb) return;
    checks[cb.dataset.id] = cb.checked; if (!cb.checked) delete checks[cb.dataset.id];
    U.store.set(KEY + "-checks", checks); updateProgress();
  });
  $("#reset-progress").addEventListener("click", () => {
    if (!confirm("Clear all checked items for every track?")) return;
    checks = {}; U.store.set(KEY + "-checks", checks); render();
  });

  const h = location.hash.slice(1);
  if (T[h]) track = h;
  render();
  void MONTH_NAMES;
})();


