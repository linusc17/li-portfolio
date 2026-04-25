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
    slug: "ledger",
    name: "Ledger",
    description:
      "Personal workflow tracker for freelancers — daily task checklists per client, salary tracking with pay day calendars, and completion history heatmaps. Installable as a PWA.",
    tech: "Next.js 16 • TypeScript • Convex • Tailwind v4 • shadcn/ui",
    images: [
      "/ledger-today.png",
      "/ledger-salary.png",
      "/ledger-drawer.png",
      "/ledger-history.png",
      "/ledger-settings.png",
    ],
    link: "https://use-ledger.vercel.app/",
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    description:
      "Multiplayer Tic Tac Toe with AI opponent, real-time online play, chat, and competitive leaderboards",
    tech: "Next.js • TypeScript • Socket.io • Express.js • MongoDB",
    image: "/tictactoe.png",
    link: "https://tic-tac-toe-weblc.vercel.app/",
  },
  {
    slug: "buzz-coffee-shop",
    name: "Buzz Coffee Shop System",
    description:
      "Coffee shop management with token-based ordering, real-time tracking, and staff dashboard",
    tech: "Next.js 15 • TypeScript • Firebase",
    images: ["/buzz0.png", "/buzz1.png", "/buzz2.png"],
    link: "https://buzzph.vercel.app/",
  },
  {
    slug: "ai-fitness-planner",
    name: "AI Fitness Planner",
    description:
      "AI-powered fitness app with workout and meal planning using Gemini API and progress tracking",
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
      "Aircraft information system with QR code scanning for parts documentation and training manuals",
    tech: "Next.js • TypeScript • Supabase",
    image: "/piperwarrior.png",
    link: "https://piperwarrior.vercel.app/",
  },
  {
    slug: "homalift-corporate",
    name: "Homalift Corporate Site",
    description:
      "Elevator company website with product showcases, project portfolio, and lead generation forms",
    tech: "Next.js • Tailwind CSS",
    image: "/homalift.png",
    link: "https://homalift.vercel.app/",
  },
  {
    slug: "facilities-system",
    name: "Facilities System",
    description:
      "University facilities management with maintenance requests, equipment reservation, and room booking",
    tech: "HTML • CSS • Tailwind CSS • PHP • MySQL",
    image: "/project4.png",
  },
  {
    slug: "travel-agency-website",
    name: "Travel Agency Website",
    description:
      "Booking and reservation system with streamlined trip management and customer portal",
    tech: "WordPress • WPTravelEngine",
    image: "/project2.png",
  },
  {
    slug: "drivemetro",
    name: "DriveMetro",
    description:
      "Driver education LMS with student enrollment, course tracking, and automated PDF report generation",
    tech: "Next.js • Supabase • Puppeteer",
    image: "/drivemetro.png",
  },
  {
    slug: "emergency-gps-tracker",
    name: "Emergency GPS Tracker",
    description:
      "Mobile emergency response app with real-time GPS tracking, offline storage, and location services",
    tech: "Flutter • Geolocator • Flutter Map",
    image: "/gps.png",
  },
  {
    slug: "nudmarket-mobile-pos",
    name: "NUDMarket Mobile POS",
    description:
      "Mobile e-commerce POS with shopping cart, product reviews, and inventory management",
    tech: "Flutter • Supabase",
    image: "/project3.png",
  },
];
