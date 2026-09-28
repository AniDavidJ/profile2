export const personalInfo = {
  name: "Ani David",
  role: "Senior Software Engineer",
  tagline: "React.js & React Native Specialist | 5+ Years in Digital Banking & Fintech",
  location: "Dubai, UAE & Kerala, India",
  experienceYears: "5+",
  email: "ani.aureliza@gmail.com",
  github: "https://github.com/anidavid07",
  linkedin: "https://linkedin.com/in/",
  bio: "Senior Software Engineer with 5+ years of extensive experience building enterprise-grade, high-volume financial applications in React.js and React Native. Deep domain mastery in Core Banking, Foreign Exchange (FX) Transactions, International Remittance, and Hybrid Mobile-WebView Architectures at RAKBANK (UAE). Former Cloud Support Engineer at Brams Technologies Dubai, Mobile Developer at Fabi Technology (7+ apps), and ex-Assistant Professor of Computer Science at College of Engineering Cherthala.",
  availability: "Open to Senior Frontend / Mobile / Tech Lead roles (UAE, Remote, Worldwide)",
};


export const stats = [
  { label: "Years of Experience", value: "5+", detail: "React.js & React Native" },
  { label: "RAKBANK UAE Tenure", value: "4.8 yrs", detail: "Sep 2021 – Jul 2026" },
  { label: "Mobile Apps Shipped", value: "8+", detail: "Banking, Delivery & Utilities" },
  { label: "Financial Modules", value: "100%", detail: "FX, Swift, Cards & Summary" },
];

export const experiences = [
  {
    company: "RAKBANK (National Bank of Ras Al Khaimah)",
    location: "Dubai, United Arab Emirates",
    role: "Senior Software Engineer (React.js & React Native)",
    period: "Sep 2021 – Jul 2026",
    duration: "4 Years 10 Months",
    type: "Full-Time",
    badge: "Banking & FinTech",
    color: "from-amber-500/20 to-rose-500/20 text-amber-400 border-amber-500/30",
    description:
      "Core engineer driving flagship consumer and corporate digital banking applications across iOS, Android, and Web platforms using React Native, React.js, and bidirectional WebView Bridges.",
    achievements: [
      "Engineered the RAKBANK Brand Refresh initiative across the mobile application: modernized the complete UI/UX, implemented dynamic brand theming, updated typography and asset libraries, seamlessly replacing legacy visuals with the new bank identity.",
      "Architected the Advanced Foreign Exchange (FX) & Currency Conversion module: built real-time currency trading calculators, dynamic spread margins, spot rates, and high-frequency rate-refresh hooks.",
      "Developed secure International Transactions (SWIFT / cross-border remittance) and Local Instant UAE Transfer rails with multi-tier biometric step-up and 2FA authentication.",
      "Designed and launched the Credit Cards and Transaction Summary module across Mobile and WebView, enabling card activation, freeze/unfreeze, spend analytics, limit modifications, and PDF statement exports.",
      "Optimized hybrid WebView-to-Native bridge communication protocols, reducing screen load times by 42% and eliminating memory leaks in high-frequency financial dashboards.",
    ],
    skills: [
      "React Native",
      "React.js",
      "Mobile WebViews",
      "TypeScript",
      "Redux Toolkit",
      "FX Engine",
      "Fintech Security",
      "iOS / Android",
      "RESTful APIs",
    ],
  },
  {
    company: "Brams Technology",
    location: "Dubai, United Arab Emirates",
    role: "Cloud Support & Frontend Engineer",
    period: "2019 – 2020",
    duration: "1 Year",
    type: "Full-Time",
    badge: "Cloud & Web",
    color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
    description:
      "Delivered enterprise-grade cloud system support and web applications for prominent UAE businesses, managing infrastructure health and user-facing dashboards.",
    achievements: [
      "Provided 24/7 technical and cloud infrastructure support for enterprise clients in Dubai, maintaining 99.9% application uptime.",
      "Built and maintained responsive web dashboards for monitoring cloud resources, system health metrics, and ticket resolution workflows.",
      "Diagnosed and solved intricate network routing, SSL certificate installations, DNS management, and server deployment challenges.",
    ],
    skills: ["Cloud Support", "AWS / Cloud Infrastructure", "React.js", "JavaScript", "Technical Support", "DNS & Networking"],
  },
  {
    company: "Fabi Technology",
    location: "Kerala / GCC",
    role: "Mobile Application Developer",
    period: "2016 – 2017",
    duration: "1+ Years",
    type: "Full-Time",
    badge: "Mobile Apps",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
    description:
      "Spearheaded mobile application development for enterprise platforms including 'Go Fabi' and promotional e-commerce applications.",
    achievements: [
      "Successfully built and launched 7 to 8 distinct mobile applications, handling full lifecycle from architecture to production release on Google Play and Apple App Store.",
      "Delivered the flagship 'Go Fabi' app and 'Fabi Promotion' suite, featuring real-time deal discovery, customer coupons, push notifications, and geolocation tagging.",
      "Implemented state caching and offline data synchronization to guarantee smooth performance in areas with weak cellular coverage.",
    ],
    skills: ["Mobile App Development", "Go Fabi Ecosystem", "JavaScript", "API Integration", "App Store Deployment", "UI/UX"],
  },
  {
    company: "College of Engineering Cherthala (IHRD)",
    location: "Kerala, India",
    role: "Assistant Professor (Computer Science & Engineering)",
    period: "2014 – 2015",
    duration: "1 Year",
    type: "Academic",
    badge: "Mentorship & CS Fundamentals",
    color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
    description:
      "Taught core computer science engineering subjects and mentored undergraduate B.Tech engineering students in foundational and advanced programming concepts.",
    achievements: [
      "Lectured and mentored over 120+ B.Tech engineering students in fundamental Data Structures, Algorithms, and Web Technologies.",
      "Conducted extensive programming laboratory sessions for Semester 1 (freshman fundamentals) and Semester 7 (final year advanced software development).",
      "Mentored capstone student engineering projects, guiding web architectures, clean code best practices, and database schemas.",
      "Managed academic performance tracking, university laboratory examinations, attendance records, and student counselling.",
    ],
    skills: ["Data Structures & Algorithms", "Web Technologies", "C/C++", "Java", "Academic Mentorship", "Lab Management"],
  },
];

export const projects = [
  {
    id: "rakbank-brand-refresh",
    title: "RAKBANK Mobile Brand Refresh",
    category: "Fintech & Mobile",
    company: "RAKBANK (UAE)",
    period: "2023 - 2024",
    summary:
      "Complete visual and brand revamp of the RAKBANK mobile banking app and embedded WebViews, transitioning to the modern corporate identity.",
    featured: true,
    details: [
      "Re-engineered styling architecture using modern design tokens, enabling instant theme toggles and consistent brand styling across Native & WebView screens.",
      "Integrated the refreshed RAKBANK logo, custom typography, modernized icon sets, and micro-interactions.",
      "Collaborated closely with UAE brand designers and compliance officers to meet central bank guidelines while delivering a sleek modern aesthetic.",
    ],
    techStack: ["React Native", "React.js", "Design Systems", "WebViews", "Figma Tokens", "iOS / Android"],
    stats: "1M+ Active Users",
  },
  {
    id: "fx-transactions",
    title: "Advanced FX & Currency Exchange Engine",
    category: "Banking Core",
    company: "RAKBANK (UAE)",
    period: "2022 - 2026",
    summary:
      "Deep foreign exchange (FX) transactional architecture supporting real-time currency conversions, multi-currency accounts, and rate lock mechanisms.",
    featured: true,
    details: [
      "Built real-time live exchange rate ticker connecting to treasury liquidity feeds with automated polling and WebSockets fallback.",
      "Engineered complex spread fee calculations, custom dealer quotes, and immediate execution confirmation modals.",
      "Developed high-precision currency inputs with fractional cent tolerance, currency symbol localization, and compliance risk disclosures.",
    ],
    techStack: ["React.js", "React Native", "Treasury Feeds", "Redux", "Real-Time Rates", "Fintech Security"],
    stats: "AED Millions Daily FX Flow",
  },
  {
    id: "international-remittance",
    title: "International Remittance & Local Instant Transfers",
    category: "Payments",
    company: "RAKBANK (UAE)",
    period: "2021 - 2025",
    summary:
      "Cross-border SWIFT money transfer module and UAE Central Bank local instant payment integration with biometric step-up validation.",
    featured: true,
    details: [
      "Constructed multi-step wizard for beneficiary onboarding (IBAN validation, SWIFT code auto-lookup, correspondent bank routing).",
      "Seamless integration with UAE IPP (Instant Payment Platform) for instant 24/7 domestic funds transfers.",
      "Integrated biometric step-up (Face ID / Fingerprint) and hardware token verification for high-value remittances.",
    ],
    techStack: ["React Native", "SWIFT Rails", "UAE IPP", "Biometrics", "REST APIs", "Cryptographic Signing"],
    stats: "200+ Global Corridors",
  },
  {
    id: "credit-cards-summary",
    title: "Credit Cards & Financial Wealth Summary",
    category: "Mobile & WebView",
    company: "RAKBANK (UAE)",
    period: "2022 - 2025",
    summary:
      "Comprehensive credit card management hub and financial summaries built with hybrid React Native & WebView technology.",
    featured: true,
    details: [
      "Real-time card controls: instant card freeze/unfreeze, international usage toggle, ATM withdrawal limit modification, and secure PIN generation.",
      "Interactive spend categorization charts and billing statement downloads with PDF preview inside WebView.",
      "Zero-latency state synchronization between native mobile bottom-sheets and embedded React WebViews.",
    ],
    techStack: ["React Native", "React.js", "WebView Bridge", "Chart.js", "PDF Generator", "State Sync"],
    stats: "Top-Rated Card Management",
  },
  {
    id: "go-fabi-suite",
    title: "Go Fabi & Mobile Suite (7+ Apps)",
    category: "Mobile",
    company: "Fabi Technology",
    period: "2016 - 2017",
    summary:
      "Suite of 7 to 8 consumer mobile applications including 'Go Fabi' delivery and promotional platforms with real-time mapping.",
    featured: false,
    details: [
      "Architected and deployed 7+ mobile applications across various consumer niches.",
      "Built location-based vendor discovery, promo coupon redemptions, and real-time push notification campaigns.",
      "Optimized offline performance and asset caching for smooth rendering on low-spec mobile devices.",
    ],
    techStack: ["Mobile Dev", "JavaScript", "Push Notifications", "Maps API", "Offline Caching", "App Store"],
    stats: "7+ Apps Published",
  },
  {
    id: "brams-cloud-portal",
    title: "Enterprise Cloud Support & Monitoring Portal",
    category: "Cloud",
    company: "Brams Technology",
    period: "2019",
    summary:
      "Web-based cloud infrastructure support portal for tracking uptime, incident tickets, and client cloud health metrics in Dubai.",
    featured: false,
    details: [
      "Configured monitoring dashboards for enterprise clients across AWS and Google Cloud environments.",
      "Automated alert escalation protocols and uptime telemetry reporting.",
      "Collaborated with DevOps and client stakeholders to resolve high-priority cloud support incidents.",
    ],
    techStack: ["Cloud Infrastructure", "React.js", "Monitoring", "Technical Support", "Incident Response"],
    stats: "99.9% Client Uptime",
  },
  {
    id: "academic-cs-curriculum",
    title: "Data Structures & Web Labs Mentorship",
    category: "Academic",
    company: "College of Engineering Cherthala",
    period: "2014 - 2015",
    summary:
      "Assistant Professor delivering comprehensive computer science coursework in Data Structures, Algorithms, and Web Development.",
    featured: false,
    details: [
      "Designed curriculum and laboratory exercises for Semester 1 and Semester 7 B.Tech engineering students.",
      "Mentored students in object-oriented programming, data structures (Trees, Graphs, Hash Tables), and web frontend fundamentals.",
      "Conducted practical examinations and guided technical capstone projects to university standards.",
    ],
    techStack: ["Data Structures", "Algorithms", "Web Technologies", "C/C++", "Java", "Student Mentoring"],
    stats: "120+ Engineers Trained",
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "React Native", level: 95 },
    { name: "Mobile WebViews & Bridge", level: 92 },
    { name: "JavaScript (ES6+) / TypeScript", level: 90 },
    { name: "HTML5 / CSS3 / TailwindCSS", level: 92 },
    { name: "Redux Toolkit / Context API", level: 90 },
    { name: "Next.js & Modern Web", level: 85 },
  ],
  fintech: [
    { name: "Foreign Exchange (FX) Engine", level: 94 },
    { name: "International Remittance (SWIFT)", level: 90 },
    { name: "Local Instant Payments (UAE IPP)", level: 92 },
    { name: "Credit Card Lifecycle & Controls", level: 92 },
    { name: "FinTech Security & Biometrics", level: 88 },
    { name: "PCI-DSS / Central Bank Compliance", level: 86 },
  ],
  mobile: [
    { name: "Cross-Platform iOS & Android", level: 92 },
    { name: "Hybrid Web-Mobile Architecture", level: 94 },
    { name: "Native Bridges & Performance", level: 90 },
    { name: "App Store & Play Store Deployment", level: 88 },
    { name: "Push Notifications & Deep Linking", level: 88 },
    { name: "Offline Caching & State Persistence", level: 87 },
  ],
  tools: [
    { name: "Git / GitHub / GitLab", level: 90 },
    { name: "Cloud Support & AWS Basics", level: 82 },
    { name: "Vite / Webpack Bundlers", level: 88 },
    { name: "Postman / RESTful APIs", level: 92 },
    { name: "Data Structures & CS Foundations", level: 95 },
    { name: "Agile / Scrum Methodologies", level: 90 },
  ],
};
