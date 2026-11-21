/* ==========================================================
   Momentum — site settings + shared content.
   Other editable data files (all plain JavaScript lists):
     jobs-data.js       → listings on the Opportunities page
     employers-data.js  → logos on the Employers page
     alumni-data.js     → Alumni page
     blocks-data.js     → Block Plan courses & offering blocks
   ========================================================== */
window.HUB = {};

HUB.CONFIG = {
  siteName: "Momentum",
  org: "Colorado College Physics",
  // OPTIONAL live feed: publish a Google Sheet as CSV and paste the URL.
  // Columns: id,title,org,domain,location,track,field,status,deadline,window,url,notes,added,cc,confirm,hide
  jobsCsvUrl: "",
  contactEmail: "momentum@example.edu", // TODO: replace
  sampleAlumni: true
};

HUB.NAV = [
  { href: "index.html",         label: "Home",          id: "home" },
  { href: "opportunities.html", label: "Opportunities", id: "opportunities" },
  { href: "employers.html",     label: "Employers",     id: "employers" },
  { href: "pathways.html",      label: "Pathways",      id: "pathways" },
  { href: "blocks.html",        label: "Block Plan",    id: "blocks" },
  { href: "timeline.html",      label: "Timeline",      id: "timeline" },
  { href: "alumni.html",        label: "Alumni",        id: "alumni" },
  { href: "resources.html",     label: "Resources",     id: "resources" },
  { href: "about.html",         label: "About",         id: "about" }
];

/* ==========================================================
   COURSES
   Topic names, not catalog numbers — map each to the real CC
   course(s) once you've checked the catalog (add a `cc` field,
   e.g. cc: "PH 3xx"). Shown in the matrix on the Pathways page.
   ========================================================== */
HUB.DEPTS = ["Physics", "Mathematics", "Computer Science", "Chemistry", "Environmental Science", "Geology", "Economics", "Writing"];

HUB.COURSES = [
  // Physics
  { id: "p-mech",    dept: "Physics", name: "Classical Mechanics" },
  { id: "p-em",      dept: "Physics", name: "Electricity & Magnetism" },
  { id: "p-qm",      dept: "Physics", name: "Quantum Mechanics" },
  { id: "p-thermo",  dept: "Physics", name: "Thermal Physics" },
  { id: "p-modern",  dept: "Physics", name: "Modern Physics" },
  { id: "p-optics",  dept: "Physics", name: "Optics" },
  { id: "p-elec",    dept: "Physics", name: "Electronics" },
  { id: "p-solid",   dept: "Physics", name: "Solid State" },
  { id: "p-comp",    dept: "Physics", name: "Computational Physics" },
  { id: "p-astro",   dept: "Physics", name: "Astrophysics" },
  { id: "p-lab",     dept: "Physics", name: "Techniques of Experimental Physics" },
  { id: "p-research",dept: "Physics", name: "Independent Research / Thesis" },
  // Math
  { id: "m-calc3",   dept: "Mathematics", name: "Multivariable Calculus" },
  { id: "m-linalg",  dept: "Mathematics", name: "Linear Algebra" },
  { id: "m-de",      dept: "Mathematics", name: "Differential Equations" },
  { id: "m-methods", dept: "Mathematics", name: "Mathematical Methods / Complex Analysis" },
  { id: "m-stats",   dept: "Mathematics", name: "Probability & Statistics" },
  { id: "m-num",     dept: "Mathematics", name: "Numerical Analysis" },
  // CS
  { id: "c-intro",   dept: "Computer Science", name: "Intro Programming (Python)" },
  { id: "c-ds",      dept: "Computer Science", name: "Data Structures & Algorithms" },
  { id: "c-ml",      dept: "Computer Science", name: "Machine Learning / Data Science" },
  { id: "c-sys",     dept: "Computer Science", name: "Computer Systems & Architecture" },
  // Chem
  { id: "ch-phys",   dept: "Chemistry", name: "Physical Chemistry" },
  { id: "ch-inorg",  dept: "Chemistry", name: "Inorganic Chemistry" },
  { id: "ch-anal",   dept: "Chemistry", name: "Instrumental & Analytical Chemistry" },
  // Env
  { id: "e-energy",  dept: "Environmental Science", name: "Energy & Resources" },
  { id: "e-climate", dept: "Environmental Science", name: "Climate & Atmospheric Systems" },
  { id: "e-gis",     dept: "Environmental Science", name: "GIS & Remote Sensing" },
  // Geology
  { id: "g-earth",   dept: "Geology", name: "Planetary & Earth Systems" },
  // Econ
  { id: "ec-micro",  dept: "Economics", name: "Microeconomics / Energy Economics" },
  // Writing
  { id: "w-tech",    dept: "Writing", name: "Scientific & Technical Communication" }
];

/* ==========================================================
   CAREER PATHWAYS
   courses: { courseId: tier }  tier 1 = essential, 2 = strongly
   recommended, 3 = helpful. Tune these with your faculty!
   ========================================================== */
HUB.CAREERS = [
  {
    id: "aerospace", icon: "✦", name: "Aerospace & Space Systems",
    blurb: "Spacecraft, propulsion, guidance, sensors, and mission design. Physics bachelors typically enter as systems, test, optics, or GNC engineers — your first-principles training is the differentiator.",
    courses: { "p-mech":1,"p-em":1,"p-thermo":1,"m-de":1,"m-linalg":1,"c-intro":1, "p-elec":2,"p-comp":2,"m-num":2,"p-astro":2,"p-lab":2,"p-optics":2, "c-ds":3,"m-stats":3,"w-tech":3,"e-gis":3,"g-earth":3 },
    skills: ["Python / MATLAB for analysis and simulation", "Orbital mechanics & control basics", "Instrumentation, DAQ, and test", "Technical writing for requirements and reports"],
    roles: ["Systems engineer", "Optical / sensor engineer", "GNC / flight dynamics analyst", "Test & integration engineer", "Mission operations"],
    employers: ["NASA centers & JPL", "SpaceX", "Blue Origin", "Lockheed Martin Space", "Northrop Grumman", "BAE Systems Space & Mission Systems (Boulder)", "Sierra Space (Louisville, CO)", "LASP (CU Boulder)", "Air Force Research Lab / Space Force"],
    grad: "MS or PhD in aerospace engineering, applied physics, or planetary/space science is common after 2–4 years in industry; many employers fund it.",
    note: "Many roles require U.S. citizenship (ITAR) and a security clearance — start that conversation early."
  },
  {
    id: "quantum", icon: "⟩", name: "Quantum Information & Technology",
    blurb: "Quantum computing, sensing, and communication. The industry is expanding fast along the Front Range (Boulder/Broomfield), and a strong linear-algebra + QM base plus coding gets you in the door.",
    courses: { "p-qm":1,"m-linalg":1,"c-intro":1,"p-em":1,"p-thermo":1, "p-optics":2,"p-elec":2,"p-comp":2,"p-solid":2,"m-num":2,"c-ds":2,"m-stats":2, "ch-phys":3,"p-lab":3,"p-research":3 },
    skills: ["Python + a quantum SDK (e.g., Qiskit)", "Linear algebra fluency", "Lab: optics, RF/microwave, cryogenics, lasers", "Numerical simulation"],
    roles: ["Quantum software / algorithms associate", "Research technician / lab engineer", "Photonics or controls engineer", "Postbac at a national lab or NIST"],
    employers: ["IBM Quantum", "Quantinuum", "IonQ", "Infleqtion (Boulder)", "Rigetti", "Google Quantum AI", "NIST / JILA (Boulder)", "Fermilab SQMS", "Argonne Q-NEXT", "Elevate Quantum (Colorado)"],
    grad: "A PhD is the standard route for research-scientist roles; hardware/software engineering roles are open with a bachelor's plus demonstrable projects.",
    note: "Open-source contributions and a small portfolio of simulations carry real weight here."
  },
  {
    id: "energy", icon: "☀", name: "Energy & Clean Technology",
    blurb: "Solar, storage, geothermal, nuclear, fusion, and grid technology. Thermodynamics and materials physics are the backbone; policy and economics make you much more effective.",
    courses: { "p-thermo":1,"p-em":1,"ch-phys":1,"e-energy":1, "m-de":2,"p-solid":2,"ch-inorg":2,"c-intro":2,"m-stats":2,"p-comp":2, "ec-micro":3,"e-climate":3,"w-tech":3,"p-lab":3 },
    skills: ["Thermodynamics & heat transfer", "Materials characterization", "Data analysis for performance and reliability", "Techno-economic reasoning"],
    roles: ["R&D associate", "Performance / reliability analyst", "Energy analyst", "Fusion / plasma technician or engineer", "Postbac at NREL"],
    employers: ["NREL (Golden, CO)", "Commonwealth Fusion Systems", "GE Vernova", "Xcel Energy", "First Solar", "Princeton Plasma Physics Lab", "DOE labs"],
    grad: "MS/PhD in materials science, mechanical/nuclear engineering, or physics for R&D leadership; MBA/MPP for strategy and policy.",
    note: "NREL is a short drive from campus — informational interviews are very doable."
  },
  {
    id: "natlab", icon: "⚛", name: "National Labs & Research Staff",
    blurb: "DOE and NIST labs hire bachelors-level technical staff and run structured postbac and internship pipelines. Broad, rigorous physics plus research experience is the strongest signal.",
    courses: { "p-mech":1,"p-em":1,"p-qm":1,"p-thermo":1,"p-lab":1,"c-intro":1,"p-research":1, "p-comp":2,"m-num":2,"m-stats":2,"p-elec":2,"p-modern":2, "c-ds":3,"ch-phys":3,"w-tech":3 },
    skills: ["Reproducible research code (Python, Fortran, C++)", "Data analysis & error propagation", "Lab / instrument competence", "Clear written results"],
    roles: ["Research technologist", "Postbac research associate", "Software / data analyst", "Accelerator, detector, or beamline technician"],
    employers: ["Los Alamos", "Lawrence Livermore", "Sandia", "Argonne", "Oak Ridge", "PNNL", "Fermilab", "Brookhaven", "SLAC", "NIST (Boulder & Gaithersburg)"],
    grad: "Many staff scientists hold a PhD; a postbac year is a proven bridge into top graduate programs.",
    note: "Most DOE lab roles need U.S. work authorization; some need clearances (Q/L)."
  },
  {
    id: "semis", icon: "◧", name: "Semiconductors, Photonics & Devices",
    blurb: "Chip fabrication, process engineering, lasers, sensors, and optical systems. Condensed matter and optics knowledge converts directly into process and device roles.",
    courses: { "p-solid":1,"p-qm":1,"p-em":1,"p-optics":1,"p-elec":1, "ch-inorg":2,"ch-anal":2,"p-thermo":2,"p-lab":2,"m-de":2,"c-intro":2, "p-comp":3,"m-stats":3 },
    skills: ["Device physics & band theory", "Characterization (XRD, SEM, spectroscopy)", "Statistics for process control", "Cleanroom basics"],
    roles: ["Process engineer", "Device / yield engineer", "Optical engineer", "Applications engineer"],
    employers: ["Intel", "Texas Instruments", "Micron", "Lam Research", "Applied Materials", "KLA", "GlobalFoundries", "Optical and laser companies across Colorado"],
    grad: "MS/PhD in materials science, EE, or applied physics opens R&D and device-design tracks.",
    note: "CHIPS Act investment is expanding hiring in Arizona, Oregon, Texas, New York, and Idaho."
  },
  {
    id: "data", icon: "∑", name: "Data Science, ML & Software",
    blurb: "Physics grads are strong at modeling noisy systems — which is most of data science. Add real software skills and a public portfolio and the range of employers is huge (tech, finance, defense analytics, startups).",
    courses: { "c-intro":1,"c-ds":1,"m-linalg":1,"m-stats":1,"m-calc3":1, "c-ml":2,"p-comp":2,"m-num":2,"c-sys":2,"p-thermo":2, "ec-micro":3,"w-tech":3,"p-mech":3 },
    skills: ["Python, SQL, Git", "Statistics & ML fundamentals", "Data structures for interviews", "Communicating results to non-experts"],
    roles: ["Data analyst / scientist", "Software engineer", "Quantitative analyst", "Simulation engineer", "ML engineer (with portfolio)"],
    employers: ["Technology companies", "Quant finance firms", "Defense & intelligence analytics", "NVIDIA (simulation/HPC)", "Health-tech and climate-tech startups"],
    grad: "Optional: MS in CS/data science if you want deeper ML; many roles don't require it.",
    note: "Coding interviews are their own skill. Budget practice time on algorithms."
  },
  {
    id: "medphys", icon: "✚", name: "Medical & Health Physics",
    blurb: "Radiation therapy, imaging, and radiation safety. The usual route is a CAMPEP-accredited graduate program followed by residency; physics bachelors are the ideal foundation.",
    courses: { "p-modern":1,"p-em":1,"m-stats":1,"p-thermo":1, "p-optics":2,"p-elec":2,"c-intro":2,"ch-anal":2,"p-lab":2, "ch-phys":3,"w-tech":3 },
    skills: ["Radiation interactions & detection", "Clinical shadowing / hospital exposure", "Statistics", "Programming for image analysis"],
    roles: ["Medical physics grad student (MS/PhD)", "Imaging research assistant", "Radiation safety technician", "Device-company applications specialist"],
    employers: ["University hospitals & cancer centers", "Varian / Siemens Healthineers / GE HealthCare", "National labs (health physics)", "Regulatory agencies"],
    grad: "CAMPEP-accredited MS or PhD, then clinical residency, then ABR board certification for clinical roles.",
    note: "If medical school is also on your radar, confirm biology and organic chemistry requirements early."
  },
  {
    id: "earth", icon: "◍", name: "Earth, Climate & Environmental Science",
    blurb: "Atmospheric physics, remote sensing, hydrology, and climate modeling. Colorado is a global hub: NCAR, NOAA, USGS, and NASA-funded groups are all within an hour.",
    courses: { "p-thermo":1,"p-mech":1,"m-de":1,"e-climate":1,"c-intro":1, "m-stats":2,"e-gis":2,"e-energy":2,"g-earth":2,"p-comp":2,"m-num":2, "ch-anal":3,"w-tech":3,"ec-micro":3 },
    skills: ["Fluid dynamics intuition", "Python (xarray, NumPy), GIS", "Statistics for geoscience", "Scientific writing"],
    roles: ["Research assistant / technician", "Climate data analyst", "Remote-sensing analyst", "Environmental consultant"],
    employers: ["NCAR (Boulder)", "NOAA labs (Boulder)", "USGS (Denver)", "NASA GISS", "EPA", "Environmental consulting firms"],
    grad: "MS/PhD in atmospheric science, geophysics, or environmental engineering are the main routes to research positions.",
    note: "Your environmental science coursework pairs unusually well with a physics major — lean into it."
  },
  {
    id: "policy", icon: "⚖", name: "Policy, Law, Education & Communication",
    blurb: "Physicists shape science policy, patent law, journalism, and teaching. Strong writers with technical credibility are scarce and valued.",
    courses: { "w-tech":1,"m-stats":1,"ec-micro":1, "e-energy":2,"p-modern":2,"c-intro":2, "p-qm":3,"p-em":3 },
    skills: ["Writing for non-experts", "Policy analysis", "Public speaking & teaching", "Quantitative literacy"],
    roles: ["Policy intern / analyst", "Patent technical specialist → patent attorney", "Science journalist", "High-school physics teacher", "Program associate at a scientific society"],
    employers: ["AIP / APS policy offices", "DOE / NSF / NASA program offices", "Think tanks", "Law firms (IP)", "School districts (physics teaching is in high demand)"],
    grad: "JD, MPP/MPA, or teaching credential depending on direction. Patent bar is open to physics majors.",
    note: "Physics teachers are in short supply nationally — loan-forgiveness programs can help."
  },
  {
    id: "gradphys", icon: "∞", name: "Grad School: Physics & Astronomy PhD",
    blurb: "The classic route to research careers in academia, labs, and industry R&D. Admissions weigh research experience and recommendation letters more than anything else.",
    courses: { "p-mech":1,"p-em":1,"p-qm":1,"p-thermo":1,"m-methods":1,"m-linalg":1,"p-research":1, "p-lab":2,"p-comp":2,"m-de":2,"p-solid":2,"p-astro":2, "c-intro":3,"p-modern":3 },
    skills: ["Research experience (REU, thesis, or lab)", "Coding for analysis", "Strong letters from 3 faculty/researchers", "Clear research statement"],
    roles: ["PhD student (typically fully funded)", "Postbac research associate (bridge year)"],
    employers: ["Top physics PhD programs", "Fellowships: NSF GRFP, DOE CSGF, NDSEG, Hertz"],
    grad: "Most physics PhD programs have dropped the Physics GRE requirement — verify each program.",
    note: "PhD programs in physics are generally funded with a stipend and tuition waiver. Don't pay for a physics PhD."
  },
  {
    id: "gradeng", icon: "⬡", name: "Grad School: Applied Physics & Engineering",
    blurb: "Materials science, applied physics, and engineering programs reward physics and chemistry preparation and prize research experience and computational ability.",
    courses: { "p-solid":1,"p-thermo":1,"ch-phys":1,"m-de":1,"p-em":1, "ch-inorg":2,"p-qm":2,"p-comp":2,"ch-anal":2,"c-intro":2, "p-lab":3,"p-research":3 },
    skills: ["Materials characterization", "Computational methods (DFT, MD, ML)", "Research statement tied to a faculty member's work", "Evidence of independent projects"],
    roles: ["MS or PhD student (research-based programs are typically funded)", "Industry R&D after MS"],
    employers: ["MSE, applied physics, and engineering departments", "Fellowships: NSF GRFP, DOE CSGF, NDSEG"],
    grad: "Standalone PhD tracks vs. interdisciplinary tracks differ in admissions — read each program's page carefully.",
    note: "Emphasize research and tools you've actually used, with concrete outputs."
  }
];

/* ==========================================================
   TIMELINE — senior-year month-by-month (August → May)
   hard:true = a deadline-type item (highlighted in gold).
   Treat dates as typical; always confirm on official sites.
   ========================================================== */
HUB.TIMELINE = {
  industry: {
    label: "Industry & Government Job Search",
    blurb: "Large aerospace, defense, and national-lab employers recruit early and slowly. Starting in August keeps you ahead of most of the pool.",
    months: [
      { m: 8,  name: "August", items: [
        { t: "Rewrite your resume (1 page): projects and skills above coursework" },
        { t: "Pick 2–3 target sectors from the Pathways page" },
        { t: "Create Handshake and USAJOBS profiles; set saved searches" },
        { t: "Book a Career Center meeting and a mock-interview slot" },
        { t: "Message 3 alumni for 20-minute informational chats" }
      ]},
      { m: 9,  name: "September", items: [
        { t: "Attend fall career fairs (campus, Denver/Boulder)" },
        { t: "Apply: aerospace/defense new-grad postings open in the fall", hard: true },
        { t: "Collect info you'll need for a clearance form (addresses, references, travel)" },
        { t: "Fulbright: campus deadline is usually in September if you want a gap-year option", hard: true },
        { t: "Clean up GitHub: README and results for your 2–3 best projects" }
      ]},
      { m: 10, name: "October", items: [
        { t: "Apply: national-lab postbac and career-start roles (many open Oct–Dec)", hard: true },
        { t: "Run 2 mock interviews: one technical, one behavioral" },
        { t: "Ask 2–3 people for references; send them your resume" },
        { t: "Fulbright national deadline typically early October", hard: true }
      ]},
      { m: 11, name: "November", items: [
        { t: "Submit 8–12 applications; track them in a spreadsheet" },
        { t: "Practice coding problems 3×/week if targeting software/data roles" },
        { t: "Follow up with every informational contact — thank-you notes" },
        { t: "Plan Thanksgiving break to finish applications" }
      ]},
      { m: 12, name: "December", items: [
        { t: "Many lab and corporate new-grad postings close in Dec–Jan — submit now", hard: true },
        { t: "DoD SMART Scholarship typically closes Dec 1 (also relevant for grad study)", hard: true },
        { t: "Prepare a one-minute 'tell me about your research' pitch" },
        { t: "Confirm recommenders have what they need" }
      ]},
      { m: 1,  name: "January", items: [
        { t: "Peak interview season begins — keep applying to rolling roles" },
        { t: "Apply for summer/postbac programs that open late (SULI-style cycles)", hard: true },
        { t: "Reach out to hiring managers for referrals and quick chats" }
      ]},
      { m: 2,  name: "February", items: [
        { t: "Final-round / on-site interviews; prepare technical deep dives" },
        { t: "If extended an offer: ask about timeline, relocation, and clearance process" },
        { t: "Keep pipeline warm with rolling applications" }
      ]},
      { m: 3,  name: "March", items: [
        { t: "Compare offers: salary, mentorship, growth, location, funding for grad school" },
        { t: "Negotiate respectfully — ask for start date, relocation, signing bonus" },
        { t: "Begin clearance paperwork once you have an offer and sponsor" }
      ]},
      { m: 4,  name: "April", items: [
        { t: "Accept an offer; notify other employers professionally", hard: true },
        { t: "Confirm start date; plan housing and move" },
        { t: "Thank every reference, advisor, and alumni contact" }
      ]},
      { m: 5,  name: "May", items: [
        { t: "Graduate! Keep applying to rolling roles if you don't have an offer yet" },
        { t: "Send a quick update to your faculty network" },
        { t: "Join SPS/APS alumni and local professional groups" }
      ]}
    ]
  },
  grad: {
    label: "Graduate School Track",
    blurb: "Physics PhD admissions are largely decided by research experience, letters, and fit with specific faculty. Most December deadlines are decided in the first weeks of August–October.",
    months: [
      { m: 8,  name: "August", items: [
        { t: "Build a list of 8–12 programs and 2–3 target advisors per program" },
        { t: "Check each program's requirements: GRE policy, statements, fees, deadlines", hard: true },
        { t: "Ask your 3 letter writers; give them a short packet and deadlines" },
        { t: "Start drafting your research and personal statements" },
        { t: "NSF GRFP application opens — read the solicitation" }
      ]},
      { m: 9,  name: "September", items: [
        { t: "Draft statement of purpose; share with faculty and a writing tutor" },
        { t: "Send short introductory emails to prospective advisors (where appropriate)" },
        { t: "Request fee waivers where available" },
        { t: "Fulbright campus/national deadlines — if considering a gap year", hard: true }
      ]},
      { m: 10, name: "October", items: [
        { t: "NSF GRFP and Hertz deadlines are typically in October", hard: true },
        { t: "Revise statements after faculty feedback; tailor each to the program" },
        { t: "Submit official transcript requests" }
      ]},
      { m: 11, name: "November", items: [
        { t: "Submit applications with early deadlines" },
        { t: "Confirm recommenders have uploaded letters" },
        { t: "Use Thanksgiving block break to finish the rest" }
      ]},
      { m: 12, name: "December", items: [
        { t: "Most physics, astronomy, and materials PhD deadlines fall Dec 1–15 (verify each)", hard: true },
        { t: "NDSEG typically closes in early December", hard: true },
        { t: "DoD SMART Scholarship typically closes Dec 1", hard: true },
        { t: "Verify every portal shows 'complete'" }
      ]},
      { m: 1,  name: "January", items: [
        { t: "A few programs and DOE CSGF close in January", hard: true },
        { t: "Prepare for interviews: research summary and questions for faculty" },
        { t: "Send brief updates to your top-choice advisors if appropriate" }
      ]},
      { m: 2,  name: "February", items: [
        { t: "Interviews and virtual visits begin" },
        { t: "Ask current students about advisor style, funding, and culture" },
        { t: "Keep a comparison sheet: stipend, cost of living, advisors, research fit" }
      ]},
      { m: 3,  name: "March", items: [
        { t: "Offers arrive; attend visit weekends" },
        { t: "Ask about stipend, health coverage, and summer support" },
        { t: "Decline offers promptly once you know" }
      ]},
      { m: 4,  name: "April", items: [
        { t: "NSF GRFP results typically released in April" },
        { t: "April 15: the standard response deadline for funded offers in the U.S.", hard: true },
        { t: "Accept one offer; notify others" }
      ]},
      { m: 5,  name: "May", items: [
        { t: "Graduate; send thank-you notes to recommenders" },
        { t: "Contact your future advisor about summer start and reading" },
        { t: "Plan housing and relocation" }
      ]}
    ]
  },
  summer: {
    label: "Summer Research & Internships (Sophomores / Juniors)",
    blurb: "Most summer research and internship cycles run a full year ahead of the summer itself: big-company internships recruit in the fall, while REUs and national labs close between January and March. Start in August and you'll beat most of the pool. Dates are typical, so confirm each program.",
    months: [
      { m: 8, name: "August", items: [
        { t: "Pick your target: research (REU / national lab), industry internship, or both" },
        { t: "Update your resume to one page: projects, lab skills, code. Get it reviewed at the Career Center" },
        { t: "Create Handshake and USAJOBS profiles and set saved searches for 'physics', 'research', 'intern'" },
        { t: "Ask a professor about research during the year. It's the best way to be competitive for REUs" },
        { t: "Save 10 programs from the Opportunities board that you'd apply to" }
      ]},
      { m: 9, name: "September", items: [
        { t: "Large tech and aerospace companies start opening summer internship applications. Apply early, since many fill on a rolling basis", hard: true },
        { t: "Join SPS and go to the first meeting. Alumni and speaker events are where leads come from" },
        { t: "Start a master list: program, deadline, what they need (letters, transcript, essay)" },
        { t: "Practice 2–3 coding or technical-interview problems a week if you're targeting software or data roles" }
      ]},
      { m: 10, name: "October", items: [
        { t: "Apply to company internships that are already open (e.g. Google Student Researcher, aerospace primes, quantum startups)", hard: true },
        { t: "Message 3 alumni or family friends for 20-minute informational chats" },
        { t: "Draft a master personal statement (1 page) you can adapt for every REU application" },
        { t: "Ask two professors if they'd write recommendation letters, and give them your resume and deadlines" }
      ]},
      { m: 11, name: "November", items: [
        { t: "Finish and submit any remaining fall internship applications", hard: true },
        { t: "Use the Thanksgiving block break to polish your statement and resume" },
        { t: "Give recommenders your list of programs and deadlines, with links" },
        { t: "Do a mock interview through the Career Center" }
      ]},
      { m: 12, name: "December", items: [
        { t: "Winter break: finish REU applications that are already open and draft the rest" },
        { t: "Prepare a two-minute explanation of your best project for early interviews" },
        { t: "Confirm every letter writer has your materials" }
      ]},
      { m: 1, name: "January", items: [
        { t: "DOE SULI and many national-lab and REU deadlines fall in early to mid January. Check your list now", hard: true },
        { t: "Submit REU applications early, since many programs review on a rolling basis" },
        { t: "Reply quickly to interview requests and nudge recommenders to submit letters" }
      ]},
      { m: 2, name: "February", items: [
        { t: "Many REU, NIST SURF and other NSF-funded deadlines land in February–March", hard: true },
        { t: "NASA and other federal internship deadlines cluster in late February–March. Verify your target's date", hard: true },
        { t: "Look into funding if a program is unpaid or needs housing support" }
      ]},
      { m: 3, name: "March", items: [
        { t: "Last big REU and federal internship deadlines. Submit anything still open", hard: true },
        { t: "Offers start to arrive. Ask for the accept-by date and compare stipend, housing, and mentor" },
        { t: "Send thank-you notes after interviews" }
      ]},
      { m: 4, name: "April", items: [
        { t: "Accept an offer and tell other programs promptly so they can free up your spot" },
        { t: "Ask about housing, onboarding, background checks, and any citizenship or clearance paperwork" },
        { t: "No offer yet? Apply to rolling internships and ask professors about summer research on campus or nearby (CU Boulder, NIST, LASP)" }
      ]},
      { m: 5, name: "May", items: [
        { t: "Plan housing, travel, and first-week goals with your mentor" },
        { t: "Ask your mentor what to read before you start" },
        { t: "Still looking? Rolling internships, lab-tech roles, and on-campus research are still open" }
      ]}
    ]
  }
};


/* ==========================================================
   RESOURCES
   ========================================================== */
HUB.RESOURCES = [
  { group: "Start here", items: [
    { t: "AIP — Who's Hiring Physics Bachelors", d: "State-by-state list of employers that hired new physics bachelors (interactive).", u: "https://www.aip.org/statistics/whos-hiring-physics-bachelors" },
    { t: "AIP Statistics", d: "Data on physics degrees, first jobs, salaries, and sectors.", u: "https://www.aip.org/statistics" },
    { t: "Society of Physics Students (SPS)", d: "Careers resources, chapter funding, and conferences.", u: "https://www.spsnational.org" },
    { t: "American Physical Society (APS)", d: "Career resources, conferences, and student membership.", u: "https://www.aps.org" }
  ]},
  { group: "Summer research & internships", items: [
    { t: "NSF REU Sites", d: "Find paid summer research by field, location, and eligibility.", u: "https://new.nsf.gov/crssprgm/reu" },
    { t: "DOE SULI", d: "Paid internships at national laboratories.", u: "https://science.osti.gov/wdts/suli" },
    { t: "NIST SURF", d: "Summer fellowships at NIST, including Boulder.", u: "https://www.nist.gov/surf" },
    { t: "NASA Internships", d: "One application for many projects and centers.", u: "https://intern.nasa.gov" }
  ]},
  { group: "Graduate funding", items: [
    { t: "NSF GRFP", d: "Three years of funding; physics and engineering are competitive.", u: "https://www.nsfgrfp.org" },
    { t: "DOE CSGF", d: "Computational science fellowship with practicum at a DOE lab.", u: "https://www.krellinst.org/csgf" },
    { t: "NDSEG", d: "DoD fellowship for STEM PhD students.", u: "https://ndseg.sysplus.com" },
    { t: "Hertz Foundation", d: "Applied science and engineering PhD funding.", u: "https://www.hertzfoundation.org" },
    { t: "Fulbright", d: "Research or teaching abroad.", u: "https://us.fulbrightonline.org" },
    { t: "SMART Scholarship-for-Service", d: "DoD funding with a guaranteed job.", u: "https://www.smartscholarship.org" }
  ]},
  { group: "Job search", items: [
    { t: "USAJOBS", d: "Federal jobs, including Pathways for recent graduates.", u: "https://www.usajobs.gov" },
    { t: "Physics Today Jobs", d: "Physics-specific listings from academia and industry.", u: "https://jobs.physicstoday.org" },
    { t: "Handshake", d: "Campus recruiting through your school account.", u: "https://joinhandshake.com" },
    { t: "Optica", d: "Optics and photonics careers and community.", u: "https://www.optica.org" }
  ]},
  { group: "Skills & learning", items: [
    { t: "Qiskit", d: "Open-source quantum computing SDK with tutorials.", u: "https://www.ibm.com/quantum/qiskit" },
    { t: "Software Carpentry", d: "Git, shell, and Python lessons for researchers.", u: "https://software-carpentry.org" },
    { t: "SciPy", d: "The core scientific Python ecosystem.", u: "https://scipy.org" },
    { t: "Fortran-lang", d: "Modern Fortran tutorials and tools.", u: "https://fortran-lang.org" },
    { t: "MIT OpenCourseWare", d: "Free physics and engineering course material.", u: "https://ocw.mit.edu" }
  ]},
  { group: "Front Range ecosystem", items: [
    { t: "NIST Boulder", d: "Time, frequency, quantum, and photonics research.", u: "https://www.nist.gov/boulder" },
    { t: "JILA", d: "Joint institute of CU Boulder and NIST — AMO, quantum, and astrophysics.", u: "https://jila.colorado.edu" },
    { t: "LASP", d: "Space science and instruments at CU Boulder.", u: "https://lasp.colorado.edu" },
    { t: "NCAR", d: "Atmospheric and climate research.", u: "https://ncar.ucar.edu" },
    { t: "NREL", d: "National Renewable Energy Laboratory in Golden.", u: "https://www.nrel.gov" },
    { t: "Elevate Quantum", d: "Colorado/New Mexico quantum hub.", u: "https://elevatequantum.com" }
  ]},
  { group: "On campus", items: [
    { t: "Colorado College Career Center", d: "Resume reviews, mock interviews, Handshake.", u: "https://www.coloradocollege.edu/offices/careercenter/" },
    { t: "Colorado College Physics Department", d: "Faculty research areas and advising.", u: "https://www.coloradocollege.edu/academics/dept/physics/" },
    { t: "CC Summer Research Funding", d: "Internal funding for student research and internships.", u: "https://www.coloradocollege.edu/offices/careercenter/explore-careers/internships-matter/summer-internship-funding.html" }
  ]}
];



