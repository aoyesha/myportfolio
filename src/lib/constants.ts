import type { Project, Experience, NavItem, Testimonial, Certification } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Automated Early Childhood Development Checklist for DepEd MIMAROPA",
    description:
      "Developed a multi-platform application in collaboration with DepEd MIMAROPA as a capstone project, currently being adopted for use by classroom teachers and regional administrators.",
    tag: "Capstone",
    image: "/images/project-1.jpg",
    info: [
      { label: "Year", value: "2025-2026" },
      { label: "Role", value: "Developer" },
    ],
    links: [
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
  {
    title: "Viral Merch Studio — Website Redesign",
    description:
      "Redesigned and modernized an existing company website with a clean, responsive UI. Created high-fidelity Figma mockups and prototypes for client approval. Developed the approved design into a functional, responsive website. Collaborated with the client throughout the design and development process.",
    tag: "Freelance",
    image: "/images/project-5.jpg",
    info: [
      { label: "Client", value: "Viral Merch Studio" },
      { label: "Role", value: "Web Designer & Developer" },
    ],
    links: [
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
  {
    title: "Binary Classification of Ischemic Stroke Lesions from Diffusion-Weighted MRI Using Attention-Gated 2D CNN with Grad-CAM Visualization",
    description:
      "Research project implementing an attention-gated 2D convolutional neural network for binary classification of ischemic stroke lesions from DW-MRI scans, with Grad-CAM visualization for model interpretability.",
    tag: "Thesis",
    image: "/images/project-4.jpg",
    info: [
      { label: "Year", value: "2025-2026" },
      { label: "Role", value: "Researcher & Developer" },
    ],
    links: [
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
  {
    title: "MyShelf",
    description:
      "A personal bookshelf app where users can log their mood, filter books by genre or feeling, add stories to their public profile, and recommend reads to other users.",
    tag: "Project",
    image: "/images/project-2.jpg",
    info: [
      { label: "Year", value: "2024" },
      { label: "Role", value: "Full-stack Developer" },
    ],
    links: [{ label: "View project", href: "#", type: "demo" }],
  },
  {
    title: "PasaGo",
    description:
      "A courier application built with Java, HTML, CSS, and JSPs. Focused on robust validation of user information, ensuring accurate and reliable data handling throughout the delivery process.",
    tag: "Project",
    image: "/images/project-3.jpg",
    info: [
      { label: "Year", value: "2024" },
      { label: "Role", value: "Developer" },
    ],
    links: [
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
];

export const SKILLS = {
  languages: ["Java", "JavaScript", "Dart", "SQL", "Python", "Ruby"],
  frontend: ["HTML5", "CSS3", "React", "Tailwind CSS"],
  frameworks: ["Flutter", "Ruby on Rails"],
  databases: ["PostgreSQL", "SQLite", "MySQL"],
  tools: ["Git", "GitHub", "Docker", "Power BI", "VS Code"],
  apis: ["Google Books API"],
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Freelance Developer",
    dateRange: "Nov 2023 — Present",
    description:
      "Building production-grade mobile and web applications for various clients, focusing on clean architecture and user experience.",
  },
  {
    title: "Front-End Intern",
    company: "Roos Tech",
    dateRange: "Sep 2023 — Nov 2023",
    description:
      "Contributed to front-end development projects, implementing responsive designs and collaborating with cross-functional teams.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mylene — Viral Merch Studio",
    quote:
      "She delivered excellent results — meeting the goal of not requiring paid hosting. Her work was communicative, delivered exactly to specifications, and she solved every problem I came to her with. I would love to work with her again and will likely recommend her to others.",
    ratings: [
      { label: "Satisfaction with the final result", score: 5 },
      { label: "Quality of the Work", score: 5 },
      { label: "Communication", score: 5 },
      { label: "Timeliness", score: 5 },
      { label: "Easy to work with", score: 5 },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    image: "/images/cert-1.jpg",
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
};

export const PERSONAL_INFO = {
  name: "AYEN",
  email: "yeshabuilds@gmail.com",
  heroHeading: "Hi, I am",
  heroDescription: "",
  aboutHeading:
    "I am a Computer Science student passionate about building impactful software.",
  aboutDescription:
    "Computer Science student with hands-on experience building production-grade mobile and cross-platform applications. Developed a multi-platform app in collaboration with DepEd MIMAROPA as a capstone project, currently being adopted for use by classroom teachers and regional administrators. Strong foundation in Java and Flutter.",
};
