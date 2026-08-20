"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  Phone,
  Mail,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  ImageOff,
  Maximize2,
  Database,
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
  SiLaravel,
  SiPostgresql,
  SiSequelize,
  SiFramer,
  SiChakraui,
  SiMui,
  SiJest,
  SiVitest,
  SiMysql,
  SiReactquery,
  SiFlutter,
  SiLinkedin,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/Reveal";
import {
  ProjectInteractions,
  ProjectInteractionsRef,
} from "@/components/ProjectInteractions";
import { projects } from "@/lib/projects";
import AnimatedBackground from "@/components/AnimatedBackground";
import { CountUp } from "@/components/CountUp";
import { motion, useScroll, useSpring } from "framer-motion";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.25em] text-primary">
      {children}
    </span>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  kicker,
}: {
  index: string;
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <span className="h-px w-8 bg-border" />
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight mt-4 text-balance">
        {title}
      </h2>
      {kicker && (
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          {kicker}
        </p>
      )}
    </Reveal>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-success">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
      </span>
      Live
    </span>
  );
}

type IconComponent = React.ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;
type StackItem = { Icon: IconComponent; name: string; core?: boolean };
const stackGroups: { label: string; items: StackItem[] }[] = [
  {
    label: "Languages",
    items: [
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript", core: true },
    ],
  },
  {
    label: "Frontend",
    items: [
      { Icon: SiReact, name: "React", core: true },
      { Icon: SiNextdotjs, name: "Next.js", core: true },
      { Icon: SiVite, name: "Vite" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", core: true },
      { Icon: SiFramer, name: "Framer Motion" },
      { Icon: SiReactquery, name: "TanStack Query" },
      { Icon: SiSass, name: "SCSS" },
      { Icon: SiBootstrap, name: "Bootstrap" },
      { Icon: SiAntdesign, name: "Ant Design", core: true },
      { Icon: SiChakraui, name: "Chakra UI" },
      { Icon: SiMui, name: "Material UI" },
      { Icon: SiFlutter, name: "Flutter", core: true },
    ],
  },
  {
    label: "Backend",
    items: [
      { Icon: SiNodedotjs, name: "Node.js", core: true },
      { Icon: SiExpress, name: "Express.js", core: true },
      { Icon: SiNestjs, name: "NestJS", core: true },
      { Icon: SiLaravel, name: "Laravel" },
      { Icon: SiSocketdotio, name: "Socket.io" },
      { Icon: SiPrisma, name: "Prisma" },
      { Icon: SiSequelize, name: "Sequelize" },
    ],
  },
  {
    label: "Database",
    items: [
      { Icon: SiPostgresql, name: "PostgreSQL", core: true },
      { Icon: SiMysql, name: "MySQL", core: true },
      { Icon: SiMongodb, name: "MongoDB", core: true },
      { Icon: SiFirebase, name: "Firebase" },
      { Icon: SiSupabase, name: "Supabase" },
      { Icon: Database, name: "Convex" },
    ],
  },
  {
    label: "Tools & AI",
    items: [
      { Icon: SiGit, name: "Git" },
      { Icon: SiGithub, name: "GitHub" },
      { Icon: SiJest, name: "Jest" },
      { Icon: SiVitest, name: "Vitest" },
      { Icon: SiVisualstudiocode, name: "VS Code" },
      { Icon: SiPostman, name: "Postman" },
      { Icon: SiFigma, name: "Figma" },
      { Icon: SiCanva, name: "Canva" },
      { Icon: SiSlack, name: "Slack" },
      { Icon: SiNpm, name: "npm" },
      { Icon: SiAnthropic, name: "Claude Code" },
      { Icon: SiOpenai, name: "ChatGPT" },
    ],
  },
];

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const scrollScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
    }
  }, [darkMode]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setShowScrollTop(window.scrollY > 600);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const els = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxImages.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImages([]);
      else if (e.key === "ArrowLeft")
        setLightboxIndex(
          (i) => (i - 1 + lightboxImages.length) % lightboxImages.length
        );
      else if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % lightboxImages.length);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxImages]);

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitOk, setSubmitOk] = useState(false);

  const liveCount = projects.filter((p) => p.link).length;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const handleResumeRequest = () => {
    setContactForm({
      name: "",
      email: "",
      message:
        "Hi Vincent, I'd like to request your résumé for a role I have in mind. Could you send it over? Thanks.",
    });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitOk(true);
        setSubmitStatus("Thanks. I'll get back to you soon.");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitOk(false);
        setSubmitStatus(
          data.error ||
            "Something went wrong sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitOk(false);
      setSubmitStatus(
        "Couldn't send your message. Email me directly at v.caayupan@gmail.com."
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

  const renderProjectCard = (
    project: (typeof projects)[0],
    imageHeight: string,
    titleSize: string,
    index: number
  ) => {
    const interactionRef = projectRefs.current[project.slug];
    const images = project.images ?? (project.image ? [project.image] : []);

    return (
      <Reveal key={project.slug} className="h-full" delay={(index % 3) * 0.08}>
        <Card
          className="hover-lift h-full overflow-hidden group bg-card/80 backdrop-blur-sm"
          onMouseEnter={() => interactionRef?.current?.incrementView()}
        >
          <CardContent className="p-0 flex flex-col h-full">
          <div className={`relative ${imageHeight} overflow-hidden bg-muted`}>
            {images.length > 1 ? (
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <button
                        type="button"
                        aria-label={`View ${project.name} screenshot ${index + 1}`}
                        className="relative block w-full cursor-zoom-in"
                        style={{ height: "100%" }}
                        onClick={() => openLightbox(images, index)}
                      >
                        <div className={`relative ${imageHeight}`}>
                          <Image
                            src={image}
                            alt={`${project.name} — screenshot ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : images.length === 1 ? (
              <button
                type="button"
                aria-label={`View ${project.name} screenshot`}
                className="relative block h-full w-full cursor-zoom-in"
                onClick={() => openLightbox(images, 0)}
              >
                <Image
                  src={images[0]}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <ImageOff
                  className="h-10 w-10 text-muted-foreground/50"
                  aria-hidden="true"
                />
              </div>
            )}

            {project.link && (
              <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                <LiveBadge />
              </span>
            )}
            {images.length > 0 && (
              <span className="absolute right-3 top-3 rounded-md bg-background/70 p-1.5 text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5 text-left sm:p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.domain}
            </span>
            <h3
              className={`font-display ${titleSize} font-semibold leading-tight`}
            >
              {project.name}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <p className="font-mono text-xs leading-relaxed text-primary">
              {project.tech}
            </p>
            <div className="flex items-center justify-between border-t border-border/60 pt-3">
              <ProjectInteractions
                ref={interactionRef}
                projectSlug={project.slug}
              />
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  Visit
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
          </CardContent>
        </Card>
      </Reveal>
    );
  };

  return (
    <div>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollScaleX }}
        className="fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-primary"
      />
      <AnimatedBackground darkMode={darkMode} />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4 sm:px-8">
          <nav className="flex items-center gap-1 sm:gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link hidden text-sm font-medium transition-colors md:inline-block ${
                  activeSection === item.id
                    ? "active text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <Sun
                className={`h-[1.1rem] w-[1.1rem] theme-toggle-icon ${
                  darkMode
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <Moon
                className={`h-[1.1rem] w-[1.1rem] theme-toggle-icon ${
                  darkMode
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16">
            <Reveal delay={0}>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Available for work
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Vincent Linus
                <br />
                <span className="text-primary">Caayupan</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I&apos;m a full-stack developer from the Philippines. I build web
                applications and take them to production. Recent work spans
                hospital and accounting systems, government HRIS platforms, and
                e-commerce for real businesses.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 px-6 text-base"
                >
                  <a href="#work">
                    View work
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base"
                >
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-muted-foreground">
                <span>
                  <span className="text-foreground">
                    <CountUp value={projects.length} />
                  </span>{" "}
                  projects
                </span>
                <span className="hidden h-4 w-px bg-border sm:inline-block" />
                <span>
                  <span className="text-foreground">
                    <CountUp value={liveCount} />
                  </span>{" "}
                  live
                </span>
                <span className="hidden h-4 w-px bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Philippines
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex gap-2">
                {[
                  {
                    href: "https://github.com/linusc17",
                    label: "GitHub",
                    Icon: SiGithub,
                  },
                  {
                    href: "https://www.linkedin.com/in/linuscypn/",
                    label: "LinkedIn",
                    Icon: SiLinkedin,
                  },
                  {
                    href: "https://www.facebook.com/linuscypn/",
                    label: "Facebook",
                    Icon: SiFacebook,
                  },
                  {
                    href: "https://www.instagram.com/linuscypnn/",
                    label: "Instagram",
                    Icon: SiInstagram,
                  },
                ].map(({ href, label, Icon }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-10 w-10 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="about" className="py-20 sm:py-28">
            <SectionHeading index="01" eyebrow="About" title="Hi, I'm Linus" />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I&apos;m a full-stack developer based in the Philippines. Right
                  now I&apos;m a Software Engineer at{" "}
                  <span className="text-foreground">Nerve Technologies</span>,
                  and I take on contract work on the side, building web
                  platforms for clients across a range of industries.
                </p>
                <p>
                  Most of what I build is product and client work that ends up in
                  production. I move around the stack depending on the job: React
                  and Next.js on the front end; Node, Express, NestJS, and
                  Laravel on the back end; PostgreSQL, MySQL, or MongoDB for
                  data; and Socket.io or Convex when something needs to be
                  real-time.
                </p>
                <p>
                  I&apos;m open to full-time roles and freelance work.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm">
                  <dl className="space-y-4 font-mono text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Currently
                      </dt>
                      <dd className="mt-1">Software Engineer @ Nerve</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Focus
                      </dt>
                      <dd className="mt-1">Full-stack web</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Education
                      </dt>
                      <dd className="mt-1">BS InfoTech, PUP</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        Status
                      </dt>
                      <dd className="mt-1 inline-flex items-center gap-2 text-success">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" />
                        Open to work
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="work" className="py-20 sm:py-28">
            <SectionHeading
              index="02"
              eyebrow="Work"
              title="What I've built"
              kicker="Most of these are live. Click a screenshot to see it full size."
            />

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {featured.map((project, i) =>
                renderProjectCard(
                  project,
                  "h-64 sm:h-80",
                  "text-2xl sm:text-3xl",
                  i
                )
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, i) =>
                renderProjectCard(project, "h-52", "text-xl", i)
              )}
            </div>
          </section>

          <section id="stack" className="py-20 sm:py-28">
            <SectionHeading
              index="03"
              eyebrow="Stack"
              title="Tools I work with"
              kicker="The ones in cyan are what I use most."
            />
            <div className="space-y-8">
              {stackGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <Reveal className="pt-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {group.label}
                  </Reveal>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map(({ Icon, name, core }, i) => (
                      <Reveal key={name} delay={i * 0.035} y={10}>
                        <span className={`chip ${core ? "chip-core" : ""}`}>
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {name}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="py-20 sm:py-28">
            <SectionHeading
              index="04"
              eyebrow="Background"
              title="Experience"
            />
            <div className="relative">
              <div className="absolute left-[7px] top-2 h-full w-0.5 timeline-line" />
              <div className="space-y-10">
                <Reveal className="relative pl-10">
                  <span className="absolute left-0 top-2 timeline-dot" />
                  <Card className="hover-lift bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-left">
                      <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold">
                            Software Engineer
                          </h3>
                          <h4 className="text-primary">Nerve Technologies</h4>
                        </div>
                        <span className="w-fit font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          Oct 2024 — Present
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {[
                          "Top-3 contributor on a multi-tenant franchise marketing SaaS — 43-route Express/MongoDB API, React + Ant Design frontend, Socket.io realtime",
                          "Top-3 contributor on a multi-tenant inventory and POS SaaS (Express, Sequelize, MySQL, React 19)",
                          "Built features across a hospital facility-management system of 7 microservices behind an API gateway (Express, NestJS, PostgreSQL)",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal className="relative pl-10">
                  <span className="absolute left-0 top-2 timeline-dot" />
                  <Card className="hover-lift bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-left">
                      <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold">
                            Freelance Developer
                          </h3>
                          <h4 className="text-primary">Contract work</h4>
                        </div>
                        <span className="w-fit font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          2024 — Present
                        </span>
                      </div>
                      <p className="mb-1 text-sm text-muted-foreground">
                        Select contract engagements alongside my full-time role:
                      </p>
                      <p className="mb-4 text-xs italic text-muted-foreground">
                        Client names disclosed in my résumé or on request.
                      </p>

                      {[
                        {
                          title:
                            "Software Development Client — Full-Stack Developer",
                          date: "Jan 2026",
                          body: "#1 contributor on a double-entry project-accounting platform now in production (NestJS, TypeORM, PostgreSQL, Next.js), and building a hospital information system across an 84-model clinical and billing domain (Fastify, tRPC, Prisma, React 19).",
                        },
                        {
                          title:
                            "Game Studio Client — Lead Full-Stack Developer",
                          date: "Mar 2026",
                          body: "Core engineer on a pre-launch browser-based multiplayer social RPG (Next.js 16, React 19, Convex): real-time chat with presence and DMs, a deterministic typing-combat engine, and a server-validated daily vendor economy.",
                        },
                        {
                          title:
                            "Government HRIS Client — Full-Stack Developer",
                          date: "Oct 2025",
                          body: "Built payroll, timekeeping, and employee-records features for HRIS platforms serving two national government agencies — React 19 + Vite frontends over Laravel 12 microservices — and was primary developer of a public online recruitment portal.",
                        },
                        {
                          title: "Digital Agency Client — Full-Stack Developer",
                          date: "Oct 2024",
                          body: "Built a contract e-signing and invoicing SaaS used by film production crews, shipped GCash/BPI payment checkout for a fine-art print store, and enhanced a cinema-equipment e-commerce platform (Next.js, Firebase).",
                        },
                      ].map((eng) => (
                        <div
                          key={eng.title}
                          className="mb-4 border-l-2 border-primary/20 pl-4 last:mb-0"
                        >
                          <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h5 className="text-sm font-semibold text-foreground">
                              {eng.title}
                            </h5>
                            <span className="font-mono text-xs text-muted-foreground">
                              {eng.date}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {eng.body}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal className="relative pl-10">
                  <span className="absolute left-0 top-2 timeline-dot-muted" />
                  <Card className="hover-lift bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-left">
                      <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold">
                            Web Developer Intern · Team Leader
                          </h3>
                          <h4 className="text-primary">
                            Unified Internship Program
                          </h4>
                        </div>
                        <span className="w-fit font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          Mar 2024 — Jul 2024
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {[
                          "Led a small development team building a travel-agency booking system",
                          "Used WordPress and WPTravelEngine for booking and reservation workflows",
                          "Gained hands-on experience in project leadership and team coordination",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>

                <Reveal className="relative pl-10">
                  <span className="absolute left-0 top-2 timeline-dot-muted" />
                  <Card className="hover-lift bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-left">
                      <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold">
                            BS Information Technology
                          </h3>
                          <h4 className="text-primary">
                            Polytechnic University of the Philippines
                          </h4>
                        </div>
                        <span className="w-fit font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          2021 — 2024
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {[
                          "Consistent Dean's / President's Lister",
                          "Built a strong foundation in programming and software development",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 sm:py-28">
            <SectionHeading
              index="05"
              eyebrow="Contact"
              title="Get in touch"
              kicker="Got a role or a project in mind? Send a message, or email me directly."
            />

            <div className="grid items-stretch gap-6 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8">
                  <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-success">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                      </span>
                      Available for work
                    </span>

                    <a
                      href="mailto:v.caayupan@gmail.com"
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          Email
                        </span>
                        <span className="text-sm font-medium group-hover:text-primary">
                          v.caayupan@gmail.com
                        </span>
                      </span>
                    </a>

                    <a
                      href="tel:+639270220661"
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          Phone
                        </span>
                        <span className="text-sm font-medium group-hover:text-primary">
                          (+63) 927 022 0661
                        </span>
                      </span>
                    </a>

                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          Location
                        </span>
                        <span className="text-sm font-medium">Philippines</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="mb-4 flex items-center gap-1">
                      {[
                        {
                          href: "https://github.com/linusc17",
                          label: "GitHub",
                          Icon: SiGithub,
                        },
                        {
                          href: "https://www.linkedin.com/in/linuscypn/",
                          label: "LinkedIn",
                          Icon: SiLinkedin,
                        },
                        {
                          href: "https://www.facebook.com/linuscypn/",
                          label: "Facebook",
                          Icon: SiFacebook,
                        },
                        {
                          href: "https://www.instagram.com/linuscypnn/",
                          label: "Instagram",
                          Icon: SiInstagram,
                        },
                      ].map(({ href, label, Icon }) => (
                        <Button
                          key={label}
                          variant="ghost"
                          size="icon"
                          asChild
                          className="h-10 w-10 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        >
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{label}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                    <Button
                      onClick={handleResumeRequest}
                      variant="outline"
                      className="w-full justify-center"
                    >
                      Request my résumé
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <Card className="h-full bg-card/80 backdrop-blur-sm">
                  <CardContent className="flex h-full flex-col p-6 sm:p-8">
                    <form onSubmit={handleContactSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                          >
                            Name <span className="text-primary">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            value={contactForm.name}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                          >
                            Email <span className="text-primary">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={contactForm.email}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium"
                        >
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={contactForm.message}
                          onChange={handleInputChange}
                          className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="Tell me about the role or project."
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full"
                      >
                        {isSubmitting ? "Sending…" : "Send message"}
                      </Button>
                      {submitStatus && (
                        <p
                          role="status"
                          aria-live="polite"
                          className={`text-center text-sm ${
                            submitOk ? "text-success" : "text-destructive"
                          }`}
                        >
                          {submitStatus}
                        </p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vincent Linus Caayupan
          </p>
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/linusc17",
                label: "GitHub",
                Icon: SiGithub,
              },
              {
                href: "https://www.linkedin.com/in/linuscypn/",
                label: "LinkedIn",
                Icon: SiLinkedin,
              },
              { href: "mailto:v.caayupan@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>

      <button
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {lightboxImages.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot viewer"
          className="fixed inset-0 z-[60] flex cursor-pointer items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxImages([])}
        >
          <button
            className="absolute right-4 top-4 z-10 rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            onClick={() => setLightboxImages([])}
            aria-label="Close viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {lightboxImages.length > 1 && (
            <button
              className="absolute left-3 z-10 rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (i) =>
                    (i - 1 + lightboxImages.length) % lightboxImages.length
                );
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          <Image
            src={lightboxImages[lightboxIndex]}
            alt={`Project screenshot ${lightboxIndex + 1} of ${lightboxImages.length}`}
            width={900}
            height={1600}
            className="max-h-[85vh] w-auto cursor-default object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {lightboxImages.length > 1 && (
            <button
              className="absolute right-3 z-10 rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i + 1) % lightboxImages.length);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {lightboxImages.length > 1 && (
            <div className="absolute bottom-6 flex gap-1.5">
              {lightboxImages.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === lightboxIndex ? "w-6 bg-white" : "w-2 bg-white/40"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
