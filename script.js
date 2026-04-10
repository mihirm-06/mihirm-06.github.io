const portfolioData = {
  projects: [
    {
        title: 'Hyperion',
        description: '3D target tracking system using Kalman filtering to maintain persistent object locations.',
        tags: ['C++', 'Eigen'],
        githubLink: 'https://github.com/mihirm-06/Hyperion',
    },
    {
        title: 'Southwest Airlines Weather Impact Score',
        description: `A project in collaboration with Southwest Airlines to develop a standardized
            weather score describing the impact of weather conditions on flight delays, diversions, and cancellations.`,
        tags: ['Python', 'PyTorch', 'scikit-learn'],
        githubLink: 'https://github.com/mihirm-06/southwest-weather-score-project',
    },
  ],
  extracurriculars: [
    {
        title: 'Texas A&M Rocket Engine Design',
        description: `I developed a binary protocol to ensure reliable communication between our Python GUI 
            and Teensy flight hardware with an automatic abort system.
            I'm currently writing the firmware to handle real-time engine throttling and gimbal control.`,
        tags: ['Python', 'C++', 'Teensy 4.1']
    },
    {
        title: 'Ignitors Rocketry',
        description: `I'm learning the fundamentals of rocketry beyond avionics. I conduct OpenRocket
            simulations and have assembled and launched 1 of 3 rockets from components.`,
        tags: ['OpenRocket'],
    },
  ]
};

function renderCardGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const cardsMarkup = items.map((item) => {
    const tags = Array.isArray(item.tags) ? item.tags : [];
    const tagsMarkup = tags.map((tag) => `<span>${tag}</span>`).join('');
    const hasTags = tags.length > 0;

    return `
      <div class="project-card${hasTags ? ' has-tags' : ''}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-footer${hasTags ? ' has-tags' : ''}">
          <div class="tags">${tagsMarkup}</div>
          ${item.githubLink ? `
            <a class="github-link" href="${item.githubLink}" target="_blank" rel="noreferrer" aria-label="GitHub repository">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.3a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-2c-2.9.6-3.6-1.2-3.6-1.2-.4-1.1-1-1.4-1-1.4-.8-.5.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.7.8.1-.6.3-1 .6-1.3-2.3-.3-4.6-1.2-4.6-5.2 0-1.1.4-2.1 1-2.9-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.9 1.1a9.8 9.8 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.5 1.4.2 2.4.1 2.6.7.8 1 1.8 1 2.9 0 4-2.3 4.9-4.6 5.2.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.3Z" fill="currentColor"/>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  grid.innerHTML = cardsMarkup;
}

renderCardGrid('projects-grid', portfolioData.projects);
renderCardGrid('extracurriculars-grid', portfolioData.extracurriculars);

if (window.Typed && document.getElementById('typed')) {
  new window.Typed('#typed', {
    strings: [
      '^500computer science student',
      '^500space enthusiast',
      '^500musician',
    ],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 1400,
    startDelay: 0,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
}

const hashLinks = document.querySelectorAll('a[href^="#"]');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('main section[id]');

for (const link of hashLinks) {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href');
    if (!target || !target.startsWith('#')) return;

    const section = document.querySelector(target);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      const currentId = entry.target.id;
      for (const link of navLinks) {
        const href = link.getAttribute('href');
        const isHomeLink = href === '#top-anchor' && currentId === 'home';
        const isMatch = href === `#${currentId}` || isHomeLink;
        link.classList.toggle('active', isMatch);
      }
    }
  },
  {
    root: null,
    threshold: 0.45
  }
);

for (const section of sections) {
  observer.observe(section);
}
