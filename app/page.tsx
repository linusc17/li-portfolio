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
} from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import TypingAnimation from "../components/TypingAnimation";
import ResumeModal from "../components/ResumeModal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showResumeModal, setShowResumeModal] = useState(false);

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

  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-background text-foreground min-h-screen px-4 sm:px-10 md:px-20 lg:px-40">
        <nav className="py-5 sm:py-10 mb-6 sm:mb-12 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bebas-neue">
            LINUS CAAYUPAN
          </h1>
          <div className="flex items-center space-x-4">
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="data-[state=checked]:bg-primary"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Switch>
            <Button variant="outline" onClick={() => setShowResumeModal(true)}>
              Resume
            </Button>
          </div>
        </nav>

        <div className="fade-in fade-out relative mx-auto rounded-full w-60 sm:w-80 h-60 sm:h-80 overflow-hidden">
          <Image src="/me.png" alt="Profile" layout="fill" objectFit="cover" />
        </div>

        <div className="text-center p-5 sm:p-10">
          <div className="space-y-4 mb-8">
            {" "}
            <h2 className="fade-in fade-out text-2xl sm:text-5xl py-2 text-primary font-medium leading-tight">
              Vincent Linus A. Caayupan
            </h2>
            <h3 className="fade-in fade-out text-xl sm:text-2xl py-2 leading-tight">
              Front-end Web Developer
            </h3>
            <div className="min-h-[3rem] sm:min-h-[4rem]">
              {" "}
              <TypingAnimation />
            </div>
          </div>

          <div className="fade-in fade-out flex justify-center py-3 sm:py-4 gap-6 sm:gap-16">
            {" "}
            {/* Adjusted gap */}
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.facebook.com/linuscypn/" className="p-2">
                <Facebook className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="sr-only">Facebook</span>
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.instagram.com/linuscypn_/" className="p-2">
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
            <h2 className="fade-in fade-out text-4xl sm:text-6xl py-8 sm:py-16 text-primary font-medium">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  Icon: SiJavascript,
                  name: "JavaScript",
                  description: "Programming language for web development",
                },
                {
                  Icon: SiTailwindcss,
                  name: "Tailwind CSS",
                  description: "Utility-first CSS framework",
                },
                {
                  Icon: SiBootstrap,
                  name: "Bootstrap",
                  description: "Front-end framework for responsive design",
                },
                {
                  Icon: SiReact,
                  name: "React",
                  description:
                    "JavaScript library for building user interfaces",
                },
                {
                  Icon: SiNextdotjs,
                  name: "Next.js",
                  description: "React framework for production",
                },
                {
                  Icon: SiExpress,
                  name: "Express.js",
                  description: "Web application framework for Node.js",
                },
                {
                  Icon: SiNodedotjs,
                  name: "Node.js",
                  description:
                    "JavaScript runtime built on Chrome's V8 JavaScript engine",
                },
                {
                  Icon: SiSupabase,
                  name: "Supabase",
                  description: "Open source Firebase alternative",
                },
              ].map(({ Icon, name, description }) => (
                <Card
                  key={name}
                  className="fade-in fade-out hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <Icon className="text-6xl text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center my-20 sm:mt-20 mb-32">
            <h2 className="fade-in fade-out text-4xl sm:text-6xl py-8 sm:py-16 text-primary font-medium">
              Personal Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  name: "Facilities System",
                  description:
                    "Maintenance Requests, Equipment Reservation, Room Reservation",
                  image: "/project4.png",
                },
                {
                  name: "Travel Agency Website",
                  description: "Booking and reservation system",
                  image: "/project2.png",
                },
                {
                  name: "Aircraft Information Website",
                  description: "With QR Code Functionality",
                  image: "/project1.png",
                },
                {
                  name: "NUDMarket",
                  description: "Online Shopping App",
                  image: "/project3.png",
                },
              ].map((project) => (
                <Card
                  key={project.name}
                  className="fade-in fade-out overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-96">
                      <Image
                        src={project.image}
                        alt={project.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center my-20 sm:mt-20">
            <h2 className="fade-in fade-out text-4xl sm:text-6xl py-4 sm:py-8 text-primary font-medium">
              Get in Touch
            </h2>
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-8 py-4 lg:flex-row lg:space-y-0 lg:space-x-8">
              <div className="fade-in fade-out flex items-center">
                <Phone className="text-2xl sm:text-4xl text-primary mr-2" />
                <span className="text-xl font-semibold">
                  (+63) 927 022 0661
                </span>
              </div>
              <div className="fade-in fade-out flex items-center">
                <Mail className="text-2xl sm:text-4xl text-primary mr-2" />
                <span className="text-xl font-semibold">
                  v.caayupan@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ResumeModal
        showModal={showResumeModal}
        setShowModal={setShowResumeModal}
      />
    </div>
  );
}
