import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";
import SecurityConsole from "@/components/SecurityConsole";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <StatsCounter />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <SecurityConsole />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

