import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderSlot, b as renderTemplate, d as renderComponent, e as addAttribute } from '../chunks/astro/server_DSE1POQW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`import  SpeedInsights  from "@vercel/speed-insights/astro"
import Analytics from '@vercel/analytics/astro'
/** 
 * apps/landing/src/layouts/BaseLayout.astro
 *
 * A simple layout that sets up the <head> (including a dynamic title) 
 * and renders whatever is passed into its default slot.
 *
 * Usage:
 *   <Layout title="Page Title">
 *     <!-- page‐specific content here -->
 *   </Layout>
 */

// Pull in the \`title\` prop; default to an empty string if not provided
const { title = '' } = Astro.props;
<meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Dynamically set the document title --> <title>${title}

    <!-- You can add any global CSS or fonts here if desired; e.g.: -->
    <!-- <link rel="stylesheet" href="/styles/global.css" /> -->
  

  ${maybeRenderHead()}<body>
    <main>
      <!-- Everything inside <Layout> … </Layout> will render here -->
      ${renderSlot($$result, $$slots["default"])}
    </main>
  </body></title>`;
}, "C:/Users/tshor/portfolio/apps/landing/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const STOCK_URL = "https://stock-predictor-web.vercel.app/";
  const LINKEDIN_URL = "https://www.linkedin.com/in/thomas-shore/";
  const GITHUB_URL = "https://github.com/tshore2004";
  const EMAIL_ADDRESS = "shore.74@osu.edu";
  const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`;
  const RESUME_PATH = "/Shore_Thomas_Resume.pdf";
  const OSU_LOGO = "/images/ohio-state-logo.png";
  const PROFILE_PHOTO = "/images/profile-photo.png";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Thomas Shore – Portfolio" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<nav class="navbar"> <div class="navbar-container"> <div class="navbar-logo">Thomas Shore</div> <ul class="navbar-links"> <li><a href="#hero">Home</a></li> <li><a href="#projects">Projects</a></li> <li><a href="#about-me">About</a></li> <li><a href="#contact">Contact</a></li> </ul> </div> </nav>  <section id="hero" class="hero-section"> <!-- Ohio State Logo Top-Left --> <img${addAttribute(OSU_LOGO, "src")} alt="The Ohio State University Logo" class="osu-logo"> <div class="hero-content"> <!-- Profile Photo (right side on desktop, above text on mobile) --> <img${addAttribute(PROFILE_PHOTO, "src")} alt="Thomas Shore Profile Photo" class="profile-photo"> <h1 class="hero-title">Thomas Shore</h1> <p class="hero-subtitle">Computer Science &amp; Engineering Student</p> <div class="hero-buttons"> <a${addAttribute(EMAIL_LINK, "href")} class="button button-hero" title="Email Me">
✉️ Email
</a> <a${addAttribute(LINKEDIN_URL, "href")} class="button button-hero" target="_blank" rel="noopener noreferrer">
LinkedIn
</a> <a${addAttribute(GITHUB_URL, "href")} class="button button-hero" target="_blank" rel="noopener noreferrer">
GitHub
</a> </div> </div> <div class="hero-arrow"> <a href="#projects">⌄</a> </div> </section>  <section id="projects" class="projects-section"> <h2 class="section-heading">Projects</h2> <!-- Optional banner image above the grid --> <div class="projects-grid"> <!-- STOCK PREDICTOR CARD --> <article class="project-card"> <div class="card-top"> <h3 class="card-title">Stock Predictor</h3> <p class="card-desc">
React + FastAPI app using an LSTM neural network to forecast
            short‐term stock movements. Deployed on Vercel.
</p> </div> <div class="card-demo"> <iframe${addAttribute(STOCK_URL, "src")} title="Stock Predictor Demo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> <div class="card-actions"> <a${addAttribute(STOCK_URL, "href")} class="button button-live" target="_blank" rel="noopener noreferrer">
Live Demo ↗
</a> <a${addAttribute(GITHUB_URL + "/stock-predictor-web", "href")} class="button button-github" target="_blank" rel="noopener noreferrer">
View Code
</a> </div> </article> <!-- BUDGETOR CARD --> <article class="project-card"> <div class="card-top"> <h3 class="card-title">Budgetor</h3> <p class="card-desc">
Full-stack budgeting app (Astro + Node.js + MongoDB) to track
            income and expenses in real time.
<span class="coming-soon-inline">Coming Soon</span> </p> </div> <div class="card-placeholder"> <span class="coming-soon-badge">Coming Soon</span> </div> <div class="card-actions"> <a href="#" class="button button-live button-disabled" aria-disabled="true">
Live Demo
</a> <a${addAttribute(GITHUB_URL + "/Budgetor", "href")} class="button button-github" target="_blank" rel="noopener noreferrer">
View Code
</a> </div> </article> </div> </section>  <section id="about-me" class="about-section"> <h2 class="section-heading">About Me</h2> <div class="about-inner"> <p>
I am a senior studying Computer Science &amp; Engineering at The Ohio
        State University, passionate about building full‐stack web
        applications, exploring machine learning, and designing efficient
        algorithms. When I’m not coding, I enjoy running.
</p> <div class="about-button-row"> <a${addAttribute(RESUME_PATH, "href")} class="button button-view-resume" target="_blank" rel="noopener noreferrer">
View Resume
</a> </div> </div> </section>  <section id="contact" class="contact-section"> <h2 class="section-heading">Contact</h2> <div class="contact-grid"> <!-- Email Card --> <div class="contact-card"> <h3 class="contact-title">Email</h3> <a${addAttribute(EMAIL_LINK, "href")} class="contact-link">${EMAIL_ADDRESS}</a> </div> <!-- LinkedIn Card --> <div class="contact-card"> <h3 class="contact-title">LinkedIn</h3> <a${addAttribute(LINKEDIN_URL, "href")} class="contact-link" target="_blank" rel="noopener noreferrer">
View Profile ↗
</a> </div> <!-- GitHub Card --> <div class="contact-card"> <h3 class="contact-title">GitHub</h3> <a${addAttribute(GITHUB_URL, "href")} class="contact-link" target="_blank" rel="noopener noreferrer">
View Repositories ↗
</a> </div> </div> </section>  <footer class="site-footer"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Thomas Shore. All rights reserved.</p> </footer> ` })}`;
}, "C:/Users/tshor/portfolio/apps/landing/src/pages/index.astro", void 0);
const $$file = "C:/Users/tshor/portfolio/apps/landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
