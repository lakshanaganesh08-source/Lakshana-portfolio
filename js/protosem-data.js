/**
 * PROTOSEM 20-WEEK JOURNEY DATA STRUCTURE
 * Lakshana G S Portfolio — Dedicated ProtoSem Experiential Fellowship Log
 * 
 * Data-driven repository for ProtoSem at Forge.
 * Week 00 is completed; Weeks 01–20 are structurally ready for future updates.
 */

const protoSemProgramData = {
  hero: {
    eyebrow: "PROTOSEM · FORGE",
    titleLine1: "20 WEEKS.",
    titleLine2: "ONE JOURNEY.",
    intro1: "ProtoSem is a 20-week experiential program through Forge that I am undertaking instead of my regular semester.",
    intro2: "The journey is focused on transforming ideas into deployable prototypes through co-creation, experimentation, technical capability and entrepreneurial thinking."
  },
  programInfo: {
    program: "ProtoSem",
    organization: "Forge",
    duration: "20 Weeks",
    format: "Experiential / Prototype-driven learning",
    track: {
      acronym: "PRICE",
      fullName: "Phygital Retail Intelligence, Commerce & Entrepreneurship",
      credential: "Graduate Innovation Engineer Certification",
      motto: "Innovate. Build. Transform Retail.",
      focusPillars: [
        "Real Retail Challenges",
        "Industry Mentors",
        "Hands-on Tech & AI",
        "Startup Pathways",
        "Credits + Certification"
      ]
    }
  }
};

const protoSemWeeks = [
  {
    week: 0,
    numberFormatted: "00",
    status: "completed",
    title: "Getting Started: Breaking Barriers, Understanding Ourselves & Becoming a Team",
    subtitle: "Orientation, Cohort Immersion & Team Genesis",
    date: "Orientation Phase · 2026",
    summary: "Commenced the 20-week ProtoSem experiential fellowship through Forge under the PRICE track. Stepping outside the conventional classroom semester structure to focus on transforming ideas into deployable prototypes through industry co-creation, innovation frameworks, and hands-on engineering.",
    
    // Day-by-Day Journey Stages (Clean 4 Individual Days)
    days: [
      {
        id: "day-1",
        dayNumber: "Day 1",
        title: "Breaking Barriers & Seeing Problems",
        focus: "Interacting & Socializing",
        activities: [
          {
            name: "360° Interaction",
            description: "Began with personal self-introductions and cross-disciplinary conversations across cohort peers."
          },
          {
            name: "Rock-Paper-Scissors Activity",
            description: "A high-energy networking activity where participants moved across teams and overcame initial hesitation."
          },
          {
            name: "Problem Identification",
            description: "Shifted attention toward identifying real societal problems experienced in everyday life."
          }
        ],
        reflection: "We started by getting to know people — and then started looking at the world around us differently.",
        keyTakeaway: "Connection + Observation = The Start of Problem-Solving",
        images: [
          {
            src: "assets/images/protosem/week-00/day1.jpeg",
            alt: "ProtoSem Cohort Orientation and Cross-Disciplinary Interaction",
            caption: "Day 1: Starting Conversations, Icebreakers & 360° Peer Interaction"
          }
        ]
      },
      {
        id: "day-2",
        dayNumber: "Day 2",
        title: "Understanding Ourselves",
        focus: "Self-Awareness & Diverse Perspectives",
        activities: [
          {
            name: "16 Personalities & Web Stories",
            description: "Explored personality-test results and different cognitive personality types."
          },
          {
            name: "Zen Pencils",
            description: "Selected comics that connected with personal, academic, or lived experiences."
          },
          {
            name: "Story & Life Connection",
            description: "Presented a visual story, connecting the narrative directly to personal life experiences, character, and individual perspective."
          }
        ],
        reflection: "We discovered that diversity is not just about different backgrounds — it is also about different ways of thinking.",
        teamInsight: "Perspective is shaped by how we uniquely interpret the world.",
        images: [
          {
            src: "assets/images/protosem/week-00/day2.jpeg",
            alt: "Lakshana sharing a visual story connecting to personal life and character",
            caption: "Day 2: Presenting a visual story connecting personal life experiences and character reflections"
          }
        ]
      },
      {
        id: "day-3",
        dayNumber: "Day 3",
        title: "Becoming a Team",
        focus: "Collaboration & Team Genesis",
        activities: [
          {
            name: "Beta Team Formation",
            description: "Broke the initial tension using an 'Among Us' inspired icebreaker."
          },
          {
            name: "Observation Challenges",
            description: "Built active observation and open discussion skills through collaborative tasks."
          },
          {
            name: "Marshmallow Tower Challenge",
            description: "Engineered towers with marshmallow tops using spaghetti sticks, tape, and thread under tight constraints."
          }
        ],
        reflection: "We stopped being just people in the same team and started becoming a team that could work together.",
        keyTakeaway: "Shared Challenges + Active Listening = Trust & Alignment",
        images: [
          {
            src: "assets/images/protosem/week-00/day3.jpg",
            alt: "Beta Team collaboration and problem exploration at Forge Lab",
            caption: "Day 3: Beta Team Formation, Dynamics & Rapid Prototyping"
          }
        ]
      },
      {
        id: "day-4",
        dayNumber: "Day 4",
        title: "Inauguration & Exploring AI",
        focus: "Intentional Technology & Track Vision",
        activities: [
          {
            name: "Inauguration Ceremony",
            description: "Gained key visionary insights from the distinguished guest speaker at the ProtoSem Inauguration Ceremony at SKT, KCT."
          },
          {
            name: "TECH Talk — Prompt Engineering & AI Tools",
            description: "Explored prompt engineering techniques, personalized AI workflows, and matching tools to specific problem statements."
          },
          {
            name: "Tool Intentionality",
            description: "Learned that AI effectiveness depends on purpose-driven usage rather than generic application."
          }
        ],
        reflection: "We learned that technology becomes more powerful when we know how to use it intentionally.",
        keyTakeaway: "Purpose-Driven AI + Domain Context = Impactful Solutions",
        images: [
          {
            src: "assets/images/protosem/week-00/day4-inauguration.jpg",
            alt: "Guest speaker address at ProtoSem Inauguration Ceremony at SKT, KCT",
            caption: "Day 4: ProtoSem Inauguration Ceremony at SKT, KCT"
          },
          {
            src: "assets/images/protosem/week-00/day4-tech-talk.jpg",
            alt: "TECH Talk on Prompt Engineering and AI Tools",
            caption: "Day 4: TECH Talk — Prompt Engineering & AI Tools"
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 0?",
      progression: [
        { step: "Day 1", label: "Strangers" },
        { step: "Day 2", label: "Self-Awareness" },
        { step: "Day 3", label: "Teamwork" },
        { step: "Day 4", label: "New Perspectives" },
        { step: "Today", label: "Connected Team" }
      ],
      cards: [
        {
          number: "01",
          title: "Connection",
          description: "Learned to interact and engage beyond our comfort zones."
        },
        {
          number: "02",
          title: "Problem Discovery",
          description: "Trained ourselves to notice real societal problems around us."
        },
        {
          number: "03",
          title: "Self-Awareness",
          description: "Appreciated diverse personalities and cognitive mindsets."
        },
        {
          number: "04",
          title: "Collaboration",
          description: "Combined distinct ideas to work toward shared goals."
        },
        {
          number: "05",
          title: "AI Awareness",
          description: "Learned to leverage technology purposefully based on specific needs."
        }
      ],
      statement: "ProtoSem didn't just teach us new concepts. It taught us how different people can connect, think differently and create together."
    },

    technologies: [
      "Innovation Frameworks",
      "Design Thinking",
      "Problem Discovery",
      "Team Dynamics",
      "AI Tool Matching",
      "Phygital Systems"
    ],
    learning: "Transitioning from academic coursework to rapid, iterative industrial prototyping and real-world experimentation.",
    outcome: "Completed program onboarding, established sprint cadence, and defined milestone roadmap for upcoming development cycles.",
    reflection: "An intentional phase of focused technical growth, building deployable technology through real challenges.",
    links: []
  },
  {
    week: 1,
    numberFormatted: "01",
    status: "completed",
    title: "Design Thinking, Gaming Value Chains, Digital Portfolios & Industry Insights",
    subtitle: "Design Thinking, Industry Value Chains, Digital Portfolios & Real-World Insights",
    date: "Week 01 · 2026",
    summary: "Explored Design Thinking fundamentals, analyzed the gaming value chain with SWOT, built personal developer portfolios on GitHub, studied Prospect Theory and AI apps, and gained real-world retail and textile industry insights.",
    
    // Day-by-Day Journey Stages (5 Concise Days)
    days: [
      {
        id: "day-1",
        dayNumber: "Day 1",
        title: "Design Thinking & Gaming Exploration",
        focus: "User Empathy & Gaming Evolution",
        activities: [
          {
            name: "Session: Dr. Lakshmi Meera",
            description: "Introduced to Design Thinking fundamentals and how understanding user needs leads to better solutions."
          },
          {
            name: "Tech Talk: Nagavedika — Recommendation Algorithms",
            description: "Explored how algorithms understand user preferences, the role of data in personalisation, and shaping user experience."
          },
          {
            name: "Beta Team Activity — Gaming",
            description: "Traced gaming evolution from Arcade → Console → PC → Mobile → Cloud gaming and changing consumer behaviour."
          }
        ],
        reflection: "Understanding user needs is the root of innovation — whether designing software or analyzing how gaming transformed.",
        keyTakeaway: "Empathy + Personalisation = User-Centric Design",
        images: [
          {
            src: "assets/images/protosem/week-01/day1 meera sesion.jpeg",
            alt: "Dr. Lakshmi Meera leading session on Design Thinking fundamentals",
            caption: "Day 1: Dr. Lakshmi Meera Session on Design Thinking Fundamentals"
          },
          {
            src: "assets/images/protosem/week-01/day1 gaming Presentation.jpg",
            alt: "Beta Team presenting Gaming Evolution and Consumer Behaviour trends",
            caption: "Day 1: Beta Team Presentation on Gaming Evolution & Consumer Behaviour"
          }
        ]
      },
      {
        id: "day-2",
        dayNumber: "Day 2",
        title: "Analyse & Understand: Gaming Value Chain & SWOT",
        focus: "IDEO Process & Industry Value Chains",
        activities: [
          {
            name: "Session: Dr. Lakshmi Meera — IDEO Shopping Cart",
            description: "Studied the IDEO design process: observe users, identify problems, brainstorm ideas, and test solutions."
          },
          {
            name: "Poster Presentation: Gaming Value Chain & SWOT",
            description: "Mapped the 8-stage gaming pipeline (Concept to Revenue) and presented a SWOT analysis with Dr. Balu observing."
          },
          {
            name: "Tech Talk: Afrina — Power BI",
            description: "Explored Power BI for data visualization, dashboard reporting, and business analytics."
          }
        ],
        reflection: "Deconstructing an industry value chain showed that great products require alignment across development, distribution, and revenue models.",
        keyTakeaway: "IDEO Framework + Value Chain Mapping = Strategic Problem Solving",
        images: [
          {
            src: "assets/images/protosem/week-01/day2 gamingpoasterpresent.png",
            alt: "Beta Team presenting Gaming Industry Value Chain and SWOT Poster with Dr. Balu observing",
            caption: "Day 2: Gaming Industry Value Chain & SWOT Poster Presentation with Dr. Balu observing"
          }
        ]
      },
      {
        id: "day-3",
        dayNumber: "Day 3",
        title: "Onam Working Holiday & Cohort Reflection",
        focus: "Cultural Milestone & Reflection",
        activities: [
          {
            name: "Onam Working Holiday",
            description: "Celebrated the cultural festival while utilizing time for cohort discussions and self-directed study."
          },
          {
            name: "Mid-Week Synthesis",
            description: "Reviewed Design Thinking concepts and prepared architecture outlines for upcoming portfolio building."
          }
        ],
        reflection: "A meaningful pause and cultural milestone that provided headspace to reflect and recharge before development sprints.",
        keyTakeaway: "Reflection + Balance = Sustained Creative Energy",
        images: []
      },
      {
        id: "day-4",
        dayNumber: "Day 4",
        title: "Building Our Digital Portfolio & Decision Science",
        focus: "Antigravity, GitHub & Prospect Theory",
        activities: [
          {
            name: "Session with Arun — Building Our Digital Portfolio",
            description: "Explored Antigravity and GitHub to structure, design, and build personal developer portfolios."
          },
          {
            name: "GitHub-Based Portfolio Development",
            description: "Set up version control, organized asset pipelines, and established deployment workflows on GitHub."
          },
          {
            name: "Tech Talk: Parameshwari — Prospect Theory",
            description: "Explored how people make decisions when faced with risk, uncertainty, gains, and losses."
          }
        ],
        reflection: "Our portfolio is a living proof-of-work that articulates how we think, build, and solve problems.",
        keyTakeaway: "Digital Proof-of-Work + Decision Psychology = Developer Identity",
        images: [
          {
            src: "assets/images/protosem/week-01/day4_arunsesion.jpeg",
            alt: "Interactive session with Arun exploring portfolio structures and Antigravity IDE",
            caption: "Day 4: Session with Arun on Portfolio Architecture & Antigravity IDE"
          },
          {
            src: "assets/images/protosem/week-01/day4_portfoliobuilging.jpg",
            alt: "Hands-on digital portfolio development and GitHub integration in progress",
            caption: "Day 4: Hands-on Portfolio Building & GitHub Deployment"
          }
        ]
      },
      {
        id: "day-5",
        dayNumber: "Day 5",
        title: "Vision, Goals & Real-World Industry Insights",
        focus: "Strategic Goals, AI Apps & Industry Mentors",
        activities: [
          {
            name: "Session: Ramkumar Sir — Vision & Goal Setting",
            description: "Encouraged us to have a clear vision, set meaningful goals, convert aspirations into actions, and act consistently."
          },
          {
            name: "Tech Talk: Linga Raj — Base44: Building Apps",
            description: "Explored how AI-powered tools make app development accessible, moving from technology consumer to creator."
          },
          {
            name: "Learning Beyond the Classroom: Industry Insights",
            description: "Gained practical insights from Sabareesh (Pazhamudhir retail & agriculture), Praneesh (textiles), and Mounish (BBA student at Pazhamudhir)."
          }
        ],
        reflection: "Dialogue with retail and textile practitioners connected classroom concepts with ground-level business reality.",
        keyTakeaway: "Clear Vision + AI Tools + Industry Empathy = Actionable Innovation",
        images: [
          {
            src: "assets/images/protosem/week-01/day5_ramsession.png",
            alt: "Ramkumar Sir conducting session on Vision, Purpose and Goal Setting",
            caption: "Day 5: Ramkumar Sir Session on Vision, Purpose & Goal Setting"
          },
          {
            src: "assets/images/protosem/week-01/day5_techexpert.png",
            alt: "Industry interaction with retail and textile experts sharing ground realities",
            caption: "Day 5: Industry Interaction with Retail & Textile Practitioners"
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 1?",
      progression: [
        { step: "Day 1", label: "Design Thinking" },
        { step: "Day 2", label: "Value Chains & SWOT" },
        { step: "Day 3", label: "Reflection & Balance" },
        { step: "Day 4", label: "Digital Portfolios" },
        { step: "Day 5", label: "Industry Grounding" }
      ],
      cards: [
        {
          number: "01",
          title: "User Empathy & Needfinding",
          description: "Grounded problem solving in user observation (IDEO model) and recommendation algorithms."
        },
        {
          number: "02",
          title: "Value Chain & SWOT Clarity",
          description: "Deconstructed the 8-stage gaming pipeline and strategic industry factors."
        },
        {
          number: "03",
          title: "Digital Proof-of-Work",
          description: "Structured and published personal developer portfolios using Antigravity and GitHub."
        },
        {
          number: "04",
          title: "Decision Science & AI Tools",
          description: "Applied Prospect Theory behavioral models and rapid AI app building with Base44."
        },
        {
          number: "05",
          title: "Real-World Grounding",
          description: "Learned directly from retail (Pazhamudhir) and textile operators to bridge ideas with physical realities."
        }
      ],
      statement: "Week 1 took us from design principles to structured industry value chains, hands-on portfolio engineering, and ground-level retail insights."
    },

    technologies: [
      "Design Thinking",
      "IDEO Innovation Framework",
      "Industry Value Chains",
      "SWOT Analysis",
      "Recommendation Algorithms",
      "Antigravity IDE",
      "GitHub Workflows",
      "Prospect Theory",
      "Power BI",
      "Base44 AI App Building",
      "Retail & Textile Operations"
    ],
    learning: "Bridged design thinking empathy with rigorous industry value-chain decomposition, behavioral decision science, and hands-on digital portfolio development.",
    outcome: "Completed gaming value-chain SWOT analysis, built personal digital portfolio foundation on GitHub, and gained direct operational insights from retail and textile leaders.",
    reflection: "Moving beyond classroom theories by synthesizing strategic business frameworks with practical engineering tools and live industry interactions.",
    links: []
  },
  {
    week: 2,
    numberFormatted: "02",
    status: "completed",
    title: "Problem Statements, 5S Methodology, Algorithms & Visual App Building",
    subtitle: "Problem Discovery, 5S Framework, Algorithmic Thinking & Visual Prototyping",
    date: "Week 02 · 2026",
    summary: "Refined problem statements with peer feedback, implemented the 5S workplace methodology at Forge, mastered algorithmic flowcharts, built interactive stories using Scratch, and engineered Money Tracker Pro using MIT App Inventor.",
    
    // Day-by-Day Journey Stages (4 Concise Days)
    days: [
      {
        id: "day-1",
        dayNumber: "Day 1",
        title: "Problem Statements & 5S Workplace Framework",
        focus: "Problem Discovery & 5S Organization",
        activities: [
          {
            name: "Problem Statement Discovery & Insights",
            description: "Selected a problem statement within our Beta Team and gathered cross-team perspectives and constructive feedback."
          },
          {
            name: "5S Methodology & Red Cubicles",
            description: "Learned 5S organization principles (Sort, Set in order, Shine, Standardize, Sustain) and organized Forge's red cubicles."
          }
        ],
        reflection: "Clean workspaces and structured peer feedback set the foundation for clear thinking and focused execution.",
        keyTakeaway: "5S Discipline + Peer Feedback = Clear Problem Definition",
        images: [
          {
            src: "assets/images/protosem/week-02/day1 5s.jpeg",
            alt: "5S session and organizing red cubicles at Forge",
            caption: "Day 1: 5S Methodology Session & Organizing Red Cubicles at Forge"
          }
        ]
      },
      {
        id: "day-2",
        dayNumber: "Day 2",
        title: "Algorithmic Thinking & Flowcharts",
        focus: "Logic Flow & Problem Solving",
        activities: [
          {
            name: "Flowchart Design & Logic Mapping",
            description: "Designed structured flowcharts to break down computational problems into clear sequential logical steps."
          },
          {
            name: "Algorithm Problem Solving",
            description: "Analyzed algorithmic concepts through case videos and solved structured logic challenges."
          }
        ],
        reflection: "Breaking down complex logic into visual flowcharts turns daunting problems into solvable steps.",
        keyTakeaway: "Logic Decomposition + Visual Mapping = Algorithmic Clarity",
        images: [
          {
            src: "assets/images/protosem/week-02/day2 alg session.jpeg",
            alt: "Algorithms and flowchart problem solving session",
            caption: "Day 2: Algorithmic Thinking, Logic Mapping & Flowchart Solving Session"
          }
        ]
      },
      {
        id: "day-3",
        dayNumber: "Day 3",
        title: "Visual Programming with Scratch",
        focus: "Block-Based Logic & Creative Prototyping",
        activities: [
          {
            name: "Scratch Visual Programming",
            description: "Explored block-based coding, event triggers, loops, and conditional execution constructs."
          },
          {
            name: "Creative Meme & Interactive Animation",
            description: "Built an interactive meme using Scratch to practice creative logic, sprite animation, and sequence control."
          }
        ],
        reflection: "Visual block coding proved that understanding logic fundamentals comes before syntax memorization.",
        keyTakeaway: "Visual Logic + Creative Storytelling = Intuitive Programming",
        images: [
          {
            src: "assets/images/protosem/week-02/day3scratch.png",
            alt: "Creative block-based programming and meme building in Scratch",
            caption: "Day 3: Creative Block-Based Programming & Interactive Meme Building on Scratch"
          }
        ]
      },
      {
        id: "day-4",
        dayNumber: "Day 4",
        title: "App Development with MIT App Inventor",
        focus: "Rapid Mobile Prototyping & Finance Tools",
        activities: [
          {
            name: "MIT App Inventor Fundamentals",
            description: "Explored mobile UI components, event-driven blocks, and data storage logic for Android apps."
          },
          {
            name: "Money Tracker Pro Development",
            description: "Built Money Tracker Pro, a personal finance monitoring system to track expenses, manage budgets, and log transactions."
          }
        ],
        reflection: "Transitioned from block animations to building a functional mobile utility with tangible real-world application.",
        keyTakeaway: "Component Design + Event Logic = Functional Mobile Utility",
        images: [
          {
            src: "assets/images/protosem/week-02/day4mit.png",
            alt: "Money Tracker Pro finance monitoring system built on MIT App Inventor",
            caption: "Day 4: Engineering 'Money Tracker Pro' Finance App on MIT App Inventor"
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 2?",
      progression: [
        { step: "Day 1", label: "Problem & 5S" },
        { step: "Day 2", label: "Algorithms" },
        { step: "Day 3", label: "Scratch Logic" },
        { step: "Day 4", label: "App Inventor" },
        { step: "Today", label: "Rapid Prototyper" }
      ],
      cards: [
        {
          number: "01",
          title: "Problem Definition & 5S",
          description: "Structured workplace discipline and refined problem statements with cohort insights."
        },
        {
          number: "02",
          title: "Algorithmic Thinking",
          description: "Mapped logical workflows using structured flowcharts before jumping into code."
        },
        {
          number: "03",
          title: "Visual Programming",
          description: "Mastered sequence, loops, and condition blocks through creative Scratch projects."
        },
        {
          number: "04",
          title: "Mobile App Engineering",
          description: "Built Money Tracker Pro on MIT App Inventor to solve personal finance tracking."
        },
        {
          number: "05",
          title: "Rapid Prototyping",
          description: "Transitioned from theoretical logic to functional, deployable mobile applications."
        }
      ],
      statement: "Week 2 bridged workplace discipline, algorithmic thinking, and visual programming — taking us from flowchart logic to building our first functional mobile application."
    },

    technologies: [
      "Problem Discovery",
      "5S Workplace Methodology",
      "Algorithmic Flowcharts",
      "Logic Mapping",
      "Scratch Visual Coding",
      "MIT App Inventor",
      "Mobile App Prototyping",
      "Personal Finance Systems"
    ],
    learning: "Cultivated structured workplace habits with 5S, formalized algorithmic logic through flowcharts, and rapidly prototyped a finance utility app using MIT App Inventor.",
    outcome: "Organized Forge workspace under 5S principles, solved algorithm flowcharts, built interactive Scratch projects, and deployed Money Tracker Pro on MIT App Inventor.",
    reflection: "Moving from problem discovery to building real mobile applications reinforces that strong logic design accelerates prototype execution.",
    links: []
  }
];

// Generate Weeks 03 through 20 as data-driven structural upcoming entries (no fabricated content)
for (let i = 3; i <= 20; i++) {
  const numStr = String(i).padStart(2, "0");
  protoSemWeeks.push({
    week: i,
    numberFormatted: numStr,
    status: "upcoming",
    title: `Week ${numStr}`,
    date: "Upcoming Phase",
    summary: "This week will be updated as the ProtoSem journey progresses.",
    activities: [],
    images: [],
    technologies: [],
    learning: "",
    outcome: "",
    reflection: "",
    links: []
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { protoSemProgramData, protoSemWeeks };
}
