const PROJECTS = [
  {
    id: "PRJ-01",
    title: "FinalTermLaravel",
    subtitle: "↳ Legacy PHP to Laravel + Inertia.js SPA migration",
    category: "fullstack",
    categoryLabel: "Full-Stack / SPA",
    description:
      "An active modernization initiative converting a legacy procedural PHP inventory management system into a modular full-stack application.",
    problem:
      "Overcame scalability limits, code duplication, and tight coupling found in legacy monolithic procedural setups by migrating to MVC architecture and single-page-app responsiveness.",
    features: [
      "Clean separation of business logic and view layers using Inertia.js.",
      "Reactive, client-side dynamic inventory interfaces without page reloads.",
      "Relational inventory tracking with secure authentication and structured database queries."
    ],
    stack: ["Laravel", "Inertia.js", "React.js", "PHP", "MySQL/MariaDB", "Tailwind CSS", "Vite"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-02",
    title: "BuildIT (buildits.app)",
    subtitle: "↳ Cloud PC storefront on Azure B1 VM",
    category: "cloud",
    categoryLabel: "Cloud / E-Commerce",
    description:
      "A cloud-hosted e-commerce web platform engineered for PC building components and tech peripherals.",
    problem:
      "Provided a fast, secure online storefront with integrated shopping flows deployed on scalable cloud infrastructure with strict SSL and security hygiene.",
    features: [
      "Cloud infrastructure hosting using a Microsoft Azure B1 tier VM instance.",
      "Domain routing and DNS configuration via Name.com.",
      "Hardened WordPress deployment utilizing Blocksy, Spectra, WooCommerce, Patchstack, caching, and custom SSH server administration."
    ],
    stack: ["Microsoft Azure (B1)", "WordPress", "WooCommerce", "Blocksy", "Spectra", "Patchstack", "SSH/Linux", "DNS/SSL"],
    liveUrl: "https://buildits.app"
  },
  {
    id: "PRJ-03",
    title: "KoneKT",
    subtitle: "↳ Talent directory & technical role matching",
    category: "fullstack",
    categoryLabel: "Web / Full-Stack",
    description:
      "A talent networking and job/recruitment platform tailored for connecting professionals and matching technical roles.",
    problem:
      "Streamlined profile discovery, portfolio visibility, and recruiter matching in a centralized environment.",
    features: [
      "User profile management, talent directory search, and application tracking workflows.",
      "Responsive, utility-driven UI for desktop and mobile screen sizes.",
      "Structured relational schema for storing resumes, job listings, and application states."
    ],
    stack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Git"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-04",
    title: "Conference Registration Monitoring",
    subtitle: "↳ Desktop real-time attendee verification",
    category: "systems",
    categoryLabel: "Desktop / Java",
    description:
      "A desktop-based event registration and participant monitoring utility built for real-time conference operations.",
    problem:
      "Replaced manual paper-based logs and error-prone attendee tracking during academic and professional conferences.",
    features: [
      "Real-time participant check-in, search, and registration verification.",
      "Direct CRUD operations linked to a relational database backend.",
      "Form validation and attendance status reporting."
    ],
    stack: ["Java", "Swing UI", "NetBeans", "MySQL"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-05",
    title: "BankoSantiago",
    subtitle: "↳ ACID-compliant banking transaction model",
    category: "fullstack",
    categoryLabel: "Backend / Security",
    description:
      "A simulated banking transaction system modeling accounts, balances, and financial security fundamentals.",
    problem:
      "Implemented core ACID compliance principles and structured authorization checks required for safe financial data transactions.",
    features: [
      "Secure balance checking, account transfers, deposits, and withdrawal validations.",
      "Persistent transaction audit logging and session verification."
    ],
    stack: ["PHP", "MySQL", "Apache", "HTML/CSS", "Git"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-06",
    title: "Authio",
    subtitle: "↳ Hardened authentication & RBAC starter",
    category: "fullstack",
    categoryLabel: "Security / Web",
    description:
      "A modular authentication and role-based CRUD demonstration system designed as a hardened starter architecture.",
    problem:
      "Provided a reusable, secure authentication template preventing common web vulnerabilities (SQL injection, unsafe session management).",
    features: [
      "User registration, password hashing, credential verification, and session state persistence.",
      "Role-based data access and structured CRUD administration dashboard."
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-07",
    title: "PolyCloth",
    subtitle: "↳ Interactive apparel catalog & cart state",
    category: "cloud",
    categoryLabel: "E-Commerce / UI",
    description:
      "An e-commerce apparel catalog and ordering prototype focused on interactive storefront UX.",
    problem:
      "Solved product browsing, variant selection (sizes, colors), and cart state management in a structured web storefront.",
    features: [
      "Interactive product catalog with image galleries and categorical filtering.",
      "Dynamic shopping cart and order summary generation."
    ],
    stack: ["PHP", "MySQL", "JavaScript", "CSS/Bootstrap"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-08",
    title: "PC Part Picker DB Schema",
    subtitle: "↳ Normalized 5-entity hardware relational schema",
    category: "systems",
    categoryLabel: "Database Architecture",
    description:
      "A relational database schema modeling computer hardware compatibility, retail sources, and shipping channels.",
    problem:
      "Modeled multi-to-multi relationships and complex hardware entity dependencies without data redundancy.",
    features: [
      "Comprehensive 5-entity architecture: Component, Manufacturer, Retailer, User, and Shipper.",
      "Normalized tables with referential integrity constraints, primary/foreign keys, and indexing."
    ],
    stack: ["MySQL / MariaDB", "SQL DDL/DML", "Relational Modeling"],
    github: "https://github.com/miloshake"
  },
  {
    id: "PRJ-09",
    title: "CLSU CASS IDF/MDF Rack Design",
    subtitle: "↳ Multi-floor academic network rack elevation",
    category: "systems",
    categoryLabel: "Network / Infrastructure",
    description:
      "Detailed physical and logical network infrastructure rack design for the College of Arts and Social Sciences (CASS) building at CLSU.",
    problem:
      "Planned cable management, power distribution, patch panel allocation, and switch capacity for multi-floor academic network distribution.",
    features: [
      "Intermediate Distribution Frame (IDF) and Main Distribution Frame (MDF) rack elevation drawings.",
      "Port allocation planning, patch panel mapping, UPS integration, and structured cable management runs."
    ],
    stack: ["draw.io", "Network Topology", "IDF/MDF Rack Elevation"],
    github: "https://github.com/miloshake"
  }
];

let lastFocused = null;
let currentCategory = "all";
let searchQuery = "";

const projectsGrid = document.getElementById("projects-grid");
const projectCountNote = document.getElementById("project-count-note");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("project-search");

// Modal Elements
const modalBackdrop = document.getElementById("spec-modal-backdrop");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCode = document.getElementById("modal-code");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalProblem = document.getElementById("modal-problem");
const modalFeatures = document.getElementById("modal-features");
const modalStack = document.getElementById("modal-stack");
const modalLinks = document.getElementById("modal-links");

function renderProjects() {
  const filtered = PROJECTS.filter((proj) => {
    const matchesCat = currentCategory === "all" || proj.category === currentCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      proj.title.toLowerCase().includes(q) ||
      proj.subtitle.toLowerCase().includes(q) ||
      proj.description.toLowerCase().includes(q) ||
      proj.stack.some((s) => s.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  if (projectCountNote) {
    projectCountNote.textContent = `Showing ${filtered.length} of ${PROJECTS.length} projects`;
  }

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div class="notebook-panel" style="grid-column: 1 / -1; text-align: center; padding: 2.25rem;">
        <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">
          No projects match that search. Try clearing the filter.
        </p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered
    .map(
      (proj) => `
      <article class="project-card" data-id="${proj.id}" tabindex="0" role="button" aria-label="View details for ${proj.title}">
        <span class="card-tape" aria-hidden="true"></span>
        <div class="card-top">
          <div class="card-meta">
            <span class="card-code">${proj.id}</span>
            <span class="card-category">${proj.categoryLabel}</span>
          </div>
          <h3 class="card-title">${proj.title}</h3>
          <span class="card-hand-sub">${proj.subtitle}</span>
          <p class="card-desc">${proj.description}</p>
          <div class="card-problem-snippet">
            <strong>Problem Solved</strong>
            ${proj.problem}
          </div>
        </div>
        <div class="card-footer">
          <div class="stack-pills">
            ${proj.stack
              .slice(0, 5)
              .map((tech) => `<span class="stack-pill">${tech}</span>`)
              .join("")}
            ${proj.stack.length > 5 ? `<span class="stack-pill">+${proj.stack.length - 5}</span>` : ""}
          </div>
          <span class="card-inspect-link">View details →</span>
        </div>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openSpecModal(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openSpecModal(card.dataset.id);
      }
    });
  });
}

function openSpecModal(projectId) {
  const proj = PROJECTS.find((p) => p.id === projectId);
  if (!proj) return;

  modalCode.textContent = proj.id;
  modalCategory.textContent = proj.categoryLabel;
  modalTitle.textContent = proj.title;
  modalDesc.textContent = proj.description;
  modalProblem.textContent = proj.problem;

  modalFeatures.innerHTML = proj.features.map((f) => `<li>${f}</li>`).join("");
  modalStack.innerHTML = proj.stack.map((s) => `<span class="skill-chip highlight">${s}</span>`).join("");

  let linksHtml = "";
  if (proj.liveUrl) {
    linksHtml += `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Live Site (buildits.app) ↗</a>`;
  }
  if (proj.github) {
    linksHtml += `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub Profile ↗</a>`;
  }
  modalLinks.innerHTML = linksHtml;

  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastFocused = document.activeElement;
  modalCloseBtn.focus();
}

function closeSpecModal() {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeSpecModal);
}
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeSpecModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
    closeSpecModal();
  }
});

// Category filter clicks
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.filter;
    renderProjects();
  });
});

// Search input
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });
}

// Theme Toggle (Daylight Scrapbook vs. Night Cutting Mat)
const themeBtn = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("vinze-notebook-theme", theme);
  if (themeLabel) {
    themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  }
}

const savedTheme = localStorage.getItem("vinze-notebook-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

// Copy Email Helper
const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const email = "siegavinze@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      const original = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = "✓ Copied siegavinze@gmail.com";
      setTimeout(() => {
        copyEmailBtn.innerHTML = original;
      }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

// Active Navigation Tab Highlighting on Click & Scroll
const navLinks = document.querySelectorAll(".notebook-tabs a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Initial render
renderProjects();

// Keep the navbar highlight in sync with the section currently in view
const sectionIds = ["index", "projects", "stack", "education", "contact"];
const observed = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );
  observed.forEach((el) => io.observe(el));
}