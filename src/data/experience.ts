export interface Role {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

// newest first
export const experience: Role[] = [
  {
    role: 'AI/ML Automation Intern',
    org: 'Texas Instruments',
    dates: 'June 2026 – August 2026',
    bullets: [
      'Designed and built AI agents and automation workflows with quality engineers, catching spec and datasheet errors before devices release or cause scrap.',
      'Owned each project end to end, from the initial idea through development, security, deployment, and ongoing maintenance.',
      'Built internal tools for engineers, including a React catalog of team tools with a chat assistant backed by an on-prem model.',
    ],
    tags: ['Python', 'SQL', 'MCP'],
  },
  {
    role: 'Intrusion Detection Researcher',
    org: 'Texas A&M University',
    dates: 'January 2026 – May 2026',
    bullets: [
      'Built an ML network intrusion dashboard with the U.S. Space Force for defensive cyber operations.',
      'Detected DDoS, spoofing, and jamming attacks in real time, with operator alerts for network health.',
    ],
    tags: ['Python', 'PyTorch'],
  },
  {
    role: 'Avionics & Controls',
    org: 'Texas A&M Rocket Engine Design',
    dates: 'January 2026 – Present',
    bullets: [
      'Designed a binary protocol linking the Python ground GUI to Teensy flight hardware, with an automatic abort system.',
      'Writing firmware for real-time engine throttling and gimbal control.',
    ],
    tags: ['Python', 'C++', 'Teensy 4.1'],
  },
  {
    role: 'Price Forecasting Researcher',
    org: 'Texas A&M University',
    dates: 'May 2025 – May 2026',
    bullets: [
      'Built forecasting models (SARIMAX, LightGBM, LSTM) for U.S. calf prices to support cattle ranchers’ decisions.',
      'Used walk-forward validation and automated tuning so results hold up on unseen data.',
    ],
    tags: ['Python', 'scikit-learn', 'statsmodels'],
  },
];
