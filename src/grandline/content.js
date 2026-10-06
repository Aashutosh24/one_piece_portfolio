// All copy for the Grand Line portfolio. Edit here; nothing else needs to change.
// Projects: add `github` / `live` URLs to show those buttons. `show: false` hides an entry.
// Entries with `placeholder: true` only appear while running `npm run dev`.

export const profile = {
  name: "Aashutosh Rana",
  identity: "Full-stack developer, AI/ML engineer",
  initials: "AR",
  email: "kumaraashutoshrana@gmail.com",
  location: "Hosur, Tamil Nadu",
  links: [
    { label: "GitHub", href: "https://github.com/Aashutosh24" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kumar-aashutosh-rana" },
  ],
};

// One entry per gear, in page order. `arc` is the chapter title shown with it.
export const gears = [
  { n: 1, id: "gear-1", short: "Web", arc: "Romance Dawn", role: "Full-stack / web developer" },
  { n: 2, id: "gear-2", short: "Apps", arc: "Gear Second", role: "App developer" },
  { n: 3, id: "gear-3", short: "AI/ML", arc: "Gear Third", role: "AI/ML engineer" },
  { n: 4, id: "time-skip", short: "Locked", arc: "Future Evolution", role: "After the time skip", locked: true },
  { n: 5, id: "time-skip", short: "Locked", arc: "The Next Chapter", role: "After the time skip", locked: true },
];

// Transformation artwork + optional voice/sound clips. Use artwork you own or have
// permission to publish. Missing sound files are simply skipped.
export const art = {
  gear2: "/grandline/gear2.webp",
  gear3: "/grandline/gear3.webp",
  nakama: "/grandline/crew/nakama.webp",
  peekLeft: "/grandline/crew/peek-left.webp",
  peekRight: "/grandline/crew/peek-right.webp",
  peekBottom: "/grandline/crew/peek-bottom.webp",
  zoroLost: "/grandline/crew/zoro-lost.webp",
  zoroOk: "/grandline/crew/zoro-ok.webp",
  zoroBack: "/grandline/crew/zoro-back.webp",
  gear2Sound: "/grandline/sfx/gear2.mp3",
  gear3Sound: "/grandline/sfx/gear3.mp3",
};

// ---- Gear 1 ------------------------------------------------------------------
export const gear1 = {
  tagline:
    "Third-year engineer, full-stack builder — currently obsessed with making software that's genuinely useful, not just demoable.",
  about:
    "I'm a third-year Integrated M.Tech Software Engineering student at VIT-AP University, and I learn best by building things that have to actually work, not just run in a demo. That's taken me from a responsive food-ordering site to an AI-integrated gym platform and an offline speech-to-transaction voice agent for merchant payments. I interned at Kirusa Inc, across web development, Android testing and mobile QA with Selenium.",
  education: [
    { place: "VIT-AP University", detail: "Integrated M.Tech, Software Engineering", years: "2024 – 2029", score: "9.31 / 10 CGPA" },
    { place: "MVM, Hosur", detail: "Pre-University (Science)", years: "2021 – 2023", score: "86.4%" },
    { place: "MVM, Hosur", detail: "SSLC", years: "", score: "82.2%" },
  ],
  experience: [
    {
      role: "Software Development Intern",
      org: "Kirusa Inc",
      when: "July – August 2025",
      points: [
        "Web development, mobile app testing and Android work inside a real product team.",
        "Owned functional testing and UI validation for mobile apps, catching issues before users did.",
        "Picked up React Native and Selenium hands-on, building real test workflows.",
      ],
    },
  ],
  skills: [
    { label: "Languages", items: ["Java", "C++", "Python", "JavaScript"] },
    { label: "Web", items: ["React", "Node.js", "Express", "HTML", "CSS"] },
    { label: "Mobile", items: ["Android (Java)", "React Native", "Swift (basics)"] },
    { label: "Data and AI", items: ["MongoDB", "Firebase", "Gemini API"] },
    { label: "Tools", items: ["Git", "GitHub", "Postman", "Netlify"] },
  ],
  projects: [
    {
      name: "FitnessClub",
      stack: ["React", "Google Sign-In", "Gemini API"],
      text: "A gym platform for programs, trainers, memberships and payments behind secure Google sign-in, with AI layered on a solid core.",
    },
    {
      name: "PYQ Archive",
      stack: ["Node.js", "Express", "Tesseract OCR"],
      text: "A browser extension, then a full site, that finds VIT-AP previous-year papers by course code and bulk-downloads them, auto-named by OCR.",
    },
    {
      name: "FFCS Planner",
      stack: ["JavaScript", "Timetable logic"],
      text: "Pick courses, faculty and slots and see clashes resolved instantly, turning course registration into a five-minute task.",
    },
    {
      name: "food4uall",
      stack: ["HTML", "CSS", "JavaScript", "Netlify"],
      text: "A cross-device food ordering site with menu browsing, ordering and reviews, deployed on Netlify.",
    },
  ],
};

// ---- Gear 2 ------------------------------------------------------------------
export const gear2 = {
  intro: "Taking what I build for the web onto phones: Android, React Native, and the testing discipline from my internship.",
  projects: [
    {
      name: "AI Study Companion",
      status: "In the lab",
      stack: ["Android", "Accessibility Service", "Usage Stats"],
      text: "Turns a study session into a guided, accountable block of time: time-boxing distracting apps and tracking interruptions without shaming the user. AI feedback on what was actually learned comes later.",
    },
    { name: "[Your next app]", stack: ["[Stack]"], text: "[What it does, in one or two lines.]", placeholder: true },
  ],
  background: {
    title: "Where the app skills come from",
    text: "Android development and mobile QA at Kirusa Inc with React Native and Selenium, carried straight into a Smart India Hackathon Android build.",
  },
};

// ---- Gear 3 ------------------------------------------------------------------
export const gear3 = {
  intro: "The gear I'm building now: learning AI/ML properly alongside full-stack work, and putting it into systems that run on real, messy input.",
  projects: [
    {
      name: "Offline Voice Agent",
      status: "In progress",
      stack: ["Python", "FastAPI", "Offline speech-to-text"],
      text: "The voice module of a Smart Merchant Payment Tracking app. A shopkeeper says a sale out loud, and it becomes a structured, timestamped transaction, fully offline, even from partial sentences.",
    },
    {
      name: "DRISHTI",
      show: false, // hidden for now; set to true to show it
      stack: ["U-Net", "Pix2Pix GAN", "Computer vision"],
      text: "Colorizes infrared imagery with a U-Net generator inside a Pix2Pix GAN, turning thermal data into something a person can read at a glance.",
    },
    { name: "[Next AI/ML project]", stack: ["[Stack]"], text: "[What it does, in one or two lines.]", placeholder: true },
  ],
  learning: {
    title: "In training",
    text: "Studying AI/ML alongside full-stack development, starting from API-based AI tooling I already use: Gemini and Gemini Vision.",
  },
};

// ---- Gears 4 and 5 -----------------------------------------------------------
export const locked = {
  4: { line: "Some forms take time to earn. This one is still in training." },
  5: { line: "The chapter that hasn't been written yet." },
};

export const visible = (list) =>
  list.filter((p) => p.show !== false && (!p.placeholder || import.meta.env.DEV));
