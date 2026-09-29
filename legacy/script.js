const portfolioData = {
  projects: [
    {
      title: 'Hyperion',
      description: '3D target tracking system using Kalman filtering to maintain persistent object locations.',
      tags: ['C++', 'Eigen'],
      githubLink: 'https://github.com/mihirm-06/Hyperion',
      detailHtml: `
        <p><strong>What it focuses on:</strong> Hyperion is built around persistent tracking instead of one-off detection. The main goal is to keep object identity consistent while motion becomes noisy or partial.</p>
        <p><strong>Why it matters:</strong></p>
        <ul>
          <li>Helps visualize motion over time instead of isolated frames.</li>
          <li>Keeps the system usable when detections are inconsistent.</li>
          <li>Leaves room for future overlays, logging, and richer analysis.</li>
        </ul>
      `,
    },
    {
      title: 'Southwest Airlines Weather Impact Score',
      description: `A project in collaboration with Southwest Airlines to develop a standardized
            weather score describing the impact of weather conditions on flight delays, diversions, and cancellations.`,
      tags: ['Python', 'PyTorch', 'scikit-learn'],
      githubLink: 'https://github.com/mihirm-06/southwest-weather-score-project',
      detailHtml: `
        <p><strong>What it focuses on:</strong> This project translates a complex weather-and-operations problem into one normalized score that can be compared across routes, days, and conditions.</p>
        <p><strong>Why it matters:</strong></p>
        <ul>
          <li>Makes weather effects easier to compare at a glance.</li>
          <li>Supports analysis of delays, diversions, and cancellations together.</li>
          <li>Creates a foundation for a future write-up or technical blog entry.</li>
        </ul>
      `,
    },
  ],
  extracurriculars: [
    {
      title: 'Texas A&M Rocket Engine Design',
      description: `I developed a binary protocol to ensure reliable communication between our Python GUI 
            and Teensy flight hardware with an automatic abort system.
            I'm currently writing the firmware to handle real-time engine throttling and gimbal control.`,
      tags: ['Python', 'C++', 'Teensy 4.1'],
      detailHtml: `
        <p><strong>What it focuses on:</strong> The work centers on making the GUI, telemetry path, and embedded side talk reliably under pressure, with enough structure to keep launch operations safe.</p>
        <p><strong>Why it matters:</strong></p>
        <ul>
          <li>Hardening the protocol for cleaner communication.</li>
          <li>Building firmware for throttling and gimbal control.</li>
          <li>Keeping the abort flow fast and deterministic.</li>
        </ul>
      `,
    },
    {
      title: 'Ignitors Rocketry',
      description: `I'm learning the fundamentals of rocketry beyond avionics. I conduct OpenRocket
            simulations and have assembled and launched 1 of 3 rockets from components.`,
      tags: ['OpenRocket'],
      detailHtml: `
        <p><strong>What it focuses on:</strong> I'm learning the fundamentals of rocketry beyond avionics. I conduct OpenRocket simulations and have assembled and launched 1 of 3 rockets from components.</p>
        <p><strong>Why it matters:</strong></p>
        <ul>
          <li>It connects theory to real hardware.</li>
          <li>OpenRocket helps me test ideas before fabrication.</li>
          <li>Each build gives a cleaner baseline for the next one.</li>
        </ul>
      `,
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
      <div class="project-card${hasTags ? ' has-tags' : ''}" role="button" tabindex="0" aria-haspopup="dialog" aria-controls="detail-modal">
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

const detailModal = document.getElementById('detail-modal');
const detailModalContent = document.getElementById('detail-modal-content');
let activeTrigger = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderCardTags(tags) {
  return (Array.isArray(tags) ? tags : []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
}

function openDetailModal(item, trigger) {
  if (!detailModal) return;

  activeTrigger = trigger || null;
  detailModalContent.innerHTML = `
    <div class="detail-modal__summary">
      <div class="detail-modal__title-row">
        <h3>${escapeHtml(item.title)}</h3>
      </div>
      <div class="detail-modal__tags tags">${renderCardTags(item.tags)}</div>
    </div>
    <div class="detail-modal__blog">
      ${item.detailHtml || `<p>${escapeHtml(item.description)}</p>`}
    </div>
  `;

  detailModal.hidden = false;
  detailModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeButton = detailModal.querySelector('.detail-modal__close');
  if (closeButton instanceof HTMLElement) closeButton.focus();
}

function closeDetailModal() {
  if (!detailModal || detailModal.hidden) return;

  detailModal.hidden = true;
  detailModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (activeTrigger && typeof activeTrigger.focus === 'function') {
    activeTrigger.focus();
  }

  activeTrigger = null;
}

for (const grid of document.querySelectorAll('.card-grid')) {
  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.project-card');
    if (!card || !grid.contains(card)) return;
    if (event.target.closest('.github-link')) return;

    const section = grid.id === 'projects-grid' ? portfolioData.projects : portfolioData.extracurriculars;
    const cards = Array.from(grid.querySelectorAll('.project-card'));
    const index = cards.indexOf(card);
    const item = section[index];

    if (item) {
      openDetailModal(item, card);
    }
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    const card = event.target.closest('.project-card');
    if (!card || !grid.contains(card) || event.target.closest('.github-link')) return;

    event.preventDefault();
    const section = grid.id === 'projects-grid' ? portfolioData.projects : portfolioData.extracurriculars;
    const cards = Array.from(grid.querySelectorAll('.project-card'));
    const index = cards.indexOf(card);
    const item = section[index];

    if (item) {
      openDetailModal(item, card);
    }
  });
}

if (detailModal) {
  detailModal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute('data-modal-close')) {
      closeDetailModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDetailModal();
    }
  });
}

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
