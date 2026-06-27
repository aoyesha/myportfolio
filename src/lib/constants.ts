import type { Project, Experience, NavItem, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Early Childhood Development Checklist for DepEd MIMAROPA",
    description:
      "Developed a multi-platform application in collaboration with DepEd MIMAROPA as a capstone project, currently being adopted for use by classroom teachers and regional administrators.",
    tag: "Capstone",
    image: "/images/project-1.jpg",
    info: [
      { label: "Year", value: "2025" },
      { label: "Role", value: "Developer" },
    ],
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
  {
    title: "MyShelf",
    description:
      "A personal bookshelf management app built with modern web technologies, featuring intuitive UI for organizing and tracking reading progress.",
    image: "/images/project-2.jpg",
    info: [
      { label: "Year", value: "2024" },
      { label: "Role", value: "Full-stack Developer" },
    ],
    links: [{ label: "View project", href: "#", type: "demo" }],
  },
  {
    title: "E-commerce Product Page",
    description:
      "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
    tag: "Challenge",
    image: "/images/project-3.jpg",
    info: [
      { label: "Year", value: "2023" },
      { label: "Role", value: "Front-end Developer" },
    ],
    links: [
      { label: "Live Demo", href: "#", type: "demo" },
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
  {
    title: "Binary Classification of Ischemic Stroke Lesions from Diffusion-Weighted MRI Using Attention-Gated 2D CNN with Grad-CAM Visualization",
    description:
      "Research project implementing an attention-gated 2D convolutional neural network for binary classification of ischemic stroke lesions from DW-MRI scans, with Grad-CAM visualization for model interpretability.",
    tag: "Research",
    image: "/images/project-4.jpg",
    info: [
      { label: "Year", value: "2025" },
      { label: "Role", value: "Researcher & Developer" },
    ],
    links: [
      { label: "See on Github", href: "#", type: "github" },
    ],
  },
];

export const SKILLS: string[] = [
  "Java",
  "Flutter",
  "React",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "Next.js",
  "Firebase",
];

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
    name: "Sean Cordova",
    quote:
      "Aoyesha is a great leader who knows how to bring out the best in everyone. She manages timelines effectively and keeps the team motivated even under pressure.",
  },
  {
    name: "Vincent Yuri",
    quote:
      "Working with Aoyesha was a fantastic experience. She writes clean, maintainable code and always delivers ahead of schedule. A truly reliable developer.",
  },
  {
    name: "Jaz Maglalang",
    quote:
      "Aoyesha has a sharp eye for detail and a deep understanding of front-end development. Her ability to translate complex designs into functional code is impressive.",
  },
  {
    name: "Nathan Tolentino",
    quote:
      "One of the most dedicated developers I have worked with. Aoyesha consistently produces high-quality work and is always eager to learn new technologies.",
  },
  {
    name: "Ericka Espina",
    quote:
      "Aoyesha is not only technically skilled but also an excellent communicator. She explains complex problems clearly and collaborates seamlessly with the team.",
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
};

export const PERSONAL_INFO = {
  name: "AOYESHA AYEN",
  email: "ayenamado26@gmail.com",
  heroHeading: "Hi, I am",
  heroDescription: "",
  aboutHeading:
    "I am a Computer Science student passionate about building impactful software.",
  aboutDescription:
    "Computer Science student with hands-on experience building production-grade mobile and cross-platform applications. Developed a multi-platform app in collaboration with DepEd MIMAROPA as a capstone project, currently being adopted for use by classroom teachers and regional administrators. Strong foundation in Java and Flutter.",
};
