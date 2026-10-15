import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FounderSection } from "@/components/FounderSection";
import { BrandsSection } from "@/components/BrandsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main
      id="main-content"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#05070a",
        overflowX: "hidden",
      }}
    >
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section: id="hero" name="hero" */}
      <HeroSection />

      {/* 3. Founder Leadership Section: id="founder" name="founder" */}
      <FounderSection />

      {/* 4. Brands Section: id="brands" name="brands" */}
      <BrandsSection />

      {/* 5. 2nd-to-Last Section: Works & Skills: id="works" name="works" */}
      <SkillsSection />

      {/* 6. Last Section: Footer & LAT'S TALK: id="contact" name="contact" */}
      <FooterSection />

      {/* Floating Quick WhatsApp Access */}
      <FloatingWhatsApp />
    </main>
  );
}
