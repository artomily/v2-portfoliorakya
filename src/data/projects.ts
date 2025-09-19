export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Full-stack e-commerce platform dengan fitur payment gateway, inventory management, dan admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/api/placeholder/400/300",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas dengan drag & drop, real-time collaboration, dan notifikasi.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    image: "/api/placeholder/400/300",
    demoUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/username/taskmanager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca dengan data real-time, forecast 7 hari, dan visualisasi interaktif.",
    technologies: ["JavaScript", "D3.js", "OpenWeather API"],
    image: "/api/placeholder/400/300",
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan animasi smooth, dark mode, dan responsive design.",
    technologies: ["Astro", "TailwindCSS", "TypeScript"],
    image: "/api/placeholder/400/300",
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "Platform blog dengan markdown editor, SEO optimization, dan comment system.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/api/placeholder/400/300",
    demoUrl: "https://blog.example.com",
    githubUrl: "https://github.com/username/blog-platform",
    featured: true,
  },
];
