const en = {
  navbar: {
  services: "Services",
  solutions: "Solutions",
  process: "How I work",
  industries: "Industries",
  contact: "Contact",
  call: "Book a call",
},

hero: {
  badge: "Independent software studio & technical consulting",

  titleStart: "Custom software to solve",
  titleHighlight: "real problems.",

  description:
    "I build custom software, automations, and integrations for businesses, entrepreneurs, and professionals, using applied AI when it actually adds value.",

  primaryCta: "Tell me what you want to solve",
  secondaryCta: "Book a call",

  metricCustom: "Custom-built",
  metricPrototype: "First prototype",
  metricSupport: "Direct support",

  videoBadge: "VIDEO SPEC // INTRODUCTION",
  playLabel: "Play Carola introduction video",

  videoTitle: "Meet Carola",
  videoDescription: "How I work and my technical approach",

  watchIntro: "Watch intro",

  directWork: "No middlemen: direct engineering collaboration",
},

  services: {
  badge: "Diagnosis & Scope",
  title: "Software and automation services",

  description:
    "I build digital solutions that automate tasks, connect tools, and turn manual processes into systems that work.",

  manual: {
    title: "Less manual work",

    description:
      "I automate repetitive workflows that consume operational time: spreadsheet synchronization, recurring billing, automated delivery and smart alerts.",

    diagramTitle: "Automated pipeline",
    diagramResult: "12h / week saved",

    step1: "Sheet",
    step2: "Rules",
    step3: "Invoice",
  },

  connected: {
    title: "Everything connected",

    description:
      "WhatsApp, forms, payment gateways, CRM systems, databases and legacy systems working together in real time without duplicated data.",

    diagramTitle: "Synchronized core",
    diagramResult: "No lost leads",

    step1: "WhatsApp",
    step2: "API Core",
    step3: "CRM/DB",
  },

  system: {
    title: "Your own system",

    description:
      "Internal tools built around your exact operation: customer portals, analytics dashboards, back offices and tracking without relying on expensive generic software.",

    diagramTitle: "Custom dashboard",
    diagramResult: "Full control",
  },

  ai: {
    title: "AI where it actually helps",

    description:
      "No hype or empty promises: assistants built around your own documentation, structured data extraction from PDFs, automatic classification and qualified 24/7 support.",

    diagramTitle: "Semantic RAG search",
    diagramResult: "Audited data",

    step1: "Document",
    step2: "Vectors",
    step3: "Answer",
  },
},

  process: {
  badge: "Clear Methodology",
  title: "How I work",

  description:
    "A transparent, predictable process with continuous delivery. No fine print or ambiguous technical specifications.",

  steps: [
    {
      number: "01",
      title: "Understand",
      description:
        "We review how you work today, identify real bottlenecks and define what needs to improve before writing a single line of code.",
      icon: "search",
      footer: "INITIAL DIAGNOSIS",
    },

    {
      number: "02",
      title: "Propose",
      description:
        "We define the exact technical solution, scope, pricing and estimated delivery timeline. No hidden surprises or extra costs.",
      icon: "assignment_turned_in",
      footer: "FIXED PROPOSAL",
    },

    {
      number: "03",
      title: "Build",
      description:
        "I develop the solution with visible progress and functional demos so we can validate that it matches your operational needs.",
      icon: "code",
      footer: "WEEKLY DEMOS",
    },

    {
      number: "04",
      title: "Implement",
      description:
        "We test the system together, train your team, deliver the complete solution and support the launch process.",
      icon: "rocket_launch",
      footer: "GO LIVE",
    },
  ],
},

  industries: {
  badge: "Industries & Use Cases",

  title: "Every business works differently.",

  description:
    "I build solutions for different industries, adapting the software architecture to each company's operating model.",

  consult: "Ask about this industry",

  items: {
    professional: {
      title: "Professional services",

      description:
        "Law firms, consultants and agencies. Client portals, case management, recurring billing and automated progress reports.",
    },

    ecommerce: {
      title: "E-commerce & digital retail",

      description:
        "Multi-channel inventory synchronization, delivery tracking with messaging bots and real-time operating margin dashboards.",
    },

    education: {
      title: "Education & academies",

      description:
        "Private course platforms, automatic certificate generation, subscription payments and student progress tracking.",
    },

    health: {
      title: "Healthcare & clinics",

      description:
        "Smart appointment scheduling, WhatsApp reminders to reduce no-shows and protected patient records.",
    },

    realestate: {
      title: "Real estate & development",

      description:
        "Automatic lead distribution to sales agents, interactive property catalogs and online unit reservations.",
    },

    operations: {
      title: "Operations teams",

      description:
        "Internal logistics, field staff tracking, digital work reports and purchasing control without unnecessary friction.",
    },
  },

  otherTitle: "Your industry isn't listed?",

  otherDescription:
    "No problem. The principles of software and data engineering apply across industries. Tell me how you work and we'll design the right architecture.",

  otherCta: "Tell me about your case",
},

  solutions: {
  badge: "Real Architectures",
  title: "This is what a working solution looks like",

  description:
    "Technical reference models with clean diagrams and wireframes designed to solve specific operational bottlenecks.",

  tabs: {
    consultas: "Inquiry automation",
    gestion: "Custom management system",
    asistente: "Assistant on real data",
    pagos: "Payments & bookings",
  },

  consultas: {
    badge: "LIVE PRODUCTION FLOW",

    title:
      "100% automated capture, classification and routing",

    description:
      "Every inquiry from forms or ad campaigns enters the system, is validated, categorized by urgency and estimated value, and sent to the CRM while automatic follow-ups are triggered.",

    bullets: [
      "Immediate response to the client in under 30 seconds",
      "Internal notifications through Slack or Telegram",
      "No more lost or unattended inquiries",
    ],

    diagramTitle: "OPERATIONAL FLOW",

    node1: {
      title: "Web Form / Typeform",
      description: "Secure webhook with validated payload",
      status: "Inbound",
    },

    node2: {
      title: "Classification & Normalization",
      description: "Data parsing and priority assignment",
      status: "Logic Engine",
    },

    outcome1: {
      title: "Central CRM",
      description: "Immediate update",
    },

    outcome2: {
      title: "Instant Notification",
      description: "Slack / Email / WhatsApp",
    },
  },

  gestion: {
    badge: "CUSTOM BACKOFFICE",

    title:
      "The tool your team actually needs",

    description:
      "Clean interfaces without overloaded menus or useless features. Manage orders, deliveries, billing and key metrics in one screen with configurable user roles.",

    advantageTitle: "Structural advantage",

    advantageDescription:
      "You own your database 100%. No monthly fees based on user count and no artificial limits.",

    dashboardTitle: "Operations Control Panel",

    metrics: [
      {
        label: "Active orders",
        value: "142",
      },
      {
        label: "Resolution rate",
        value: "98.4%",
      },
      {
        label: "Average time",
        value: "4.2 min",
      },
    ],

    tableHeaders: {
      client: "CLIENT / PROJECT",
      status: "STATUS",
      time: "TIME",
    },

    rows: [
      {
        client: "Alvear Law Firm",
        status: "Completed",
        time: "12 min ago",
        type: "success",
      },
      {
        client: "Express Logistics",
        status: "In progress",
        time: "28 min ago",
        type: "process",
      },
      {
        client: "Belgrano Clinic",
        status: "Synchronized",
        time: "1 hour ago",
        type: "success",
      },
    ],
  },

  asistente: {
    badge: "SAFE APPLIED AI",

    title:
      "Answers based only on your documents",

    description:
      "Avoid hallucinations and incorrect information. I build retrieval-augmented systems that index manuals, contracts, pricing or catalogs and answer with verifiable citations.",

    security:
      "Your data is not used to retrain public models.",

    questionLabel: "CLIENT QUESTION",

    question:
      "What does the service warranty cover and how do I open a claim?",

    searching: "Searching in:",

    source: "Service_Contract_v3.pdf (Page 14)",

    answerLabel: "AUDITED ANSWER (100% ACCURACY)",

    answer:
      "The warranty covers implementation defects for 12 consecutive months. To open a claim, create a ticket from the portal or reply to this email with your order ID.",

    sourceLabel:
      "Source: Clause 9.2 · Automatic validation",
  },

  pagos: {
    badge: "MONETIZATION & BOOKINGS",

    title:
      "Payments and scheduling synchronized end to end",

    description:
      "Clients choose a date, pay through an integrated payment gateway and instantly receive confirmation and a calendar invitation.",

    zeroAbsenceTitle: "Zero no-shows:",

    zeroAbsenceDescription:
      "Preventive WhatsApp reminders 24 hours and 2 hours before every appointment, with rescheduling based on your rules.",

    steps: [
      {
        icon: "event_available",
        title: "1. Booking",
        description: "Google / Outlook",
      },
      {
        icon: "credit_card",
        title: "2. Payment",
        description: "Secure gateway",
      },
      {
        icon: "receipt_long",
        title: "3. Invoice",
        description: "Tax / Stripe Tax",
      },
      {
        icon: "forum",
        title: "4. WhatsApp",
        description: "Reminder bot",
        type: "success",
      },
    ],

    resultTitle: "Proven result:",

    result:
      "85% fewer no-shows and 0 hours spent manually coordinating payments.",
  },
},
  contact: {
  badge: "Start Now",

  title: "Tell me what you want to solve",

  description:
    "Choose the contact option that works best for you. No endless forms or unnecessary bureaucracy: response within 24 business hours.",

  recommended: "RECOMMENDED",

  diagnostic: {
    title: "Complete the diagnosis",

    description:
      "If you already have a specific problem, process or project in mind, answer 5 short questions to receive an initial assessment.",

    button: "Start diagnosis (3 min)",
  },

  call: {
    title: "Book a call",

    description:
      "Let's schedule a 30-minute to understand your project, evaluate technical feasibility and define the next steps.",

    button: "Choose a time",
  },

  whatsapp: {
    title: "Talk on WhatsApp",

    description:
      "Have a quick question or prefer direct contact? Send me a message and I'll reply personally during the day.",

    button: "Message me on WhatsApp",
    
    message: 
      "Hi Carola, I found your CarolaCodes website and I'd like to tell you about an idea/problem I want to solve with software. Can we talk?",
  },

  emailPrefix:
    "Prefer email? Write to me directly at",
},

footer: {
  description:
    "High-impact software engineering and architectural consulting for modern, scalable and results-driven digital products.",

  contactTitle: "Direct Contact",

  whatsapp: "WhatsApp: +54 9 3794 404000",

  schedule: "Hours: Mon - Fri 09:00 - 22:00 ART",

  socialTitle: "Social & Connect",

  rights: "All rights reserved.",

  terms: "Terms",

  privacy: "Privacy",
},

legal: {
  terms: {
    title: "Terms and Conditions",

    intro:
      "By using this website, you agree to the following terms and conditions.",

    sections: [
      {
        title: "Use of the website",
        text:
          "This website is intended for informational and commercial purposes related to the services offered by CarolaCodes.",
      },
      {
        title: "Services",
        text:
          "The scope, timelines, pricing and conditions of each project are agreed individually before any work begins.",
      },
      {
        title: "Intellectual property",
        text:
          "The content, design and materials on this website belong to CarolaCodes unless otherwise stated.",
      },
      {
        title: "Limitation of liability",
        text:
          "The information published on this website is general in nature and does not guarantee specific results.",
      },
      {
        title: "Changes",
        text:
          "These terms may be updated when necessary.",
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",

    intro:
      "The privacy of people who visit this website is important to CarolaCodes.",

    sections: [
      {
        title: "Information collected",
        text:
          "Only information voluntarily submitted through forms, email, WhatsApp or booking tools is collected.",
      },
      {
        title: "How information is used",
        text:
          "The information received is used only to respond to inquiries, evaluate projects and provide requested services.",
      },
      {
        title: "Sharing information",
        text:
          "Personal information is not sold or shared with third parties unless it is necessary to provide a requested service.",
      },
      {
        title: "External tools",
        text:
          "This website may use external services such as WhatsApp, Cal.com or form tools, which have their own privacy policies.",
      },
      {
        title: "Contact",
        text:
          "For privacy-related questions, you can contact hola@carolacodes.com.",
      },
    ],
  },
},
floating: {
  formTitle: "Have an idea?",
  formText: "Tell me about your project in 3 minutes",
},

projectForm: {
  progress: {
    step: "Step",
    of: "of",
  },
  headerTitle: "Tell me about your project",
  headerDescription:
  "You don't need to have the solution figured out. Tell me how you work today and what you want to improve.",
  navigation: {
    previous: "Back",
    next: "Continue",
    submit: "Send project",
    sending: "Sending...",
  },

  contact: {
    title: "First, tell me a little about yourself",

    description:
      "These details help me understand who I'm talking to and how to contact you.",

    name: "Name",
    email: "Email",
    whatsapp: "WhatsApp (optional)",
    business: "Business, company or project (optional)",
  },

  problem: {
    title: "What do you want to solve?",

    description:
      "You don't need to know what technology you need. Just tell me about the problem or idea.",

    placeholder:
      "Example: we receive many inquiries through WhatsApp and someone currently has to classify them manually...",
  },

  currentProcess: {
    title: "How do you handle it today?",

    description:
      "I want to understand how the process currently works before thinking about a solution.",

    placeholder:
      "Example: we receive the messages, copy the information into a spreadsheet and someone follows up manually...",
  },

  solution: {
    title: "What do you think you need?",

    description:
      "You can select more than one option. If you're not sure, that's completely fine.",

    options: {
      customSoftware: "A custom application or system",
      automation: "Automate tasks or processes",
      integrations: "Connect existing tools",
      ai: "Apply artificial intelligence",
      webPlatform: "A website or platform",
      notSure: "I'm not sure yet",
    },
  },

  stage: {
    title: "A few final details",

    description:
      "This helps me understand how far along the project is.",

    question: "What stage is your project in?",

    options: {
      idea: "I only have an idea",
      definedProcess: "I already have the process defined",
      existingTools:
        "I already use tools but want to improve them",
      existingSystem:
        "A system already exists and needs changes",
    },
  },

  budget: {
    question: "Do you have an estimated budget?",

    options: {
      unknown: "I don't know yet",
      under500: "Under USD 500",
      from500to1000: "USD 500 – 1,000",
      from1000to3000: "USD 1,000 – 3,000",
      over3000: "USD 3,000+",
      preferToDiscuss: "I'd rather discuss it",
    },
  },

  errors: {
    name: "Enter your name.",
    email: "Enter your email.",
    invalidEmail: "Enter a valid email.",

    problem:
      "Tell me a little more about what you want to solve.",

    currentProcess:
      "Briefly describe how the process works today.",

    solutionTypes:
      "Select at least one option.",

    projectStage:
      "Select the current project stage.",

    budget:
      "Select a budget option.",

    submit:
      "The request couldn't be sent. Please try again.",
  },

  success: {
    title: "I received your project!",

    description:
      "I'll review what you shared and get back to you within the next 24 business hours.",

    newForm: "Send another request",
  },
},
};

export default en;