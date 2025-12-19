"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OtherProjects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-navy min-h-screen">
      {/* The opacity transition here (duration-1000) creates the "Reveal" effect.
        When isLoading becomes false, this fades from 0 to 100.
      */}
      <div
        className={`transition-opacity duration-[1500ms] ease-in-out ${isLoading ? "opacity-0" : "opacity-100"
          }`}
      >
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
        <Footer />
      </div>

      {/* Show Loader until it tells us it's done */}
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
    </main>
  );
}