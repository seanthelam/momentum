/* ==========================================================
   Home page: live stats, featured listings, pathway cards,
   and a "this month" snapshot from the timeline.
   ========================================================== */
(function () {
  "use strict";
  const U = HUBUTIL, esc = U.esc;
  const $ = (s) => document.querySelector(s);

 (async function () {
   const { jobs } = await U.loadJobs();
   const live = jobs.filter((j) => ["open", "rolling"].includes(U.jobStatus(j)));

  // Stats
  $("#stat-jobs").textContent = live.length;
  $("#stat-paths").textContent = HUB.CAREERS.length;
  $("#stat-emp").textContent = HUB.EMPLOYERS.length;
  $("#stat-alumni").textContent = HUB.ALUMNI.length;

  // Featured: soonest real deadlines first, then newest - up to 6
  const dl = (j) => (j.deadline ? new Date(j.deadline).getTime() : Infinity);
  const featured = [...live].sort((a,b) => dl(a) - dl(b) || String(b.added || "").localCompare(String(a.added || ""))).slice(0, 6);
  $("#featured").innerHTML = featured.map((j) => {
    const d = j.deadline ? Math.ceil((new Date(j.deadline = "T23:59:59") - new Date()) / 86400000) : null;
    return `
    <a class="card hoverable" href="opportunities.html?q=${encodeURIComponent(j.org.split(" ")[0])}" style="text-decoration:none;color:inherit">
      <div style="display:flex;gap:.8rem;align-items:center;margin-bottom:.9rem">${U.logo(j.domain, j.org)}<div class="chip-row"><span class="tag tag-gold">${esc(j.track)}</span>${d !== null ? `<span class="tag tag-warn">${d} days left</span>` : ""}</div></div>
      <h3 style="font-size:1.2rem;font-family:var(--font-body);font-weight:600">${esc(j.title)}</h3>
      <p class="muted" style="margin:0">${esc(j.org)} · ${esc(j.location)}</p>
    </a>`; }).join("");

  // Pathway cards
  $("#path-cards").innerHTML = HUB.CAREERS.slice(0, 8).map((c) => `
    <a class="card hoverable" href="pathways.html#${c.id}">
      <div class="num" aria-hidden="true">${c.icon}</div>
      <h3>${esc(c.name)}</h3>
      <p class="muted">${esc(c.blurb.split(". ")[0])}.</p>
    </a>`).join("");

  // This month
  const curIdx = U.acadIndex(U.currentMonthNumber());
  const col = (key, title) => {
    const mo = HUB.TIMELINE[key].months.find((m) => U.acadIndex(m.m) === curIdx);
    if (!mo) return `<div><h4>${title}</h4><p class="muted">The senior-year calendar runs August–May.</p></div>`;
    const items = (mo.items.filter((i) => i.hard).concat(mo.items.filter((i) => !i.hard))).slice(0, 3);
    return `<div><h4>${title} · ${esc(mo.name)}</h4><ul class="plain-list">${items.map((i) => `<li>${esc(i.t)}</li>`).join("")}</ul></div>`;
  };
  $("#now-card").innerHTML = col("industry", "Job search") + col("grad", "Grad school");
 })();
})();

