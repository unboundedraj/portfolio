"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function HomePage() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#101010]">
      <Navbar />
      <Hero />
      <SubHero />
      <About />
      <Quote />
      <Skills />
      <Works />
    </div>
  );
}
