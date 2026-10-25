(function () {
  "use strict";

  const site = window.SITE;
  if (!site) return;

  const ICONS = {
    arrow:
      '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    github:
      '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
    linkedin:
      '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M0 1.15C0 .52.53 0 1.18 0h13.64C15.47 0 16 .52 16 1.15v13.7c0 .63-.53 1.15-1.18 1.15H1.18C.53 16 0 15.48 0 14.85V1.15Zm4.94 12.24V6.17H2.54v7.22h2.4ZM3.74 5.18c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01Zm4.91 8.21V9.36c0-.22.02-.43.08-.59.18-.43.57-.88 1.23-.88.87 0 1.21.66 1.21 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.84.7-2.16 1.2v.02h-.02l.02-.02V6.17h-2.4c.03.68 0 7.22 0 7.22h2.4Z"/></svg>',
    email:
      '<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m2 4.5 6 4.5 6-4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  };

  // Abstract, data-free illustrations for project cards.
  const VISUALS = {
    log: '<svg viewBox="0 0 240 120" aria-hidden="true"><g class="v-mono"><rect x="16" y="18" width="208" height="84" rx="8" class="v-frame"/><rect x="30" y="34" width="56" height="5" rx="2.5" class="v-dim"/><rect x="92" y="34" width="90" height="5" rx="2.5" class="v-dim"/><rect x="30" y="50" width="40" height="5" rx="2.5" class="v-err"/><rect x="76" y="50" width="120" height="5" rx="2.5" class="v-dim"/><rect x="30" y="66" width="70" height="5" rx="2.5" class="v-dim"/><rect x="106" y="66" width="60" height="5" rx="2.5" class="v-dim"/><rect x="30" y="82" width="12" height="5" rx="2.5" class="v-accent"/><rect x="48" y="82" width="104" height="5" rx="2.5" class="v-accent-soft"/></g></svg>',
    route:
      '<svg viewBox="0 0 240 120" aria-hidden="true"><path d="M30 92 C 70 92, 70 40, 110 40 S 160 84, 210 28" class="v-path"/><circle cx="30" cy="92" r="5" class="v-node"/><circle cx="110" cy="40" r="5" class="v-node"/><circle cx="210" cy="28" r="7" class="v-node v-node--accent"/><circle cx="210" cy="28" r="14" class="v-ring"/></svg>',
    bars:
      '<svg viewBox="0 0 240 120" aria-hidden="true"><line x1="24" y1="100" x2="216" y2="100" class="v-axis"/><rect x="36" y="66" width="18" height="34" rx="3" class="v-bar"/><rect x="64" y="50" width="18" height="50" rx="3" class="v-bar"/><rect x="92" y="58" width="18" height="42" rx="3" class="v-bar"/><rect x="120" y="36" width="18" height="64" rx="3" class="v-bar v-bar--accent"/><rect x="148" y="46" width="18" height="54" rx="3" class="v-bar"/><rect x="176" y="28" width="18" height="72" rx="3" class="v-bar"/></svg>',
    flow:
      '<svg viewBox="0 0 240 120" aria-hidden="true"><rect x="20" y="46" width="44" height="28" rx="6" class="v-box"/><rect x="98" y="20" width="44" height="28" rx="6" class="v-box v-box--accent"/><rect x="98" y="72" width="44" height="28" rx="6" class="v-box"/><rect x="176" y="46" width="44" height="28" rx="6" class="v-box"/><path d="M64 60 H80 V34 H98 M64 60 H80 V86 H98 M142 34 H158 V60 H176 M142 86 H158 V60" class="v-link"/></svg>',
    scatter:
      '<svg viewBox="0 0 240 120" aria-hidden="true"><line x1="28" y1="100" x2="216" y2="100" class="v-axis"/><line x1="28" y1="16" x2="28" y2="100" class="v-axis"/><circle cx="52" cy="82" r="4" class="v-dot"/><circle cx="74" cy="70" r="4" class="v-dot"/><circle cx="90" cy="76" r="4" class="v-dot"/><circle cx="112" cy="58" r="4" class="v-dot"/><circle cx="134" cy="62" r="4" class="v-dot"/><circle cx="150" cy="44" r="5" class="v-dot v-dot--accent"/><circle cx="172" cy="50" r="4" class="v-dot"/><circle cx="194" cy="32" r="4" class="v-dot"/><path d="M44 88 L200 30" class="v-trend"/></svg>',
  };

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const isExternal = (url) => /^https?:\/\//.test(url);
  const linkAttrs = (url) => (isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : "");

  // A button for a configured URL, or a clearly marked placeholder.
  function actionButton(url, label, icon, variant) {
    if (url) {
      return `<a class="btn btn--${variant} btn--sm" href="${esc(url)}"${linkAttrs(url)}>${label}${icon}${
        isExternal(url) ? '<span class="sr-only"> (opens in a new tab)</span>' : ""
      }</a>`;
    }
    return `<span class="btn btn--placeholder btn--sm" aria-disabled="true">${label}<span class="placeholder-tag">Link coming soon</span></span>`;
  }

  const render = {
    experience(el) {
      el.innerHTML = site.experience
        .map(
          (job) => `
        <li class="timeline__item reveal">
          <div class="timeline__marker" aria-hidden="true"></div>
          <article class="card timeline__card">
            <header class="timeline__head">
              <div>
                <h3 class="timeline__role">${esc(job.role)}</h3>
                <p class="timeline__company">${esc(job.company)}</p>
              </div>
              ${
                job.period
                  ? `<p class="timeline__period mono">${esc(job.period)}</p>`
                  : job.current
                  ? '<p class="badge"><span class="dot" aria-hidden="true"></span>Current role</p>'
                  : ""
              }
            </header>
            ${job.summary ? `<p class="timeline__summary">${esc(job.summary)}</p>` : ""}
            <p class="timeline__label mono">Areas of work</p>
            <ul class="timeline__areas">
              ${job.areas.map((a) => `<li>${esc(a)}</li>`).join("")}
            </ul>
          </article>
        </li>`
        )
        .join("");
    },

    projects(el) {
      el.innerHTML = site.projects
        .map(
          (p, i) => `
        <article class="card project reveal${i === 0 ? " project--feature" : ""}">
          <div class="project__visual">${VISUALS[p.visual] || ""}</div>
          <div class="project__body">
            <p class="project__category mono">${esc(p.category)}</p>
            <h3 class="project__name">${esc(p.name)}</h3>
            <dl class="project__detail">
              <div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div>
              <div><dt>Solution</dt><dd>${esc(p.solution)}</dd></div>
            </dl>
            ${
              p.tools && p.tools.length
                ? `<ul class="tags" aria-label="Technologies">${p.tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
                : ""
            }
            <div class="project__actions">
              ${actionButton(p.url, "View Project", ICONS.arrow, "primary")}
              ${actionButton(p.repo, "GitHub", ICONS.github, "ghost")}
            </div>
          </div>
        </article>`
        )
        .join("");
    },

    skills(el) {
      el.innerHTML = site.skills
        .map(
          (g, i) => `
        <section class="card skill-group reveal" aria-labelledby="skill-${i}">
          <p class="skill-group__index mono">${String(i + 1).padStart(2, "0")}</p>
          <h3 id="skill-${i}">${esc(g.group)}</h3>
          <ul class="tags">${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        </section>`
        )
        .join("");
    },

    education(el) {
      el.innerHTML = site.education
        .map(
          (e) => `
        <article class="card edu reveal">
          <div class="edu__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M2 9l10-5 10 5-10 5L2 9Z M6 11v5c2 2 10 2 12 0v-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
          </div>
          <div>
            <h3 class="edu__degree">${esc(e.degree)}</h3>
            <p class="edu__school">${esc(e.institution)}${e.location ? `<span> · ${esc(e.location)}</span>` : ""}</p>
          </div>
        </article>`
        )
        .join("");
    },

    contact(el) {
      const { linkedin, github, email } = site.links;
      const items = [
        { key: "linkedin", label: "LinkedIn", url: linkedin, display: linkedin && linkedin.replace(/^https?:\/\/(www\.)?/, "") },
        { key: "github", label: "GitHub", url: github, display: github && github.replace(/^https?:\/\//, "") },
        { key: "email", label: "Email", url: email && `mailto:${email}`, display: email },
      ];
      el.innerHTML = items
        .map((it) =>
          it.url
            ? `<li><a class="contact-link" href="${esc(it.url)}"${linkAttrs(it.url)}>
                <span class="contact-link__icon">${ICONS[it.key]}</span>
                <span class="contact-link__text"><span class="contact-link__label">${it.label}</span><span class="contact-link__value">${esc(it.display)}</span></span>
                ${ICONS.arrow}${isExternal(it.url) ? '<span class="sr-only"> (opens in a new tab)</span>' : ""}
              </a></li>`
            : `<li><span class="contact-link contact-link--placeholder" aria-disabled="true">
                <span class="contact-link__icon">${ICONS[it.key]}</span>
                <span class="contact-link__text"><span class="contact-link__label">${it.label}</span><span class="contact-link__value">Placeholder — link not yet added</span></span>
              </span></li>`
        )
        .join("");
    },

    social(el) {
      const { linkedin, github, email } = site.links;
      const items = [
        ["linkedin", "LinkedIn", linkedin],
        ["github", "GitHub", github],
        ["email", "Email", email && `mailto:${email}`],
      ].filter(([, , url]) => url);
      el.innerHTML = items
        .map(
          ([key, label, url]) =>
            `<li><a class="icon-btn" href="${esc(url)}"${linkAttrs(url)} aria-label="${label}">${ICONS[key]}</a></li>`
        )
        .join("");
    },
  };

  document.querySelectorAll("[data-render]").forEach((el) => {
    const fn = render[el.dataset.render];
    if (fn) fn(el);
  });

  // Resume buttons: activate when configured, otherwise mark as placeholder.
  document.querySelectorAll('[data-link="resume"]').forEach((a) => {
    if (site.links.resume) {
      a.href = site.links.resume;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.title = "Resume coming soon — get in touch below";
    }
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("mobile-menu");
  const header = document.querySelector(".nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add("is-visible"));
    } else {
      menu.classList.remove("is-visible");
      menu.hidden = true;
    }
  }

  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  // Nav background on scroll
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Active section highlighting
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  const sections = [...navLinks].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => {
            const active = a.getAttribute("href") === `#${entry.target.id}`;
            a.classList.toggle("is-active", active);
            if (active) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    // Scroll reveal
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

})();
