export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string;
  images?: string[];
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    description:
      "Interactive Tic Tac Toe with local, AI, and online multiplayer modes featuring chat, reactions, and competitive leaderboards",
    tech: "Next.js • TypeScript • Socket.io • Express.js • MongoDB",
    image: "/tictactoe.png",
    link: "https://tic-tac-toe-weblc.vercel.app/",
  },
  {
    slug: "buzz-coffee-shop",
    name: "Buzz Coffee Shop System",
    description:
      "Complete coffee shop management system with customer token-based ordering, real-time order tracking, staff dashboard, and social media integration",
    tech: "Next.js 15 • TypeScript • Firebase",
    images: ["/buzz0.png", "/buzz1.png", "/buzz2.png"],
    link: "https://buzzph.vercel.app/",
  },
  {
    slug: "ai-fitness-planner",
    name: "AI Fitness Planner",
    description:
      "Comprehensive fitness application with AI-powered workout and meal plan generation using Gemini API, featuring Filipino cuisine focus, and progress tracking",
    tech: "Next.js 14 • TypeScript • Gemini AI • Supabase",
    images: [
      "/fitness-planner.png",
      "/fitness-planner1.png",
      "/fitness-planner2.png",
    ],
    link: "https://fitness-planner-ai.vercel.app/",
  },
  {
    slug: "piper-warrior-app",
    name: "Piper Warrior App",
    description:
      "Interactive aircraft information system for aviation training with QR code functionality and detailed component documentation",
    tech: "Next.js • TypeScript • Supabase",
    image: "/piperwarrior.png",
    link: "https://piperwarrior.vercel.app/",
  },
  {
    slug: "homalift-corporate",
    name: "Homalift Corporate Site",
    description:
      "Professional elevator company website featuring interactive product showcases and project portfolio with lead generation forms",
    tech: "Next.js • Tailwind CSS",
    image: "/homalift.png",
    link: "https://homalift.vercel.app/",
  },
  {
    slug: "facilities-system",
    name: "Facilities System",
    description:
      "Comprehensive facilities management system for university use with maintenance request tracking, equipment reservation, and room booking capabilities",
    tech: "HTML • CSS • Tailwind CSS • PHP • MySQL",
    image: "/project4.png",
  },
  {
    slug: "travel-agency-website",
    name: "Travel Agency Website",
    description:
      "Booking and reservation system for travel agency with streamlined trip management and customer portal using WordPress",
    tech: "WordPress • WPTravelEngine",
    image: "/project2.png",
  },
  {
    slug: "drivemetro",
    name: "DriveMetro",
    description:
      "Driver education management system with student enrollment, course tracking, and automated PDF report generation with decision support",
    tech: "Next.js • Supabase • Puppeteer",
    image: "/drivemetro.png",
  },
  {
    slug: "emergency-gps-tracker",
    name: "Emergency GPS Tracker",
    description:
      "Mobile emergency response application with real-time GPS tracking, offline data storage, and location-based emergency services",
    tech: "Flutter • Geolocator • Flutter Map",
    image: "/gps.png",
  },
  {
    slug: "nudmarket-mobile-pos",
    name: "NUDMarket Mobile POS",
    description:
      "Cross-platform mobile e-commerce POS application with shopping cart, product reviews, and inventory management for retail operations",
    tech: "Flutter • Supabase",
    image: "/project3.png",
  },
];
