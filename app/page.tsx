"use client";

import React, { useEffect, useState, useRef } from "react";
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
  SiVite,
  SiAntdesign,
  SiNestjs,
  SiPostgresql,
  SiSequelize,
  SiFramer,
  SiChakraui,
  SiMui,
  SiJest,
  SiFlutter,
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
import {
  ProjectInteractions,
  ProjectInteractionsRef,
} from "@/components/ProjectInteractions";
import { projects } from "@/lib/projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const projectRefs = useRef<
    Record<string, React.RefObject<ProjectInteractionsRef | null>>
  >({});
  projects.forEach((project) => {
    if (!projectRefs.current[project.slug]) {
      projectRefs.current[project.slug] =
        React.createRef<ProjectInteractionsRef>();
    }
  });
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
        Icon: SiVite,
        name: "Vite",
        description: "Next-generation frontend build tool",
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
        Icon: SiNestjs,
        name: "NestJS",
        description: "Progressive Node.js framework for scalable server-side applications",
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
        Icon: SiSequelize,
        name: "Sequelize",
        description: "Promise-based ORM for PostgreSQL and SQL databases",
      },
      {
        Icon: SiPostgresql,
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
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
        Icon: SiAntdesign,
        name: "Ant Design",
        description: "Enterprise-level UI design system for React",
      },
      {
        Icon: SiChakraui,
        name: "Chakra UI",
        description: "Simple, modular component library for React",
      },
      {
        Icon: SiMui,
        name: "Material UI",
        description: "React component library implementing Material Design",
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
        Icon: SiFramer,
        name: "Framer Motion",
        description: "Production-ready animation library for React",
      },
      {
        Icon: SiFlutter,
        name: "Flutter",
        description: "Cross-platform mobile app development framework",
      },
      {
        Icon: SiJest,
        name: "Jest",
        description: "JavaScript testing framework for unit and integration tests",
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
        Icon: SiVite,
        name: "Vite",
        description: "Next-generation frontend build tool",
      },
      {
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
      },
      {
        Icon: SiAntdesign,
        name: "Ant Design",
        description: "Enterprise-level UI design system for React",
      },
      {
        Icon: SiChakraui,
        name: "Chakra UI",
        description: "Simple, modular component library for React",
      },
      {
        Icon: SiMui,
        name: "Material UI",
        description: "React component library implementing Material Design",
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
        Icon: SiFramer,
        name: "Framer Motion",
        description: "Production-ready animation library for React",
      },
      {
        Icon: SiFlutter,
        name: "Flutter",
        description: "Cross-platform mobile app development framework",
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
        Icon: SiNestjs,
        name: "NestJS",
        description: "Progressive Node.js framework for scalable server-side applications",
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
        Icon: SiSequelize,
        name: "Sequelize",
        description: "Promise-based ORM for PostgreSQL and SQL databases",
      },
    ],
    Database: [
      {
        Icon: SiPostgresql,
        name: "PostgreSQL",
        description: "Advanced open-source relational database",
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
        Icon: SiJest,
        name: "Jest",
        description: "JavaScript testing framework for unit and integration tests",
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

  const renderProjectCard = (project: typeof projects[0], imageHeight: string) => {
    const interactionRef = projectRefs.current[project.slug];

    const handleCardHover = () => {
      if (interactionRef?.current) {
        interactionRef.current.incrementView();
      }
    };

    return (
      <Card
        key={project.slug}
        className="fade-in overflow-hidden hover-lift group"
        onMouseEnter={handleCardHover}
      >
        <CardContent className="p-0">
          <div className={`relative ${imageHeight} overflow-hidden bg-muted/50`}>
            {project.images ? (
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {project.images.map((image: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className={`relative ${imageHeight}`}>
                        <Image
                          src={image}
                          alt={`${project.name} - Image ${index + 1}`}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
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
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl text-primary">📁</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Project Preview</p>
                </div>
              </div>
            )}
            {project.link && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-background/40">
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
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {project.description}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.tech}
              </div>
              <ProjectInteractions
                ref={interactionRef}
                projectSlug={project.slug}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-background`}>
      <main className="bg-background text-foreground min-h-screen px-4 sm:px-10 md:px-20 lg:px-40 bg-grain">
        <nav className="py-4 sm:py-6 flex justify-between items-center sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 -mx-4 sm:-mx-10 md:-mx-20 lg:-mx-40 px-4 sm:px-10 md:px-20 lg:px-40">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bebas-neue tracking-wider text-primary">
            LINUS CAAYUPAN
          </h1>
          <div className="flex items-center space-x-1 sm:space-x-6">
            <a href="#skills" className="hidden md:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="hidden md:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#experience" className="hidden md:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#contact-form" className="hidden md:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <Button
              onClick={handleResumeRequest}
              variant="outline"
              size="sm"
              className="hidden sm:flex transition-all duration-300 hover:scale-105 border-primary/30 hover:border-primary text-primary"
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

        <section className="text-center py-16 sm:py-24 md:py-32 lg:py-40 max-w-3xl mx-auto">
          <div className="space-y-6 mb-10">
            <h2 className="fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Vincent Linus
              <span className="block text-primary">Caayupan</span>
            </h2>
            <h3 className="fade-in text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground tracking-wide">
              Full-Stack Developer
            </h3>
            <div className="fade-in min-h-[3rem] sm:min-h-[3.5rem]">
              <TypingAnimation />
            </div>
          </div>

          <div className="fade-in flex justify-center py-4 gap-4 sm:gap-6">
            <Button variant="ghost" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <a href="https://www.facebook.com/linuscypn/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <a href="https://www.instagram.com/lns.ai/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <a href="https://github.com/linusc17" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
              <a href="https://www.linkedin.com/in/linuscypn/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </section>

        <section id="skills" className="text-center my-12 sm:mt-8 mb-32 section-gradient">
          <h2 className="fade-in font-bebas-neue text-3xl sm:text-5xl md:text-6xl py-4 sm:py-8 md:py-12 text-primary tracking-wider">
            TECH STACK
          </h2>
          <div className="fade-in flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
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
                className="fade-in hover-lift relative overflow-hidden group"
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
            <div className="fade-in flex justify-center mt-8">
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
            <div className="fade-in flex justify-center mt-6">
              <Button
                onClick={() => setShowAllSkills(false)}
                variant="ghost"
                size="sm"
                className="text-sm transition-all duration-300 hover:scale-105"
              >
                Show Less
              </Button>
            </div>
          )}
        </section>

        <section id="projects" className="text-center my-12 sm:mt-8 mb-32">
          <h2 className="fade-in font-bebas-neue text-3xl sm:text-5xl md:text-6xl py-4 sm:py-8 md:py-12 text-primary tracking-wider">
            PERSONAL PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {projects.slice(0, 2).map((project) =>
              renderProjectCard(project, "h-72 sm:h-96")
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.slice(2).map((project) =>
              renderProjectCard(project, "h-64")
            )}
          </div>
        </section>

        <section id="experience" className="text-center my-12 sm:mt-8 mb-32 section-gradient">
          <h2 className="fade-in font-bebas-neue text-3xl sm:text-5xl md:text-6xl py-4 sm:py-8 md:py-12 text-primary tracking-wider">
            EXPERIENCE
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 w-0.5 h-full bg-border"></div>

              <div className="space-y-8">
                <div className="fade-in relative">
                  <div className="ml-16 relative">
                    <div className="absolute -left-10 top-6 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                    <Card className="hover-lift">
                      <CardContent className="p-6 text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">Junior Software Engineer</h3>
                            <h4 className="text-base text-primary font-medium">Nerve Technologies</h4>
                          </div>
                          <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                            Oct 2024 - Present
                          </div>
                        </div>
                        <div className="text-sm space-y-2 text-muted-foreground">
                          {[
                            "Delivered scalable MERN applications with responsive React UIs using SCSS/Tailwind and Ant Design",
                            "Developed secure JWT-based REST APIs with Express.js microservices architecture",
                            "Managed databases with Prisma, Sequelize, and Mongoose across PostgreSQL and MongoDB",
                            "Added real-time features with Socket.io across multiple business domains",
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="fade-in relative">
                  <div className="ml-16 relative">
                    <div className="absolute -left-10 top-6 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                    <Card className="hover-lift">
                      <CardContent className="p-6 text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">Freelance Developer</h3>
                            <h4 className="text-base text-primary font-medium">Contract Work</h4>
                          </div>
                          <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                            Oct 2024 - Present
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Select contract engagements alongside full-time role:
                        </p>

                        <div className="border-l-2 border-primary/20 pl-4 mb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h5 className="text-sm font-semibold text-foreground">Dona Alejandra, Inc.</h5>
                            <span className="text-xs text-muted-foreground">Nov 2025</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Built a scalable enterprise HR management platform using React, Vite, Tailwind CSS, Material UI, and FullCalendar. Integrated RESTful APIs with Axios.
                          </p>
                        </div>

                        <div className="border-l-2 border-primary/20 pl-4 mb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h5 className="text-sm font-semibold text-foreground">Apetomic Studio</h5>
                            <span className="text-xs text-muted-foreground">Sep 2025</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Developed a game using Next.js, Supabase, Framer Motion, and PixiJS with Zustand and XState for complex state management.
                          </p>
                        </div>

                        <div className="border-l-2 border-primary/20 pl-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                            <h5 className="text-sm font-semibold text-foreground">Techmaker Digital Innovations</h5>
                            <span className="text-xs text-muted-foreground">Oct 2024</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Built a contract management app with Next.js and Chakra UI. Enhanced a cinema-equipment e-commerce platform with Firebase-based inventory management.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="fade-in relative">
                  <div className="ml-16 relative">
                    <div className="absolute -left-10 top-6 transform -translate-x-1/2 w-3 h-3 bg-muted-foreground/50 rounded-full border-2 border-background z-10"></div>
                    <Card className="hover-lift">
                      <CardContent className="p-6 text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">Web Developer Intern (Team Leader)</h3>
                            <h4 className="text-base text-primary font-medium">Unified Internship Program</h4>
                          </div>
                          <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                            Mar 2024 - Jul 2024
                          </div>
                        </div>
                        <div className="text-sm space-y-2 text-muted-foreground">
                          {[
                            "Led a small development team in building a travel agency booking system",
                            "Used WordPress and WPTravelEngine for backend booking and reservation workflows",
                            "Gained experience in project leadership and team coordination",
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="fade-in relative">
                  <div className="ml-16 relative">
                    <div className="absolute -left-10 top-6 transform -translate-x-1/2 w-3 h-3 bg-muted-foreground/50 rounded-full border-2 border-background z-10"></div>
                    <Card className="hover-lift">
                      <CardContent className="p-6 text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">BS Information Technology</h3>
                            <h4 className="text-base text-primary font-medium">Polytechnic University of the Philippines</h4>
                          </div>
                          <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                            2021 - 2024
                          </div>
                        </div>
                        <div className="text-sm space-y-2 text-muted-foreground">
                          {[
                            "Consistent Dean's/President's Lister",
                            "Developed strong foundation in programming and software development",
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form" className="text-center my-12 sm:mt-8 mb-20">
          <h2 className="fade-in font-bebas-neue text-3xl sm:text-5xl md:text-6xl py-4 sm:py-8 text-primary tracking-wider">
            GET IN TOUCH
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="fade-in flex flex-col justify-center items-center space-y-4 sm:space-y-6 py-4 lg:flex-row lg:space-y-0 lg:space-x-12 mb-8">
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

            <Card className="fade-in hover-lift">
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
        </section>
      </main>
    </div>
  );
}
