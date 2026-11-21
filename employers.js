/* Employers & destinations: logo wall with CC / AIP / type / sector filters */
(function () {
  "use strict";
  const U = HUBUTIL, esc = U.esc, $ = (s) => document.querySelector(s);
  const data = HUB.EMPLOYERS;
  const st = { q: "", view: "All", type: "All", sector: "All" };
  const VIEWS = [["All", "All"], ["cc", "Where CC physics majors went"], ["aip", "AIP list: where physics bachelors are hired"]];
  const grid = $("#emp-grid"), count = $("#emp-count");

  const match = (e, skip) => {
    if (skip !== "view" && st.view === "cc" && !e.cc) return false;
    if (skip !== "view" && st.view === "aip" && !e.aip) return false;
    if (skip !== "type" && st.type !== "All" && e.type !== st.type) return false;
    if (skip !== "sector" && st.sector !== "All" && !e.sectors.includes(st.sector)) return false;
    if (st.q) {
      const hay = [e.name, e.type, e.sectors.join(" "), e.note].join(" ").toLowerCase();
      return st.q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
    }
    return true;
  };

  function chipRow(el, key, vals, label) {
    el.setAttribute("aria-label", label);
    el.innerHTML = vals.map(([v, l]) => {
      const n = data.filter((e) => match(e, key) && (key === "view" ? (v === "All" || e[v]) : key === "type" ? (v === "All" || e.type === v) : (v === "All" || e.sectors.includes(v)))).length;
      return `<button type="button" class="chip" data-key="${key}" data-val="${esc(v)}" aria-pressed="${st[key] === v}">${esc(l)}<span class="count">${n}</span></button>`;
    }).join("");
  }

  function render() {
    chipRow($("#emp-view"), "view", VIEWS, "Show");
    chipRow($("#emp-type"), "type", [["All", "All types"], ...[...new Set(data.map((e) => e.type))].sort().map((t) => [t, t])], "Type");
    chipRow($("#emp-sector"), "sector", [["All", "All sectors"], ...[...new Set(data.flatMap((e) => e.sectors))].sort().map((t) => [t, t])], "Sector");
    const rows = data.filter((e) => match(e)).sort((a, b) => (b.cc - a.cc) || a.name.localeCompare(b.name));
    count.textContent = `${rows.length} of ${data.length}`;
    grid.innerHTML = rows.length ? rows.map((e) => `
      <a class="emp" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(e.name)} — open careers page">
        <span class="corner">${e.cc ? '<span class="pill cc">CC</span>' : ""}${e.aip ? '<span class="pill aip">AIP</span>' : ""}</span>
        ${U.logo(e.domain, e.name, "lg")}
        <b>${esc(e.name)}</b>
        <small>${esc(e.type)} · ${esc(e.sectors.join(", "))}</small>
        ${e.note ? `<small>${esc(e.note)}</small>` : ""}
        <span class="visit">Careers ↗</span>
      </a>`).join("") :
      `<div class="empty" style="grid-column:1/-1"><p><strong>No matches.</strong></p></div>`;
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-key]"); if (!b) return;
    st[b.dataset.key] = b.dataset.val; render();
  });
  $("#emp-q").addEventListener("input", (e) => { st.q = e.target.value.trim(); render(); });
  const p = new URLSearchParams(location.search);
  if (p.get("view")) st.view = p.get("view");
  render();
})();





