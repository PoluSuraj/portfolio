const skills = [
  {
    title: 'HTML and CSS',
    description: 'Strong foundation in layout, responsive design, visual hierarchy, and clean interface structure.',
    level: '90%'
  },
  {
    title: 'Responsive UI Design',
    description: 'Building well-aligned interfaces that stay clean and usable across desktop and mobile screens.',
    level: '88%'
  },
  {
    title: 'JavaScript',
    description: 'Adding interactivity, DOM rendering, smooth user flows, and client-side feature logic.',
    level: '80%'
  },
  {
    title: 'MySQL and Data Handling',
    description: 'Working with structured data, queries, and database-backed application features.',
    level: '76%'
  },
  {
    title: 'Security and System Thinking',
    description: 'Approaching projects with attention to secure workflows, logic validation, and reliability.',
    level: '72%'
  },
  {
    title: 'Problem Solving and Engineering Practice',
    description: 'Learning fast, debugging carefully, and improving systems through hands-on iteration.',
    level: '84%'
  },
  {
    title: 'Excel',
    description: 'Working confidently with spreadsheets, structured data, analysis, and practical Excel-based tasks.',
    level: '98%'
  }
];

const projects = [
  {
    title: 'Secure Voting System',
    status: 'Live Project',
    description: 'A live web project focused on secure voting workflows, cleaner interaction flow, and dependable user actions for a sensitive system.',
    tags: ['Security', 'Web Application', 'System Design'],
    url: 'https://secure-voting-system-two.vercel.app',
    links: [
      { label: 'Live Demo', href: 'https://secure-voting-system-two.vercel.app' },
      { label: 'GitHub Profile', href: 'https://github.com/PoluSuraj' }
    ]
  },
  {
    title: 'Blogging Platform',
    status: 'Completed',
    description: 'A content management focused project built to make writing, managing, and presenting posts smooth and practical.',
    tags: ['Content Management', 'Frontend', 'CRUD'],
    url: 'https://github.com/PoluSuraj',
    links: [
      { label: 'GitHub Profile', href: 'https://github.com/PoluSuraj' },
      { label: 'Contact for Demo', href: '#contact' }
    ]
  },
  {
    title: 'Excel Analysis Tool',
    status: 'Live Project',
    description: 'A utility-focused project for transforming spreadsheet data into clearer analysis and more useful insights.',
    tags: ['Data Analysis', 'Visualization', 'Productivity'],
    url: 'https://polusuraj.github.io/Excel-Analysis-Tool/',
    links: [
      { label: 'Live Demo', href: 'https://polusuraj.github.io/Excel-Analysis-Tool/' },
      { label: 'GitHub Repo', href: 'https://github.com/PoluSuraj/Excel-Analysis-Tool' }
    ]
  },
  {
    title: 'Portfolio Website',
    status: 'Refined',
    description: 'A refactored personal portfolio with separate files, smoother project interactions, better alignment, and improved maintainability.',
    tags: ['Responsive Design', 'Performance', 'UI Polish'],
    url: '#home',
    links: [
      { label: 'Resume', href: 'Resume.pdf' },
      { label: 'Hire Me', href: '#contact' }
    ]
  },
  {
    title: 'Personal AI Assistant',
    status: 'Live Project',
    description: 'A live AI assistant web project focused on fast interactions, modern UI flow, and practical assistant-style user experience.',
    tags: ['AI Assistant', 'Web App', 'Interactive UI'],
    url: 'https://personal-ai-assistant-sepia.vercel.app/',
    links: [
      { label: 'Live Demo', href: 'https://personal-ai-assistant-sepia.vercel.app/' },
      { label: 'GitHub Profile', href: 'https://github.com/PoluSuraj' }
    ]
  }
];

const certifications = [
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    description: 'Focused on logic building and coding fundamentals.',
    tags: ['Algorithms', 'Logic'],
    href: 'https://www.hackerrank.com/certificates/41fb7bbe45f3'
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    description: 'Applied coding skills to more structured problem patterns.',
    tags: ['Intermediate', 'Coding'],
    href: 'https://www.hackerrank.com/certificates/6a11c07a4673'
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    description: 'Validated Python basics and coding familiarity.',
    tags: ['Python', 'Programming'],
    href: 'https://www.hackerrank.com/certificates/23768c792a8c'
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    description: 'Verified JavaScript fundamentals for web programming.',
    tags: ['JavaScript', 'Basics'],
    href: 'https://www.hackerrank.com/certificates/37b2cf1a60ea'
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    description: 'Validated foundational SQL knowledge and querying skills.',
    tags: ['SQL', 'Database'],
    href: 'https://www.hackerrank.com/certificates/bff15beeb6cc'
  },
  {
    title: 'R (Intermediate)',
    issuer: 'HackerRank',
    description: 'Demonstrated intermediate analytical programming skills using R.',
    tags: ['R', 'Analytics'],
    href: 'https://www.hackerrank.com/certificates/22fda7aed7ff'
  },
  {
    title: 'CSS (Basic)',
    issuer: 'HackerRank',
    description: 'Validated styling fundamentals for responsive and structured UIs.',
    tags: ['CSS', 'Frontend'],
    href: 'https://www.hackerrank.com/certificates/0718f16e8809'
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    description: 'Showed stronger ability in querying structured relational data.',
    tags: ['SQL', 'Intermediate'],
    href: 'https://www.hackerrank.com/certificates/ad303a86898a'
  },
  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    description: 'Validated deeper SQL proficiency for complex query scenarios.',
    tags: ['SQL', 'Advanced'],
    href: 'https://www.hackerrank.com/certificates/9a7744bf098a'
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    description: 'Demonstrated stronger JavaScript knowledge and implementation ability.',
    tags: ['JavaScript', 'Frontend'],
    href: 'https://www.hackerrank.com/certificates/cb65b32b68c1'
  },
  {
    title: 'Node (Basic)',
    issuer: 'HackerRank',
    description: 'Certified Node.js basics for server-side JavaScript workflows.',
    tags: ['Node.js', 'Backend'],
    href: 'https://www.hackerrank.com/certificates/fdb1c6f85474'
  },
];

const licenses = [
  {
    title: 'Accenture North America - Data Analytics and Visualization',
    issuer: 'Forage',
    description: 'Experience-based certification in analytics, storytelling, and business-oriented data interpretation.',
    tags: ['Analytics', 'Visualization'],
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_hfbYN5TPTRuWv8fwm_1732455571319_completion_certificate.pdf'
  },
  {
    title: 'Accenture UK - Strategy Consulting',
    issuer: 'Forage',
    description: 'Built understanding of structured consulting, planning, and business problem solving.',
    tags: ['Strategy', 'Consulting'],
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ovyvuqqNRQKBjNxbj/vZSN6eoncQtCPYbqz_ovyvuqqNRQKBjNxbj_hfbYN5TPTRuWv8fwm_1732387707412_completion_certificate.pdf'
  },
  {
    title: 'GE Aerospace - Explore Engineering',
    issuer: 'Forage',
    description: 'Explored engineering thinking, technical communication, and real-world industry workflows.',
    tags: ['Engineering', 'Industry'],
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ay2tsYxaTif7Nt6z7/pLsGxMKDGpsQWt6zZ_ay2tsYxaTif7Nt6z7_hfbYN5TPTRuWv8fwm_1732453008471_completion_certificate.pdf'
  },
  {
    title: 'Cryptography',
    issuer: 'Coursera',
    description: 'Explored core concepts behind secure systems and encrypted communication.',
    tags: ['Security', 'Theory'],
    href: 'https://www.coursera.org/account/accomplishments/verify/QL2YJEQK67FW'
  },
  {
    title: 'Validate HTML Forms with JavaScript and HTML',
    issuer: 'Coursera Project Network',
    description: 'Hands-on practice building more reliable and user-friendly web forms.',
    tags: ['Forms', 'Validation'],
    href: 'https://www.coursera.org/account/accomplishments/verify/HPTO5VX3VZRN'
  }
];

const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const certificationsGrid = document.getElementById('certificationsGrid');
const licensesGrid = document.getElementById('licensesGrid');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const mobileLinks = Array.from(document.querySelectorAll('.mobile-link'));
const sections = Array.from(document.querySelectorAll('main .section[id]'));
const greeting = document.getElementById('greeting');
const liveDate = document.getElementById('liveDate');
const currentYear = document.getElementById('currentYear');
const dateTime = document.getElementById('dateTime');
const scrollTopButton = document.getElementById('scrollTop');
const hireModal = document.getElementById('hireModal');
const openHireModalButton = document.getElementById('openHireModal');
const jumpToContact = document.getElementById('jumpToContact');
const hireForm = document.getElementById('hireForm');
const formStatus = document.getElementById('formStatus');
const certTabs = Array.from(document.querySelectorAll('[data-cert-tab]'));
const allNavLinks = navLinks.concat(mobileLinks);

function createTag(text) {
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = text;
  return tag;
}

function createProjectLink(link) {
  const anchor = document.createElement('a');
  anchor.className = 'project-link';
  anchor.href = link.href;
  anchor.textContent = link.label;

  if (link.href.startsWith('http')) {
    anchor.target = '_blank';
    anchor.rel = 'noreferrer';
  }

  return anchor;
}

function navigateProject(url) {
  if (!url) {
    return;
  }

  if (url.startsWith('#')) {
    const target = document.querySelector(url);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
}

function renderSkills() {
  skills.forEach((skill) => {
    const card = document.createElement('article');
    card.className = 'skill-card reveal';

    const top = document.createElement('div');
    top.className = 'skill-top';

    const copy = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const level = document.createElement('strong');
    const meter = document.createElement('div');
    const fill = document.createElement('span');

    title.textContent = skill.title;
    description.textContent = skill.description;
    level.textContent = skill.level;
    meter.className = 'skill-meter';
    meter.style.setProperty('--level', skill.level);

    copy.append(title, description);
    top.append(copy, level);
    meter.append(fill);
    card.append(top, meter);
    skillsGrid.append(card);
  });
}

function renderProjects() {
  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card project-card-clickable reveal';
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', project.title + ' project');

    const top = document.createElement('div');
    top.className = 'project-top';

    const copy = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const status = document.createElement('span');
    const tags = document.createElement('div');
    const links = document.createElement('div');

    title.textContent = project.title;
    description.textContent = project.description;
    status.className = 'project-status';
    status.textContent = project.status;
    tags.className = 'project-tags';
    links.className = 'project-links';

    project.tags.forEach((tag) => tags.append(createTag(tag)));
    project.links.forEach((link) => links.append(createProjectLink(link)));

    copy.append(title, description);
    top.append(copy, status);
    card.append(top, tags, links);

    card.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('a')) {
        return;
      }
      navigateProject(project.url);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        navigateProject(project.url);
      }
    });

    projectsGrid.append(card);
  });
}

function buildCredentialCard(item) {
  const card = document.createElement('article');
  card.className = 'cert-card reveal';

  const top = document.createElement('div');
  top.className = 'cert-top';

  const copy = document.createElement('div');
  const issuer = document.createElement('span');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  const view = document.createElement('a');
  const tags = document.createElement('div');

  issuer.className = 'cert-issuer';
  issuer.textContent = item.issuer;
  title.textContent = item.title;
  description.textContent = item.description;
  view.className = 'project-link';
  view.href = item.href;
  view.target = '_blank';
  view.rel = 'noreferrer';
  view.textContent = 'View';
  tags.className = 'cert-tags';

  item.tags.forEach((tag) => tags.append(createTag(tag)));

  copy.append(issuer, title, description);
  top.append(copy, view);
  card.append(top, tags);
  return card;
}

function renderCertifications() {
  certifications.forEach((certification) => {
    certificationsGrid.append(buildCredentialCard(certification));
  });

  licenses.forEach((license) => {
    licensesGrid.append(buildCredentialCard(license));
  });
}

function setupCertificationTabs() {
  certTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const showCertifications = tab.dataset.certTab === 'certifications';

      certTabs.forEach((button) => {
        button.classList.toggle('is-active', button === tab);
      });

      certificationsGrid.classList.toggle('hidden-grid', !showCertifications);
      licensesGrid.classList.toggle('hidden-grid', showCertifications);
    });
  });
}

function setGreeting() {
  const hour = new Date().getHours();
  let message = 'Welcome';

  if (hour < 12) {
    message = 'Good Morning';
  } else if (hour < 18) {
    message = 'Good Afternoon';
  } else {
    message = 'Good Evening';
  }

  greeting.textContent = message;
}

function updateTime() {
  const now = new Date();
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  if (liveDate) {
    liveDate.textContent = dateFormatter.format(now) + ' • ' + timeFormatter.format(now);
  }

  if (dateTime) {
    dateTime.textContent = 'Local time: ' + now.toLocaleString();
  }

  if (currentYear) {
    currentYear.textContent = now.getFullYear();
  }
}

function getHeaderOffset() {
  const header = document.querySelector('.site-header');
  return header ? header.offsetHeight + 2 : 74;
}

function setActiveLink(id) {
  allNavLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === '#' + id;
    link.classList.toggle('active', isActive);
  });
}

function scrollToSection(hash) {
  const target = document.querySelector(hash);
  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top, behavior: 'smooth' });
  setActiveLink(hash.slice(1));
}

function updateActiveSectionOnScroll() {
  const offset = getHeaderOffset() + 2;
  const lastSection = sections[sections.length - 1];
  let currentId = sections[0] ? sections[0].id : 'home';

  if (lastSection) {
    const nearPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (nearPageBottom) {
      setActiveLink(lastSection.id);
      return;
    }
  }

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - offset) {
      currentId = section.id;
    }
  });

  setActiveLink(currentId);
}

function closeMobileMenu() {
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
}

function openModal() {
  hireModal.classList.add('is-open');
  hireModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  hireModal.classList.remove('is-open');
  hireModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupObservers() {
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

function setupNavigation() {
  allNavLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || !hash.startsWith('#')) {
        return;
      }

      event.preventDefault();
      closeMobileMenu();
      scrollToSection(hash);
    });
  });

  updateActiveSectionOnScroll();
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(hireForm);
  formStatus.textContent = 'Sending your request...';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    hireForm.reset();
    formStatus.textContent = 'Request sent successfully. I will get back to you soon.';
  } catch (error) {
    formStatus.textContent = 'Message failed to send. Please try again in a moment.';
  }
}

renderSkills();
renderProjects();
renderCertifications();
setupCertificationTabs();
setGreeting();
updateTime();
setupObservers();
setupNavigation();
setInterval(updateTime, 1000);

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.classList.toggle('is-open', isOpen);
});

window.addEventListener('scroll', () => {
  scrollTopButton.classList.toggle('is-visible', window.scrollY > 420);
  updateActiveSectionOnScroll();
});

window.addEventListener('resize', updateActiveSectionOnScroll);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

openHireModalButton.addEventListener('click', openModal);

hireModal.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal === 'true') {
    closeModal();
  }
});

jumpToContact.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && hireModal.classList.contains('is-open')) {
    closeModal();
  }
});

hireForm.addEventListener('submit', handleFormSubmit);
