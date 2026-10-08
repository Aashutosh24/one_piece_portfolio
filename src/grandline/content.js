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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kumar-aashutosh-rana-92080b312/" },
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
      role: "Software Intern",
      org: "BudleeAI",
      when: "May 2026 – Present",
      points: [
        "Contributing to the development and testing of the BudleeAI web platform as part of an ongoing software team.",
        "Working on website improvements, feature validation and functional testing across the product.",
        "Collaborating on product changes and helping identify and resolve UI and functional issues.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Kirusa Inc",
      when: "July – August 2025",
      points: [
        "Worked across web development, Android app development and mobile application testing inside a real product team.",
        "Ran functional testing and UI validation on mobile apps, catching issues before release.",
        "Built hands-on skill with React Native and Selenium for testing workflows.",
        "Followed real team practices; carried the learning straight into Smart India Hackathon and a college ECS project, especially on the Android side.",
      ],
    },
  ],
  skills: [
    { label: "Languages", items: ["Java", "C++", "Python", "JavaScript", "TypeScript"] },
    { label: "Web", items: ["HTML", "CSS", "React.js", "Angular", "Node.js", "Express.js", "Tailwind CSS", "Vite"] },
    { label: "Backend & Data", items: ["PostgreSQL", "SQLite", "MongoDB", "Firebase"] },
    { label: "Mobile & Embedded", items: ["Android (Java)", "Kotlin", "Jetpack Compose", "React Native", "Swift (basics)", "Arduino", "ESP32"] },
    { label: "AI / ML", items: ["YOLOv8", "Gemini API", "RAG pipelines", "Tesseract OCR", "Vosk speech-to-text"] },
    { label: "Tools", items: ["Git & GitHub", "GitHub Actions", "Netlify", "Vercel", "Postman", "Linux", "Windows"] },
    { label: "Spoken", items: ["English", "Hindi", "Tamil", "German (beginner)"] },
  ],
  projects: [
    {
      name: "Sentinel AI",
      status: "Team Project",
      stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
      text: "AI-powered Governance, Risk & Compliance platform running on 14,400 real records across 15 datasets. A Command Center shows trust scores, audit readiness, and critical risks, with 19 of 21 screens reading live PostgreSQL via API, 100+ passing tests, and Alembic migrations.",
      github: "https://github.com/Aashutosh24/sentinel",
    },
    {
      name: "FFCS AI Timetable Planner",
      status: "Live",
      stack: ["HTML", "CSS", "Vanilla JS", "Node.js", "Express", "Tesseract.js", "Python"],
      text: "Upload course registration screenshot to get the best conflict-free timetable. Tesseract OCR parses VIT slot patterns, while branch-pruned backtracking resolves collisions and ranks schedules against preferences with PNG export.",
      live: "https://ffcsplanner.netlify.app/",
      github: "https://github.com/Aashutosh24/FFCS_AI",
    },
    {
      name: "Smart PYQ Finder",
      status: "Extension & Web",
      stack: ["JavaScript", "Chrome Extension", "Node.js", "Express", "Tesseract (WASM)", "PDF.js"],
      text: "Chrome extension and companion website that find and bulk-download previous-year university exam papers by course code. Features client-side OCR for smart naming (CAT1, CAT2, FAT detection).",
      github: "https://github.com/Aashutosh24/Pyq_downloader",
    },
    {
      name: "AI-Integrated Gym Platform",
      status: "Live",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Netlify Functions", "Google Sign-In"],
      text: "Responsive gym membership and program platform featuring trainer listings, membership tiers, payments, and Google Sign-In, with server-side AI features powered by Netlify serverless functions.",
      live: "https://fitnes5club.netlify.app/",
      github: "https://github.com/Aashutosh24/Project_Gym",
    },
    {
      name: "Food4uall",
      status: "Live",
      stack: ["HTML", "CSS", "JavaScript", "Netlify"],
      text: "Responsive cross-device food-ordering web platform featuring menu browsing, order placement, and customer reviews, built with vanilla HTML, CSS, and JavaScript and deployed on Netlify.",
      live: "https://food4uall.netlify.app/",
    },
    {
      name: "Pokédex Lite",
      status: "Live",
      stack: ["React", "Vite", "Tailwind CSS", "PokéAPI"],
      text: "High-performance Pokémon search and filter web application with real-time search, type filtering, type-list caching, 20-per-page pagination, favorites in localStorage, dark mode, and capture animation.",
      live: "https://pokemonlite.netlify.app/",
      github: "https://github.com/Aashutosh24/pokedex-lite",
    },
    {
      name: "PolicyLens",
      status: "Academic Project",
      stack: ["React.js", "Chart.js", "JSON"],
      text: "Policy impact visualizer converting complex government policy data into clear before-vs-after charts and stakeholder impact views across Education, Health, Internet, and Environment with Chart.js and summary generation.",
    },
  ],
};

// ---- Gear 2 ------------------------------------------------------------------
export const gear2 = {
  intro: "Taking what I build for the web onto phones: Android, React Native, and the testing discipline from my internship.",
  projects: [
    {
      name: "VyaparPulse",
      status: "Smart India Hackathon",
      stack: ["React", "TypeScript", "Capacitor", "Python", "FastAPI", "Vosk", "SQLite"],
      text: "Voice-first ledger and business-intelligence mobile app for micro-merchants. Say sales naturally to build orders, powered by an offline Vosk speech-to-text + LLM extraction agent and automatic payment reconciliation against voice invoices.",
      github: "https://github.com/Aashutosh24/vyaparpulse-ai",
    },
    {
      name: "WayFree",
      status: "IoT & Mobile",
      stack: ["Android", "Arduino UNO", "ESP32", "Firebase", "Telegram Bot API", "GPS & GSM"],
      text: "Smart ambulance-priority and alert system. Ambulance hardware units route emergency signals through ESP32 to Firebase, Telegram bot overrides, and traffic controllers with <500ms response. Includes role-based mobile app for Admins, Drivers, and Public with live GPS tracking.",
    },
    {
      name: "TripLogger",
      status: "SIH 2025",
      stack: ["Android Studio", "Java", "XML", "Firebase Realtime DB", "Google Location API", "FCM"],
      text: "Automatic trip-capture Android app for Smart India Hackathon 2025 (Team Echelon Minds). Uses live GPS auto-detection to record journeys, calculate delay metrics against estimated arrival times to identify road bottlenecks, and syncs encrypted data to Firebase.",
    },
    {
      name: "AI Job Portal & Interviewer",
      status: "Built",
      stack: ["Android", "AI Evaluation", "Recruitment Engine", "Mobile"],
      text: "Automated candidate recruitment application where applicants receive personal interview links redirecting into the app. An AI interviewer asks role-specific questions, evaluates responses in real time, and generates actionable candidate assessment reports for recruiters.",
    },
    {
      name: "StudyAnchor",
      status: "In development",
      stack: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "UsageStatsManager"],
      text: "Android study companion that turns study sessions into guided, accountable time blocks. Uses UsageStatsManager to track distraction events without intrusive accessibility permissions, with end-of-session focus summaries.",
    },
  ],
  background: {
    title: "Where the app skills come from",
    text: "Android development and mobile QA at Kirusa Inc with React Native and Selenium, carried straight into Smart India Hackathon builds (TripLogger, VyaparPulse) and college IoT projects (WayFree).",
  },
};

// ---- Gear 3 ------------------------------------------------------------------
export const gear3 = {
  intro: "The gear I'm building now: learning AI/ML properly alongside full-stack work, and putting it into systems that run on real, messy input.",
  projects: [
    {
      name: "Blind Assistance",
      status: "Computer Vision",
      stack: ["YOLOv8", "Python", "Computer Vision", "Mobile Camera"],
      text: "Mobile vision-assistance system that processes live camera feeds using YOLOv8 to guide visually impaired users with scene interpretation and movement direction, with facial matching against device-stored photos to identify known vs unfamiliar people.",
    },
    {
      name: "Smart Gift Finder",
      status: "Bilingual RAG",
      stack: ["React", "Node.js", "Gemini API", "OpenRouter", "RAG Pipeline"],
      text: "Bilingual (English & Arabic) AI gift recommender for mothers and babies. Parses conversational queries with budget and baby age filters, retrieves shortlisted catalog items, and generates grounded recommendations with confidence scores and honest handling of out-of-scope requests.",
      github: "https://github.com/Aashutosh24/smart-gift-finder",
    },
    {
      name: "VyaparPulse Voice Agent",
      status: "Speech & LLM",
      stack: ["Python", "FastAPI", "Vosk", "Offline Speech-to-Text", "LLM Extraction"],
      text: "Offline voice-agent microservice for merchant payment tracking. Uses Vosk offline speech-to-text and LLM extraction to convert natural spoken sales ('2 teas 20 rupees, 3 samosas 30 rupees') into structured transaction JSON with payment reconciliation.",
      github: "https://github.com/Aashutosh24/vyaparpulse-ai",
    },
    {
      name: "Anime Recommendation Chatbot",
      status: "Planned",
      stack: ["Python", "NLP", "Recommendation System"],
      text: "An intelligent chatbot that learns user taste and sentiment in anime, analyzes genre affinities, and generates tailored anime title recommendations.",
    },
  ],
  learning: {
    title: "In training",
    text: "Studying AI/ML alongside full-stack engineering: building practical RAG pipelines with Gemini API, offline speech-to-text with Vosk, and computer vision with YOLOv8.",
  },
};

// ---- Gears 4 and 5 -----------------------------------------------------------
export const locked = {
  4: { line: "Some forms take time to earn. This one is still in training." },
  5: { line: "The chapter that hasn't been written yet." },
};

export const visible = (list) =>
  list.filter((p) => p.show !== false && (!p.placeholder || import.meta.env.DEV));
