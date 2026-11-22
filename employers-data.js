/* ==========================================================
   EMPLOYERS & DESTINATIONS — logos on the Employers page.
   Edit freely. Fields:
     cc  : true  → a CC physics alum has worked/studied here (gold badge + 'CC alumni' filter)
     aip : true  → appears in AIP's 'Who's Hiring Physics Bachelors' (filter 'AIP list').
           Seeded only where AIP/Physics Today named the lab; paste in more from the AIP viz.
     type: Employer | National Lab | Government | Grad School | Hospital / Medical | Research Institute
     domain: used to fetch the logo
   ========================================================== */
HUB.EMPLOYERS = [
  {"name": "Sierra Space", "domain": "sierraspace.com", "url": "https://www.sierraspace.com/careers/", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "CC Physics alumni."},
  {"name": "Amazon Web Services", "domain": "aws.amazon.com", "url": "https://www.amazon.jobs", "type": "Employer", "sectors": ["Quantum", "Software & Data"], "cc": true, "aip": false, "note": "CC Physics alumni."},
  {"name": "Cedars-Sinai", "domain": "cedars-sinai.org", "url": "https://www.cedars-sinai.org/careers.html", "type": "Hospital / Medical", "sectors": ["Medical"], "cc": true, "aip": false, "note": "CC Physics Alumni."},
  {"name": "Lund University", "domain": "lunduniversity.lu.se", "url": "https://www.lunduniversity.lu.se", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni."},
  {"name": "University of Texas at Austin", "domain": "utexas.edu", "url": "https://www.utexas.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni."},
  {"name": "Michigan State University", "domain": "msu.edu", "url": "https://www.msu.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni."},
  {"name": "Montana State University", "domain": "montana.edu", "url": "https://www.montana.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni."},
  {"name": "CU Boulder", "domain": "colorado.edu", "url": "https://www.colorado.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "JILA, LASP, NIST nearby."},
  {"name": "Colorado School of Mines", "domain": "mines.edu", "url": "https://www.mines.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "NREL nearby."},
  {"name": "Universite Paris-Saclay", "domain": "universite-paris-saclay.fr", "url": "https://www.universite-paris-saclay.fr/", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "Universita degli Studi di Genova", "domain": "unige.it", "url": "https://unige.it/", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "ETH Zurich", "domain": "ethz.ch/en.html", "url": "https://ethz.ch/en.html", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "The University of Alabama", "domain": "ua.edu", "url": "https://www.ua.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "Texas A&M University", "domain": "tamu.edu", "url": "https://www.tamu.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "UC Santa Cruz", "domain": "ucsc.edu", "url": "https://www.ucsc.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "UC San Diego", "domain": "ucsd.edu", "url": "https://www.ucsd.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "Rice University", "domain": "rice.edu", "url": "https://www.rice.edu", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "UT Health San Antonio", "domain": "uthscsa.edu", "url": "https://uthscsa.edu/", "type": "Grad School", "sectors": ["Research"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "NASA", "domain": "nasa.gov", "url": "https://www.nasa.gov/careers/", "type": "Government", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": ""},
  {"name": "NASA JPL", "domain": "jpl.nasa.gov", "url": "https://www.jpl.nasa.gov/careers", "type": "National Lab", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": ""},
  {"name": "NIST", "domain": "nist.gov", "url": "https://www.nist.gov/careers", "type": "Government", "sectors": ["National Lab", "Quantum"], "cc": true, "aip": false, "note": "Boulder campus."},
  {"name": "NREL", "domain": "nrel.gov", "url": "https://www.nrel.gov/careers", "type": "National Lab", "sectors": ["Energy"], "cc": false, "aip": true, "note": "Golden, CO."},
  {"name": "NCAR | UCAR", "domain": "ucar.edu", "url": "https://www.ucar.edu/careers", "type": "National Lab", "sectors": ["Energy"], "cc": true, "aip": false, "note": "Boulder, CO."},
  {"name": "LASP", "domain": "lasp.colorado.edu", "url": "https://lasp.colorado.edu", "type": "Research Institute", "sectors": ["Aerospace"], "cc": false, "aip": false, "note": "Boulder, CO."},
  {"name": "Los Alamos National Laboratory", "domain": "lanl.gov", "url": "https://www.lanl.gov/careers", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": true, "note": "Named by AIP/Physics Today as a common destination."},
  {"name": "Fermilab", "domain": "fnal.gov", "url": "https://careers.fnal.gov", "type": "National Lab", "sectors": ["National Lab"], "cc": false, "aip": true, "note": "Named by AIP/Physics Today as a common destination."},
  {"name": "Lawrence Berkeley National Lab", "domain": "lbl.gov", "url": "https://jobs.lbl.gov", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": true, "note": "Named by AIP/Physics Today as a common destination."},
  {"name": "Argonne National Laboratory", "domain": "anl.gov", "url": "https://www.anl.gov/careers", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": true, "note": "Named by AIP/Physics Today as a common destination."},
  {"name": "Lawrence Livermore National Lab", "domain": "llnl.gov", "url": "https://www.llnl.gov/join-our-team", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": false, "note": ""},
  {"name": "Sandia National Laboratories", "domain": "sandia.gov", "url": "https://www.sandia.gov/careers/", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": false, "note": ""},
  {"name": "Oak Ridge National Laboratory", "domain": "ornl.gov", "url": "https://www.ornl.gov/careers", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": false, "note": ""},
  {"name": "Pacific Northwest National Lab", "domain": "pnnl.gov", "url": "https://careers.pnnl.gov", "type": "National Lab", "sectors": ["National Lab"], "cc": true, "aip": false, "note": ""},
  {"name": "Lockheed Martin", "domain": "lockheedmartin.com", "url": "https://www.lockheedmartinjobs.com", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "Large employer of physics grads (contractor)."},
  {"name": "Northrop Grumman", "domain": "northropgrumman.com", "url": "https://www.northropgrumman.com/careers", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": ""},
  {"name": "Boeing", "domain": "boeing.com", "url": "https://jobs.boeing.com", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "RTX (Raytheon)", "domain": "rtx.com", "url": "https://careers.rtx.com", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "L3Harris", "domain": "l3harris.com", "url": "https://careers.l3harris.com", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": ""},
  {"name": "BAE Systems", "domain": "baesystems.com", "url": "https://www.baesystems.com/en-us/careers", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "Includes former Ball Aerospace sites in Colorado."},
  {"name": "Blue Origin", "domain": "blueorigin.com", "url": "https://www.blueorigin.com/careers", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "SpaceX", "domain": "spacex.com", "url": "https://www.spacex.com/careers", "type": "Employer", "sectors": ["Aerospace"], "cc": true, "aip": false, "note": "CC Physics Alumni"},
  {"name": "Quantinuum", "domain": "quantinuum.com", "url": "https://www.quantinuum.com/careers", "type": "Employer", "sectors": ["Quantum"], "cc": true, "aip": false, "note": "CC Physics Alumni."},
  {"name": "Infleqtion", "domain": "infleqtion.com", "url": "https://infleqtion.com/careers/", "type": "Employer", "sectors": ["Quantum"], "cc": true, "aip": false, "note": "Louisville, CO."},
  {"name": "IonQ", "domain": "ionq.com", "url": "https://ionq.com/careers", "type": "Employer", "sectors": ["Quantum"], "cc": false, "aip": false, "note": ""},
  {"name": "Rigetti", "domain": "rigetti.com", "url": "https://www.rigetti.com/careers", "type": "Employer", "sectors": ["Quantum"], "cc": false, "aip": false, "note": ""},
  {"name": "Google", "domain": "google.com", "url": "https://www.google.com/about/careers/applications/", "type": "Employer", "sectors": ["Software & Data", "Quantum"], "cc": true, "aip": false, "note": "Student Researcher program."},
  {"name": "Microsoft", "domain": "microsoft.com", "url": "https://careers.microsoft.com", "type": "Employer", "sectors": ["Software & Data", "Quantum"], "cc": true, "aip": false, "note": ""},
  {"name": "Intel", "domain": "intel.com", "url": "https://jobs.intel.com", "type": "Employer", "sectors": ["Semiconductors"], "cc": true, "aip": false, "note": ""},
  {"name": "Micron", "domain": "micron.com", "url": "https://www.micron.com/careers", "type": "Employer", "sectors": ["Semiconductors"], "cc": true, "aip": false, "note": ""},
  {"name": "Applied Materials", "domain": "appliedmaterials.com", "url": "https://careers.appliedmaterials.com", "type": "Employer", "sectors": ["Semiconductors"], "cc": false, "aip": false, "note": ""},
  {"name": "Honeywell", "domain": "honeywell.com", "url": "https://careers.honeywell.com", "type": "Employer", "sectors": ["Aerospace", "Engineering"], "cc": true, "aip": false, "note": "CC Physics Alumni"}
];

