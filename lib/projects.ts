export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string;
  domain: string;
  featured?: boolean;
  images?: string[];
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "jais-kitchenette",
    name: "Jai's Kitchenette",
    description:
      "E-commerce platform for a real bakery in Imus, Cavite: storefront with cart, GCash/COD checkout, senior-citizen discounts, and reviews, plus a full admin back office for products, orders, inventory, vouchers, and PDF/Excel reports.",
    tech: "Next.js 15 • React 19 • TypeScript • Express • MongoDB",
    domain: "E-commerce / F&B",
    featured: true,
    image: "/jai-home.png",
    link: "https://jai-kitchenette.vercel.app/",
  },
  {
    slug: "ledger",
    name: "Ledger",
    description:
      "Workflow tracker for freelancers: daily task checklists per client, salary tracking with pay-day calendars, and a completion-history heatmap. Installable as a PWA.",
    tech: "Next.js 16 • TypeScript • Convex • Tailwind v4 • shadcn/ui",
    domain: "Productivity",
    featured: true,
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
      "Multiplayer Tic Tac Toe with AI opponent, real-time online play, chat, and competitive leaderboards.",
    tech: "Next.js • TypeScript • Socket.io • Express.js • MongoDB",
    domain: "Real-time / Games",
    image: "/tictactoe.png",
    link: "https://tic-tac-toe-weblc.vercel.app/",
  },
  {
    slug: "buzz-coffee-shop",
    name: "Buzz Coffee Shop System",
    description:
      "Coffee shop management with token-based ordering, real-time tracking, and a staff dashboard.",
    tech: "Next.js 15 • TypeScript • Firebase",
    domain: "F&B / POS",
    images: ["/buzz0.png", "/buzz1.png", "/buzz2.png"],
    link: "https://buzzph.vercel.app/",
  },
  {
    slug: "ai-fitness-planner",
    name: "AI Fitness Planner",
    description:
      "Fitness app with AI-generated workout and meal plans (Gemini API) and progress tracking.",
    tech: "Next.js 14 • TypeScript • Gemini AI • Supabase",
    domain: "Health / AI",
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
      "Aircraft information system with QR code scanning for parts documentation and training manuals.",
    tech: "Next.js • TypeScript • Supabase",
    domain: "Aviation",
    image: "/piperwarrior.png",
    link: "https://piperwarrior.vercel.app/",
  },
  {
    slug: "homalift-corporate",
    name: "Homalift Corporate Site",
    description:
      "Elevator company website with product showcases, a project portfolio, and lead-generation forms.",
    tech: "Next.js • Tailwind CSS",
    domain: "Corporate",
    image: "/homalift.png",
    link: "https://homalift.vercel.app/",
  },
  {
    slug: "facilities-system",
    name: "Facilities System",
    description:
      "University facilities management with maintenance requests, equipment reservation, and room booking.",
    tech: "HTML • CSS • Tailwind CSS • PHP • MySQL",
    domain: "Enterprise",
    image: "/project4.png",
  },
  {
    slug: "travel-agency-website",
    name: "Travel Agency Website",
    description:
      "Booking and reservation system with streamlined trip management and a customer portal.",
    tech: "WordPress • WPTravelEngine",
    domain: "Travel",
    image: "/project2.png",
  },
  {
    slug: "drivemetro",
    name: "DriveMetro",
    description:
      "Driver-education LMS with student enrollment, course tracking, and automated PDF report generation.",
    tech: "Next.js • Supabase • Puppeteer",
    domain: "Education",
    image: "/drivemetro.png",
  },
  {
    slug: "emergency-gps-tracker",
    name: "Emergency GPS Tracker",
    description:
      "Mobile emergency-response app with real-time GPS tracking, offline storage, and location services.",
    tech: "Flutter • Geolocator • Flutter Map",
    domain: "Mobile / Safety",
    image: "/gps.png",
  },
  {
    slug: "nudmarket-mobile-pos",
    name: "NUDMarket Mobile POS",
    description:
      "Mobile e-commerce POS with a shopping cart, product reviews, and inventory management.",
    tech: "Flutter • Supabase",
    domain: "Mobile / Commerce",
    image: "/project3.png",
  },
];
