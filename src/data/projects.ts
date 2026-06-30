import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "luxury-auto-dealership",
    title: "BMW Luxury Automotive Website",
    category: "Corporate Website",
    description:
      "Experience Automotive Excellence. A premium luxury automotive website inspired by BMW's modern design philosophy, featuring an elegant responsive interface with immersive visuals and a seamless browsing experience.",
    longDescription:
      "Designed and developed a premium luxury automotive website inspired by BMW's modern design philosophy. The website showcases an exclusive collection of luxury vehicles through an elegant, responsive interface with immersive visuals, smooth animations, and a seamless browsing experience.\n\nThe project focuses on delivering a high-end digital showroom where users can explore vehicle categories, browse featured inventory, discover premium services, and contact the dealership through a modern user experience.\n\nVehicle categories include Sedan, SUV, Electric, Sports, Luxury, and Convertible, complemented by premium services such as vehicle financing, nationwide delivery, certified pre-owned vehicles, trade-in program, and maintenance & warranty services.",
    image: "/images/projects/luxury-auto/project-1.png",
    gallery: [
      "/images/projects/luxury-auto/project-1.png",
      "/images/projects/luxury-auto/project-2.png",
      "/images/projects/luxury-auto/project-3.png",
    ],
    galleryLabels: ["Homepage", "Car Inventory", "Booking & Financing"],
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Lucide React", "Responsive Design"],
    features: [
      "Premium hero section with call-to-action",
      "Luxury vehicle inventory showcase",
      "Vehicle category browsing",
      "Featured vehicle cards with specifications",
      "Premium services section",
      "Customer testimonials",
      "Contact & inquiry form",
      "Showroom information",
      "Fully responsive design",
      "Smooth page animations",
      "Modern navigation",
      "SEO-friendly architecture",
    ],
    challenges: [
      "Creating a premium luxury aesthetic that reflects BMW's modern brand identity.",
      "Designing an intuitive browsing experience for multiple vehicle categories.",
      "Displaying detailed vehicle information while maintaining a clean visual hierarchy.",
      "Building smooth animations without sacrificing performance.",
      "Ensuring a fully responsive experience across desktop, tablet, and mobile devices.",
    ],
    solution:
      "Developed a modern component-based website with responsive layouts, reusable UI components, smooth page transitions, premium animations, and optimized performance. The interface highlights featured vehicles, dealership services, and customer engagement while maintaining a clean and luxurious visual identity.",
    results: [
      "Created a premium digital showroom experience for luxury automotive customers.",
      "Improved presentation of luxury vehicles through a clean and modern interface.",
      "Delivered a responsive experience optimized for desktop, tablet, and mobile devices.",
      "Built a scalable frontend architecture using reusable components.",
      "Enhanced user engagement through elegant animations and intuitive navigation.",
    ],
    liveUrl: "https://eternziv.github.io/car/",
    githubUrl: "https://github.com/EternZiv/car/",
  },
  {
    id: "2",
    slug: "power2go-energy-storage",
    title: "Power2Go Energy Storage Solutions",
    category: "Corporate Website",
    description:
      "A modern corporate website for Power2Go, a Pakistani energy storage company specializing in advanced LiFePO₄ battery solutions.",
    longDescription:
      "Designed and developed a modern, responsive corporate website for Power2Go, a Pakistani energy storage company specializing in advanced lithium iron phosphate (LiFePO₄) battery solutions for residential, commercial, industrial, and portable energy applications. The website showcases Power2Go's product portfolio, company information, energy storage technologies, certifications, and smart monitoring capabilities while providing an intuitive user experience optimized for all devices.",
    image: "/images/projects/power2go/power2go-1.png",
    gallery: [
      "/images/projects/power2go/power2go-1.png",
      "/images/projects/power2go/power2go-2.png",
      "/images/projects/power2go/power2go-3.png",
    ],
    galleryLabels: ["Homepage", "Products Page", "About / Company Page"],
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Lucide React", "Responsive Design"],
    features: [
      "Modern responsive corporate website",
      "Premium landing page with animated hero section",
      "Product catalog for residential, commercial, industrial, and portable battery systems",
      "Detailed product showcase with technical specifications",
      "Company profile and mission pages",
      "Smart energy monitoring system presentation",
      "Interactive contact section",
      "Smooth page animations using Framer Motion",
      "Mobile-first responsive design",
      "SEO-friendly page structure",
      "Clean component-based architecture",
    ],
    challenges: [
      "Creating a premium corporate website that establishes trust and professionalism",
      "Presenting technical battery specifications in a clear and user-friendly way",
      "Organizing multiple product categories while maintaining an intuitive navigation experience",
      "Designing a responsive interface that performs well across desktop, tablet, and mobile devices",
      "Building modern UI sections that effectively communicate Power2Go's brand identity and clean energy mission",
    ],
    solution:
      "Developed a clean, modern corporate website focused on user experience, performance, and responsive design. Implemented reusable UI components, smooth animations, structured product showcases, and informative company sections that effectively communicate Power2Go's energy storage solutions and technological expertise.",
    results: [
      "Successfully created a professional digital presence for the Power2Go brand",
      "Improved presentation of energy storage products through a modern and intuitive interface",
      "Optimized user experience across desktop, tablet, and mobile devices",
      "Delivered a scalable frontend architecture for future product expansion",
      "Enhanced brand credibility through premium UI/UX and professional visual design",
    ],
    liveUrl: "https://eternziv.github.io/power2go/",
    githubUrl: "https://github.com/EternZiv/power2go",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))];
}
