/* ==========================================================
   Anonymous alumni explorer: search + sector chips + path chips
   ========================================================== */
(function () {
  "use strict";
  const esc = HUBUTIL.esc;
  const $ = (s) => document.querySelector(s);
  const data = HUB.ALUMNI;
  const state = { q: "", sector: "All", path: "All" };
  const grid = $("#alumni-grid"), count = $("#alumni-count"), secEl = $("#sector-chips"), pathEl = $("#path-chips"), qEl = $("#alumni-q");

  function match(a, skip) {
    if (skip !== "sector" && state.sector !== "All" && a.sector !== state.sector) return false;
    if (skip !== "path" && state.path !== "All" && a.path !== state.path) return false;
    if (state.q) {
      const hay = [a.year, a.major, a.sector, a.path, a.first, a.now, a.where].join(" ").toLowerCase();
      return state.q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
    }
    return true;
  }

  function chipRow(el, key, values, label) {
    const total = data.filter((a) => match(a, key)).length;
    const mk = (v, n) => `<button type="button" class="chip" data-key="${key}" data-val="${esc(v)}" aria-pressed="${state[key] === v}">${esc(v)}<span class="count">${n}</span></button>`;
    el.innerHTML = mk("All", total) + values.map((v) => mk(v, data.filter((a) => a[key] === v && match(a, key)).length)).join("");
    el.setAttribute("aria-label", label);
  }

  function render() {
    chipRow(secEl, "sector", [...new Set(data.map((a) => a.sector))].sort(), "Filter by sector");
    chipRow(pathEl, "path", [...new Set(data.map((a) => a.path))].sort(), "Filter by path after graduation");
    const rows = data.filter((a) => match(a)).sort((a, b) => b.year - a.year);
    count.textContent = `${rows.length} ${rows.length === 1 ? "alum" : "alumni"}`;
    grid.innerHTML = rows.length ? rows.map((a) => `
      <article class="alum">
        <div style="display:flex;gap:.8rem;align-items:center">${HUBUTIL.logo(a.domain, a.where)}<span class="yr">Class of ${a.year}</span></div>
        <h3>${esc(a.now)}</h3>
        <p class="after">${esc(a.where)}</p>
        <p class="after"><span class="gold">After CC:</span> ${esc(a.first)}</p>
        <p class="after">${esc(a.major)}</p>
        <div class="tags"><span class="tag tag-gold">${esc(a.sector)}</span><span class="tag">${esc(a.path)}</span>${a.sample ? '<span class="tag tag-bad">Template</span>' : ""}</div>
      </article>`).join("") :
      `<div class="empty" style="grid-column:1/-1"><p><strong>No alumni match.</strong></p><button class="btn btn-ghost btn-sm" type="button" id="alum-reset">Reset filters</button></div>`;
  }

  function onChip(e) {
    const b = e.target.closest("[data-key]"); if (!b) return;
    state[b.dataset.key] = b.dataset.val; render();
  }
  secEl.addEventListener("click", onChip); pathEl.addEventListener("click", onChip);
  qEl.addEventListener("input", () => { state.q = qEl.value.trim(); render(); });
  grid.addEventListener("click", (e) => {
    if (e.target.closest("#alum-reset")) { state.q = ""; state.sector = "All"; state.path = "All"; qEl.value = ""; render(); }
  });

  if (!HUB.CONFIG.sampleAlumni) { const n = $("#sample-notice"); if (n) n.hidden = true; }
  render();
})();


