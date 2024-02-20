'use client'
import React, {useRef} from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
   const sectionsRef = useRef([]);

  return (
    <main className="flex min-h-screen px-8 flex-col justify-between">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
