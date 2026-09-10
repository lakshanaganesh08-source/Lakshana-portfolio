/**
 * PROJECTS DATA STRUCTURE — SCALABLE REPOSITORY
 * Lakshana G S Portfolio
 * 
 * Verified technical information for featured and selected works.
 */

const portfolioProjects = [
  {
    id: "constructiq-ai",
    featured: true,
    title: "ConstructIQ AI",
    category: "AI / Construction Intelligence",
    context: "INFOSYS SPRINGBOARD · AI / SOFTWARE · 2026",
    description: "An AI-powered construction intelligence platform designed to help teams understand project risk, safety, compliance, materials, and rework through a unified decision-support interface.",
    capabilities: [
      "Construction project dashboard",
      "Safety & risk intelligence",
      "Compliance agent",
      "Insurance agent",
      "Material estimation",
      "Rework intelligence",
      "AI-powered project Q&A",
      "Construction document intelligence"
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "AI / LLM technologies",
      "SQLite"
    ],
    assets: {
      previewImage: "assets/images/ConstructIQ.png",
      hasRealScreenshot: true
    },
    links: {
      github: "https://github.com/lakshanaganesh08-source/ConstructIQ_AI",
      demo: null,
      caseStudy: null
    }
  },
  {
    id: "smart-food-delivery",
    featured: false,
    title: "Smart Food Delivery Web Application",
    category: "FULL STACK / WEB DEVELOPMENT",
    context: "WEB DEVELOPMENT · DATABASE ARCHITECTURE",
    description: "A smart food delivery web application focused on creating a smooth ordering experience with structured frontend, backend, and database functionality.",
    capabilities: [
      "Intuitive customer ordering flow",
      "Menu management & categorization",
      "Relational database schema for orders & users",
      "Structured backend request handling"
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    assets: {
      previewImage: "assets/images/Smart_food.png",
      hasRealScreenshot: true
    },
    links: {
      github: null,
      demo: null,
      caseStudy: null
    }
  },
  {
    id: "terminal-runner",
    featured: false,
    title: "Terminal Runner Game",
    category: "CONTAINERIZATION / WEB GAMING",
    context: "DOCKER · LINUX CLI · VERCEL DEPLOYMENT",
    description: "An arcade runner game containerized with Docker to run directly inside a Linux terminal environment, and ported to modern web technologies (HTML5, CSS, JS) for instant browser play deployed live on Vercel.",
    capabilities: [
      "Containerized terminal execution using Docker",
      "Linux terminal game loop & ANSI controls",
      "Responsive web remake with HTML5/CSS/JavaScript",
      "Live cloud deployment on Vercel"
    ],
    technologies: [
      "Docker",
      "Linux",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vercel"
    ],
    assets: {
      previewImage: "assets/images/Terminal_runner.png",
      hasRealScreenshot: true
    },
    links: {
      github: null,
      demo: "https://terminal-runner-vercel-three.vercel.app/",
      caseStudy: null
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects };
}
