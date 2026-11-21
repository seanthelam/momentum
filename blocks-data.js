/* ==========================================================
   BLOCK PLAN DATA — courses you can drag into the 8 blocks.
   offered : array of block numbers (1–8) where the course STARTS, or null if not entered yet.
             null = can be dropped anywhere and shows "offering not entered".
   span    : 2 for a two-block course (default 1).
   src     : where the offering came from (shown in the tooltip).
   core    : true → shown with a gold dot ("typical for the physics major").
   Fill in the nulls from the department's course grid / registrar, then flip `verified` to true.
   ========================================================== */
HUB.BLOCKS = {
  note: "Offerings are entered from the department's block schedule and may change year to year — confirm with the registrar. Courses showing 'Offering not entered' still need a pattern in blocks-data.js.",
  courses: [
    // ---- Physics (core) ----
    { code: "PC241", name: "Physics for the Physical Sciences I: Mechanics", dept: "Physics", offered: [1, 5, 7], verified: true, core: true, src: "Dept. schedule: blocks 1, 5, 7" },
    { code: "PC242", name: "Physics for the Physical Sciences II: E&M", dept: "Physics", offered: [2, 8], verified: true, core: true, prereq: ["PC241"] },
    { code: "PC251", name: "Introductory Modern Physics", dept: "Physics", offered: [3], verified: true, core: true, src: "Block 3" },
    { code: "PC261", name: "Electronics", dept: "Physics", offered: [4, 5], verified: true, core: true, src: "Blocks 4, 5" },
    { code: "PC263", name: "Computational Physics (adjunct)", dept: "Physics", offered: null },
    { code: "PC341", name: "Mechanics", dept: "Physics", offered: [6], verified: true, core: true },
    { code: "PC349", name: "Thermal Physics", dept: "Physics", offered: [6], verified: true, core: true },
    { code: "PC352", name: "Electromagnetic Theory & Vector Analysis (2 blocks)", dept: "Physics", offered: [7], span: 2, verified: true, core: true, src: "Advising PDF: blocks 7–8, junior spring" },
    { code: "PC361", name: "Techniques of Experimental Physics", dept: "Physics", offered: [7], verified: true, core: true },
    { code: "PC362", name: "Observational Astronomy", dept: "Physics", offered: [7], verified: true },
    { code: "PC441", name: "Quantum Mechanics I", dept: "Physics", offered: [2], verified: true, core: true },
    { code: "PC442", name: "Quantum Mechanics II", dept: "Physics", offered: [4], verified: true },
    { code: "PC450", name: "Senior Capstone Experience", dept: "Physics", offered: [1], verified: true, core: true },
    // ---- Physics electives (≥320) ----
    { code: "PC333", name: "Solid State Physics", dept: "Physics", offered: [4], verified: true, src: "Advising PDF: Block 4, alternates years with PC354" },
    { code: "PC354", name: "Optics", dept: "Physics", offered: [4], verified: true, src: "Advising PDF: Block 4, alternates years with PC333" },
    { code: "PC357", name: "Astrophysics", dept: "Physics", offered: [5], verified: true },
    { code: "PC358", name: "Extragalactic Astronomy and Cosmology", dept: "Physics", offered: [5], verified: true },
    { code: "PC320", name: "Topics in Physics (e.g. Particle Physics)", dept: "Physics", offered: null },
    { code: "PC391", name: "Investigations in Physics", dept: "Physics", offered: null },
    // ---- Intro / non-major ----
    { code: "PC141", name: "Physics for the Life Sciences I", dept: "Physics", offered: [3, 6], verified: true },
    { code: "PC142", name: "Physics for the Life Sciences II", dept: "Physics", offered: [4], verified: true },
    { code: "PC133", name: "Astronomy", dept: "Physics", offered: [1], verified: true },
    // ---- Math ----
    { code: "MA126", name: "Calculus I", dept: "Math", offered: null, core: true },
    { code: "MA129", name: "Calculus II", dept: "Math", offered: null, core: true },
    { code: "MA204", name: "Calculus III", dept: "Math", offered: null, core: true }
  ]
};

