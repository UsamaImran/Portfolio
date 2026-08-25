export const personal = {
  name: "Usama Imran",
  title: "Senior Full-Stack Engineer",
  subtitle: "Product Engineer • System Modernization • 6+ Years",
  email: "uusamaimran@gmail.com",
  phone: "+92 305 9182792",
  location: "Lahore, Pakistan (Open to Relocation)",
  linkedin: "https://www.linkedin.com/in/usama-imran-b1ba9b1b2",
  summary:
    "Senior Full-Stack Engineer with 6+ years of experience building and modernizing complex SaaS platforms and financial systems. Specialized in incremental architecture improvements, multi-tenant systems, and zero-downtime migrations. Passionate about delivering clean, scalable solutions that drive real business value — with strong focus on system design, reliability, and maintainability.",
};

export const githubLink = "https://github.com/UsamaImran";

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
      "Event Driven Architecture",
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
    role: "Software Engineer", // kept as is
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
      "Twilio",
      "Google Authenticator",
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
      "Material UI",
      "Plaid",
      "Express",
      "Node.js",
      "Anvil PDF",
      "Forth CRM",
      "Google Maps",
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
    title: "PDF RAG",
    description:
      "An end-to-end Retrieval-Augmented Generation system for document-based question answering. Users can upload PDFs, which are asynchronously processed through token-aware chunking and Gemini embeddings before being indexed in MongoDB Atlas Vector Search for grounded, source-cited answers.",
    tags: [
      "RAG",
      "Generative AI",
      "TypeScript",
      "Node.js",
      "Google Gemini",
      "MongoDB Atlas Vector Search",
      "RabbitMQ",
      "Docker",
      "Storj",
    ],
    liveUrl: "https://github.com/UsamaImran/pdf-rag",
    githubUrl: "https://github.com/UsamaImran/pdf-rag",
    featured: true,
    role: "AI / Full-Stack Engineer",
    year: "2026",
    type: "AI — RAG System",
    problem:
      "Users need a reliable way to ask questions about large PDF documents without manually searching through them. Traditional LLM prompting alone cannot reliably provide document-specific answers, while processing documents synchronously creates unnecessary latency and infrastructure coupling.",
    solution:
      "Built an asynchronous RAG pipeline that stores uploaded PDFs in S3-compatible object storage, processes them through RabbitMQ workers, extracts and tokenizes text, creates overlapping token-aware chunks, generates Gemini document embeddings, and stores them in MongoDB Atlas Vector Search. At query time, the system embeds the user's question, retrieves the most relevant chunks, constructs grounded context, and generates an answer with source citations.",
    features: [
      "Asynchronous PDF ingestion and processing using RabbitMQ",
      "Token-aware chunking using Gemini-compatible BPE tokenization",
      "Gemini embeddings with separate RETRIEVAL_DOCUMENT and RETRIEVAL_QUERY task types",
      "MongoDB Atlas Vector Search using cosine similarity",
      "Grounded answer generation using retrieved document context",
      "Source citations returned with every generated answer",
      "Document processing lifecycle with uploaded, processing, completed, and failed states",
      "S3-compatible object storage using Storj",
      "Docker Compose development environment",
    ],
  },
  {
    title: "Synccos | Connexabi",
    description:
      "A modern web-based networking platform that enables professionals to manage contacts, define relationship context, and maintain a structured digital network — a smarter alternative to traditional business cards.",
    tags: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    liveUrl: "https://synccos.com/connexabi",
    githubUrl: "",
    featured: false,
    role: "Full Stack Engineer",
    year: "2025",
    type: "Product — Web Platform",
    problem:
      "Traditional contact management lacks context — users can store contact details but cannot effectively represent relationships (e.g., family, professional hierarchy, or personal connections), making networks harder to navigate and utilize.",
    solution:
      "Built a full-stack web platform using Next.js and NestJS that allows users to create customizable contact profiles and define relationship types. The system enables structured networking, making it easier to organize, search, and understand connections in both personal and professional contexts.",
    features: [
      "Customizable contact profiles with flexible fields and metadata",
      "Relationship tracking system (e.g., family, professional roles like manager, colleague, etc.)",
      "Advanced contact management with tagging, notes, and powerful search",
      "Secure authentication and user management",
      "RESTful API architecture for integrations and data portability",
      "Optimized PostgreSQL schema using Prisma ORM for relational data modeling",
      "Responsive and intuitive UI for seamless cross-device usage",
    ],
  },
  {
    title: "AOT | Always On Time",
    description: `Many service-based businesses, including health and wellness, arts, medical clinics, and more are spending hours on manual work and face challenges in customer conversion and scaling, taking appointments via phone calls, forms, social networks, or messaging apps.

    AOT is a booking, membership, and business management SaaS platform to help SMEs, freelancers and professional service businesses.

    With AOT, business owners can bring their business online, reduce friction for staff and customers, increase customer conversion and revenue, and run their business with digitised scheduling and membership management to save time and money. `,
    tags: [
      "React",
      "Redux",
      "GraphQL",
      "Tailwind CSS",
      "Docker",
      "React Hook Form",
      "Grafana",
      "Java - Spring",
      "Python",
    ],
    liveUrl: "https://home.aot.plus/",
    githubUrl: "",
    featured: false,
    role: "Frontend Engineer",
    year: "2023",
    type: "Product — Business SaaS",
    problem:
      "Dispatch teams relied on phone calls and spreadsheets to coordinate Employees and track events. There was no real-time visibility into fleet status, leading to missed ETAs, duplicated effort, and poor customer communication.",
    solution:
      "Developed the frontend of a real-time Scheduling platform backed by Java Spring for live updates. Redux manages global dispatch state, Docker ensures environment parity across deployments, and React Hook Form powers the driver and route management forms.",
    features: [
      "Real-time scheduling and employee management with live status updates",
      "Interactive route management with drag-and-drop stop optimization",
      "Centralized dashboard for dispatchers with real-time visibility into operations",
      "Optimistic UI updates for faster and seamless user experience",
      "Digital booking and appointment management to reduce manual coordination",
      "Membership and customer management system for recurring services",
      "Responsive design supporting both desktop (dispatchers) and mobile (field staff)",
      "Customizable themes for branding and white-labeling",
      "Form-driven workflows with validation for onboarding and job assignments",
    ],
  },

  {
    title: "Planwell | Personal Financial Advisor",
    description:
      "A web-based financial planning platform that helps users make smarter financial decisions through personalized insights, goal tracking, and intelligent automation.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Formik",
      "Material UI",
      "Data Visualization",
    ],
    liveUrl: "https://www.planwell.io/",
    githubUrl: "",
    featured: false,
    role: "Frontend Engineer",
    year: "2021",
    type: "Product — Web Platform",

    problem:
      "Users struggle to manage their finances effectively due to fragmented tools, lack of clarity on long-term outcomes, and difficulty translating financial data into actionable decisions.",

    solution:
      "Developed a modern financial planning interface that centralizes user financial data and presents it through intuitive dashboards, goal-based workflows, and intelligent recommendations, enabling users to better understand and optimize their financial future.",

    features: [
      "Personalized financial dashboards with real-time insights",
      "Goal-based planning (savings, expenses, long-term financial targets)",
      "Interactive charts for financial trends and projections",
      "Form-driven data input flows using Formik",
      "Smooth UI/UX with animations powered by Framer Motion",
      "Secure authentication and session management",
      "Responsive design for seamless cross-device experience",
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

export const openSource = [
  {
    title: "rabbitmq-common",
    type: "Infrastructure Library",
    description:
      "A robust, production-ready RabbitMQ wrapper for Node.js and TypeScript microservices. Provides standardized Producer and Consumer abstractions with automatic connection management, intelligent recovery, and full exchange support (fanout, topic, direct).",
    tags: ["TypeScript", "RabbitMQ", "Node.js", "Microservices", "npm"],
    githubUrl: "https://github.com/UsamaImran/rabbitMQ-common",
    npmUrl: "https://www.npmjs.com/package/rabbitmq-common",
    highlights: [
      "First-class support for Fanout, Topic, and Direct exchanges (v4)",
      "Fully backward compatible with previous queue-only usage",
      "Automated connection & channel management with exponential backoff",
      "Built-in Dead Letter Queue (DLQ) support and malformed message protection",
      "TypeScript-first design with strong typing and custom error classes",
      "Pluggable logging, backpressure handling, and dynamic queue/exchange bindings",
      "Published and actively maintained as a public npm package",
    ],
  },
  {
    title: "axios-auth-client",
    type: "HTTP Client Library",
    description:
      "A lightweight, framework-agnostic Axios wrapper with automatic JWT access token refresh (proactive + reactive), 401 retry logic, and custom refresh support for Node.js and browsers.",
    tags: [
      "Axios",
      "TypeScript",
      "JWT",
      "Authentication",
      "HTTP Client",
      "npm",
    ],
    githubUrl: "https://github.com/UsamaImran/axios-auth-client",
    npmUrl: "https://www.npmjs.com/package/axios-auth-client",
    highlights: [
      "Automatic token refresh — proactive (expiry check) + reactive (401 response)",
      "Request queuing prevents multiple concurrent refresh token calls",
      "Framework agnostic — works with React, Vue, Angular, Node.js, and more",
      "Zero hardcoded storage — token management is fully injected via callbacks",
      "Full TypeScript support with generic response types",
      "Customizable — custom refresh function, token response path, and header names",
      "Works in all JavaScript environments (browsers, Node.js, Deno, Bun)",
    ],
  },
  {
    title: "react-generic-list",
    type: "UI Component",
    description:
      "A lightweight, TypeScript-first generic list component for React that renders any data type through a strongly-typed render prop — eliminating repetitive list boilerplate while preserving full type inference end-to-end.",
    tags: ["React", "TypeScript", "npm", "Generics", "Component"],
    githubUrl: "https://github.com/UsamaImran/react-generic-list",
    npmUrl: "https://www.npmjs.com/package/react-generic-list",
    highlights: [
      "Generic <T> type parameter propagates from data to render prop automatically",
      "Zero boilerplate — replaces repetitive .map() patterns across the codebase",
      "TypeScript-first API with full IntelliSense support in any IDE",
      "Framework-agnostic rendering via a flexible renderItem callback",
      "Published and maintained as a standalone npm package",
    ],
  },
];

// ---------------------------------------------------------------------------
// Case Studies
// Keyed by exact project title from the projects array.
// The project page checks for a matching key and renders the extended layout.
// ---------------------------------------------------------------------------

export type CaseStudyMetric = {
  label: string;
  value: string;
  sub: string;
};

export type CaseStudyConstraint = {
  text: string;
};

export type CaseStudyDecision = {
  title: string;
  why: string;
  result: string;
};

export type CaseStudy = {
  subtitle: string;
  duration: string;
  metrics: CaseStudyMetric[];
  metricsNote: string;
  problemLong: string[];
  constraints: CaseStudyConstraint[];
  architecture: {
    row1: { label: string; title: string }[];
    row2: { label: string; title: string }[];
  };
  decisions: CaseStudyDecision[];
  outcomes: string[];
  takeaway: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  // ── Mitigately ────────────────────────────────────────────────────────────
  Mitigately: {
    subtitle:
      "A greenfield debt restructuring platform connecting users with creditors through a 16–20 step intake flow, dynamic contract generation, and a legacy CRM integration that dated to 2008.",
    duration: "8 months · Greenfield build · Small team",
    metrics: [
      {
        label: "Users onboarded",
        value: "2,400+",
        sub: "through full 16–20 step flow",
      },
      {
        label: "Completion rate",
        value: "~74%",
        sub: "up from ~41% before resume feature",
      },
      {
        label: "API latency",
        value: "−65%",
        sub: "after async queue for CRM sync",
      },
      {
        label: "Timeline",
        value: "8 mo",
        sub: "design to production",
      },
    ],
    metricsNote:
      "* User and completion figures are approximate. Latency improvement reflects p95 API response time after queue introduction.",
    problemLong: [
      "Mitigately needed to guide financially distressed users through a 16–20 step intake process — sometimes across days or weeks — and then automatically generate a legal contract, route it for e-signature, and sync everything into a legacy CRM system last meaningfully updated in 2008.",
      "The CRM was non-negotiable: it was the authoritative source of creditor data and identity. But its APIs were partially undocumented, returned HTTP 200 for both success and failure states, and had unpredictable response structures depending on input context. Designing around it — without hiding it — became the central engineering challenge.",
    ],
    constraints: [
      {
        text: "CRM could not be replaced — it was the system of record for all creditor data",
      },
      {
        text: "Sessions had to survive days or weeks — users resume exactly where they left off",
      },
      {
        text: "CRM APIs were partially undocumented with unreliable HTTP status codes",
      },
      {
        text: "OTP verification required before any contract could be generated or signed",
      },
      {
        text: "Data integrity across both MongoDB and CRM had to be guaranteed at all times",
      },
      {
        text: "UX had to remain consistent across all 16–20 dynamic onboarding steps",
      },
    ],
    architecture: {
      row1: [
        { label: "Frontend", title: "Step-based state machine" },
        { label: "Backend", title: "Orchestration + validation layer" },
        { label: "Persistence", title: "Dual-write: MongoDB + CRM sync" },
      ],
      row2: [
        { label: "Auth", title: "Twilio OTP" },
        { label: "Contract", title: "Dynamic generation + Anvil e-sign" },
        { label: "Post-onboarding", title: "User dashboard + loan tracking" },
      ],
    },
    decisions: [
      {
        title: "Treating onboarding as a state machine, not a form flow",
        why: "A traditional multi-step form would have collapsed under 16–20 steps with shared state, resumability, and per-step validation. I implemented a centralized step engine using React Context + Formik, where each step is an isolated validation unit within a global workflow state — index-driven, schema-validated, and type-safe throughout.",
        result:
          "Enabled resume, skip-ahead, and validation without coupling between steps",
      },
      {
        title: "Dual-write architecture for CRM reliability",
        why: 'The CRM\'s most fundamental API — "get user by phone number" — always returned HTTP 200 regardless of whether a user existed. Standard error handling was useless. Rather than working around individual broken endpoints, I redesigned the data layer: MongoDB became the primary operational store, and the CRM was treated as a downstream sync target. An inverted lookup (query Mongo → extract CRM ID → fetch CRM record by ID) made responses deterministic.',
        result: "Eliminated unreliable CRM query responses as a failure point",
      },
      {
        title: "Moving CRM sync off the request path",
        why: "Initially, CRM writes were synchronous and blocking. Every onboarding step that touched the CRM added latency and a potential failure point to what should have been a fast user-facing response. I introduced an internal async queue: MongoDB writes remained immediate, while CRM sync executed in the background. This also meant CRM failures were isolated — they didn't take down user-facing operations.",
        result:
          "~65% reduction in p95 API response time; CRM failures no longer surface to users",
      },
      {
        title: "Persisting step state to the backend for resumability",
        why: "Users in a debt restructuring flow may need days between sessions. Storing state only in the browser would lose it. Step progress and partial form data were persisted to the backend on each transition, so on re-entry the system could reconstruct the last completed step, partial data, and navigation state exactly.",
        result:
          "Completion rate improved from ~41% to ~74% after this was introduced",
      },
    ],
    outcomes: [
      "Built a complete 16–20 step onboarding engine with persistent, resumable state from scratch in 8 months",
      "Designed a stable integration layer around an unpredictable legacy CRM through dual-write + inverted lookup",
      "Reduced API latency by ~65% by moving CRM sync off the synchronous request path",
      "Improved onboarding completion from ~41% to ~74% with backend-persisted resumability",
      "Delivered full contract generation + e-signature flow via Anvil with OTP-secured access",
      "Shipped a post-onboarding dashboard with live loan status and installment tracking",
    ],
    takeaway:
      "In real-world systems, reliability isn't achieved by waiting for perfect APIs. It's built by designing around imperfect external systems — through abstraction, persistence, and controlled synchronization. The CRM never got better. The system got resilient enough that it didn't matter.",
  },

  // ── Synccos | Checkwriter ─────────────────────────────────────────────────
  "Synccos | Checkwriter": {
    subtitle:
      "A live, multi-tenant financial platform modernized incrementally — evolving from a tightly coupled single-tenant system into a scalable architecture while remaining in continuous production with active financial users throughout.",
    duration:
      "Ongoing · Production modernization · Active financial users throughout",
    metrics: [
      {
        label: "Connection instances",
        value: "30+→1",
        sub: "MongoDB connections consolidated to singleton",
      },
      {
        label: "State management",
        value: "Redux→TQ",
        sub: "server state migrated to TanStack Query",
      },
      {
        label: "Multi-tenancy",
        value: "Full",
        sub: "users + orgs sharing financial entities",
      },
      {
        label: "Downtime",
        value: "Zero",
        sub: "all changes shipped without taking system offline",
      },
    ],
    metricsNote:
      "* All changes were delivered incrementally under continuous production constraints with no downtime.",
    problemLong: [
      "Synccos Checkwriter was already live and handling real financial operations when new requirements arrived — multi-tenant support, expanded payment workflows, and organization-level banking entities. The system worked, but it had grown into a tightly coupled architecture that made every new feature a risk.",
      "Redux was handling both client and server state, the MongoDB schema embedded financial entities directly inside user documents under a single-tenant assumption, and 30+ MongoDB connection instances had accumulated across modules — a hidden infrastructure fault that only surfaced once the schema was touched. The core constraint was non-negotiable: the system could not go offline, could not be rewritten, and new features had to ship continuously while the architecture underneath was being rebuilt.",
    ],
    constraints: [
      {
        text: "System was live with active financial users — zero downtime permitted at any point",
      },
      {
        text: "No rewrites — all changes had to be incremental and backward compatible",
      },
      {
        text: "New features had to ship continuously while refactoring was in progress",
      },
      {
        text: "Financial correctness was critical — payment, balance, and reconciliation logic had zero tolerance for inconsistency",
      },
      {
        text: "Multi-tenant ownership model had to support both users and organizations sharing the same financial entities",
      },
      {
        text: "Legacy Redux patterns had to be migrated without breaking existing flows",
      },
    ],
    architecture: {
      row1: [
        {
          label: "Frontend",
          title: "Redux (client state) + TanStack Query (server state)",
        },
        { label: "Backend", title: "Express + normalized MongoDB collections" },
        { label: "Ownership", title: "entityType / entityId unified model" },
      ],
      row2: [
        { label: "Auth", title: "MFA — email, Twilio OTP, authenticator app" },
        { label: "Payments", title: "Stripe + QuickBooks sync" },
        { label: "Infra", title: "Singleton DB connection + compound indexes" },
      ],
    },
    decisions: [
      {
        title: "Separating client state from server state",
        why: "Redux was doing double duty — managing both UI state and remote data fetching. This created deeply coupled reducer logic, redundant synchronization patterns, and brittle loading states scattered across the codebase. I drew a clear boundary: Redux retained ownership of client-only state, while all server interactions moved to TanStack Query. Data-fetching logic became declarative, caching became automatic, and the Redux surface area shrank to only what belonged there.",
        result:
          "Eliminated redundant state sync patterns; API interactions became predictable and independently cacheable",
      },
      {
        title: "Normalizing the MongoDB schema for multi-tenancy",
        why: "The original schema embedded bank accounts and payees directly within user documents — a clean design for a single-tenant system, but impossible to extend to organizations. I decomposed the schema into separate collections and introduced a unified ownership model using explicit entityType and entityId fields. A single bank account could now be owned by either a user or an organization without duplicating schemas or forking query logic. Compound indexes on these fields kept tenant-scoped queries efficient as data volume grew.",
        result:
          "Shared financial entities (bank accounts, payees) work across both user and org contexts from a single schema",
      },
      {
        title: "Enforcing a singleton database connection",
        why: "After schema normalization introduced cross-collection dependencies, a previously hidden issue surfaced: 30+ MongoDB connection instances had accumulated across modules, causing inconsistent Mongoose model registration behavior where certain collections weren't being resolved correctly depending on connection context. The embedded single-collection design had masked this entirely. I enforced a singleton connection pattern — all models registered against one shared instance — which immediately stabilized schema resolution across the entire system.",
        result:
          "Eliminated model registration inconsistencies; cross-collection queries became reliable",
      },
      {
        title: "Sequencing refactoring around continuous feature delivery",
        why: "The hardest part of this project wasn't any single technical decision — it was the ordering. Every architectural change had to be backward compatible with the code still running in production. TypeScript was introduced incrementally: new modules in TypeScript first, legacy modules migrated opportunistically. The API abstraction layer was extracted gradually. Schema normalization happened collection by collection, with dual-read logic bridging old and new shapes during the transition window.",
        result:
          "Zero production incidents during the full modernization; system remained stable and shippable throughout",
      },
    ],
    outcomes: [
      "Migrated server state from Redux to TanStack Query, eliminating redundant sync logic across the frontend",
      "Normalized MongoDB schema from embedded user documents to multi-tenant collections with a unified ownership model",
      "Resolved a 30+ connection accumulation bug that had been hidden by the single-tenant schema design",
      "Introduced TypeScript incrementally — new modules typed from day one, legacy modules migrated during ongoing development",
      "Built and extracted a centralized API abstraction layer, later released as the open-source axios-auth-client npm package",
      "Delivered Stripe payment flows, QuickBooks sync, Excel bulk import, and MFA (email + Twilio OTP + authenticator app)",
      "Built a check register system maintaining running balances per bank account across both user and org contexts",
      "Shipped all of the above with zero downtime under continuous production constraints",
    ],
    takeaway:
      "Production systems evolve safely through incremental, constraint-aware refactoring. The most impactful engineering decisions are often about sequencing, ownership modeling, and tradeoff management — not isolated technical implementations. The goal was never to build the perfect architecture. It was to move from the architecture we had to the one we needed, without breaking what was already working.",
  },

  // ── Synccos | Connexabi ───────────────────────────────────────────────────
  "Synccos | Connexabi": {
    subtitle:
      "A contact intelligence and relationship graph platform — redesigned from the ground up after a core ownership model flaw caused user edits to silently mutate shared public entities, corrupting contact data across the entire network.",
    duration: "Greenfield → Redesign · Pre-launch · Full-stack ownership",
    metrics: [
      {
        label: "Schema layers",
        value: "3",
        sub: "public canonical, user-scoped, external contact",
      },
      {
        label: "Field types normalized",
        value: "3",
        sub: "emails, phone numbers, addresses extracted to own tables",
      },
      {
        label: "Mutation leakage",
        value: "Eliminated",
        sub: "user edits no longer touch public entities",
      },
      {
        label: "Legacy records",
        value: "Migrated",
        sub: "full data migration with zero disruption to existing users",
      },
    ],
    metricsNote:
      "* This was a pre-launch system. Quantitative scale metrics were not yet available; figures reflect architectural scope rather than traffic.",
    problemLong: [
      "Connexabi was designed as a contact intelligence system — not a social feed, but a structured graph where each person could exist as a public canonical entity and as a private user-specific context simultaneously. The idea was sound. The data model wasn't.",
      "When a user added a public contact to their personal network, the system was supposed to create an isolated copy for that user to work with. Instead, due to incorrect reference handling, any edits that user made mutated the original shared public record. One user's changes silently overwrote another's view. Relationship data leaked globally. Contact records drifted into inconsistency across users. The core networking model had no integrity.",
      "Underneath the bug was a deeper problem: the system had no defined ownership model. There was no clear answer to who owned what, which layer of data was mutable by whom, or how public and private contexts should relate to each other. That ambiguity had to be resolved before any fix would hold.",
    ],
    constraints: [
      {
        text: "No clear ownership model existed — public vs. user-scoped data boundaries had never been formally defined",
      },
      {
        text: "Product intent was ambiguous — key behaviors (should user edits propagate globally?) had no agreed answer",
      },
      {
        text: "Existing contact records had to be migrated to the new schema without disrupting active users",
      },
      {
        text: "The system needed to support both registered users and external (non-registered) contacts in the same graph",
      },
      {
        text: "Community contributions to public data required moderation — open mutation was not acceptable",
      },
      {
        text: "Relationship data had to be privately scoped per user, not globally visible across the network",
      },
    ],
    architecture: {
      row1: [
        {
          label: "Identity layer",
          title: "Public canonical contact (immutable)",
        },
        {
          label: "User layer",
          title: "User-scoped contact instance (private copy)",
        },
        {
          label: "External layer",
          title: "Non-registered entity with contribution pipeline",
        },
      ],
      row2: [
        {
          label: "Contributions",
          title: "Field-level suggestions + voting system",
        },
        {
          label: "Moderation",
          title: "Self-verification (registered) + super-admin (external)",
        },
        {
          label: "Relationships",
          title: "User-scoped graph — private, non-global",
        },
      ],
    },
    decisions: [
      {
        title: "Resolving product ambiguity before touching the code",
        why: "The mutation bug was a symptom, not the root cause. The root cause was that the team had never agreed on what the system was supposed to do: should a user's edits stay private? Should they improve the shared record? Should registered users control their own public profile? I worked directly with the CEO to get these questions answered explicitly. The outcome: public contact data is immutable by default; users own their private copy; registered contacts can approve contributions to their canonical profile; external contacts go through a moderated voting pipeline. That decision shaped every technical choice that followed.",
        result:
          "Product behavior fully specified before implementation; no design reversals during build",
      },
      {
        title: "Introducing user-scoped contact isolation",
        why: "The fix to mutation leakage wasn't a bug patch — it required a model change. When a user adds a public contact to their network, the system now creates a dedicated user-scoped instance. All edits apply to that instance only. The public canonical record is read-only from the user's perspective. This required new schema entities, updated write paths on the backend, and UI surfaces on the frontend that clearly distinguished between 'your view' and 'the shared record' — Redux Toolkit slices were split to reflect this separation, and RTK Query endpoints were scoped per ownership context.",
        result:
          "Cross-user mutation eliminated; each user's network is fully isolated from others",
      },
      {
        title: "Normalizing contact fields into relational tables",
        why: "The original schema embedded emails, phone numbers, and addresses directly inside contact documents — a flat structure that worked for simple lookups but couldn't support multi-valued attributes, field-level contribution tracking, or clean migration. I extracted each field type into its own normalized table in PostgreSQL via Prisma, enabling structured storage, independent updates, and the contribution voting system to operate at the field level rather than the document level. A full data migration moved all legacy embedded records into the new schema.",
        result:
          "Field-level contributions, multi-value attributes, and clean migration all became straightforward",
      },
      {
        title:
          "Building a two-track moderation pipeline for public data quality",
        why: "Allowing any user to freely update public contact data would recreate the mutation problem. But blocking all community contributions would make public profiles stale. The solution was two distinct flows: registered contacts review and approve contributions to their own canonical profile (self-verification), while external non-registered contacts go through a field-level suggestion system where contributions are aggregated by votes and reviewed by a super-admin before promotion. This kept public data quality improving without compromising integrity.",
        result:
          "Public contact data can improve over time through community input without open mutation risk",
      },
    ],
    outcomes: [
      "Defined and implemented a three-layer ownership model (public canonical, user-scoped instance, external contact) that eliminated mutation leakage",
      "Rebuilt the core data model in PostgreSQL + Prisma with normalized contact field tables and user-scoped relationship storage",
      "Performed a full schema migration of legacy contact records into the new relational structure with no disruption to existing users",
      "Split frontend state into ownership-aware slices — Redux Toolkit for client state, RTK Query endpoints scoped per contact layer",
      "Built a two-track moderation pipeline: self-verification for registered contacts, field-level voting + super-admin approval for external ones",
      "Delivered relationship graph features with strict user-scoped privacy — no relationship data visible across user boundaries",
      "Resolved product-level ambiguity through direct CEO engagement, producing a formally specified ownership and permission model that guided the entire build",
    ],
    takeaway:
      "In systems built around shared entities, ambiguous ownership is a ticking clock. The mutation bug wasn't a coding error — it was the inevitable consequence of never deciding who owns what. The most important work on this project happened before a line of code was written: getting the ownership model agreed, specified, and documented. Everything else followed from that.",
  },
  "PDF RAG": {
    subtitle:
      "An end-to-end Retrieval-Augmented Generation system that turns PDF documents into a searchable knowledge base and generates grounded, source-cited answers using semantic retrieval and Gemini.",
    duration: "2026 · AI/RAG project · Full-stack ownership",
    metrics: [
      {
        label: "Chunk strategy",
        value: "800 / 100",
        sub: "token-aware chunks with overlap",
      },
      {
        label: "Embeddings",
        value: "3072D",
        sub: "Gemini embeddings for document and query retrieval",
      },
      {
        label: "Retrieval",
        value: "Vector",
        sub: "MongoDB Atlas Vector Search",
      },
      {
        label: "Processing",
        value: "Async",
        sub: "RabbitMQ-based document pipeline",
      },
    ],
    metricsNote:
      "Architecture-focused project demonstrating the complete RAG ingestion, retrieval, and generation pipeline.",
    problemLong: [
      "Large PDF documents contain valuable information but are difficult to query efficiently through traditional search. Sending entire documents directly to an LLM is constrained by context size, increases token usage, and makes it difficult to reliably ground answers in the source material.",
      "The system needed to transform uploaded documents into a searchable semantic knowledge base while keeping document processing asynchronous and separating ingestion from query-time retrieval.",
    ],
    constraints: [
      {
        text: "Documents needed to be processed asynchronously so uploads could return immediately",
      },
      {
        text: "Chunks needed to respect model token limits rather than relying only on character or word counts",
      },
      {
        text: "Document and query embeddings needed to use the appropriate Gemini retrieval task types",
      },
      {
        text: "Retrieved context needed to remain traceable back to the original document chunks",
      },
      {
        text: "Generated answers needed to be grounded in retrieved context rather than unsupported model knowledge",
      },
      {
        text: "The system needed a vector search layer capable of semantic similarity retrieval",
      },
    ],
    architecture: {
      row1: [
        {
          label: "Ingestion",
          title: "Express API + S3-compatible object storage",
        },
        {
          label: "Processing",
          title: "RabbitMQ + asynchronous document consumer",
        },
        {
          label: "Chunking",
          title: "Gemini-compatible BPE + token-aware chunks",
        },
      ],
      row2: [
        {
          label: "Embeddings",
          title: "Gemini RETRIEVAL_DOCUMENT / RETRIEVAL_QUERY",
        },
        {
          label: "Retrieval",
          title: "MongoDB Atlas Vector Search",
        },
        {
          label: "Generation",
          title: "Retrieved context + Gemini grounded answers",
        },
      ],
    },
    decisions: [
      {
        title:
          "Using token-aware chunking instead of character-based splitting",
        why: "Embedding and generation models operate within token-based context constraints. I implemented Gemini-compatible BPE tokenization and used an 800-token chunk size with 100-token overlap so chunks could be controlled according to the actual model tokenization rather than arbitrary character counts.",
        result:
          "Created predictable chunks that respect model context constraints while preserving contextual overlap between adjacent sections",
      },
      {
        title: "Separating document and query embedding strategies",
        why: "Gemini provides task-specific embedding modes for retrieval. Documents are embedded using RETRIEVAL_DOCUMENT while user queries use RETRIEVAL_QUERY, aligning indexing and search with the intended semantic retrieval workflow.",
        result:
          "Established a retrieval pipeline designed specifically around asymmetric document-to-query semantic search",
      },
      {
        title: "Moving document processing to an asynchronous pipeline",
        why: "PDF extraction, tokenization, embedding generation, and vector insertion can be expensive operations. Performing them inside the upload request would unnecessarily block the API. RabbitMQ was introduced so the API could persist the document and publish an event while a background consumer handled the ingestion pipeline.",
        result:
          "Upload requests remain responsive while document processing runs independently in the background",
      },
      {
        title: "Grounding generation through vector retrieval",
        why: "The LLM should answer questions using the uploaded documents rather than relying on unrelated model knowledge. At query time, the question is embedded, relevant chunks are retrieved through vector search, and only that retrieved context is passed into the generation step.",
        result:
          "Generated answers are tied to retrieved document content and returned alongside source chunk references",
      },
    ],
    outcomes: [
      "Built a complete PDF-to-RAG pipeline from document upload through grounded answer generation",
      "Implemented token-aware chunking using Gemini-compatible BPE tokenization",
      "Integrated Gemini embeddings for both document indexing and query retrieval",
      "Implemented semantic vector retrieval using MongoDB Atlas Vector Search",
      "Introduced RabbitMQ-based asynchronous document processing",
      "Built context construction and grounded answer generation with source citations",
      "Designed document lifecycle tracking with uploaded, processing, completed, and failed states",
      "Containerized the development environment using Docker Compose",
    ],
    takeaway:
      "Building a useful RAG system requires more than connecting an LLM to a vector database. The quality of the system depends on the entire retrieval pipeline — document processing, token-aware chunking, embedding strategy, vector retrieval, context construction, and grounded generation. This project provided hands-on implementation across each stage of that pipeline.",
  },
};
