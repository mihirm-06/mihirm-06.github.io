export interface Role {
  // which Home section the entry shows in
  section: 'education' | 'experience' | 'research';
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  tags: string[];
  // optional links under the tags, e.g. a poster or paper. Put your own PDFs in
  // public/research/ and link them as '/research/file.pdf'; link published papers
  // by their DOI or arXiv URL instead.
  links?: { label: string; href: string }[];
  // optional paper for a research entry. `status` shows under the dates, e.g.
  // 'Paper in progress', 'Paper under review', 'Published, Journal Name 2027'.
  // `href` (the DOI or arXiv link, once published) adds a "Paper" link.
  // To link an abstract PDF, add it to `links` like the poster.
  paper?: { status: string; href?: string };
}

// newest first within each section
export const experience: Role[] = [
  {
    section: 'experience',
    role: 'AI/ML Automation Intern',
    org: 'Texas Instruments',
    dates: 'June 2026 – August 2026',
    bullets: [
      'Designed and built AI agents and automation workflows with quality engineers, catching spec and datasheet errors before devices release or cause scrap.',
      'Owned each project end to end, from the development and security through deployment and ongoing maintenance.',
      'Built internal tools for engineers, including a React catalog of team tools with a chat assistant backed by an on-prem model.',
    ],
    tags: ['Python', 'SQL', 'MCP'],
  },
  {
    section: 'experience',
    role: 'Avionics & Control Systems',
    org: 'Texas A&M Rocket Engine Design',
    dates: 'January 2026 – Present',
    bullets: [
      'Designed a binary protocol linking the Python ground GUI to Teensy flight hardware, with an automatic abort system.',
      'Writing firmware for real-time engine throttling and gimbal control.',
    ],
    tags: ['C++', 'Python', 'Teensy 4.1'],
  },
  {
    section: 'research',
    role: 'Intrusion Detection Researcher',
    org: 'Texas A&M University, U.S. Space Force',
    dates: 'January 2026 – May 2026',
    bullets: [
      'Built an ML network intrusion dashboard with the U.S. Space Force for defensive cyber operations.',
      'Detected DDoS, spoofing, and jamming attacks in real time, with operator alerts for network health.',
    ],
    tags: ['Python', 'PyTorch'],
    paper: { status: 'Paper in progress' },
  },
  {
    section: 'research',
    role: 'Price Forecasting Researcher',
    org: 'Texas A&M University',
    dates: 'May 2025 – May 2026',
    bullets: [
      'Built forecasting models (SARIMAX, LightGBM, LSTM) for U.S. calf prices to support cattle ranchers’ decisions.',
      'Used walk-forward validation and automated tuning so results hold up on unseen data.',
    ],
    tags: ['Python', 'scikit-learn', 'statsmodels'],
    links: [{ label: 'Poster', href: '/research/cow-calf_poster.pdf' }],
    paper: { status: 'Paper under review' },
  },
];
