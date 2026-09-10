/**
 * EXPERIENCE & LEARNING DATA STRUCTURE
 * Lakshana G S Portfolio
 * 
 * Verified industry experience and structured learning history.
 */

const experienceData = {
  featured: {
    id: "infosys-springboard",
    year: "2026",
    organization: "INFOSYS SPRINGBOARD",
    program: "Virtual Internship 7.0",
    role: "Virtual Intern",
    project: "ConstructIQ AI",
    description: "Selected for the Infosys Springboard Virtual Internship 7.0, where I worked on ConstructIQ AI — a construction intelligence platform focused on AI-assisted project risk, safety, compliance, material estimation, and rework intelligence.",
    tags: ["AI", "SOFTWARE", "CONSTRUCTION INTELLIGENCE"],
    projectAnchor: "#project-constructiq"
  },
  learning: [
    {
      id: "google-developers-aiml",
      organization: "Google for Developers",
      program: "AI–ML Virtual Internship",
      period: "Jul – Sep 2025",
      certificateUrl: "assets/certificates/Google_AI_ML_Certificate.pdf",
      hasCertificate: true
    },
    {
      id: "kct-aws-data-engineering",
      organization: "KCT / AWS Academy",
      program: "Data Engineering Virtual Internship",
      period: "Oct – Dec 2025",
      certificateUrl: "assets/certificates/AWS_Data_Engineering_Certificate.pdf",
      hasCertificate: true
    },
    {
      id: "aicte-eduskills-java-full-stack",
      organization: "AICTE / EduSkills",
      program: "Java Full Stack Developer Virtual Internship",
      period: "Jun – Aug 2026",
      certificateUrl: "assets/certificates/Java_Full_Stack_Certificate.pdf",
      hasCertificate: true
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { experienceData };
}
