"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  Facebook,
  Instagram,
  Github,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiSupabase,
  SiTypescript,
  SiMongodb,
  SiSass,
  SiSocketdotio,
  SiPrisma,
  SiFirebase,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiNpm,
  SiGit,
  SiSlack,
  SiCanva,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TypingAnimation from "../components/TypingAnimation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleResumeRequest = () => {
    setContactForm({
      name: "",
      email: "",
      message:
        "Hi Vincent! I'd like to request your full resume for a position I'm considering you for. Could you please send it over? Thank you!",
    });
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("active");
          element.classList.remove("fade-out");
        } else {
          element.classList.remove("active");
          element.classList.add("fade-out");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowAllSkills(false);

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("active");
          element.classList.remove("fade-out");
        }
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  useEffect(() => {
    if (showAllSkills) {
      const timer = setTimeout(() => {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((element) => {
          if (isInViewport(element)) {
            element.classList.add("active");
            element.classList.remove("fade-out");
          }
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showAllSkills]);

  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const skillCategories = {
    All: [
      {
        Icon: SiJavascript,
        name: "JavaScript",
        description: "Programming language for web development",
      },
      {
        Icon: SiTypescript,
        name: "TypeScript",
        description: "Typed superset of JavaScript for scalable applications",
      },
      {
        Icon: SiReact,
        name: "React",
        description: "JavaScript library for building user interfaces",
      },
      {
        Icon: SiNextdotjs,
        name: "Next.js",
        description: "React framework for production",
      },
      {
        Icon: SiNodedotjs,
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
      },
      {
        Icon: SiExpress,
        name: "Express.js",
        description: "Web application framework for Node.js",
      },
      {
        Icon: SiSocketdotio,
        name: "Socket.io",
        description: "Real-time bidirectional event-based communication",
      },
      {
        Icon: SiPrisma,
        name: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript",
      },
      {
        Icon: SiMongodb,
        name: "MongoDB",
        description: "NoSQL database for modern applications",
      },
      {
        Icon: SiFirebase,
        name: "Firebase",
        description: "Google's app development platform",
      },
      {
        Icon: SiSupabase,
        name: "Supabase",
        description: "Open source Firebase alternative",
      },
      {
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        Icon: SiSass,
        name: "SCSS",
        description: "CSS preprocessor with enhanced features",
      },
      {
        Icon: SiBootstrap,
        name: "Bootstrap",
        description: "Front-end framework for responsive design",
      },
      {
        Icon: SiGit,
        name: "Git",
        description: "Version control system for tracking code changes",
      },
      {
        Icon: SiGithub,
        name: "GitHub",
        description:
          "Code hosting platform for version control and collaboration",
      },
      {
        Icon: SiVisualstudiocode,
        name: "VS Code",
        description: "Lightweight code editor with powerful features",
      },
      {
        Icon: SiPostman,
        name: "Postman",
        description: "API development and testing platform",
      },
      {
        Icon: SiFigma,
        name: "Figma",
        description: "Collaborative interface design tool",
      },
      {
        Icon: SiCanva,
        name: "Canva",
        description: "Graphic design platform for visual content",
      },
      {
        Icon: SiSlack,
        name: "Slack",
        description: "Team communication and collaboration platform",
      },
      {
        Icon: SiNpm,
        name: "npm",
        description: "Package manager for JavaScript and Node.js",
      },
      {
        Icon: SiAnthropic,
        name: "Claude Code",
        description: "AI-powered development environment and coding assistant",
      },
      {
        Icon: SiOpenai,
        name: "ChatGPT",
        description: "AI assistant for code generation and problem solving",
      },
    ],
    Frontend: [
      {
        Icon: SiReact,
        name: "React",
        description: "JavaScript library for building user interfaces",
      },
      {
        Icon: SiNextdotjs,
        name: "Next.js",
        description: "React framework for production",
      },
      {
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        Icon: SiSass,
        name: "SCSS",
        description: "CSS preprocessor with enhanced features",
      },
      {
        Icon: SiBootstrap,
        name: "Bootstrap",
        description: "Front-end framework for responsive design",
      },
    ],
    Backend: [
      {
        Icon: SiNodedotjs,
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
      },
      {
        Icon: SiExpress,
        name: "Express.js",
        description: "Web application framework for Node.js",
      },
      {
        Icon: SiSocketdotio,
        name: "Socket.io",
        description: "Real-time bidirectional event-based communication",
      },
      {
        Icon: SiPrisma,
        name: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript",
      },
    ],
    Database: [
      {
        Icon: SiMongodb,
        name: "MongoDB",
        description: "NoSQL database for modern applications",
      },
      {
        Icon: SiFirebase,
        name: "Firebase",
        description: "Google's app development platform",
      },
      {
        Icon: SiSupabase,
        name: "Supabase",
        description: "Open source Firebase alternative",
      },
    ],
    Tools: [
      {
        Icon: SiGit,
        name: "Git",
        description: "Version control system for tracking code changes",
      },
      {
        Icon: SiGithub,
        name: "GitHub",
        description:
          "Code hosting platform for version control and collaboration",
      },
      {
        Icon: SiVisualstudiocode,
        name: "VS Code",
        description: "Lightweight code editor with powerful features",
      },
      {
        Icon: SiPostman,
        name: "Postman",
        description: "API development and testing platform",
      },
      {
        Icon: SiFigma,
        name: "Figma",
        description: "Collaborative interface design tool",
      },
      {
        Icon: SiCanva,
        name: "Canva",
        description: "Graphic design platform for visual content",
      },
      {
        Icon: SiSlack,
        name: "Slack",
        description: "Team communication and collaboration platform",
      },
      {
        Icon: SiNpm,
        name: "npm",
        description: "Package manager for JavaScript and Node.js",
      },
      {
        Icon: SiAnthropic,
        name: "Claude Code",
        description: "AI-powered development environment and coding assistant",
      },
      {
        Icon: SiOpenai,
        name: "ChatGPT",
        description: "AI assistant for code generation and problem solving",
      },
    ],
    Languages: [
      {
        Icon: SiJavascript,
        name: "JavaScript",
        description: "Programming language for web development",
      },
      {
        Icon: SiTypescript,
        name: "TypeScript",
        description: "Typed superset of JavaScript for scalable applications",
      },
    ],
  };

  const allSkillsForCategory =
    skillCategories[selectedCategory as keyof typeof skillCategories] ||
    skillCategories.All;

  const initialDisplayCount = 12;
  const shouldPaginate =
    selectedCategory === "All" &&
    allSkillsForCategory.length > initialDisplayCount;

  const filteredSkills =
    shouldPaginate && !showAllSkills
      ? allSkillsForCategory.slice(0, initialDisplayCount)
      : allSkillsForCategory;

  const hasMoreSkills =
    shouldPaginate &&
    !showAllSkills &&
    allSkillsForCategory.length > initialDisplayCount;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus(
          "Thank you! Your message has been sent successfully. I'll get back to you soon!"
        );
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus(
          data.error ||
            "Sorry, there was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus(
        "Sorry, there was an error sending your message. Please try contacting me directly at v.caayupan@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-background text-foreground min-h-screen px-4 sm:px-10 md:px-20 lg:px-40">
        <nav className="py-5 sm:py-10 mb-6 sm:mb-12 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bebas-neue">
            LINUS CAAYUPAN
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={handleResumeRequest}
              variant="outline"
              size="sm"
              className="hidden sm:flex transition-all duration-300 hover:scale-105"
            >
              Request Resume
            </Button>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="data-[state=checked]:bg-primary"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Switch>
          </div>
        </nav>

        <div className="fade-in fade-out relative mx-auto rounded-full w-60 sm:w-80 h-60 sm:h-80 overflow-hidden animate-float hover-tilt">
          <Image src="/me.jpg" alt="Profile" fill className="object-cover" />
        </div>

        <div className="text-center p-5 sm:p-10">
          <div className="space-y-4 mb-8">
            {" "}
            <h2 className="fade-in fade-out text-xl sm:text-3xl md:text-4xl lg:text-5xl py-2 text-primary font-medium leading-tight">
              Vincent Linus A. Caayupan
            </h2>
            <h3 className="fade-in fade-out text-lg sm:text-xl md:text-2xl py-2 leading-tight">
              Full-Stack Developer
            </h3>
            <div className="min-h-[3rem] sm:min-h-[4rem]">
              <TypingAnimation />
            </div>
          </div>

          <div className="fade-in fade-out flex justify-center py-3 sm:py-4 gap-6 sm:gap-16">
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.facebook.com/linuscypn/" className="p-2">
                <Facebook className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.instagram.com/lns.ai/" className="p-2">
                <Instagram className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://github.com/linusc17" className="p-2">
                <Github className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.linkedin.com/in/linuscypn/" className="p-2">
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>

          <div className="text-center my-20 sm:mt-20 mb-32">
            <h2 className="fade-in fade-out text-2xl sm:text-4xl md:text-5xl lg:text-6xl py-4 sm:py-8 md:py-16 text-primary font-medium">
              Tech Stack
            </h2>
            <div className="fade-in fade-out flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              {Object.keys(skillCategories).map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm transition-all duration-300 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredSkills.map(({ Icon, name, description }) => (
                <Card
                  key={name}
                  className="fade-in fade-out hover-lift relative overflow-hidden group"
                >
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center relative z-10 h-full min-h-[200px]">
                    <Icon className="text-5xl sm:text-6xl text-primary mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                      {name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center line-clamp-3">
                      {description}
                    </p>
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {hasMoreSkills && (
              <div className="fade-in fade-out flex justify-center mt-8">
                <Button
                  onClick={() => setShowAllSkills(true)}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Show More ({allSkillsForCategory.length - initialDisplayCount}{" "}
                  more)
                </Button>
              </div>
            )}

            {showAllSkills && selectedCategory === "All" && (
              <div className="fade-in fade-out flex justify-center mt-6">
                <Button
                  onClick={() => setShowAllSkills(false)}
                  variant="ghost"
                  size="sm"
                  className="text-sm transition-all duration-300 hover:scale-105"
                >
                  Show Less ↑
                </Button>
              </div>
            )}
          </div>

          <div className="text-center my-20 sm:mt-20 mb-32">
            <h2 className="fade-in fade-out text-4xl sm:text-6xl py-8 sm:py-16 text-primary font-medium">
              Personal Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                // {
                //   name: "Tic Tac Toe",
                //   description:
                //     "Real-time multiplayer tic-tac-toe game with user authentication, live chat, global leaderboard, and room-based gameplay with WebSocket communication",
                //   tech: "Next.js • TypeScript • Node.js • Express • MongoDB",
                //   image: "/tictactoe.png",
                //   link: "https://tic-tac-toe-weblc.vercel.app/",
                // },
                {
                  name: "Buzz Coffee Shop System",
                  description:
                    "Complete coffee shop management system with customer token-based ordering, real-time order tracking, staff dashboard, and social media integration for seamless customer experience",
                  tech: "Next.js 15 • TypeScript • Firebase",
                  images: ["/buzz0.png", "/buzz1.png", "/buzz2.png"],
                  link: "https://buzzph.vercel.app/",
                },
                {
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
                  name: "Piper Warrior App",
                  description:
                    "Interactive aircraft information system for aviation training with QR code functionality and detailed component documentation",
                  tech: "Next.js • TypeScript • Supabase",
                  image: "/piperwarrior.png",
                  link: "https://piperwarrior.vercel.app/",
                },
                {
                  name: "Homalift Corporate Site",
                  description:
                    "Professional elevator company website featuring interactive product showcases and project portfolio with lead generation forms",
                  tech: "Next.js • Tailwind CSS",
                  image: "/homalift.png",
                  link: "https://homalift.vercel.app/",
                },
                {
                  name: "Facilities System",
                  description:
                    "Comprehensive facilities management system for university use with maintenance request tracking, equipment reservation, and room booking capabilities",
                  tech: "HTML • CSS • Tailwind CSS • PHP • MySQL",
                  image: "/project4.png",
                },
                {
                  name: "Travel Agency Website",
                  description:
                    "Booking and reservation system for travel agency with streamlined trip management and customer portal using WordPress",
                  tech: "WordPress • WPTravelEngine",
                  image: "/project2.png",
                },
                {
                  name: "DriveMetro",
                  description:
                    "Driver education management system with student enrollment, course tracking, and automated PDF report generation with decision support",
                  tech: "Next.js • Supabase • Puppeteer",
                  image: "/drivemetro.png",
                },
                {
                  name: "Emergency GPS Tracker",
                  description:
                    "Mobile emergency response application with real-time GPS tracking, offline data storage, and location-based emergency services",
                  tech: "Flutter • Geolocator • Flutter Map",
                  image: "/gps.png",
                },
                {
                  name: "NUDMarket Mobile POS",
                  description:
                    "Cross-platform mobile e-commerce POS application with shopping cart, product reviews, and inventory management for retail operations",
                  tech: "Flutter • Supabase",
                  image: "/project3.png",
                },
              ].map((project) => (
                <Card
                  key={project.name}
                  className="fade-in fade-out overflow-hidden hover-lift group"
                >
                  <CardContent className="p-0">
                    <div className="relative h-96 overflow-hidden bg-muted/50">
                      {project.images ? (
                        <Carousel className="w-full h-full">
                          <CarouselContent>
                            {project.images.map(
                              (image: string, index: number) => (
                                <CarouselItem key={index}>
                                  <div className="relative h-96">
                                    <Image
                                      src={image}
                                      alt={`${project.name} - Image ${
                                        index + 1
                                      }`}
                                      fill
                                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      ) : project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                                    <div class="text-center">
                                      <div class="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                                        <span class="text-2xl text-primary">📁</span>
                                      </div>
                                      <p class="text-sm text-muted-foreground">Project Preview</p>
                                    </div>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                              <span className="text-2xl text-primary">📁</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Project Preview
                            </p>
                          </div>
                        </div>
                      )}
                      {project.link && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <Button
                            asChild
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Site
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                        {project.tech}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center my-20 sm:mt-20 mb-32">
            <h2 className="fade-in fade-out text-4xl sm:text-6xl py-8 sm:py-16 text-primary font-medium">
              Experience Timeline
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-6 top-0 w-1 h-full bg-primary/20"></div>

                <div className="space-y-8">
                  {[
                    {
                      period: "Oct 2024 - Present",
                      role: "Junior Software Engineer",
                      company: "Nerve Technologies",
                      achievements: [
                        "Contributed to enterprise-level applications using MERN stack",
                        "Implemented Socket.io real-time messaging features",
                        "Collaborated on 4+ applications serving multiple business domains",
                      ],
                      type: "work",
                    },
                    {
                      period: "Oct 2024 - Present",
                      role: "Web Developer (Part-Time)",
                      company: "Techmaker Digital Innovations",
                      achievements: [
                        "Developed ContractMaker platform for contract signing app",
                        "Built Blacksite e-commerce platform for cinema equipment",
                        "Implemented PDF generation and contract workflows",
                      ],
                      type: "work",
                    },
                    {
                      period: "Mar 2024 - Jul 2024",
                      role: "Web Developer Intern (Team Leader)",
                      company: "Unified Internship Program",
                      achievements: [
                        "Led team in developing travel agency booking system",
                        "Used WordPress and WPTravelEngine for backend system",
                        "Gained experience in project leadership and team coordination",
                      ],
                      type: "work",
                    },
                    {
                      period: "2021 - 2024",
                      role: "Bachelor of Science in Information Technology",
                      company: "Polytechnic University of the Philippines",
                      achievements: [
                        "Consistent Dean's/President's Lister",
                        "Developed strong foundation in programming and software development",
                        "Completed multiple academic projects and coursework",
                      ],
                      type: "education",
                    },
                  ].map((item, index) => (
                    <div key={index} className="fade-in fade-out relative">
                      <div className="ml-16 relative">
                        <div className="absolute -left-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                        <Card className="hover-lift group">
                          <CardContent className="p-6 text-center md:text-left">
                            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between mb-3">
                              <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-1">
                                  {item.role}
                                </h3>
                                <h4 className="text-lg text-primary font-medium">
                                  {item.company}
                                </h4>
                              </div>
                              <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                                {item.period}
                              </div>
                            </div>
                            <div className="text-sm space-y-2 text-muted-foreground text-left">
                              {item.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                  <span className="leading-relaxed text-left">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="contact-form" className="text-center my-20 sm:mt-20">
            <h2 className="fade-in fade-out text-4xl sm:text-6xl py-4 sm:py-8 text-primary font-medium">
              Get in Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="fade-in fade-out flex flex-col justify-center items-center space-y-4 sm:space-y-6 py-4 lg:flex-row lg:space-y-0 lg:space-x-12 mb-8">
                <div className="flex items-center">
                  <Phone className="text-xl sm:text-2xl text-primary mr-2" />
                  <span className="text-lg font-semibold">
                    (+63) 927 022 0661
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-xl sm:text-2xl text-primary mr-2" />
                  <span className="text-lg font-semibold">
                    v.caayupan@gmail.com
                  </span>
                </div>
              </div>

              <Card className="fade-in fade-out hover-lift">
                <CardContent className="p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={contactForm.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                    <div className="text-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                    {submitStatus && (
                      <div
                        className={`text-center text-sm mt-4 ${
                          submitStatus.includes("Thank you")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {submitStatus}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
