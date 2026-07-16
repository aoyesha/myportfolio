export interface Project {
  title: string;
  description: string;
  tag?: string;
  image: string;
  info: ProjectInfo[];
  links: ProjectLink[];
}

export interface ProjectInfo {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "demo" | "github";
}

export interface Experience {
  title: string;
  company?: string;
  dateRange: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  quote: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}
