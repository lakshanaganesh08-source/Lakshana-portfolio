/**
 * CONTACT & CONNECTIVITY DATA STRUCTURE
 * Lakshana G S Portfolio
 * 
 * Verified connectivity endpoints.
 */

const contactData = {
  // Primary email address & personalized button display
  email: "lakshanaganesh08@gmail.com",
  emailDisplay: "Lakshana Ganeshkumar",
  institutionalEmail: "lakshana.24cs@kct.ac.in",

  // Section copy
  eyebrow: "LET'S CONNECT",
  heading: "Have an idea?",
  headingSub: "Let's build something.",
  copy: "Whether it's an opportunity, a collaboration, or simply a good conversation about technology, I'd love to hear from you.",

  // Primary Resume Asset
  resume: {
    label: "View Resume",
    url: "assets/Lakshana_GS_Resume.pdf"
  },

  // Verified social & developer profiles
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/lakshana-g-s-533987328", isAvailable: true },
    { name: "GitHub", url: "https://github.com/lakshanaganesh08-source", isAvailable: true }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { contactData };
}
