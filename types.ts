
export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
