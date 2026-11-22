/* ==========================================================
   ALUMNI — anonymous entries. No names are shown on the site.
   Copy a line to add someone (get their OK first!).
     year   : CC graduation year          major : e.g. "Physics & Math"
     sector : filter chip (Aerospace, Quantum, Medical, ...)
     path   : "Industry" | "Graduate School" | "National Lab" | "Medical Physics" | "Teaching / Service" | ...
     first  : what they did right after CC      now : what they do now
     where  : institution / employer            domain : for the logo (optional)
     sample : true → shows a "Template" tag. Delete the flag once the entry is real.
   ========================================================== */
HUB.ALUMNI = [
  /* ---- Real entries (shared by students and found by Sean L.; shown anonymously) ---- */
  { year: 2026, major: "Physics", sector: "Particle & Nuclear", path: "Graduate School", first: "MSc Candidate, Experimental Particle Physics", now: "MSc Candidate, Experimental Particle Physics", where: "Lund University, Sweden", domain: "lunduniversity.lu.se" },
  { year: 2026, major: "Physics", sector: "Education", path: "Teaching / Service", first: "Physics Paraprofessional", now: "Physics Paraprofessional", where: "Colorado College, Colorado", domain: "coloradocollege.edu" },
  { year: 2025, major: "Physics", sector: "Data & Software", path: "Industry", first: "Technical Solutions Engineer", now: "Technical Solutions Engineer", where: "Epic Systems, Wisconsin", domain: "epic.com" },
  { year: 2025, major: "Physics and Art History", sector: "Physics & Astronomy", path: "Graduate School", first: "PhD Program, Physics & Astronomy", now: "PhD Student, Physics & Astronomy", where: "Michigan State University, Michigan", domain: "msu.edu" },
  { year: 2024, major: "Physics and Mathematics", sector: "Physics", path: "Graduate School", first: "PhD Student, Applied Physics", now: "PhD Student, Applied Physics", where: "Rice University, Texas", domain: "rice.edu" },
  { year: 2023, major: "Organismal Biology & Ecology", sector: "Physics", path: "Graduate School", first: "Physics Paraprofessional", now: "PhD Student, Physics", where: "CU Boulder, Colorado", domain: "colorado.edu" },
  { year: 2023, major: "Physics", sector: "Aerospace", path: "Industry", first: "Systems Engineer 1", now: "Systems Engineer 2", where: "Sierra Space, Colorado", domain: "sierraspace.com" },
  { year: 2026, major: "Astrophysics", sector: "Aerospace", path: "Industry", first: "Spacecraft Simulation Engineer Intern", now: "Spacecraft Simulation Engineer Intern", where: "True Anomaly, Colorado", domain: "trueanomaly.space" },
  { year: 2026, major: "Computational Physics", sector: "Energy", path: "Industry", first: "Project Engineer", now: "Project Engineer", where: "McKinstry, Washington", domain: "mckinstry.com" },
  { year: 2022, major: "Computational Physics", sector: "Aerospace", path: "Industry", first: "Electric Ducted Fan Test and Design Engineering Fellow", now: "Systems Engineer", where: "Sierra Space, Colorado", domain: "sierraspace.com" },
  { year: 2026, major: "Computational Physics", sector: "Kinesiology", path: "Graduate School", first: "Athlete Relations and Investigations Intern", now: "MSc Candidate, Applied Physiology", where: "UCCS, Colorado", domain: "uccs.edu" },
  { year: 2008, major: "Physics", sector: "Physics & Astronomy", path: "Graduate School", first: "PhD Program, Astronomy", now: "Department Chair", where: "Colorado College, Colorado", domain: "coloradocollege.edu" },
  { year: 2008, major: "Physics", sector: "Engineering", path: "Graduate School", first: "PhD Program, Mechanical Engineering", now: "Associate Professor of Engineering", where: "Roger Williams University, Rhode Island", domain: "rwu.edu" },
  { year: 2016, major: "Physics", sector: "Medical Physics", path: "Graduate School", first: "PhD Program, Medical Physics", now: "Radiation Oncology Physicist", where: "Cedars-Sinai Medical Center, Los Angeles", domain: "cedars-sinai.org" },
  { year: 2022, major: "Environmental Physics", sector: "Plasma Physics", path: "Graduate School", first: "Post-Bachelor's Researcher", now: "PhD Candidate, Plasma Physics", where: "UC San Diego, California", domain: "ucsd.edu" },
  { year: 2024, major: "Physics", sector: "Engineering", path: "Graduate School", first: "PhD Program, Biomedical Engineering", now: "PhD Student, Biomedical Engineering", where: "Northwestern University, Illinois", domain: "northwestern.edu" },
  { year: 2025, major: "Physics", sector: "Journalism", path: "Teaching / Service", first: "Physics Teacher", now: "Reporter", where: "Glenwood Springs, Colorado", domain: "postindependent.com" },
  { year: 2024, major: "Physics", sector: "Physics & Astronomy", path: "Graduate School", first: "PhD Program, Physics & Astronomy", now: "PhD Student, Physics & Astronomy", where: "Montana State University, Montana", domain: "montana.edu" },
  { year: 2024, major: "Physics", sector: "Physics", path: "Graduate School", first: "PhD Program, Physics", now: "PhD Student, Physics", where: "CU Boulder, Colorado", domain: "colorado.edu" },
  { year: 2011, major: "Physics", sector: "Data & Software", path: "Graduate School", first: "PhD Program, Electrical and Computer Engineering", now: "Research Scientist", where: "Amazon, United States", domain: "amazon.com" },
  { year: 2008, major: "Physics", sector: "Film & Entertainment", path: "Startup", first: "Owner and Founder", now: "Owner and Founder", where: "Sweetgrass Productions LLC.", domain: "sweetgrass-productions.com" },
  { year: 2008, major: "Physics and Political Science", sector: "Policy & Law", path: "Law School", first: "Law School", now: "Deputy General Counsel", where: "Philadelphia, Pennsylvania", domain: "ogc.pa.gov" },
  { year: 2003, major: "Physics", sector: "Data & Software", path: "Teaching / Service", first: "Physics Teacher", now: "Senior Data Analyst", where: "KBR, Alabama", domain: "kbr.com" },
  { year: 2016, major: "Astrophysics", sector: "Aerospace", path: "Graduate School", first: "Master's Program, Space Systems Engineering", now: "Senior Software Engineer", where: "Space Telescope Science Institute, Maryland", domain: "stsci.edu" },
  { year: 2000, major: "Physics", sector: "Education", path: "Graduate School", first: "M.A., Teaching", now: "High School Physics Teacher", where: "Colorado Springs, Colorado", domain: "asd20.org" },
  { year: 2008, major: "Physics", sector: "Research", path: "Graduate School", first: "PhD Program, Atmospheric and Oceanic Sciences", now: "Scientist VI", where: "NSF NCAR, Colorado", domain: "ncar.ucar.edu" },
  { year: 2016, major: "Physics", sector: "National Lab", path: "Graduate School", first: "PhD Program, Physics", now: "Postdoctoral Researcher", where: "Pacific Northwest National Laboratory", domain: "pnnl.gov" },
  { year: 2023, major: "Physics", sector: "Aerospace", path: "Industry", first: "Optical Engineer Associate", now: "Optical Engineer", where: "Lockheed Martin", domain: "lockheedmartin.com" },
  { year: 2013, major: "Physics", sector: "Aerospace", path: "Industry", first: "Materials and Process Engineer", now: "Senior Program Integration Manager", where: "Boeing, Washington", domain: "boeing.com" },
  { year: 2017, major: "Physics", sector: "Aerospace", path: "Industry", first: "Contractor", now: "Engineer Technical Specialist", where: "Boeing, Washington", domain: "boeing.com" },
  { year: 1984, major: "Physics", sector: "Aerospace", path: "Industry", first: "Systems Engineer", now: "Senior Systems Engineer", where: "Boeing", domain: "boeing.com" },
  { year: 2012, major: "Physics", sector: "National Lab", path: "Graduate School", first: "PhD Program, Physics", now: "Staff Scientist", where: "Los Alamos National Laboratory", domain: "lanl.gov" },
  { year: 2007, major: "Physics", sector: "National Lab", path: "Graduate School", first: "PhD Program, Aerospace Engineering", now: "Scientist", where: "Los Alamos National Laboratory", domain: "lanl.gov" },
  { year: 2006, major: "Physics", sector: "National Lab", path: "Graduate School", first: "PhD Program, Astronomy and Astrophysics", now: "Scientist", where: "Los Alamos National Laboratory", domain: "lanl.gov" },
  { year: 1990, major: "Physics", sector: "National Lab", path: "Graduate School", first: "PhD Program, Geophysics", now: "Partner", where: "Los Alamos National Laboratory", domain: "lanl.gov" },
  { year: 1983, major: "Physics and Geology", sector: "Aerospace", path: "Graduate School", first: "PhD Program, Atmospheric Sciences and Optics", now: "Engineer", where: "Raytheon", domain: "rtx.com" },
  { year: 2012, major: "Astrophysics", sector: "Aerospace", path: "Industry", first: "Engineering Technician", now: "Senior Navigation Manager", where: "Blue Origin", domain: "blueorigin.com" },
  { year: 2014, major: "Physics", sector: "Aerospace", path: "Graduate School", first: "Master's, Mechanical Engineering", now: "Lead Propulsion Engineer", where: "SpaceX", domain: "spacex.com" },
  { year: 2022, major: "Physics", sector: "Quantum", path: "Industry", first: "Physicist 1", now: "Physicist 2", where: "Quantinuum", domain: "quantinuum.com" },
  { year: 2001, major: "Physics and Chemistry", sector: "Aerospace", path: "Graduate School", first: "PhD Program, Chemical Physics", now: "Principal System Engineer", where: "Honeywell", domain: "honeywell.com" },
  { year: 2019, major: "Physics", sector: "Physics", path: "Graduate School", first: "MSc Candidate, Materials Science", now: "PhD Candidate, Materials Chemistry", where: "ETH Zurich", domain: "ethz.ch/en.html" }
];

