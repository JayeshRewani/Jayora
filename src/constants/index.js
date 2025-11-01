// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "At Jayora, we don’t stop at design or development — we deliver your project fully live and deployed. Our team handles hosting setup, domain purchase, and SSL configuration so your site or app is production-ready from day one.",
    items: [
      {
        title: "Complete Deployment Setup",
        description:
          "Your project is deployed on trusted platforms like Vercel or Render — secure, fast, and globally available.",
      },
      {
        title: "Domain & SSL Configuration",
        description:
          "We purchase and connect your domain with full HTTPS (SSL) setup, ensuring your brand looks professional and secure.",
      },
      {
        title: "Scalable Backend Options",
        description:
          "Choose from Supabase for fast launches or our custom MERN backend for advanced scalability and control.",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Convoo – Language Exchange Platform",
    description:
      "A real-time chat and friend-matching platform built for global learners. Users can connect based on native and target languages with integrated notifications and a clean dark UI.",
    href: "",
    image: "/assets/projects/convoo.png",
    bgImage: "/assets/backgrounds/blue-blur.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "JWT Auth"}
    ],
  },
  {
    id: 2,
    name: "Office Sathi – Insurance CRM",
    description:
      "A complete CRM solution for insurance advisors with client management, renewal reminders, and policy tracking. Includes follow-ups, dashboards, and PDF export features for business efficiency.",
    href: "",
    image: "/assets/projects/crm.png",
    bgImage: "/assets/backgrounds/light-gradient.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Vaibhav personal website",
    description:
      "Vaibhav's personal website featuring as a portfolio, elegant gradients and smooth motion design",
    href: "",
    image: "/assets/projects/portfoliov.png",
    bgImage: "/assets/backgrounds/dark-blur.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Framer Motion" },
    ],
  },
  {
    id: 4,
    name: "Wholesale ERP Dashboard",
    description:
      "A scalable business dashboard for wholesale management. Features analytics, inventory control, and real-time tracking to streamline sales operations for growing businesses.",
    href: "",
    image: "/assets/projects/wholesale.png",
    bgImage: "/assets/backgrounds/blue-glow.jpg",
    frameworks: [
      { id: 1, name: "" },
      { id: 2, name: "Supabase" },
      { id: 3, name: "Chart.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/_jayora/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@devjayuuu",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jayesh-rewani-9b463632a/" },
  { name: "GitHub", href: "https://github.com/JayeshRewani" },
];
