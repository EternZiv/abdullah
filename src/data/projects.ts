import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "luxury-auto-dealership",
    title: "Luxury Automotive Dealership",
    category: "E-commerce",
    description:
      "A premium digital platform for a high-end luxury car dealership featuring virtual showrooms, real-time inventory, and AI-powered car recommendations.",
    longDescription:
      "Built a comprehensive digital marketplace for a luxury automotive dealership that sells exotic and premium vehicles. The platform features immersive 3D car viewing, AI-powered vehicle matching, real-time inventory management, and a seamless booking system for test drives and purchases.",
    image: "/images/project-auto-1.png",
    gallery: [
      "/images/project-auto-1.png",
      "/images/project-auto-2.png",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Three.js", "OpenAI", "PostgreSQL"],
    features: [
      "AI-powered vehicle recommendation engine",
      "Immersive 3D car viewer with 360° rotation",
      "Real-time inventory tracking",
      "Virtual test drive scheduling",
      "Financing calculator with instant approval",
      "Multi-language support",
    ],
    challenges: [
      "Rendering high-quality 3D car models without performance degradation",
      "Building a real-time inventory sync system across multiple dealerships",
      "Implementing AI recommendations that understand user preferences accurately",
    ],
    solution:
      "Used Three.js with optimized LOD models for 3D rendering, implemented WebSocket-based real-time sync, and fine-tuned GPT-4 for understanding nuanced car preferences from natural language queries.",
    results: [
      "40% increase in online engagement",
      "25% increase in test drive bookings",
      "15% reduction in inventory holding time",
      "92% user satisfaction score",
    ],
    liveUrl: "https://eternziv.github.io/car/",
    githubUrl: "https://github.com/EternZiv/car/",
  },
  {
    id: "2",
    slug: "power2go-logistics",
    title: "Power2Go Logistics Platform",
    category: "Web Application",
    description:
      "An enterprise logistics management platform with real-time tracking, route optimization, and AI-driven delivery predictions.",
    longDescription:
      "Developed a full-stack logistics management platform for Power2Go, a growing logistics company. The platform handles fleet management, route optimization, real-time package tracking, and AI-powered delivery time predictions.",
    image: "/images/project-auto-2.png",
    gallery: [
      "/images/project-auto-1.png",
      "/images/project-auto-2.png",
    ],
    techStack: ["Next.js 15", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis"],
    features: [
      "Real-time GPS tracking with map visualization",
      "AI-powered route optimization",
      "Delivery time prediction engine",
      "Fleet management dashboard",
      "Automated invoicing system",
      "Customer tracking portal",
    ],
    challenges: [
      "Processing real-time GPS data from hundreds of vehicles simultaneously",
      "Building accurate ML models for delivery time predictions",
      "Creating a dashboard that handles complex logistics data intuitively",
    ],
    solution:
      "Implemented WebSocket architecture for real-time updates, used gradient boosting models for delivery predictions, and designed a hierarchical dashboard layout that surfaces critical information at a glance.",
    results: [
      "30% improvement in delivery efficiency",
      "20% reduction in fuel costs",
      "95% accurate delivery time predictions",
      "50% reduction in customer support queries",
    ],
    liveUrl: "https://eternziv.github.io/power2go/",
    githubUrl: "https://github.com/EternZiv/power2go",
  },
  {
    id: "3",
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    category: "AI Application",
    description:
      "A sophisticated AI-powered analytics dashboard with predictive insights, natural language queries, and automated reporting.",
    longDescription:
      "Created a comprehensive AI analytics dashboard that allows business users to query their data using natural language, receive AI-generated insights, and automate report generation. The platform connects to multiple data sources and provides real-time visualizations.",
    image: "/images/project-auto-1.png",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "OpenAI", "D3.js"],
    features: [
      "Natural language data queries",
      "AI-generated business insights",
      "Automated report scheduling",
      "Custom dashboard builder",
      "Multi-source data integration",
      "Real-time collaboration",
    ],
    challenges: [
      "Translating natural language queries to accurate SQL/API calls",
      "Generating meaningful insights without false positives",
      "Supporting multiple data source types with different schemas",
    ],
    solution:
      "Built a query translation layer using GPT-4 with schema-aware prompting, implemented confidence scoring for insights, and created a unified data connector interface for various source types.",
    results: [
      "60% reduction in time to insight",
      "85% user adoption rate",
      "200+ automated reports generated daily",
      "4.8/5 user satisfaction rating",
    ],
    liveUrl: "https://example.com/ai-dashboard",
    githubUrl: "https://github.com/example/ai-dashboard",
  },
  {
    id: "4",
    slug: "business-website",
    title: "Premium Business Website",
    category: "Website",
    description:
      "A stunning brand website for a premium consulting firm with dynamic content, animations, and integrated CRM.",
    longDescription:
      "Designed and developed a premium brand website for a high-end consulting firm. The site features dynamic content management, sophisticated animations, integrated CRM forms, and a client portal with secure document exchange.",
    image: "/images/project-auto-2.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Sanity CMS", "HubSpot"],
    features: [
      "Dynamic content management via Sanity CMS",
      "Integrated CRM lead capture",
      "Secure client portal",
      "Blog with AI content suggestions",
      "Multilingual support",
      "Analytics dashboard",
    ],
    challenges: [
      "Creating a CMS experience that non-technical editors love",
      "Integrating HubSpot CRM seamlessly with the frontend",
      "Maintaining sub-second page loads with dynamic content",
    ],
    solution:
      "Used Sanity's real-time preview for an excellent editor experience, built a custom HubSpot integration layer, and leveraged ISR for fast dynamic page loads.",
    results: [
      "35% increase in lead conversion",
      "50% reduction in content update time",
      "95+ Lighthouse score across all pages",
      "3x increase in organic traffic",
    ],
    liveUrl: "https://example.com/business",
    githubUrl: "https://github.com/example/business",
  },
  {
    id: "5",
    slug: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    category: "E-commerce",
    description:
      "A feature-rich e-commerce platform with AI product recommendations, smart search, and seamless checkout.",
    longDescription:
      "Built a modern e-commerce platform with a focus on conversion optimization. Features include AI-powered product recommendations, voice-enabled search, AR product preview, and a seamless one-click checkout experience.",
    image: "/images/project-auto-1.png",
    techStack: ["Next.js 15", "TypeScript", "Stripe", "OpenAI", "PostgreSQL", "Redis"],
    features: [
      "AI product recommendations",
      "Voice-enabled search",
      "AR product preview",
      "One-click checkout",
      "Abandoned cart recovery",
      "Inventory forecasting",
    ],
    challenges: [
      "Implementing AR preview that works across devices",
      "Building a recommendation engine that improves over time",
      "Optimizing checkout for maximum conversion",
    ],
    solution:
      "Used WebXR API for cross-device AR preview, implemented collaborative filtering with real-time feedback loops, and designed a streamlined checkout flow with smart defaults.",
    results: [
      "28% increase in average order value",
      "45% reduction in cart abandonment",
      "20% increase in conversion rate",
      "90% recommendation accuracy",
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "6",
    slug: "saas-landing-page",
    title: "SaaS Landing Page",
    category: "Landing Page",
    description:
      "A high-converting SaaS landing page with animated demos, social proof, and a frictionless sign-up flow.",
    longDescription:
      "Created a conversion-optimized landing page for a B2B SaaS product. The page features interactive product demos, live social proof notifications, animated feature showcases, and an A/B tested sign-up flow.",
    image: "/images/project-auto-2.png",
    techStack: ["Next.js 15", "TypeScript", "Framer Motion", "Vercel Analytics", "HubSpot"],
    features: [
      "Interactive product demo",
      "Live social proof feed",
      "Animated feature sections",
      "A/B tested CTA placements",
      "Scroll-triggered animations",
      "Integrated analytics",
    ],
    challenges: [
      "Making complex product features understandable in seconds",
      "Balancing rich animations with fast load times",
      "Building trust quickly with skeptical B2B buyers",
    ],
    solution:
      "Used progressive disclosure with micro-animations to explain features, optimized all animations with will-change and GPU acceleration, and strategically placed social proof elements throughout the page.",
    results: [
      "40% increase in sign-up conversion",
      "55% decrease in bounce rate",
      "12% increase in demo requests",
      "98th percentile for page speed",
    ],
    liveUrl: "https://example.com/saas",
    githubUrl: "https://github.com/example/saas",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))];
}
