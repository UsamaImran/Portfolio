export const personal = {
  name: "Usama Imran",
  title: "Senior Software Engineer",
  subtitle: "MERN Stack · Full-Stack · 5+ Years",
  email: "uusamaimran@gmail.com",
  phone: "+92 305 9182792",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/usama-imran-b1ba9b1b2",
  summary:
    "Accomplished Full-Stack Software Engineer with 6+ years of experience delivering scalable web applications, RESTful APIs, and cloud-enabled solutions across product-based and service-driven environments. Expert in React, Next.js, Node.js, and MERN stack architectures, with a proven track record of improving system performance by 35%, increasing stability by 18%, and leading 20+ feature releases.",
};

export const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "35%", label: "Performance Gains" },
  { value: "20+", label: "Feature Releases" },
  { value: "18%", label: "Stability Increase" },
];

export const skills = [
  {
    category: "Core Stack",
    items: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Nest.js",
    ],
  },
  {
    category: "Backend & System Design",
    items: [
      "Microservices",
      "Distributed Systems",
      "Monolithic Architecture",
      "RESTful APIs",
      "GraphQL",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    category: "Databases & Data Layer",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Redis"],
  },
  {
    category: "State Management & Data Fetching",
    items: [
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Tanstack Query",
      "Algolia Search",
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      "HTML/CSS",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Headless UI",
    ],
  },
  {
    category: "DevOps & Deployment",
    items: [
      "Docker",
      "CI/CD (GitHub Actions)",
      "Environment Configuration",
      "Basic Linux",
      "Nginx (Basic)",
    ],
  },
  {
    category: "Payments & Fintech Integrations",
    items: ["Stripe", "Plaid"],
  },
  {
    category: "Monitoring & Observability",
    items: [
      "Prometheus",
      "Grafana",
      "Sentry",
      "LogRocket",
      "Logging",
      "Error Tracking",
      "Performance Monitoring",
    ],
  },
  {
    category: "Testing",
    items: [
      "Jest",
      "React Testing Library",
      "Supertest",
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    category: "Tools & Collaboration",
    items: [
      "GitHub",
      "Bitbucket",
      "Postman",
      "Asana",
      "Digital Ocean",
      "AWS Amplify",
    ],
  },
  {
    category: "Engineering Practices",
    items: [
      "Agile / Scrum",
      "Code Review",
      "Performance Optimization",
      "Technical Documentation",
    ],
  },
];

export const experience = [
  {
    company: "TechRydes",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "January 2022 – Present",
    highlights: [
      "Re-architected an enterprise multi-page platform into a Single Page Application, reducing load times by 35% and increasing user engagement within 6 months.",
      "Translated complex client requirements into scalable MERN solutions, reducing post-release change requests by 28%.",
      "Developed and maintained RESTful APIs using Nest & Express, accelerating analytics reporting workflows by 24%.",
      "Established structured testing frameworks that improved runtime performance and increased overall system stability by 18%.",
      "Mentored junior developers via biweekly technical sessions, raising coding standards and reducing onboarding ramp-up by 30%.",
      "Coordinated Agile sprint planning for a six-member team, delivering on-time releases across 20+ sprints.",
    ],
  },
  {
    company: "OCloud Solutions",
    role: "Associate Software Engineer",
    location: "Lahore, Pakistan",
    period: "November 2020 – January 2022",
    highlights: [
      "Authored unit test suites for a large-scale B2B React app, increasing test coverage by 40% and lowering production defects.",
      "Validated core document-sharing features, contributing to a 12% engagement increase in one quarter.",
      "Built internal automation tools, saving an average of 14 labor hours per employee per month.",
      "Migrated a legacy PHP app to ReactJS with AWS Amplify, improving scalability, maintainability, and deployment speed.",
      "Resolved high-priority defects with cross-functional teams, reducing average issue resolution by 22%.",
    ],
  },
  {
    company: "BlueHorn Tech",
    role: "Junior Software Engineer",
    location: "Lahore, Pakistan",
    period: "August 2019 – November 2020",
    highlights: [
      "Delivered production-ready features using ReactJS and NextJS, supporting client-facing deployments.",
      "Led migration of a WordPress site to NextJS, coordinating a 5-member team to improve performance and SEO.",
      "Executed black-box testing to identify functional defects, improving system reliability.",
      "Developed reusable front-end components, reducing duplicated code by 25%.",
      "Produced technical documentation, enhancing knowledge transfer and reducing dependency on senior team members.",
    ],
  },
];

export const projects = [
  {
    title: "Synccos | Checkwriter",
    description:
      "An enterprise-grade check writing and payment management platform built for businesses to streamline their AP workflows, automate check generation, and integrate directly with QuickBooks for seamless accounting reconciliation.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Mongoose",
      "Stripe",
      "Sentry",
      "Tanstack Query",
      "Formik",
      "QuickBooks",
      "AWS S3",
      "OAuth 2.0",
    ],
    liveUrl: "https://synccos.com/check-writer",
    githubUrl: "",
    featured: true,
    role: "Full-Stack Engineer",
    year: "2025",
    type: "Product — SaaS",
    problem:
      "Businesses managing accounts payable faced fragmented workflows — manually writing checks, reconciling payments in QuickBooks separately, and storing documents across unstructured systems. This created bottlenecks, audit risks, and hours of duplicated effort per week.",
    solution:
      "Built a unified check-writing SaaS platform that automates the full AP lifecycle: from check generation and Stripe-powered payment processing to QuickBooks sync and AWS S3 document storage. OAuth 2.0 handles secure QuickBooks authorization, while Sentry provides real-time error monitoring across the stack.",
    features: [
      "Automated check generation with customizable templates and batch printing support",
      "Stripe integration for ACH and card-based payment processing with webhook handling",
      "QuickBooks OAuth 2.0 sync — payments and vendor records reconcile automatically",
      "AWS S3 document storage for check images, receipts, and audit trail exports",
      "Formik + Tanstack Query powered forms with optimistic UI and validation",
      "Sentry error monitoring with source maps for both client and server",
    ],
  },
  {
    title: "Mitigately",
    description:
      "A debt resolution and financial hardship platform that connects consumers with relief programs, automates document collection via Plaid, and manages the full client lifecycle through a CRM-integrated workflow.",
    tags: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Formik",
      "Plaid",
      "Express",
      "Node.js",
      "Anvil PDF",
      "Forth CRM",
    ],
    liveUrl: "https://www.mitigately.com/",
    githubUrl: "",
    featured: true,
    role: "Full-Stack Engineer",
    year: "2024",
    type: "Product — FinTech",
    problem:
      "Consumers navigating debt relief faced an opaque, paper-heavy process — manually gathering bank statements, filling out repetitive forms, and waiting days for a counselor to assess their situation. Conversion rates suffered due to friction at every step.",
    solution:
      "Built a streamlined intake and case management platform that uses Plaid to instantly pull verified bank data, Anvil to auto-populate legal PDF documents, and Forth CRM to track clients through the resolution pipeline. The result: a process that previously took days now completes in minutes.",
    features: [
      "Plaid Link integration for real-time bank account verification and transaction history",
      "Anvil PDF engine for auto-filling legal documents from form data — zero manual entry",
      "Forth CRM integration to push qualified leads and sync case status bidirectionally",
      "Multi-step Formik wizard with per-step validation and progress persistence",
      "Tanstack Query for server state management with background refetching and caching",
      "Role-based dashboard for counselors to manage client cases and document status",
    ],
  },
  {
    title: "AOT | Always On Time",
    description:
      "A logistics and fleet management platform that helps businesses track deliveries, manage drivers, and optimize routes in real time — reducing late deliveries and improving dispatcher efficiency.",
    tags: [
      "React",
      "Redux",
      "GraphQL",
      "Tailwind CSS",
      "Docker",
      "React Hook Form",
    ],
    liveUrl: "https://home.aot.plus/",
    githubUrl: "",
    featured: false,
    role: "Frontend Engineer",
    year: "2023",
    type: "Product — Logistics SaaS",
    problem:
      "Dispatch teams relied on phone calls and spreadsheets to coordinate drivers and track deliveries. There was no real-time visibility into fleet status, leading to missed ETAs, duplicated effort, and poor customer communication.",
    solution:
      "Developed the frontend of a real-time logistics platform backed by GraphQL subscriptions for live updates. Redux manages global dispatch state, Docker ensures environment parity across deployments, and React Hook Form powers the driver and route management forms.",
    features: [
      "Real-time driver and delivery tracking via GraphQL subscriptions",
      "Route management interface with drag-and-drop stop reordering",
      "Redux-powered global state for dispatcher dashboard with optimistic updates",
      "Dockerized development and deployment pipeline for consistent environments",
      "React Hook Form with schema validation for driver onboarding and job assignment",
      "Tailwind CSS responsive design for both desktop dispatch and mobile driver views",
    ],
  },
  {
    title: "Synccos | Connexabi",
    description:
      "A cross-platform mobile networking app that enables professionals to share contact information, manage their digital identity, and connect with others — a modern alternative to physical business cards.",
    tags: ["React Native", "Firebase", "REST API"],
    liveUrl: "https://synccos.com/connexabi",
    githubUrl: "",
    featured: false,
    role: "Full Stack Engineer",
    year: "2025",
    type: "Product — Mobile App",
    problem:
      "Professionals at events and meetings still relied on paper business cards that get lost, go out of date, and can't be searched or organized. There was no frictionless way to share and store contact information digitally in the moment.",
    solution:
      "Built a React Native mobile app backed by Firebase for real-time contact syncing and authentication. Users create a digital profile, share it via QR code or NFC tap, and instantly have the contact saved and searchable in their network.",
    features: [
      "QR code and NFC-based instant contact sharing — no app required for the recipient",
      "Firebase Realtime Database for instant profile sync across devices",
      "Firebase Auth with social login (Google, Apple) and phone number verification",
      "Digital profile builder with custom fields, links, and profile photo upload",
      "Contact management with tags, notes, and search across your network",
      "REST API integration for CRM export and third-party address book sync",
    ],
  },
];

export const education = {
  institution: "GIFT University",
  location: "Gujranwala, Pakistan",
  degree: "Bachelor of Science in Software Engineering",
  year: "2019",
  courses: [
    "Software Requirements",
    "Software Design & Architecture",
    "Software Construction",
    "Software Quality Assurance",
    "Software Project Management",
    "Technical Report Writing",
    "Introduction to Machine Learning",
  ],
};
