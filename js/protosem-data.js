/**
 * PROTOSEM 20-WEEK JOURNEY DATA STRUCTURE
 * Lakshana G S Portfolio — Dedicated ProtoSem Experiential Fellowship Log
 * 
 * Data-driven repository for ProtoSem at Forge.
 * Weeks 00–05 are completed; Weeks 06–20 are structurally ready for future updates.
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
  },
  {
    week: 3,
    numberFormatted: "03",
    status: "completed",
    title: "Linux OS, Dockerization, Cloud Deployment, Obsidian Automation & Hardware Electronics",
    subtitle: "Linux Exploration, Docker Containers, Obsidian Automation, Computational Hardware & Circuit Soldering",
    date: "Week 03 · 2026",
    summary: "Installed and configured Kali Linux, developed a terminal game containerized with Docker and deployed to Vercel, automated portfolio workflows using Obsidian, explored computational hardware and electrical fundamentals, and engineered breadboard circuits with practical soldering.",

    // Day-by-Day Journey Stages (5 Concise Days)
    days: [
      {
        id: "day-1",
        dayNumber: "Day 1",
        title: "Linux OS Installation & System Exploration",
        focus: "Linux OS & Kali Linux Setup",
        activities: [
          {
            name: "Linux OS Installation & Setup",
            description: "Downloaded Kali Linux, configured the system environment, and explored Linux OS architecture."
          },
          {
            name: "Terminal & CLI Ecosystem Exploration",
            description: "Navigated Linux filesystem hierarchy, shell scripting commands, permissions, and package management."
          }
        ],
        reflection: "Installing and exploring Kali Linux from scratch gave us deep control over operating system architecture and terminal environments.",
        keyTakeaway: "Open-Source OS + Terminal Mastery = Computing Foundation",
        images: [
          {
            src: "assets/images/protosem/week-03/day1.jpeg",
            alt: "Kali Linux OS installation and terminal exploration",
            caption: "Day 1: Kali Linux Installation, Environment Setup & CLI Exploration"
          }
        ]
      },
      {
        id: "day-2",
        dayNumber: "Day 2",
        title: "Dockerization, Terminal Game & Vercel Cloud Deployment",
        focus: "Docker Containers, CLI Game & Vercel",
        activities: [
          {
            name: "Game Development & Terminal Execution",
            description: "Developed an interactive game and ran it directly within the Linux terminal environment."
          },
          {
            name: "Docker Containerization",
            description: "Containerized the application using Docker to isolate dependencies and guarantee portable execution."
          },
          {
            name: "Cloud Deployment on Vercel",
            description: "Deployed the game application to the cloud via Vercel for instant live web access and scalable distribution."
          }
        ],
        reflection: "Taking a game from a local Linux terminal to a containerized Docker image and deploying live on Vercel connected the full DevOps lifecycle.",
        keyTakeaway: "CLI Game + Docker Containerization + Vercel = Full-Stack Cloud Workflow",
        images: [
          {
            src: "assets/images/protosem/week-03/day2.mp4",
            type: "video",
            isVideo: true,
            alt: "Video demonstration of developed game running in terminal, containerized in Docker, and deployed on Vercel",
            caption: "Day 2: Live Video Snippet — Terminal Game Execution, Dockerization & Vercel Cloud Deployment"
          }
        ]
      },
      {
        id: "day-3",
        dayNumber: "Day 3",
        title: "Obsidian Portfolio Automation & Knowledge Systems",
        focus: "Markdown Architecture & Workflow Automation",
        activities: [
          {
            name: "Obsidian Markdown Architecture",
            description: "Structured an interconnected second-brain and documentation repository using Obsidian markdown workflows."
          },
          {
            name: "Portfolio Automation Pipelines",
            description: "Configured automated synchronization and structured note-taking pipelines for portfolio logs and documentation."
          }
        ],
        reflection: "Building structured automation in Obsidian transformed raw daily updates into an organized, connected knowledge base.",
        keyTakeaway: "Structured Markdown + Obsidian Automation = Scalable Knowledge Base",
        images: [
          {
            src: "assets/images/protosem/week-03/day3.png",
            alt: "Obsidian automation and portfolio workflow architecture",
            caption: "Day 3: Obsidian Automation Pipelines & Structured Portfolio Knowledge Management"
          }
        ]
      },
      {
        id: "day-4",
        dayNumber: "Day 4",
        title: "Computational Hardware & Electrical Fundamentals",
        focus: "Hardware Systems & Electrical Theory",
        activities: [
          {
            name: "Computational Hardware & Electricals Session",
            description: "Attended an in-depth session exploring computing hardware architecture, electrical components, and circuit principles."
          },
          {
            name: "Hardware Subsystems & Electrical Activity",
            description: "Participated in an interactive cohort activity analyzing hardware subsystems, voltage/current dynamics, and component behaviors."
          }
        ],
        reflection: "Understanding the underlying electronics and physical hardware architecture deepened our appreciation for computing beyond software abstraction.",
        keyTakeaway: "Electrical Fundamentals + Hardware Theory = Silicon-Level Understanding",
        images: [
          {
            src: "assets/images/protosem/week-03/day 4.png",
            alt: "Computational hardware and electrical theory session",
            caption: "Day 4: Computational Hardware & Electrical Fundamentals Theory Session"
          },
          {
            src: "assets/images/protosem/week-03/day4(1).jpeg",
            alt: "Hardware analysis and electrical cohort activity",
            caption: "Day 4: Hardware Subsystems & Electrical Component Analysis Hands-On Activity"
          }
        ]
      },
      {
        id: "day-5",
        dayNumber: "Day 5",
        title: "Breadboard Circuit Prototyping & Practical Soldering",
        focus: "Breadboard Circuits & Soldering Practice",
        activities: [
          {
            name: "Breadboard Circuit Prototyping",
            description: "Built and tested physical circuits on breadboards, verifying component connections, resistances, and signal paths."
          },
          {
            name: "Hands-on Practical Soldering",
            description: "Learned practical soldering techniques, mastering iron handling, solder flow, safety, and component joining on circuit boards."
          }
        ],
        reflection: "Wiring breadboard circuits and soldering physical joints transformed abstract circuit schematics into working hardware prototypes.",
        keyTakeaway: "Breadboard Validation + Soldering Mastery = Tangible Hardware Engineering",
        images: [
          {
            src: "assets/images/protosem/week-03/day 5 handson.jpeg",
            alt: "Hands-on breadboard circuit prototyping session",
            caption: "Day 5: Hands-on Circuit Prototyping & Electrical Testing on Breadboard"
          },
          {
            src: "assets/images/protosem/week-03/day 5.jpeg",
            alt: "Practical soldering session and component joining",
            caption: "Day 5: Practical Soldering Session — Component Assembly & Board Joining"
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 3?",
      progression: [
        { step: "Day 1", label: "Linux & CLI" },
        { step: "Day 2", label: "Docker & Cloud" },
        { step: "Day 3", label: "Obsidian Auto" },
        { step: "Day 4", label: "Hardware Theory" },
        { step: "Day 5", label: "Circuit Soldering" }
      ],
      cards: [
        {
          number: "01",
          title: "OS & Terminal Mastery",
          description: "Installed Kali Linux and built command-line fluency across system operations."
        },
        {
          number: "02",
          title: "Docker & Cloud DevOps",
          description: "Developed a terminal game, packaged it in Docker containers, and deployed it live to Vercel."
        },
        {
          number: "03",
          title: "Knowledge Automation",
          description: "Automated portfolio updates and structured note management using Obsidian."
        },
        {
          number: "04",
          title: "Hardware & Electricals",
          description: "Gained foundational insights into computational hardware, voltages, and circuit logic."
        },
        {
          number: "05",
          title: "Physical Electronics",
          description: "Prototyped circuits on breadboards and mastered practical soldering techniques for permanent builds."
        }
      ],
      statement: "Week 3 spanned the entire engineering continuum — from low-level Linux operating systems and cloud containerization to Obsidian automation and physical circuit soldering."
    },

    technologies: [
      "Linux OS (Kali Linux)",
      "Terminal / CLI",
      "Docker Containerization",
      "Cloud Deployment (Vercel)",
      "Game Development",
      "Obsidian Automation",
      "Computational Hardware",
      "Electrical Fundamentals",
      "Breadboard Prototyping",
      "Practical Soldering"
    ],
    learning: "Gained comprehensive full-stack engineering exposure spanning Linux systems, Docker containerization, and cloud deployment, combined with hands-on physical electronics, breadboard testing, and soldering.",
    outcome: "Installed Kali Linux, containerized and deployed a terminal game to Vercel, automated portfolio logs with Obsidian, built functional breadboard circuits, and executed practical soldering.",
    reflection: "Connecting cloud containerization with tangible hardware soldering demonstrated that great innovators understand both the cloud and the silicon.",
    links: []
  },
  {
    week: 4,
    numberFormatted: "04",
    status: "completed",
    title: "Computational Hardware, Sensors & IoT",
    subtitle: "Arduino Fundamentals, Sensor Integration, ESP32 Microcontrollers & Connected IoT Systems",
    date: "Week 04 · 2026",
    summary: "Week 04 focused on hands-on computational hardware, sensor integration, ESP32 development, and IoT-based prototypes — moving from basic Arduino hardware experimentation to sensor integration, ESP32 development, and connected IoT systems.",

    // Day-by-Day Journey Stages (4 Individual Days)
    days: [
      {
        id: "day-1",
        dayNumber: "Day 1",
        title: "Arduino Fundamentals",
        focus: "Arduino Board Architecture & LED Circuits",
        activities: [
          {
            name: "Arduino Board Components & Features",
            description: "Explored Arduino board components, pin configurations, onboard features, and basic microcontroller functionality."
          },
          {
            name: "Breadboard Circuit Connections",
            description: "Connected electronic components using a breadboard to understand how hardware components interface with the Arduino."
          },
          {
            name: "Arduino Programming & LED Exercises",
            description: "Wrote and uploaded basic Arduino programs and performed LED-based exercises to observe code-driven hardware interaction."
          }
        ],
        reflection: "We performed simple Arduino exercises using a breadboard and LED to understand how hardware components interact with the Arduino.",
        keyTakeaway: "Arduino Pinouts + Breadboard Wiring = Physical Computing Foundation",
        images: [
          {
            src: "assets/images/protosem/week-04/day1 arduino exploring.mp4",
            type: "video",
            isVideo: true,
            alt: "Hands-on Arduino and breadboard LED exercise",
            caption: "Day 1: Hands-on Arduino and Breadboard Exercise"
          }
        ]
      },
      {
        id: "day-2",
        dayNumber: "Day 2",
        title: "Sensors & Hardware Interaction",
        focus: "Sensor Input, DHT11 & IR Sensing with Serial Telemetry",
        activities: [
          {
            name: "Multi-Sensor Exploration",
            description: "Explored diverse sensors including Light, PIR, IR, DHT11 Temperature & Humidity, and RFID sensors to capture physical environmental variables."
          },
          {
            name: "Sensor Telemetry & Serial Interfacing",
            description: "Interfaced DHT11 and IR sensors with the Arduino Uno, reading real-time temperature, humidity, and obstacle detection data via the Serial Monitor."
          },
          {
            name: "LED Feedback & Hardware Actuation",
            description: "Integrated status LEDs and motor drivers to trigger automated physical actions based on real-time sensor threshold inputs (input → processing → output)."
          }
        ],
        reflection: "This helped us understand sensor input → processing → hardware output through real-time telemetry detection and automated responses.",
        keyTakeaway: "Sensor Input + Processing Logic + Actuator Output = Automated Hardware Response",
        images: [
          {
            src: "assets/images/protosem/week-04/day2 session on sensors.jpeg",
            alt: "Classroom workshop session introducing sensor working principles and architecture",
            caption: "Day 2: Session on Sensors and Actuators"
          },
          {
            src: "assets/images/protosem/week-04/day 2 working witsensors.jpeg",
            alt: "Collaborative hardware prototyping interfacing sensors with Arduino at workbench",
            caption: "Day 2: Hands-on Hardware & Sensor Circuit Interfacing"
          },
          {
            src: "assets/images/protosem/week-04/day 2 working witsensors1.jpeg",
            alt: "Arduino IDE Serial Monitor displaying live DHT11 temperature, humidity, and IR telemetry",
            caption: "Day 2: Live DHT11 Temperature, Humidity & IR Telemetry in Arduino IDE"
          }
        ]
      },
      {
        id: "day-3",
        dayNumber: "Day 3",
        title: "ESP32 & OLED Game Development",
        focus: "ESP32 Architecture, OLED Graphics & Interactive Game Logic",
        activities: [
          {
            name: "ESP32 Microcontroller Architecture",
            description: "Analyzed ESP32 dual-core Xtensa compute power, Wi-Fi/Bluetooth stacks, and GPIO pinouts compared to Arduino Uno."
          },
          {
            name: "OLED Display & Peripheral Interfacing",
            description: "Interfaced an I2C OLED display module and connected hardware input controls to handle real-time user actions."
          },
          {
            name: "Interactive Embedded Game Development",
            description: "Developed and uploaded a custom interactive falling game onto the ESP32, combining input polling, frame rendering, and gameplay logic."
          }
        ],
        reflection: "The activity helped us understand how a microcontroller can combine processing, input, and display output to create an interactive application.",
        keyTakeaway: "ESP32 Processing + OLED Display + Input Controls = Interactive Embedded Game",
        images: [
          {
            src: "assets/images/protosem/week-04/day 3 session on esp32.jpeg",
            alt: "Workshop presentation comparing ESP32, ESP8266, and Arduino Uno features and processing power",
            caption: "Day 3: ESP32 Architecture & Dual-Core Performance Comparison"
          },
          {
            src: "assets/images/protosem/week-04/day3 developed game on oled esp32.jpeg",
            alt: "Hands-on testing and playing the custom game programmed on ESP32 with OLED display",
            caption: "Day 3: Testing & Playing Interactive Game on ESP32 & OLED Display"
          }
        ]
      },
      {
        id: "day-4",
        dayNumber: "Day 4",
        title: "IoT & Connected Systems",
        focus: "Wi-Fi Networking, Smart Traffic System & Dual-Joystick Hardware",
        activities: [
          {
            name: "IoT Architecture & Wi-Fi Networking",
            description: "Explored Internet of Things (IoT) fundamentals, network protocols, and connecting ESP32 microcontrollers to local Wi-Fi networks."
          },
          {
            name: "Smart Traffic Light System",
            description: "Built and programmed a smart traffic control circuit using sequenced Red, Yellow, and Green LEDs on a breadboard to simulate real-world traffic management."
          },
          {
            name: "Dual-Joystick Hardware Control",
            description: "Wired and calibrated dual analog joystick modules with the ESP32 to prototype interactive physical control interfaces."
          }
        ],
        reflection: "We connected the ESP32-based setup to Wi-Fi and explored how physical hardware can communicate as part of a connected IoT system.",
        keyTakeaway: "Sensor Data + Wi-Fi Connectivity + Connected Systems = Practical IoT Prototype",
        images: [
          {
            src: "assets/images/protosem/week-04/day4 session on iot.jpeg",
            alt: "Classroom presentation introducing IoT concepts and wireless hardware networking",
            caption: "Day 4: IoT Concepts & Wireless Hardware Networking Session"
          },
          {
            src: "assets/images/protosem/week-04/day5 working on iot.jpeg",
            alt: "Prototyping smart traffic light system with multi-LED breadboard and ESP32",
            caption: "Day 4: Prototyping Smart Traffic Light System with Multi-LED Breadboard"
          },
          {
            src: "assets/images/protosem/week-04/joystick game.jpeg",
            alt: "Hardware setup featuring ESP32 microcontroller wired to dual analog joysticks on breadboard",
            caption: "Day 4: Dual-Joystick Interactive Controller Setup with ESP32"
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 4?",
      progression: [
        { step: "Day 1", label: "Arduino Basics" },
        { step: "Day 2", label: "Sensors & RFID" },
        { step: "Day 3", label: "ESP32 & OLED" },
        { step: "Day 4", label: "IoT & Wi-Fi" },
        { step: "Today", label: "IoT Prototyper" }
      ],
      cards: [
        {
          number: "01",
          title: "Arduino Fundamentals",
          description: "Understood Arduino board features, breadboard connections, and basic code-to-hardware interaction via LEDs."
        },
        {
          number: "02",
          title: "Sensor Integration",
          description: "Explored Light, PIR, IR, Temperature, and RFID sensors to implement input → processing → output access prototypes."
        },
        {
          number: "03",
          title: "ESP32 & OLED Gaming",
          description: "Programmed a playable falling game combining ESP32 compute, push-button inputs, and dynamic OLED graphics."
        },
        {
          number: "04",
          title: "Connected IoT Systems",
          description: "Linked ESP32 setups to Wi-Fi networks to enable connected hardware communication and smart traffic management."
        },
        {
          number: "05",
          title: "Interactive Hardware Prototyping",
          description: "Integrated joystick controls and multi-sensor circuits into deployable, interactive embedded prototypes."
        }
      ],
      statement: "Week 04 took us from basic Arduino hardware experimentation to sensor integration, ESP32 development, and connected IoT systems. Through hands-on activities, we learned how microcontrollers interact with sensors, displays, motors, and network connectivity to build practical hardware prototypes."
    },

    technologies: [
      "Arduino",
      "Breadboard Prototyping",
      "Sensors (Light, PIR, IR, Temp)",
      "RFID Sensor",
      "Motor Actuation",
      "ESP32",
      "OLED Display",
      "Game Logic",
      "Joystick Controls",
      "Wi-Fi Connectivity",
      "IoT Concepts",
      "Smart Traffic Systems"
    ],
    learning: "Week 04 took us from basic Arduino hardware experimentation to sensor integration, ESP32 development, and connected IoT systems. Through hands-on activities, we learned how microcontrollers interact with sensors, displays, motors, and network connectivity to build practical hardware prototypes.",
    outcome: "Built an RFID access prototype with motor actuation, developed an interactive OLED falling game on ESP32, and engineered a Wi-Fi-connected smart traffic and joystick system.",
    reflection: "Understanding sensor input → processing → hardware output and wireless connectivity bridges standalone electronics with connected, real-world IoT applications.",
    links: []
  },
  {
    week: 5,
    numberFormatted: "05",
    status: "completed",
    isConsolidated: true,
    title: "UI/UX Design & Problem Exploration",
    subtitle: "Problem Understanding, Real-World Exploration, User Flows & Figma Prototyping",
    date: "Week 05 · 2026",
    summary: "Week 05 focused on understanding real-world problems, exploring their practical use cases, and translating those observations into a user-focused UI/UX solution — conducted as a continuous design and problem-solving process.",

    // Consolidated Weekly Experience (Structured Sections instead of Day-by-Day)
    sections: [
      {
        id: "week-overview",
        navLabel: "Week Overview",
        sectionBadge: "WEEK OVERVIEW",
        title: "Continuous Design & Problem-Solving Process",
        focus: "Real-World Context & Holistic Exploration",
        description: "Week 05 focused on understanding real-world problems, exploring their practical use cases, and translating those observations into a user-focused UI/UX solution. Instead of following separate daily activities, the entire week was conducted as a continuous design and problem-solving process.",
        activities: [
          {
            name: "Continuous Design Process",
            description: "Approached the problem statement through an unbroken, iterative problem-solving and user-centered design cycle."
          },
          {
            name: "Observation & Translation",
            description: "Translated observed operational challenges and real-world friction into structured product requirements."
          },
          {
            name: "Digital Prototyping",
            description: "Transformed conceptual user architectures into interactive screen flows and high-fidelity Figma prototypes."
          }
        ],
        reflection: "Approaching the challenge as a continuous design sprint allowed us to deeply connect problem understanding with user experience.",
        keyTakeaway: "Holistic Problem Understanding + User-Centric Design = Purposeful Application"
      },
      {
        id: "problem-exploration",
        navLabel: "Problem Exploration",
        sectionBadge: "PROBLEM EXPLORATION",
        title: "Understanding Real-World Problems & Use Cases",
        focus: "Problem Discovery & User Perspective",
        description: "We started by exploring the given problem statement and understanding the problem from a real-world perspective. The focus was not just on building an application, but on first understanding WHY the application was needed and WHAT it should solve.",
        activities: [
          {
            name: "Understanding the Actual Problem",
            description: "Deconstructed the core problem statement, separating surface symptoms from root operational challenges."
          },
          {
            name: "Identifying Real-Time Use Cases",
            description: "Mapped out authentic real-world scenarios, user touchpoints, and environments where the problem occurs."
          },
          {
            name: "Observing User Impact & Solution Scope",
            description: "Analyzed existing limitations and workflow friction to define practical, high-impact solution requirements."
          }
        ],
        reflection: "The focus was not just on building an application, but on first understanding WHY the application was needed and WHAT it should solve.",
        keyTakeaway: "Root Cause Discovery + User Empathy = Clear Solution Scope"
      },
      {
        id: "uiux-design",
        navLabel: "UI/UX Design",
        sectionBadge: "UI/UX DESIGN PROCESS",
        title: "User-Centered Architecture & Flow Design",
        focus: "User Needs, Flows & Usability",
        description: "After understanding the problem and its real-world requirements, we moved towards designing the application, systematically converting problem requirements into a clear UI/UX concept.",
        activities: [
          {
            name: "User Needs & Persona Mapping",
            description: "Identified primary user requirements, mental models, and digital interaction goals."
          },
          {
            name: "User Flow & Navigation Architecture",
            description: "Structured logical pathways, task sequences, and intuitive navigation flows across the application."
          },
          {
            name: "Screen Structure & Usability",
            description: "Organized essential feature modules, visual hierarchy, and interaction patterns for effortless usability."
          }
        ],
        reflection: "Converting abstract requirements into structured user flows ensured that every screen directly serves a user need.",
        keyTakeaway: "User Needs + Intuitive Flow + Screen Hierarchy = Seamless Experience"
      },
      {
        id: "figma-implementation",
        navLabel: "Figma Prototype",
        sectionBadge: "FIGMA IMPLEMENTATION",
        title: "Developing the Interface & Interactive Prototype",
        focus: "Figma Design, Component Systems & Interactive Flow",
        description: "We developed the application interface using Figma, transforming the conceptual architecture into a high-fidelity interactive digital product experience.",
        activities: [
          {
            name: "Application Structure & Layout",
            description: "Created the overall application structure and composed clean, responsive screen layouts in Figma."
          },
          {
            name: "Interface Component System",
            description: "Built consistent, reusable interface components, styling rules, typography hierarchy, and navigation elements."
          },
          {
            name: "Interactive Prototyping & Flow",
            description: "Connected individual screens through prototype linkages and tuned micro-interactions to simulate the complete user journey."
          }
        ],
        reflection: "This helped us understand how a real-world problem can be taken from the initial problem statement and transformed into a structured digital product experience.",
        keyTakeaway: "Figma Components + Interactive Linkages = Structured Digital Product Experience"
      },
      {
        id: "prototype-demo",
        navLabel: "Prototype Demo",
        sectionBadge: "PROTOTYPE DEMO",
        title: "Figma UI/UX Interactive Prototype Demonstration",
        focus: "Interactive Walkthrough & Screen Recording",
        description: "Interactive demonstration walkthrough of the application screens and user flow designed in Figma.",
        images: [
          {
            src: "assets/images/protosem/week-05/Screen Recording 2026-09-29 211410.mp4",
            type: "video",
            isVideo: true,
            alt: "Screen recording demonstration of the Figma UI/UX prototype and interactive user flow",
            caption: "Figma UI/UX Interactive Prototype & Flow Walkthrough"
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 5?",
      progressionLabel: "5-STAGE DESIGN & PROTOTYPING PROCESS",
      progression: [
        { step: "Stage 1", label: "Problem Understanding" },
        { step: "Stage 2", label: "Real-World Exploration" },
        { step: "Stage 3", label: "UI/UX Architecture" },
        { step: "Stage 4", label: "Figma Prototyping" },
        { step: "Today", label: "Digital Product Prototype" }
      ],
      cards: [
        {
          number: "01",
          title: "Problem-First Mindset",
          description: "Understood that building a useful application begins with understanding the core problem and its users."
        },
        {
          number: "02",
          title: "Real-World Use Cases",
          description: "Explored authentic use cases, existing challenges, and practical limitations to define solution requirements."
        },
        {
          number: "03",
          title: "User-Centered Design",
          description: "Structured intuitive user flows, application hierarchy, and interaction models from the user's perspective."
        },
        {
          number: "04",
          title: "Figma Prototyping",
          description: "Engineered reusable interface components, screen layouts, and interactive connections in Figma."
        },
        {
          number: "05",
          title: "Idea to Digital Product",
          description: "Transformed an initial problem statement into a structured, clickable digital product experience."
        }
      ],
      statement: "Week 05 helped us understand that building a useful application begins with understanding the problem and its users. We explored real-world use cases, identified the requirements of the solution, and transformed those insights into a structured UI/UX prototype using Figma."
    },

    technologies: [
      "Problem Exploration",
      "Real-World Use Cases",
      "User-Centered Design",
      "UI/UX Design",
      "User Flow Architecture",
      "Information Architecture",
      "Screen Organization",
      "Figma Prototyping",
      "Interface Components",
      "Interactive Linkages",
      "Usability Refinement"
    ],
    learning: "Week 05 helped us understand that building a useful application begins with understanding the problem and its users. We explored real-world use cases, identified the requirements of the solution, and transformed those insights into a structured UI/UX prototype using Figma.",
    outcome: "Deconstructed real-world problem statements, mapped user journeys, and engineered an interactive high-fidelity UI/UX prototype in Figma.",
    reflection: "Transforming a problem statement into a working digital product experience demonstrated that great engineering begins with understanding why a solution is needed and what it solves for the user.",
    links: []
  },
  {
    week: 6,
    numberFormatted: "06",
    status: "completed",
    isTabbed: true,
    title: "Digital Fabrication: Laser Cutting & 3D Printing",
    subtitle: "From digital designs to physical prototypes",
    date: "Week 06 · 2026",
    summary: "Week 06 consisted of hands-on digital fabrication across two distinct tracks: subtractive CNC Laser Cutting (vector preparation, RDWorks parameter setting, machining) and additive 3D Printing (model discovery on Printables, Bambu Studio slicing, layer-by-layer extrusion).",
    tabs: [
      {
        id: "laser-cutting",
        label: "Laser Cutting",
        badge: "FABRICATION TRACK 01",
        title: "Laser Cutting",
        intro: "Laser cutting is a digital fabrication process that uses a focused laser beam to cut, engrave, or mark materials according to a digitally prepared design. It enables precise and repeatable fabrication directly from digital files.",

        // 01 — 08: TECHNICAL BACKGROUND, SAFETY & SPECIFICATIONS
        educationalSections: [
          {
            sectionNumber: "01",
            sectionLabel: "01 — WHAT IS LASER CUTTING?",
            heading: "What is Laser Cutting?",
            content: "Laser cutting is a non-contact manufacturing process in which a focused laser beam is directed onto a material to cut through it or create engraved patterns on its surface with high precision.",
            applications: [
              "Prototyping",
              "Product design",
              "Model making",
              "Signage",
              "Decorative work",
              "Digital fabrication"
            ],
            media: {
              src: "assets/images/protosem/week-06/laser/laser.png",
              alt: "Laser Cutting Technical Illustration",
              caption: "Technical Illustration: Optical Path, Focused Beam & Material Interaction"
            }
          },
          {
            sectionNumber: "02",
            sectionLabel: "02 — HOW DOES LASER CUTTING WORK?",
            heading: "How Laser Cutting Works",
            content: "Laser cutting converts digital CAD vectors into machine toolpaths. The focused laser beam interacts with the workpiece through two fundamental operations: vector cutting and raster engraving.",
            processFlow: [
              { label: "Vector Design" },
              { label: "File Preparation" },
              { label: "RDWorks CAM" },
              { label: "Laser Machining" },
              { label: "Physical Artifact" }
            ],
            operations: [
              {
                type: "Vector Cutting",
                tag: "Through-Cut",
                description: "The laser beam traces continuous vector toolpaths to cut completely through the sheet stock along defined part contours.",
                softwareNote: "Cut Layer · High power & controlled speed"
              },
              {
                type: "Raster Engraving",
                tag: "Surface Scan",
                description: "The laser head rapidly scans back and forth in rows, pulsing to vaporize surface material for detailed textures, text, and artwork.",
                softwareNote: "Scan Layer · Lower power & high scanning speed"
              }
            ]
          },
          {
            sectionNumber: "03",
            sectionLabel: "03 — TYPES OF LASERS",
            heading: "Types of Lasers Used in Digital Fabrication",
            content: "Different laser types use specific wavelengths and gain media to cut or engrave various materials efficiently.",
            types: [
              {
                name: "CO₂ Laser",
                tag: "Non-Metallic Materials",
                description: "The standard laser for fab labs, highly effective for wood, MDF, acrylic, paper, leather, and cardboard."
              },
              {
                name: "Fiber Laser",
                tag: "Metal Fabrication",
                description: "Commonly used for high-precision marking, etching, and cutting of metals and engineered alloys."
              },
              {
                name: "Diode Laser",
                tag: "Desktop Systems",
                description: "Used in compact desktop systems for light cutting and surface engraving on organic materials."
              }
            ]
          },
          {
            sectionNumber: "04",
            sectionLabel: "04 — COMMON MATERIALS",
            heading: "Common Laser-Cutting Materials",
            content: "Laser cutting works across various sheet materials. Material selection directly determines cut quality, edge finish, and operational safety.",
            materials: [
              "Wood & MDF",
              "Plywood Sheets",
              "Cast & Extruded Acrylic",
              "Cardboard & Chipboard",
              "Paper & Cardstock",
              "Laser-Safe Plastics",
              "Sheet Metals (Fiber Laser)"
            ]
          },
          {
            sectionNumber: "05",
            sectionLabel: "05 — ADVANTAGES & LIMITATIONS",
            heading: "Advantages & Limitations of Laser Cutting",
            content: "Understanding the capabilities and constraints of laser cutting helps in selecting the appropriate manufacturing method for a project.",
            advantages: [
              "High precision with narrow kerf width and clean edge definition",
              "Rapid transition from digital 2D vector design to physical parts",
              "Repeatable results and high dimensional consistency for multi-part batches",
              "Non-contact fabrication prevents tool wear, vibration, and mechanical deflection"
            ],
            limitations: [
              "Cutting thickness is strictly limited by laser tube wattage",
              "Restricted to 2D planar profile cutting and surface engraving",
              "Produces a localized heat-affected zone (HAZ) along cut edges",
              "Certain synthetic polymers (e.g., PVC/vinyl) emit hazardous toxic fumes"
            ]
          }
        ],

        // MY ACTIVITY SECTION: HANDS-ON WORKFLOW SEQUENCE (STARTS FROM LAB SAFETY)
        practicalSection: {
          eyebrow: "HANDS-ON WORKFLOW",
          heading: "My Laser Cutting Activity",
          intro: "A visual portfolio case study documenting the hands-on laser cutting workflow from lab safety and machine specifications to CAM configuration, physical machining, and final output.",
          steps: [
            {
              stepNumber: "01",
              stepLabel: "01 — LAB SAFETY & SAFETY RULES",
              title: "Lab Safety & Safety Rules",
              description: "Laser cutting requires controlled operation because the process involves concentrated laser energy, heat, fumes and electrical equipment.",
              checklistLabel: "REQUIRED LAB SAFETY TOPICS",
              checklist: [
                "Laser Safety: Enclosure kept closed during operation; never look directly into beam or reflected scatter",
                "Exhaust System: High-volume ventilation active to evacuate fumes, smoke, and particulate matter",
                "Chiller / Cooling: Water chiller circulating conditioned water to maintain stable tube operating temperature",
                "Earthing: Dedicated chassis and electrical grounding to prevent EMI and shock hazards",
                "Air Assist: Coaxial compressed air at nozzle to prevent flaming and keep optics clean",
                "General Machine Safety: Flat material placement, clean bed, focus calibration, and continuous supervision"
              ],
              media: {
                src: "assets/images/protosem/week-06/laser/safety.png",
                alt: "Laser Cutter Rules and Safety Guidelines at Forge HW Junction",
                caption: "Laser Cutter Rules & Safety guidelines at Forge HW Junction DFab"
              }
            },
            {
              stepNumber: "02",
              stepLabel: "02 — MACHINE DETAILS",
              title: "Machine Details",
              description: "The physical fabrication was executed on a 1490 CO₂ laser cutting platform at FORGE HW Junction DFab #2 with an RDWorks-compatible digital controller.",
              specTable: {
                columns: ["Parameter", "Specification"],
                rows: [
                  ["Make / Facility", "FORGE HW Junction DFab #2"],
                  ["Model", "1490 CO₂ Laser"],
                  ["Bed Size / Working Area", "1300 × 900 mm"],
                  ["Laser Tube Wattage", "150W"],
                  ["Machine Power", "1000W"],
                  ["Max Speeds", "Cutting: 25 m/min | Engraving: 55 m/min"],
                  ["Positioning Accuracy", "0.1 mm"],
                  ["Blowing / Air Assist", "Lower Blowing System (Coaxial Air Assist)"],
                  ["Control Software", "RDWorks (Ruida DSP Controller)"]
                ]
              },
              media: {
                src: "assets/images/protosem/week-06/laser/machinedetails.png",
                alt: "1490 CO2 Laser Cutter Specifications at Forge HW Junction DFab #2",
                caption: "1490 CO₂ Laser Cutter hardware specifications at Forge HW Junction DFab #2"
              }
            },
            {
              stepNumber: "03",
              stepLabel: "03 — MATERIALS USED",
              title: "Materials Used",
              description: "Black 2mm acrylic sheet stock was selected and prepared for high-contrast surface raster engraving and perimeter vector through-cutting.",
              specTable: {
                columns: ["Material Parameter", "Specification"],
                rows: [
                  ["Material Type", "Black Acrylic (PMMA)"],
                  ["Thickness", "2.0 mm"],
                  ["Finish / Color", "Gloss Black"],
                  ["Source", "Lab Stock / Workshop Supply"],
                  ["Fabrication Mode", "Surface Engraving & Vector Cutting"]
                ]
              },
              media: {
                src: "assets/images/protosem/week-06/laser/material.png",
                alt: "Black 2mm Acrylic Sheet Material Stock",
                caption: "Black 2mm acrylic sheet stock used for the fabrication activity"
              }
            },
            {
              stepNumber: "04",
              stepLabel: "04 — SELECTED DESIGN / IMAGE",
              title: "Selected Design / Image",
              description: "I explored several design references and selected a ship illustration with detailed contours, internal artwork, and wave patterns. The design provided a suitable combination of surface engraving and perimeter cutting for the fabrication activity.",
              media: {
                src: "assets/images/protosem/week-06/laser/laser ref img.jpeg",
                alt: "Selected ship design reference from Pinterest",
                caption: "Selected ship design reference from Pinterest"
              }
            },
            {
              stepNumber: "05",
              stepLabel: "05 — IMAGE → DXF CONVERSION",
              title: "Image to DXF Conversion",
              description: "The selected ship artwork was converted into DXF vector geometry using Convertio and imported into RDWorks for further preparation and fabrication.",
              conversionTool: "Convertio",
              processSteps: [
                "Prepare artwork: Isolate contours, contrast, and distinct line features.",
                "Convert to DXF: Convert bitmap image into DXF vector geometry using Convertio.",
                "Import into RDWorks: Load the generated DXF file into the CAM workspace.",
                "Check geometry: Verify path continuity, scale, and node smoothness."
              ],
              techNote: "Process Workflow: Image → Vector/DXF → RDWorks. DXF encodes explicit geometric primitives required by the CNC motion controller.",
              media: {
                src: "assets/images/protosem/week-06/laser/img to dfx.png",
                alt: "Image to DXF Conversion Workflow using Convertio",
                caption: "Image-to-DXF vector conversion pipeline using Convertio"
              }
            },
            {
              stepNumber: "06",
              stepLabel: "06 — FILE PREPARATION",
              title: "File Preparation in RDWorks",
              description: "The converted DXF geometry was imported into RDWorks V8 for layout arrangement and CAD pre-flight inspection. The artwork geometry was checked for closed boundaries and sized appropriately for the 2mm acrylic workpiece.",
              checklistLabel: "PRE-FLIGHT CAD GEOMETRY CHECKLIST",
              checklist: [
                "Vector geometry cleaned and nodes smoothed",
                "Global scale and dimensions checked in millimeters",
                "Perimeter cutting paths verified as 100% closed loops",
                "Internal artwork separated from outer boundary geometry",
                "Duplicate and unwanted geometry removed"
              ],
              media: {
                src: "assets/images/protosem/week-06/laser/rdworks.png",
                alt: "File preparation and layout inspection in RDWorks",
                caption: "Importing and arranging CAD vector artwork in RDWorks"
              }
            },
            {
              stepNumber: "07",
              stepLabel: "07 — NESTING & LAYOUT IN RDWORKS",
              title: "Nesting & Layout in RDWorks",
              description: "The design was positioned within the usable material area in RDWorks, with separate colour-coded layers assigned for engraving and perimeter cutting. The layout was arranged to keep the artwork within the acrylic sheet while maintaining the required cutting and engraving regions.",
              media: [
                {
                  src: "assets/images/protosem/week-06/laser/in rdworks1.png",
                  alt: "Layer separation and layout arrangement in RDWorks",
                  caption: "Wireframe layout showing layer color assignments in RDWorks"
                },
                {
                  src: "assets/images/protosem/week-06/laser/in rdworks.png",
                  alt: "Nesting and toolpath preview in RDWorks",
                  caption: "Toolpath simulation preview with scan raster hatching"
                }
              ]
            },
            {
              stepNumber: "08",
              stepLabel: "08 — FINAL MACHINE SETTINGS",
              title: "Final Machine Settings",
              description: "Configured dedicated motion and laser power parameters in RDWorks for the 2.0mm black acrylic sheet. Assigned distinct layers for Laser Scan (engraving) and Laser Cut (perimeter cutting) with prioritized execution.",
              settingsTable: {
                columns: [
                  "Material",
                  "Thickness",
                  "Operation",
                  "Speed (mm/s)",
                  "Minimum Power (%)",
                  "Maximum Power (%)",
                  "Passes",
                  "Frequency (Hz)"
                ],
                rows: [
                  [
                    "Black Acrylic",
                    "2.0 mm",
                    "Laser Scan (Engrave)",
                    "100.00",
                    "30.0",
                    "30.0",
                    "1",
                    "20,000 Hz"
                  ],
                  [
                    "Black Acrylic",
                    "2.0 mm",
                    "Laser Cut (Perimeter)",
                    "100.00",
                    "30.0",
                    "30.0",
                    "1",
                    "20,000 Hz"
                  ]
                ]
              },
              note: "Laser parameters were calibrated in RDWorks with 20 kHz PWM pulse modulation to ensure clean surface vaporisation during scanning and smooth edge finishing during perimeter cutting.",
              media: [
                {
                  src: "assets/images/protosem/week-06/laser/machine scan.png",
                  alt: "Laser Scan Layer Settings (100 mm/s @ 30% Power)",
                  caption: "Laser Scan Layer Settings: Speed 100.00 mm/s | Min/Max Power 30.0%"
                },
                {
                  src: "assets/images/protosem/week-06/laser/machine cut.png",
                  alt: "Laser Cut Layer Settings (100 mm/s @ 30% Power)",
                  caption: "Laser Cut Layer Settings: Speed 100.00 mm/s | Min/Max Power 30.0%"
                }
              ]
            },
            {
              stepNumber: "09",
              stepLabel: "09 — LASER CUTTING PROCESS",
              title: "Laser Cutting Process",
              description: "The prepared toolpaths were transferred to the laser cutter and executed on the 2mm black acrylic sheet. The machine performed the programmed engraving and cutting operations to produce the physical design.",
              media: {
                src: "assets/images/protosem/week-06/laser/laser mchine cutting.mp4",
                type: "video",
                isVideo: true,
                alt: "Laser machine cutting and engraving the acrylic design",
                caption: "Laser machine executing the configured toolpaths"
              }
            },
            {
              stepNumber: "10",
              stepLabel: "10 — MACHINE CONTROL PANEL",
              title: "Machine Control Panel",
              description: "The machine control panel was used to operate and monitor the fabrication process, including positioning the laser head at the origin and executing the programmed job.",
              media: {
                src: "assets/images/protosem/week-06/laser/laser control panel.jpeg",
                alt: "Machine control panel used for operation",
                caption: "Digital control panel used for machine operation"
              }
            },
            {
              stepNumber: "11",
              stepLabel: "11 — HANDS-ON FABRICATION",
              title: "Hands-on Fabrication",
              description: "This hands-on activity gave me practical experience in operating a CNC laser cutter, observing how digital toolpaths translate into physical material removal and engraving on acrylic.",
              media: {
                src: "assets/images/protosem/week-06/laser/me doing laser.jpeg",
                alt: "Operating and supervising the laser cutting process",
                caption: "Operating and supervising the laser cutting process"
              }
            },
            {
              stepNumber: "12",
              stepLabel: "12 — FINAL OUTPUT",
              title: "Final Output",
              isFinal: true,
              description: "The completed piece combines engraved surface details with a cleanly cut outer profile, demonstrating the complete transition from digital design to physical fabrication.",
              driveLink: "https://drive.google.com/file/d/1chX9dWIYWD4TF9-AlQS-h4x14N2pT8GC/view",
              driveLinkLabel: "View High-Resolution Final Output on Google Drive",
              media: {
                src: "assets/images/protosem/week-06/laser/laser output.jpeg",
                alt: "Completed laser-cut and engraved ship artifact",
                caption: "Completed laser-cut and engraved ship artifact"
              }
            }
          ]
        },

        // POST-ACTIVITY SYNTHESIS (FACULTY REQUIREMENTS: PROBLEMS, REFLECTION, SOURCE FILES)
        postPracticalSections: [
          {
            sectionNumber: "13",
            sectionLabel: "13 — PROBLEMS & SOLUTIONS",
            heading: "Problems Faced & Solutions",
            content: "Technical challenges and solutions encountered during the fabrication activity.",
            troubleTable: {
              columns: ["Problem", "Cause", "Solution", "Outcome"],
              rows: [
                [
                  "It was initially unclear which parts of the design should be scanned and which should be cut.",
                  "The imported design contained both internal artwork and outer boundary geometry.",
                  "The geometry was reviewed in RDWorks and assigned to separate scan and cut operations.",
                  "The design was correctly prepared for fabrication."
                ]
              ]
            }
          },
          {
            sectionNumber: "14",
            sectionLabel: "14 — REFLECTION",
            heading: "Reflection",
            reflectionSections: [
              {
                title: "01 — WHAT I LEARNED",
                content: "Learned how to prepare vector designs, work with RDWorks, assign engraving and cutting layers, and translate digital geometry into a physical acrylic artifact."
              },
              {
                title: "02 — CHALLENGES FACED",
                content: "A key challenge was identifying which parts of the design should be engraved and which should be cut, especially where internal artwork and the outer boundary overlapped."
              },
              {
                title: "03 — SKILLS GAINED",
                content: "Improved my skills in vector preparation, file verification, laser parameter configuration, RDWorks workflow, and safe machine operation."
              },
              {
                title: "04 — FUTURE IMPROVEMENTS",
                content: "In future, I would verify the complete file configuration and machine parameters more carefully before fabrication to reduce preparation errors and improve the final result."
              }
            ]
          },
          {
            sectionNumber: "15",
            sectionLabel: "15 — SOURCE FILES",
            heading: "Source Files",
            content: "Project CAD and design source files for the laser cutting activity. Source files are provided for reference and download. Links should be verified before final submission.",
            sourceFiles: [
              {
                format: "DXF",
                name: "DXF Source File",
                description: "2D CAD vector interchange file with separated engraving and cutting paths.",
                status: "Available on Google Drive",
                url: "https://drive.google.com/file/d/1llFQkejwq2vZRBWIIuvCDunJk4cQd-I7/view?usp=sharing",
                filename: "laser-cutting-ship.dxf"
              },
              {
                format: "AI",
                name: "AI Source File",
                description: "Master vector artwork file with editable layers and path outlines.",
                status: "Available on Google Drive",
                url: "https://drive.google.com/file/d/1chX9dWIYWD4TF9-AlQS-h4x14N2pT8GC/view",
                filename: "laser-cutting-ship.ai"
              }
            ],
            additionalLinks: [
              {
                label: "Pinterest Ship Design Reference Source",
                url: "https://in.pinterest.com/pin/211106363776993189/",
                isExternal: true
              }
            ]
          }
        ]
      },
      {
        id: "3d-printing",
        label: "3D Printing",
        badge: "FABRICATION TRACK 02",
        title: "3D Printing",
        intro: "3D printing is an additive manufacturing process used to create physical objects from digital 3D models. Instead of removing material from a larger block, the printer builds an object layer by layer. During this activity, I explored the complete workflow from selecting an existing 3D model to preparing it in slicing software and producing the physical object using a 3D printer.",

        // 3D Printing Educational Introduction (Concise Background & Theory)
        educationalSections: [
          {
            sectionNumber: "01",
            sectionLabel: "01 — WHAT IS 3D PRINTING?",
            heading: "What is 3D Printing?",
            content: "3D printing is an additive manufacturing process in which a digital 3D model is converted into a physical object by depositing material sequentially layer by layer. Each cross-sectional layer is bonded to the previous one until the complete three-dimensional part is formed.",
            media: {
              src: "assets/images/protosem/week-06/3D printing/3d.png",
              alt: "3D Printing Technical Illustration — Additive Layer Deposition Principle",
              caption: "3D Printing Technical Illustration — Additive Layer Deposition Principle"
            }
          },
          {
            sectionNumber: "02",
            sectionLabel: "02 — HOW DOES 3D PRINTING WORK?",
            heading: "How Does 3D Printing Work?",
            content: "The additive manufacturing workflow transforms virtual CAD data into physical parts through a series of discrete digital and mechanical stages.",
            workflowSequence: [
              { label: "3D CAD Model" },
              { label: "STL Mesh Generation" },
              { label: "Slicing Software" },
              { label: "G-Code Generation" },
              { label: "Layer Deposition" },
              { label: "Physical Object" }
            ]
          },
          {
            sectionNumber: "03",
            sectionLabel: "03 — TYPES OF 3D PRINTING TECHNOLOGIES",
            heading: "Types of 3D Printing Technologies",
            content: "Different additive manufacturing processes use specialized material states and energy sources to build physical components.",
            types: [
              {
                name: "FDM / FFF",
                tag: "Thermoplastic Filament Extrusion",
                description: "Melts and deposits continuous thermoplastic filaments layer by layer. The primary technology utilized in this activity."
              },
              {
                name: "SLA",
                tag: "Resin Photopolymerization",
                description: "Uses ultraviolet light to cure liquid photopolymer resin into high-resolution smooth parts."
              },
              {
                name: "SLS",
                tag: "Powder Bed Fusion",
                description: "Selectively sinters polymer powder particles using a laser, enabling self-supporting complex assemblies."
              },
              {
                name: "DLP",
                tag: "Light Projector Curing",
                description: "Employs a digital light projector screen to cure an entire layer of liquid resin simultaneously."
              }
            ]
          },
          {
            sectionNumber: "04",
            sectionLabel: "04 — COMMON 3D PRINTING MATERIALS",
            heading: "Common 3D Printing Materials",
            content: "Material selection determines the mechanical strength, thermal performance, flexibility, and surface finish of the printed object.",
            materialsCards: [
              {
                name: "PLA",
                type: "Thermoplastic Filament",
                description: "Biodegradable thermoplastic known for dimensional stability, low shrinkage, and ease of printing. Selected for this activity."
              },
              {
                name: "ABS",
                type: "Engineering Thermoplastic",
                description: "High-strength, impact-resistant polymer requiring an enclosed heated chamber."
              },
              {
                name: "PETG",
                type: "Durable Copolyester",
                description: "Combines the ease of PLA with enhanced impact strength and moisture resistance."
              },
              {
                name: "TPU",
                type: "Flexible Elastomer",
                description: "Flexible polymer engineered for vibration damping, elasticity, and impact absorption."
              },
              {
                name: "Resin",
                type: "Liquid Photopolymer",
                description: "High-resolution liquid resin used in SLA/DLP for miniatures and intricate patterns."
              }
            ]
          },
          {
            sectionNumber: "05",
            sectionLabel: "05 — ADVANTAGES & LIMITATIONS",
            heading: "Advantages & Limitations of 3D Printing",
            content: "Understanding the capabilities and constraints of additive manufacturing guides effective Design for Additive Manufacturing (DFAM).",
            advantages: [
              "Direct digital-to-physical fabrication without requiring dedicated tooling or molds",
              "Supports complex organic geometries, internal cavities, and intricate undercuts",
              "Rapid iteration cycle from CAD model modification to physical evaluation",
              "High material efficiency by depositing filament only where structurally required"
            ],
            limitations: [
              "Anisotropic mechanical strength (inter-layer Z-bonding weaker than planar XY toolpaths)",
              "Longer fabrication cycle times for high-volume manufacturing batches",
              "Steep geometry overhangs exceeding 45° require support structures",
              "Stepped layer lines require surface post-processing for smooth cosmetic finishes"
            ]
          }
        ],

        // Faculty-Required Practical Documentation (01 — 11 Sequential Structure)
        practicalSection: {
          eyebrow: "HANDS-ON WORKFLOW",
          heading: "My 3D Printing Activity",
          intro: "A structured digital fabrication case study documenting the end-to-end additive manufacturing workflow on the Bambu Lab H2S — from model discovery and CAM slicing to hardware limits, subtractive comparison, parameter configuration, and physical output.",
          steps: [
            {
              stepNumber: "01",
              stepLabel: "01 — PRINTER DETAILS",
              title: "Printer Details",
              description: "The Bambu Lab H2S was used for the practical 3D printing activity. It is an enclosed high-speed FDM additive manufacturing platform equipped with an active heated chamber and dual-gear direct extruder for engineering and standard thermoplastic polymers.",
              specTable: {
                columns: ["Parameter", "Specification"],
                rows: [
                  ["Make", "Bambu Lab"],
                  ["Model", "H2S"],
                  ["Technology", "Fused Deposition Modeling (FDM)"],
                  ["Build Volume", "340 × 320 × 340 mm"],
                  ["Nozzle Size", "0.4 mm (Hardened Steel)"],
                  ["Max Toolhead Speed", "1000 mm/s"],
                  ["Max Acceleration", "20,000 mm/s²"],
                  ["Supported Materials", "PLA, ABS, PETG, TPU, PC, PA, Carbon/Glass Fiber Reinforced Polymers"]
                ]
              },
              media: {
                src: "assets/images/protosem/week-06/3D printing/H2s spec.png",
                alt: "Bambu Lab H2S 3D Printer Specification",
                caption: "Bambu Lab H2S — printer specification and hardware reference"
              }
            },
            {
              stepNumber: "02",
              stepLabel: "02 — SLICER & MATERIAL",
              title: "Slicer & Material",
              description: "Bambu Studio was configured as the CAM slicing software to prepare the digital geometry for fabrication. White PLA Basic thermoplastic filament was selected for its high dimensional accuracy, uniform layer bonding, and predictable thermal behavior on the textured PEI build plate.",
              specTable: {
                columns: ["Parameter", "Specification"],
                rows: [
                  ["Slicer / Software", "Bambu Studio"],
                  ["Material", "PLA Basic"],
                  ["Material Type", "PLA / Thermoplastic Filament"],
                  ["Filament Diameter", "1.75 mm"],
                  ["Print Plate", "Textured PEI Plate"],
                  ["Material Application", "Rapid Prototyping & High-Detail Visual Models"]
                ]
              },
              media: {
                src: "assets/images/protosem/week-06/3D printing/pla.png",
                alt: "PLA Basic — thermoplastic filament used for the 3D printing activity",
                caption: "PLA Basic — thermoplastic filament used for the 3D printing activity"
              }
            },
            {
              stepNumber: "03",
              stepLabel: "03 — PRINTER LIMITS & CAPABILITIES",
              title: "Printer Limits & Capabilities",
              description: "Evaluation of the practical capabilities and operational constraints observed during the Bambu Lab H2S fabrication workflow.",
              capabilitiesHeader: "CAPABILITIES",
              capabilities: [
                "High-speed CoreXY motion architecture supporting up to 1000 mm/s speed and 20,000 mm/s² acceleration",
                "Large 340 × 320 × 340 mm enclosed build chamber accommodating large-scale single-piece prototypes",
                "Automated multi-point bed leveling and active vibration compensation for reliable first-layer deposition",
                "High-temperature hardened steel nozzle (up to 300 °C) supporting carbon-fiber and engineering composites"
              ],
              limitationsHeader: "PRACTICAL LIMITATIONS",
              limitations: [
                "Anisotropic structural strength: inter-layer adhesion along the Z-axis is inherently weaker than planar XY toolpaths",
                "Steep geometry overhangs exceeding 45° require support structures to prevent sagging and defect formation",
                "High thermal-shrinkage polymers require chamber pre-heating to prevent corner lifting and warping",
                "Extrusion resolution is constrained by the 0.4 mm nozzle orifice, limiting minimum feature wall thickness"
              ]
            },
            {
              stepNumber: "04",
              stepLabel: "04 — WHY THE OBJECT CANNOT BE MADE SUBTRACTIVELY",
              title: "Why the Object Cannot Be Made Subtractively",
              description: "The organic geometry of the selected Baby Groot model presents critical geometric and physical constraints that make conventional subtractive CNC machining unfeasible compared to additive manufacturing.",
              manufacturingComparison: {
                subtractive: {
                  title: "Subtractive CNC Limitations",
                  points: [
                    {
                      title: "Enclosed Undercuts & Pockets",
                      desc: "Deep cavities beneath the chin, arms, and overhangs cannot be accessed by rotating endmills without severe tool-shank collisions."
                    },
                    {
                      title: "Fragile Organic Features",
                      desc: "Delicate fingers and fine micro-bark fissures risk tool deflection, high cutting forces, and workpiece breakage."
                    },
                    {
                      title: "Severe Material Waste",
                      desc: "Carving this complex organic model from a solid billet would machine away over 80% of raw stock into chips."
                    }
                  ]
                },
                additive: {
                  title: "Additive 3D Printing Advantages",
                  points: [
                    {
                      title: "Layer-by-Layer Deposition",
                      desc: "Material is built upward layer by layer, freely creating complex internal hollows and overhangs with auto-generated tree supports."
                    },
                    {
                      title: "Zero Tooling Forces",
                      desc: "Non-contact 0.4mm nozzle deposits molten filament without exerting physical stress or vibration on fragile features."
                    },
                    {
                      title: "Net-Shape Efficiency",
                      desc: "Material is placed only where structurally needed, using a 15% internal grid infill to conserve raw filament."
                    }
                  ]
                }
              },
              dfamCallout: {
                badge: "DFAM PRINCIPLE · DESIGN FOR ADDITIVE MANUFACTURING",
                title: "Geometric Complexity Decoupled from Manufacturing Cost",
                text: "In subtractive machining, every additional undercut, curve, and pocket requires extra fixturing and tooling setups, exponentially increasing cost. In additive manufacturing, geometric complexity (organic bark fissures, deep overhangs, intricate curves) is 'free'—it requires zero additional tooling setups or specialized cutters."
              }
            },
            {
              stepNumber: "05",
              stepLabel: "05 — STL DEFINITION",
              title: "STL Definition",
              description: "STL (Standard Tessellation Language / Stereolithography) is the industry-standard 3D file format used to represent surface geometry for additive manufacturing workflows. It translates continuous CAD surfaces into an unstructured triangulated mesh of planar facets, where each triangle is defined by three vertex coordinates and a surface normal vector indicating outer orientation. Finer meshes with higher triangle counts approximate curved surfaces more accurately without introducing geometric faceting. Slicing software processes this triangular mesh to generate horizontal planar slices and CNC G-code toolpaths.",
              media: {
                src: "assets/images/protosem/week-06/3D printing/stl_mesh_concept.svg",
                alt: "STL Data Transformation Pipeline: CAD Surface to Triangular Mesh to Sliced Layers",
                caption: "STL represents 3D surface geometry as a triangular mesh for slicing and additive manufacturing."
              }
            },
            {
              stepNumber: "06",
              stepLabel: "06 — SELECTED STL FILE",
              title: "Selected STL File",
              description: "For the fabrication activity, I explored 3D repositories and selected the 'Heavy Metal Groot' model by Max666 from Printables. The model was provided in standard STL format (heavy_metal_groot_01.stl). It was selected for its rich organic surface textures, delicate hand gesture, and challenging overhang features, which provided an authentic benchmark to evaluate 0.20 mm layer height resolution, tree support separation, and FDM surface reproduction.",
              media: {
                src: "assets/images/protosem/week-06/3D printing/source (1).png",
                alt: "Selected 3D model from Printables used for the fabrication activity",
                caption: "Selected 3D model from Printables used for the fabrication activity"
              },
              model3d: {
                src: "assets/images/protosem/week-06/3D printing/lakshana.glb",
                fallbackSrc: "public/models/my-model.glb",
                alt: "Interactive 3D Model for 3D Printing",
                title: "Interactive 3D CAD Model Preview",
                tag: "INTERACTIVE 3D CAD MODEL",
                caption: "Interactive 3D mesh preview of the selected Baby Groot model."
              },
              driveLink: "https://drive.google.com/file/d/19sPXRUei5-cXP3oJs762uOR7fD6HcWjU/view?usp=drive_link",
              driveLinkLabel: "View STL Source File on Google Drive"
            },
            {
              stepNumber: "07",
              stepLabel: "07 — SLICER SETTINGS",
              title: "Slicer Settings",
              description: "The STL file was imported into Bambu Studio and configured using the verified 0.20mm Standard process profile for the Bambu Lab H2S. Slicer parameters were tuned to achieve high surface fidelity on organic contours while maintaining robust first-layer bed adhesion.",
              settingsTable: {
                columns: ["Setting", "Final Value"],
                rows: [
                  ["Nozzle Temperature", "220 °C"],
                  ["Bed Temperature", "55 °C"],
                  ["Layer Height", "0.20 mm"],
                  ["Initial Layer Height", "0.20 mm"],
                  ["Infill", "15%"],
                  ["Infill Pattern", "Grid"],
                  ["Wall / Shell Count", "2 Walls"],
                  ["Print Speed", "Standard (@BBL H2S 0.20mm Profile)"],
                  ["Supports", "Auto Tree Supports"],
                  ["Adhesion Type", "Textured PEI Plate"]
                ]
              },
              note: "The 0.20mm layer height with 15% grid infill provided optimal structural rigidity and smooth surface definition across the character's organic facial and hand contours.",
              media: {
                src: "assets/images/protosem/week-06/3D printing/in bambu.png",
                alt: "Final Bambu Studio slicer configuration used for the print",
                caption: "Final Bambu Studio slicer configuration used for the print"
              }
            },
            {
              stepNumber: "08",
              stepLabel: "08 — PRINT TIME & MATERIAL WEIGHT",
              title: "Print Time & Material Weight",
              description: "Comparison between the slicer-calculated print estimates generated in Bambu Studio and the physical fabrication metrics recorded on the Bambu Lab H2S printer.",
              specTable: {
                columns: ["Parameter", "Estimated (Bambu Studio)", "Actual Observed"],
                rows: [
                  ["Print Time", "1h 33m", "—"],
                  ["Material Weight", "28.46 g", "27.20 g"]
                ]
              },
              observation: "The estimated print time (1h 33m) and filament usage (28.46 g) were calculated by Bambu Studio slicer based on the 0.20mm layer height and 15% infill configuration."
            },
            {
              stepNumber: "09",
              stepLabel: "09 — 3D PRINTING PROCESS",
              title: "3D Printing Process",
              description: "The sliced G-code toolpaths were transferred to the Bambu Lab H2S 3D printer to initiate the physical fabrication process. The printer's heated nozzle precisely melted and deposited PLA thermoplastic filament onto the textured PEI build plate layer by layer, progressively building the three-dimensional geometry from bottom to top according to the sliced cross-sectional contours.",
              media: {
                src: "assets/images/protosem/week-06/3D printing/machine doing.mp4",
                type: "video",
                isVideo: true,
                alt: "Bambu 3D printer executing layer-by-layer material deposition",
                caption: "Bambu 3D printer executing layer-by-layer material deposition"
              }
            },
            {
              stepNumber: "10",
              stepLabel: "10 — HANDS-ON FABRICATION",
              title: "Hands-on Fabrication",
              description: "During the fabrication process, I actively monitored the 3D printer's operation and calibration parameters to ensure consistent first-layer bed adhesion, skirt extrusion, and smooth layer bonding. Direct machine observation provided practical experience in supervising additive manufacturing dynamics, nozzle temperature stability, and real-time print execution.",
              media: {
                src: "assets/images/protosem/week-06/3D printing/me working.jpeg",
                alt: "Monitoring first-layer adhesion and active print execution",
                caption: "Monitoring first-layer adhesion and active print execution"
              }
            },
            {
              stepNumber: "11",
              stepLabel: "11 — FINAL RESULT",
              title: "Final Result",
              isFinal: true,
              description: "The completed 3D print in white PLA Basic exhibits consistent 0.20 mm layer stacking, crisp reproduction of fine organic bark textures, and clean overhang resolution across the character's hand gesture.",
              driveLink: "https://drive.google.com/file/d/1eTWxgoGG95RZdxxBQETuLDDoEIMY0A7O/view?usp=drive_link",
              driveLinkLabel: "View High-Resolution 3D Printed Outcome on Google Drive",
              images: [
                {
                  src: "assets/images/protosem/week-06/3D printing/output1.jpeg",
                  alt: "Final 3D-printed object — completed PLA print",
                  caption: "Final 3D-printed object — completed PLA print"
                },
                {
                  src: "assets/images/protosem/week-06/3D printing/output2.jpeg",
                  alt: "Isometric detail view showing layer adhesion and surface finish",
                  caption: "Isometric detail view showing layer adhesion and surface finish"
                }
              ]
            },
            {
              stepNumber: "12",
              stepLabel: "12 — SOURCE FILES",
              title: "Source Files",
              description: "Digital design and slicer manufacturing files for the 3D printing activity. Source files are provided for reference and download. Links should be verified before final submission.",
              sourceFiles: [
                {
                  format: "STL",
                  name: "STL Source File",
                  description: "3D surface polygon mesh file (heavy_metal_groot_01.stl) used for slicing and additive fabrication.",
                  status: "Available on Google Drive",
                  url: "https://drive.google.com/file/d/19sPXRUei5-cXP3oJs762uOR7fD6HcWjU/view?usp=drive_link",
                  filename: "heavy_metal_groot_01.stl"
                },
                {
                  format: "3MF",
                  name: "3MF Printer Project",
                  description: "Complete Bambu Studio project archive containing 3D geometry, plate orientation, and slicing process presets.",
                  status: "Available on Google Drive",
                  url: "https://drive.google.com/file/d/1eTWxgoGG95RZdxxBQETuLDDoEIMY0A7O/view?usp=drive_link",
                  filename: "heavy_metal_groot.3mf"
                }
              ]
            },
            {
              stepNumber: "13",
              stepLabel: "13 — REFERENCES & CREDITS",
              title: "References & Credits",
              description: "External technical resources, 3D model sources, and software tools utilized during this digital fabrication activity.",
              references: [
                {
                  category: "3D MODEL SOURCE",
                  title: "Printables — Heavy Metal Groot",
                  description: "Original 3D CAD character design created by creator Max666 and published on the Printables 3D model repository.",
                  url: "https://www.printables.com/model/16627-heavy-metal-groot/files"
                },
                {
                  category: "HARDWARE SPEC",
                  title: "Bambu Lab — H2S 3D Printer",
                  description: "Hardware specifications, motion kinematics, and multi-material capability documentation for the Bambu Lab H2S platform.",
                  url: "https://bambulab.com"
                },
                {
                  category: "SLICING SOFTWARE",
                  title: "Bambu Studio — Slicing & Toolpath Engine",
                  description: "Open-source slicing software used for model orientation, layer generation, support configuration, and G-code export.",
                  url: "https://bambulab.com/en/download/studio"
                }
              ]
            }
          ]
        },

        // Post-Practical Faculty Synthesis Section (Reflection 4-Box Grid)
        postPracticalSections: [
          {
            sectionNumber: "14",
            sectionLabel: "14 — REFLECTION",
            heading: "Reflection",
            content: "Personal synthesis of key learnings, fabrication challenges, technical skills developed, and future optimization pathways in additive manufacturing.",
            reflectionSections: [
              {
                title: "01 — WHAT I LEARNED",
                content: "Learned the complete additive manufacturing workflow from STL discovery on Printables, slicing parameter optimization in Bambu Studio, and layer-by-layer extrusion on the Bambu Lab H2S."
              },
              {
                title: "02 — CHALLENGES FACED",
                content: "Balancing organic overhangs and tree supports to prevent surface scarring while maintaining clean first-layer adhesion on the textured PEI plate."
              },
              {
                title: "03 — SKILLS GAINED",
                content: "Developed practical competency in CAM 3D slicing, layer height configuration, infill selection, tree support management, and additive printer operation."
              },
              {
                title: "04 — FUTURE IMPROVEMENTS",
                content: "In future prints, I would calibrate variable layer heights across fine organic details and experiment with custom support blockers to minimize post-processing."
              }
            ]
          }
        ]
      }
    ],

    // Final Takeaways Section
    finalTakeaways: {
      heading: "What Did We Take Away From Week 6?",
      progressionLabel: "DIGITAL-TO-PHYSICAL FABRICATION CONTINUUM",
      progression: [
        { step: "Design", label: "2D & 3D Modeling" },
        { step: "Prepare", label: "DXF & Slicing" },
        { step: "Configure", label: "Speeds & Powers" },
        { step: "Fabricate", label: "CNC & Extrusion" },
        { step: "Output", label: "Physical Prototypes" }
      ],
      cards: [
        {
          number: "01",
          title: "Subtractive Fabrication",
          description: "Mastered RDWorks vector layering, DXF conversions, laser focal calibration, and scan vs. cut speed/power parameters."
        },
        {
          number: "02",
          title: "Additive Manufacturing",
          description: "Navigated 3D slicing in Bambu Studio, build plate orientation, layer heights, support structures, and filament extrusion."
        },
        {
          number: "03",
          title: "Machine Control Systems",
          description: "Operated physical CNC laser control panels and multi-axis 3D printers safely and effectively in the makerspace."
        },
        {
          number: "04",
          title: "Design for Manufacturing",
          description: "Learned how digital tolerances, material thicknesses, and kerf impact the structural integrity of physical parts."
        },
        {
          number: "05",
          title: "Digital to Physical",
          description: "Transformed digital files into high-accuracy physical artifacts, bridging CAD software with tactile engineering."
        }
      ],
      statement: "Week 06 took us across the digital fabrication spectrum — from 2D vector conversion and CNC laser cutting to 3D slicing and additive manufacturing. Through hands-on machine operation, we transformed digital screen designs into tangible, physical engineering prototypes."
    },

    technologies: [
      "Digital Fabrication",
      "CNC Laser Cutting",
      "Laser Engraving",
      "RDWorks Software",
      "DXF Vector Formatting",
      "Machine Control Panel",
      "3D Printing (FDM)",
      "Bambu Studio Slicing",
      "Additive Layer Extrusion",
      "Printables Repositories",
      "Physical Prototyping"
    ],
    learning: "Mastered end-to-end digital fabrication workflows across subtractive CNC laser cutting and additive 3D printing — from CAD/DXF preparation and software slicing to machine operation and physical artifact production.",
    outcome: "Fabricated an intricately engraved and cut wooden ship model via CNC laser machine, and 3D printed a physical prototype using Bambu Studio and high-precision additive manufacturing.",
    reflection: "Transforming digital geometries on a screen into solid, tactile physical prototypes is the essence of rapid prototyping — bridging creative digital design with real-world material physics.",
    links: []
  }
];

// Generate Weeks 07 through 20 as data-driven structural upcoming entries (no fabricated content)
for (let i = 7; i <= 20; i++) {
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
