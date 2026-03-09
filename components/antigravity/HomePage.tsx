"use client";

import { useEffect, useState } from "react";

import Company from "./Company";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Mission from "./Mission";
import Service from "./Service";
import Vision from "./Vision";
import { sectionLinks } from "./constants";
import { useRevealAnimation } from "./useRevealAnimation";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useRevealAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="renew-shell" id="top">
      <Header scrolled={scrolled} sections={sectionLinks} />
      <Hero />
      <Vision />
      <Mission />
      <Service />
      <Company />
      <Contact />
    </main>
  );
}
