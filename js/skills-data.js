/**
 * SKILLS & TECHNICAL IDENTITY DATA STRUCTURE
 * Lakshana G S Portfolio
 * 
 * Verified technical capabilities organized into 5 curated domains.
 * Includes verified real-world context for interactive live exploration.
 */

const technicalSkillsData = [
  {
    id: "programming",
    number: "01",
    category: "PROGRAMMING",
    accent: "lavender",
    tagline: "Core Logic & System Foundations",
    count: 4,
    skills: [
      { name: "Python", context: "Primary language for AI/ML engineering, data analysis, and ConstructIQ AI platform." },
      { name: "Java", context: "Applied in AICTE / EduSkills Java Full Stack Developer Virtual Internship." },
      { name: "C", context: "Foundational computer science, memory management, and structured programming." },
      { name: "C++", context: "Object-oriented software development and algorithmic problem solving." }
    ]
  },
  {
    id: "ai-data",
    number: "02",
    category: "AI & DATA",
    accent: "peach",
    tagline: "Predictive Models & Data Insights",
    count: 4,
    skills: [
      { name: "Artificial Intelligence", context: "Core engineering discipline explored across intelligent agent workflows." },
      { name: "Machine Learning", context: "Supervised/unsupervised algorithms, validated through Google AI-ML internship." },
      { name: "Data Analysis", context: "Empirical feature evaluation and dataset analysis in ICSL-DSGA 2026 research." },
      { name: "Pandas", context: "High-performance data manipulation, feature cleaning, and exploratory analysis." }
    ]
  },
  {
    id: "web-software",
    number: "03",
    category: "WEB & SOFTWARE",
    accent: "emerald",
    tagline: "Applied Web & Full-Stack Experiences",
    count: 4,
    skills: [
      { name: "HTML5 & CSS3", context: "Semantic layout architecture, responsive design systems, and modern CSS tokens." },
      { name: "JavaScript", context: "Interactive clientside scripting, DOM coordination, and dynamic state management." },
      { name: "Streamlit", context: "Rapid deployment framework powering the ConstructIQ AI platform interface." },
      { name: "Full-Stack Architecture", context: "End-to-end integration connecting frontend interfaces to databases & APIs." }
    ]
  },
  {
    id: "database-tools",
    number: "04",
    category: "DATABASE & TOOLS",
    accent: "indigo",
    tagline: "Data Persistence & Developer Workflows",
    count: 5,
    skills: [
      { name: "MySQL", context: "Relational database schema design utilized in Smart Food Delivery system." },
      { name: "SQLite", context: "Lightweight local database integration for rapid prototyping." },
      { name: "Git / GitHub", context: "Version control, branching workflows, and collaborative codebase tracking." },
      { name: "VS Code", context: "Primary development IDE configured for multi-language engineering." },
      { name: "Google Colab", context: "Cloud environment for ML model training, benchmarking, and notebooks." }
    ]
  },
  {
    id: "creative-design",
    number: "05",
    category: "CREATIVE & DESIGN",
    accent: "rose",
    tagline: "UI Prototyping & Visual Systems",
    count: 5,
    skills: [
      { name: "Figma", context: "UI/UX wireframing, layout prototyping, and user journey mapping." },
      { name: "Photoshop", context: "Digital asset editing, raster graphics, and visual composition." },
      { name: "Illustrator", context: "Vector icon design, SVG creation, and brand visual assets." },
      { name: "Blender", context: "3D asset exploration, spatial modeling, and rendering." },
      { name: "GIMP", context: "Open-source image manipulation and texture preparation." }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { technicalSkillsData };
}
