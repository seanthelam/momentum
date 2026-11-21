/* Block Plan: drag (or tap) courses into 8 blocks per year. Saves to this browser. */
(function () {
  "use strict";
  const U = HUBUTIL, esc = U.esc, $ = (s) => document.querySelector(s);
  const KEY = "ccphys-blocks-v1";
  const YEARS = ["First-year", "Sophomore", "Junior", "Senior"];
  let custom = U.store.get(KEY + "-custom", []);
  let plan = U.store.get(KEY + "-plan", {});      // "y-b" -> code
  let year = U.store.get(KEY + "-year", 1);
  let selected = null, dragCode = null, q = "";

  const all = () => HUB.BLOCKS.courses.concat(custom);
  const byCode = (c) => all().find((x) => x.code === c);
  const save = () => { U.store.set(KEY + "-plan", plan); U.store.set(KEY + "-custom", custom); U.store.set(KEY + "-year", year); };
  const idx = (y, b) => (y - 1) * 8 + b;
  const posOf = (code) => { for (const k in plan) if (plan[k] === code) { const [y, b] = k.split("-").map(Number); return { y, b }; } return null; };

  /* validity of putting `c` starting in block b (year y) */
  function check(c, y, b) {
    const span = c.span || 1, out = { level: "ok", msg: "" };
    if (b + span - 1 > 8) return { level: "bad", msg: "Needs " + span + " blocks — can't start in block " + b };
    if (span === 2 && b === 4) return { level: "bad", msg: "Two-block course would span semesters" };
    if (c.offered === null || c.offered === undefined) return { level: "unk", msg: "Offering pattern not entered yet" };
    if (!c.offered.includes(b)) return { level: "bad", msg: "Not offered in block " + b + " (usually " + c.offered.join(", ") + ")" };
    return out;
  }
  function occupant(y, b) { // course covering this slot, incl. 2-block spillover
    const k = y + "-" + b;
    if (plan[k]) return { code: plan[k], start: true };
    const prev = plan[y + "-" + (b - 1)];
    if (prev && (byCode(prev) || {}).span === 2) return { code: prev, start: false };
    return null;
  }

  function place(code, y, b) {
    const c = byCode(code); if (!c) return;
    // remove old placement
    for (const k in plan) if (plan[k] === code) delete plan[k];
    // clear slots we'd occupy
    const span = c.span || 1;
    for (let i = 0; i < span; i++) {
      const o = occupant(y, b + i);
      if (o) for (const k in plan) if (plan[k] === o.code) delete plan[k];
    }
    plan[y + "-" + b] = code;
    selected = null; save(); render();
  }

  function messages() {
    const msgs = [];
    for (const k in plan) {
      const [y, b] = k.split("-").map(Number), c = byCode(plan[k]); if (!c) continue;
      const v = check(c, y, b);
      if (v.level === "bad") msgs.push({ t: "err", s: `${c.code} (${YEARS[y - 1]}, block ${b}): ${v.msg}` });
      (c.prereq || []).forEach((pc) => {
        const p = posOf(pc);
        if (!p || idx(p.y, p.b) >= idx(y, b)) msgs.push({ t: "warn", s: `${c.code} is usually taken after ${pc} — ${p ? pc + " is planned later" : pc + " isn't in your plan"}.` });
      });
    }
    const n = Object.keys(plan).length;
    if (!n) msgs.push({ t: "hint", s: "Drag a course onto a block (or tap a course, then tap a block). Green = offered that block, red = not offered." });
    return msgs;
  }

  function renderPool() {
    const groups = {};
    all().filter((c) => !q || (c.code + " " + c.name).toLowerCase().includes(q)).forEach((c) => (groups[c.dept] = groups[c.dept] || []).push(c));
    $("#pool").innerHTML = Object.keys(groups).map((d) => `<h3>${esc(d)}</h3>` + groups[d].map((c) => {
      const off = c.offered ? "Blocks " + c.offered.join(", ") + (c.verified ? " · confirmed" : "") : "Offering not entered";
      return `<button type="button" class="bcourse ${posOf(c.code) ? "placed" : ""} ${selected === c.code ? "sel" : ""}" draggable="true" data-code="${esc(c.code)}" title="${esc(c.src || "")}">
        ${c.core ? '<span class="dot" title="Typical for the physics major"></span>' : ""}<b>${esc(c.code)}</b>${esc(c.name)}
        <small>${esc(off)}${c.span === 2 ? " · 2 blocks" : ""}</small></button>`;
    }).join("")) || '<p class="hint">No courses match.</p>';
  }

  function renderGrid() {
    $("#yr-tabs").innerHTML = YEARS.map((n, i) => `<button type="button" class="chip" data-year="${i + 1}" aria-pressed="${year === i + 1}">${n}</button>`).join("");
    const sel = selected ? byCode(selected) : null, drag = dragCode ? byCode(dragCode) : null, focus = sel || drag;
    const sem = (title, from) => `<div class="sem"><h3>${title}</h3><div class="blocks">` + [0, 1, 2, 3].map((i) => {
      const b = from + i, o = occupant(year, b);
      let cls = "slot", inner = `<div class="bn"><span>Block ${b}</span></div>`;
      if (o) {
        const c = byCode(o.code), v = o.start ? check(c, year, b) : { level: "ok" };
        if ((c.span || 1) === 2 && o.start) cls += " span2";
        if (!o.start) { cls += " covered"; inner += `<div class="hint">↑ ${esc(c.code)} continues</div>`; }
        else inner += `<div class="placed-c" draggable="true"><button type="button" aria-label="Remove ${esc(c.code)}" data-remove="${esc(c.code)}">×</button><b>${esc(c.code)}</b> ${esc(c.name)}${v.level !== "ok" ? `<span class="warn ${v.level === "bad" ? "err" : ""}">${esc(v.msg)}</span>` : ""}</div>`;
      } else if (focus) {
        const v = check(focus, year, b);
        cls += v.level === "bad" ? " bad" : " ok";
      }
      return `<div class="${cls}" data-year="${year}" data-block="${b}">${inner}</div>`;
    }).join("") + "</div></div>";
    // a span-2 course covers its neighbour: drop the neighbour tile from layout
    const html = sem("Fall semester", 1) + sem("Spring semester", 5);
    $("#grid").innerHTML = html;
    $("#grid").querySelectorAll(".slot.span2 + .slot.covered").forEach((n) => n.remove());
    $("#bp-msgs").innerHTML = messages().map((m) => `<div class="${m.t === "hint" ? "hint" : "notice"}">${m.t === "err" ? "<strong>Conflict:</strong> " : m.t === "warn" ? "<strong>Heads up:</strong> " : ""}${esc(m.s)}</div>`).join("");
  }
  function render() { renderPool(); renderGrid(); }

  /* ---- events ---- */
  const pool = $("#pool"), grid = $("#grid");
  pool.addEventListener("click", (e) => { const b = e.target.closest("[data-code]"); if (b) { selected = selected === b.dataset.code ? null : b.dataset.code; render(); } });
  pool.addEventListener("dragstart", (e) => { const b = e.target.closest("[data-code]"); if (!b) return; dragCode = b.dataset.code; e.dataTransfer.setData("text/plain", dragCode); e.dataTransfer.effectAllowed = "move"; setTimeout(renderGrid, 0); });
  pool.addEventListener("dragend", () => { dragCode = null; renderGrid(); });
  grid.addEventListener("dragover", (e) => { if (e.target.closest(".slot")) e.preventDefault(); });
  grid.addEventListener("drop", (e) => {
    const s = e.target.closest(".slot"); if (!s) return; e.preventDefault();
    const code = e.dataTransfer.getData("text/plain") || dragCode; dragCode = null;
    if (code) place(code, +s.dataset.year, +s.dataset.block);
  });
  grid.addEventListener("click", (e) => {
    const rm = e.target.closest("[data-remove]");
    if (rm) { for (const k in plan) if (plan[k] === rm.dataset.remove) delete plan[k]; save(); render(); return; }
    const s = e.target.closest(".slot");
    if (s && selected) place(selected, +s.dataset.year, +s.dataset.block);
  });
  // placed courses can be dragged back out/moved: make placed tiles draggable
  grid.addEventListener("dragstart", (e) => { const t = e.target.closest(".placed-c"); if (t) { const code = t.querySelector("b").textContent; dragCode = code; e.dataTransfer.setData("text/plain", code); } });
  document.addEventListener("click", (e) => {
    const y = e.target.closest("#yr-tabs [data-year]"); if (y) { year = +y.dataset.year; save(); renderGrid(); }
  });
  $("#pool-q").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); renderPool(); });
  $("#bp-clear-year").addEventListener("click", () => { for (const k in plan) if (k.startsWith(year + "-")) delete plan[k]; save(); render(); });
  $("#bp-clear-all").addEventListener("click", () => { if (confirm("Clear your whole 4-year plan?")) { plan = {}; save(); render(); } });
  $("#custom-add").addEventListener("click", () => {
    const code = $("#custom-code").value.trim().toUpperCase(), name = $("#custom-name").value.trim();
    if (!code || byCode(code)) return;
    custom.push({ code, name: name || "Custom course", dept: "My courses", offered: null });
    $("#custom-code").value = ""; $("#custom-name").value = ""; save(); render();
  });
  $("#bp-copy").addEventListener("click", () => {
    const lines = [];
    YEARS.forEach((n, i) => { const y = i + 1; const row = []; for (let b = 1; b <= 8; b++) { const o = occupant(y, b); row.push(`B${b}: ${o && o.start ? o.code : o ? "(cont.)" : "—"}`); } lines.push(`${n}: ${row.join("  ")}`); });
    const text = "Momentum — my block plan\n" + lines.join("\n");
    const done = () => { $("#bp-copy").textContent = "Copied ✓"; setTimeout(() => ($("#bp-copy").textContent = "Copy plan as text"), 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => prompt("Copy your plan:", text));
    else prompt("Copy your plan:", text);
  });
  $("#bp-note").textContent = HUB.BLOCKS.note;
  render();
})();



