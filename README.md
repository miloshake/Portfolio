<div align="center">

# Vinze Norbert Siega (`@miloshake`)

### Front-End & Full-Stack Developer • Software QA & Systems Enthusiast

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-miloshake.github.io-0369a1?style=for-the-badge&logo=githubpages&logoColor=white)](https://miloshake.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-@miloshake-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://github.com/miloshake)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vinze%20Norbert%20Siega-0284c7?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinze-norbert-siega-01b058352/)
[![Email](https://img.shields.io/badge/Email-siegavinze%40gmail.com-38bdf8?style=for-the-badge&logo=gmail&logoColor=0f172a)](mailto:siegavinze@gmail.com)

</div>

---

## About

Undergraduate **Bachelor of Science in Information Technology (BSIT)** student at **Central Luzon State University (CLSU)** bridging responsive front-end interfaces (**React.js, Inertia.js, Tailwind CSS**) with structured backend logic and relational databases (**PHP/Laravel, Java, MySQL**). Grounded in systematic **Software Quality Assurance** (**IEEE 829 / ISTQB** test documentation and automated testing), local environment tuning, and network rack design.

- **Focus Areas:** Full-Stack Web Development, Relational Database Architecture, Software Quality Assurance & Testing, System Migration, Infrastructure & IDF/MDF Network Rack Layouts.
- **Interests & Hobbies:** Competitive fighting games (*Tekken 8*), rhythm gaming (*osu!mania*, *Arcaea*), arcade controller hardware modding (*Sanwa JLF customization & chassis tuning*), digital piano (*Roland FP-10*), desktop hardware troubleshooting, and cinema.

---

## Featured Projects

| ID | Project | Domain | Problem Solved & Architecture | Tech Stack |
| :--- | :--- | :--- | :--- | :--- |
| `PRJ-01` | **FinalTermLaravel** | Full-Stack / SPA | Migrated a legacy procedural PHP inventory system into a modular MVC + reactive single-page app without page reloads. | `Laravel` `Inertia.js` `React.js` `PHP` `MySQL` `Tailwind CSS` `Vite` |
| `PRJ-02` | **[BuildIT](https://buildits.app)** | Cloud / E-Commerce | Engineered a cloud-hosted PC component storefront on an Azure B1 VM with hardened SSL, DNS routing, and caching. | `Azure B1 VM` `WordPress` `WooCommerce` `Blocksy` `Spectra` `Patchstack` `SSH` |
| `PRJ-03` | **KoneKT** | Web / Full-Stack | Centralized profile discovery, talent directory search, and application tracking workflows in a responsive web platform. | `PHP` `MySQL` `Tailwind CSS` `JavaScript` `Git` |
| `PRJ-04` | **Conference Registration Monitoring** | Desktop / Java | Replaced manual paper logs with real-time attendee check-in, verification, and relational database reporting. | `Java` `Swing UI` `NetBeans` `MySQL` |
| `PRJ-05` | **BankoSantiago** | Backend / Security | Modeled ACID-compliant financial transactions, balance inquiries, account transfers, and persistent audit logs. | `PHP` `MySQL` `Apache` `HTML/CSS` `Git` |
| `PRJ-06` | **Authio** | Security / Web | Built a reusable authentication and role-based CRUD template mitigating SQL injection and unsafe session state. | `PHP` `MySQL` `JavaScript` `HTML5/CSS3` |
| `PRJ-07` | **PolyCloth** | E-Commerce / UI | Designed an interactive apparel storefront featuring categorical filtering, variant selection, and cart management. | `PHP` `MySQL` `JavaScript` `Bootstrap` |
| `PRJ-08` | **PC Part Picker DB Schema** | Database Architecture | Modeled a normalized 5-entity relational schema (`Component`, `Manufacturer`, `Retailer`, `User`, `Shipper`) with referential integrity. | `MySQL` `MariaDB` `SQL DDL/DML` |
| `PRJ-09` | **CLSU CASS IDF/MDF Rack Design** | Network Infrastructure | Planned multi-floor IDF/MDF rack elevations, patch panel port mapping, UPS allocation, and structured cabling for CLSU CASS. | `draw.io` `Network Topology` |

---

## Technical Skills & Tooling

| Layer | Technologies |
| :--- | :--- |
| **Languages** | `PHP` `Java` `JavaScript (ES6+)` `C` `SQL` `HTML5` `CSS3` |
| **Frameworks & Libraries** | `Laravel` `React.js` `Inertia.js` `Tailwind CSS` `Bootstrap` `Vite` |
| **Databases & Local Stack** | `MySQL (Port 3307 / Multi-Instance)` `MariaDB` `Apache` `Laragon` `XAMPP` |
| **Quality Assurance** | `IEEE 829 Documentation` `ISTQB Test Methodology` `LambdaTest KaneAI` `Manual Test Suites` |
| **Cloud & Deployment** | `Microsoft Azure (B1 Tier VM)` `GitHub Pages` `SSH` `Name.com DNS & SSL` |
| **Content Management** | `WordPress` `WooCommerce` `Blocksy` `Spectra` `Patchstack` |
| **Developer Tools & OS** | `VS Code` `Antigravity IDE` `PhpStorm` `NetBeans` `Git & GitHub` `draw.io` `Windows 11` `Linux Mint` `Ubuntu/Debian CLI` |

---

## Education & Seminars

- **Bachelor of Science in Information Technology (BSIT)**
  - *Central Luzon State University (CLSU)* — College of Engineering, Department of Information Technology (Science City of Muñoz, Nueva Ecija)
- **Seminars & Camps**
  - *Startup 100 Webinar* — Department of Information and Communications Technology (DICT) Region 3
  - *iThink Code Camp* — Central Luzon State University

---

## Repository Structure & Customizing Placeholders

This portfolio is a **zero-build static web app** (HTML5, CSS3, ES6 JavaScript) designed for instant deployment on **GitHub Pages**.

```text
Portfolio/
├── index.html          # Main semantic layout, OpenGraph tags & modal structure
├── styles.css          # Notebook-collage theme, light/dark tokens & responsive grid
├── script.js           # Project data, category filters, live search & modal logic
├── assets/
│   ├── README.md       # Quick reference for drop-in media files
│   ├── profile.jpg     # (Optional) Square portrait for the hero card (~600×600)
│   ├── resume.pdf      # (Optional) Downloadable PDF résumé
│   ├── og-image.png    # (Optional) Social link preview image (1200×630)
│   └── projects/       # (Optional) 16:9 project thumbnails (prj-01.png … prj-09.png)
└── README.md
```

### Replacing Placeholders
1. **Profile Photo & Project Screenshots:** Drop `profile.jpg` into `assets/` and project screenshots (`prj-01.png` through `prj-09.png`) into `assets/projects/`. Any missing image automatically falls back to a clean dashed placeholder box.
2. **Per-Project Repository Links:** Open [`script.js`](script.js) and add `repo: "https://github.com/miloshake/<repo-name>"` to any entry in the `PROJECTS` array to display a direct **View Repository ↗** button inside its modal.
3. **Local Preview:** Open `index.html` directly in your browser or run `npx serve .`.
