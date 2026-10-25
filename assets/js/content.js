/*
 * Site content — edit this file to update the portfolio.
 *
 * Links set to null render as clearly labelled placeholders
 * ("Link coming soon") instead of broken buttons. Replace null
 * with a real URL string to activate a link.
 */
window.SITE = {
  name: "Shayon Shandilya",
  tagline: "Business Analyst · Product · AI",

  links: {
    resume: "/resume.pdf", // place resume.pdf in the repo root
    linkedin: "https://www.linkedin.com/in/shayonshandilya",
    github: "https://github.com/Shayon01",
    email: "shayonshandilya@gmail.com",
  },

  // Newest first. Add a new object to the top as your career progresses.
  // `period` is optional — leave it null until you want to display dates.
  experience: [
    {
      role: "Business Analyst",
      company: "GetePay",
      period: null,
      current: true,
      summary:
        "Working at the intersection of business, product, and engineering on digital payment products — turning merchant and business needs into clear requirements and well-defined product workflows.",
      areas: [
        "Business and product requirement analysis",
        "BRD and FRD documentation",
        "User journey mapping and feature definition",
        "Digital payment products and UPI-related workflows",
        "API flow analysis and cross-functional coordination",
        "User acceptance testing and issue identification",
        "Understanding merchant needs and improving product experiences",
      ],
    },
  ],

  // `url` and `repo` are optional. null renders a "coming soon" placeholder.
  projects: [
    {
      name: "AI Test Failure Analyst",
      category: "AI Product · Developer Tooling",
      problem:
        "When automated tests fail, testers spend time manually reading logs just to understand where to begin investigating.",
      solution:
        "An AI-powered tool that analyses error logs, explains potential causes in plain language, highlights evidence from the log, and suggests debugging steps — while being explicit about uncertainty.",
      tools: ["JavaScript", "Node.js", "Express.js", "Google Gemini API"],
      url: "/ai-test-failure-analyst/",
      repo: "https://github.com/Shayon01/ai-test-failure-analyst",
      visual: "log",
    },
    {
      name: "Identity Travel",
      category: "AI Product Concept · Travel",
      problem:
        "Planning a trip that reflects personal interests often means piecing together inspiration and logistics from many disconnected sources.",
      solution:
        "An AI-oriented travel product concept focused on helping users explore personalised travel experiences and plan their journeys.",
      tools: [],
      url: null,
      repo: null,
      visual: "route",
    },
    {
      name: "UPI Transactions Analytics Dashboard",
      category: "Data Analytics · Payments",
      problem:
        "Raw UPI transaction data is difficult to interpret without a structured way to explore patterns.",
      solution:
        "A Power BI project analysing UPI transaction data to explore transaction patterns and communicate insights through interactive visualisations.",
      tools: ["Power BI"],
      url: null,
      repo: null,
      visual: "bars",
    },
    {
      name: "Arthyam — TPAP Product Initiative",
      category: "Product Management · Digital Payments",
      problem:
        "Building a Third-Party Application Provider (TPAP) experience requires clearly defined payment journeys, capabilities, and requirements before development.",
      solution:
        "A digital payments product initiative involving UPI-related capabilities, payment journeys, feature requirements, and product workflows.",
      tools: [],
      url: null,
      repo: null,
      visual: "flow",
    },
    {
      name: "Cricket Batting Analytics Dashboard",
      category: "Data Analytics · Sports",
      problem:
        "Batting statistics are rich but hard to compare and interpret when presented as raw tables.",
      solution:
        "A data analytics project exploring batting performance and communicating cricket statistics through visualisations.",
      tools: [],
      url: null,
      repo: null,
      visual: "scatter",
    },
  ],

  skills: [
    {
      group: "Product Management",
      items: [
        "Product Discovery",
        "Requirement Gathering",
        "User Journey Mapping",
        "Feature Definition",
        "Product Documentation",
        "UAT",
        "Stakeholder Coordination",
      ],
    },
    {
      group: "Business Analysis",
      items: [
        "BRD",
        "FRD",
        "Functional Requirements",
        "Process Analysis",
        "Gap Analysis",
        "Business Research",
      ],
    },
    {
      group: "Data & Analytics",
      items: ["SQL", "Python", "Power BI", "Microsoft Excel", "Data Analysis"],
    },
    {
      group: "Technology & AI",
      items: [
        "API Analysis",
        "Generative AI Fundamentals",
        "AI Product Concepts",
        "Workflow Automation",
        "MCP Fundamentals",
      ],
    },
    {
      group: "Tools",
      items: ["Figma", "GitHub", "VS Code", "Power Query"],
    },
  ],

  education: [
    {
      degree: "MBA in Artificial Intelligence & Data Science",
      institution: "Graphic Era University",
      location: "Dehradun",
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Uttarakhand Technical University",
      location: null,
    },
  ],
};
