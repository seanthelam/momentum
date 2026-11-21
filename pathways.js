/* ==========================================================
   Course → Career matrix. Click a career to see which courses
   matter (grouped by department). The full matrix lives below.
   Deep link: pathways.html#quantum
   ========================================================== */
(function () {
  "use strict";
  const esc = HUBUTIL.esc;
  const $ = (s) => document.querySelector(s);

  const SHORT = { aerospace: "Aero", quantum: "Quantum", energy: "Energy", natlab: "Labs", semis: "Semis", data: "Data/SW", medphys: "Med Phys", earth: "Earth", policy: "Policy", gradphys: "Phys PhD", gradeng: "Eng/MSE PhD" };
  // Which job-board filter each career should open
  const BOARD = { aerospace: "field=Aerospace", quantum: "field=Quantum", energy: "field=Energy", natlab: "field=National+Lab", semis: "field=Semiconductors", data: "field=Data+%26+Software", medphys: "field=Medical", earth: "field=Earth+%26+Climate", policy: "field=Policy+%26+Education", gradphys: "track=Grad+School", gradeng: "track=Grad+School" };
  const TIER = { 1: "Essential", 2: "Recommended", 3: "Helpful" };

  const careers = HUB.CAREERS;
  const courseById = Object.fromEntries(HUB.COURSES.map((c) => [c.id, c]));
  const listEl = $("#path-list"), panel = $("#path-panel"), matrixEl = $("#matrix");
  let current = null, essentialOnly = false;

  function renderList() {
    listEl.innerHTML = careers.map((c) =>
      `<button type="button" class="path-btn" data-id="${c.id}" aria-pressed="${c.id === current}"><span class="ico" aria-hidden="true">${c.icon}</span><span>${esc(c.name)}</span></button>`).join("");
  }

  function renderPanel() {
    const c = careers.find((x) => x.id === current);
    if (!c) return;
    const byDept = {};
    Object.entries(c.courses).forEach(([id, tier]) => {
      if (essentialOnly && tier !== 1) return;
      const co = courseById[id]; if (!co) return;
      (byDept[co.dept] = byDept[co.dept] || []).push({ ...co, tier });
    });
    const groups = HUB.DEPTS.filter((d) => byDept[d]).map((d) => {
      const items = byDept[d].sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
      return `<div class="course-group"><h4>${esc(d)}</h4><ul class="course-list">${items.map((i) =>
        `<li class="course-item tier-${i.tier}"><span>${esc(i.name)}</span><span class="tier-label">${TIER[i.tier]}</span></li>`).join("")}</ul></div>`;
    }).join("");

    panel.innerHTML = `
      <span class="eyebrow">Pathway</span>
      <h2>${esc(c.name)}</h2>
      <p class="lead">${esc(c.blurb)}</p>
      <div class="chip-row" style="margin-top:1.4rem">
        <button type="button" class="chip" id="tier-toggle" aria-pressed="${essentialOnly}">Essential courses only</button>
      </div>
      <div class="course-groups">${groups || '<p class="muted">No courses at this level.</p>'}</div>
      <div class="two-col">
        <div><h4>Skills to build</h4><ul class="plain-list">${c.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
        <div><h4>Typical first roles</h4><ul class="plain-list">${c.roles.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>
      </div>
      <h4 style="margin-top:1.8rem">Where physics bachelors go</h4>
      <div class="chip-row" style="gap:.4rem">${c.employers.map((e) => `<span class="tag">${esc(e)}</span>`).join("")}</div>
      <p style="margin-top:1.6rem"><strong class="gold">Graduate study:</strong> <span class="muted">${esc(c.grad)}</span></p>
      <p class="notice"><strong>Good to know.</strong> ${esc(c.note)}</p>
      <div class="hero-cta" style="margin-top:1.4rem">
        <a class="btn btn-gold" href="opportunities.html?${BOARD[c.id] || ""}">See open listings</a>
        <a class="btn btn-ghost" href="timeline.html">Plan my senior year</a>
      </div>`;
  }

  function renderMatrix() {
    const head = `<tr><th scope="col">Course</th>${careers.map((c) =>
      `<th scope="col" class="${c.id === current ? "sel" : ""}"><button type="button" class="chip" style="min-height:34px;padding:0 .6rem;font-size:.72rem" data-id="${c.id}" aria-label="Show ${esc(c.name)}">${esc(SHORT[c.id] || c.name)}</button></th>`).join("")}</tr>`;
    const body = HUB.DEPTS.map((d) => {
      const rows = HUB.COURSES.filter((c) => c.dept === d); if (!rows.length) return "";
      return `<tr class="dept-row"><th colspan="${careers.length + 1}" scope="colgroup">${esc(d)}</th></tr>` + rows.map((co) =>
        `<tr><th scope="row" style="font-weight:500">${esc(co.name)}</th>${careers.map((c) => {
          const t = c.courses[co.id];
          return `<td class="${c.id === current ? "sel" : ""}">${t ? `<span class="dot dot-${t}" role="img" aria-label="${TIER[t]}"></span>` : ""}</td>`;
        }).join("")}</tr>`).join("");
    }).join("");
    matrixEl.innerHTML = `<table class="matrix"><thead>${head}</thead><tbody>${body}</tbody></table>`;
  }

  function select(id, scroll) {
    if (!careers.some((c) => c.id === id)) id = careers[0].id;
    current = id;
    renderList(); renderPanel(); renderMatrix();
    try { history.replaceState(null, "", "#" + id); } catch (e) { /* ignore */ }
    if (scroll && window.innerWidth <= 900) panel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  listEl.addEventListener("click", (e) => { const b = e.target.closest("[data-id]"); if (b) select(b.dataset.id, true); });
  matrixEl.addEventListener("click", (e) => { const b = e.target.closest("[data-id]"); if (b) { select(b.dataset.id, false); $("#explorer").scrollIntoView({ behavior: "smooth" }); } });
  panel.addEventListener("click", (e) => { if (e.target.closest("#tier-toggle")) { essentialOnly = !essentialOnly; renderPanel(); } });
  window.addEventListener("hashchange", () => select(location.hash.slice(1), false));

  select(location.hash.slice(1) || careers[0].id, false);
})();



