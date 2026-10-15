"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const contactEl = document.getElementById("contact");
      const worksEl = document.getElementById("works");
      const brandsEl = document.getElementById("brands");
      const founderEl = document.getElementById("founder");
      const scrollPos = window.scrollY + 250;

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection("contact");
      } else if (worksEl && scrollPos >= worksEl.offsetTop) {
        setActiveSection("works");
      } else if (brandsEl && scrollPos >= brandsEl.offsetTop) {
        setActiveSection("brands");
      } else if (founderEl && scrollPos >= founderEl.offsetTop) {
        setActiveSection("founder");
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(5, 7, 10, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.45)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "58px" : "85px",
          transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Brand Logo from kuri-logo.png */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/kuri-logo.png"
            alt="Mr.Kuri"
            width={125}
            height={36}
            priority
            style={{
              objectFit: "contain",
              height: scrolled ? "24px" : "32px",
              width: "auto",
              transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "34px",
          }}
          className="desktop-nav"
        >
          {/* Home Link with Active Underline Bar */}
          <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero");
              }}
              style={{
                fontSize: "0.98rem",
                fontWeight: activeSection === "hero" ? 600 : 400,
                color: "#ffffff",
                padding: "4px 0",
              }}
            >
              Home
            </a>
            {activeSection === "hero" && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  width: "36px",
                  height: "3.5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "2px",
                }}
              />
            )}
          </div>

          {/* My works -> Scrolls to 2nd to last section (#works) */}
          <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("works");
              }}
              style={{
                fontSize: "0.98rem",
                fontWeight: activeSection === "works" ? 600 : 400,
                color: activeSection === "works" ? "#ffffff" : "#cbd5e1",
                transition: "color 0.2s",
                padding: "4px 0",
              }}
              className="nav-link"
            >
              My works
            </a>
            {activeSection === "works" && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  width: "36px",
                  height: "3.5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "2px",
                }}
              />
            )}
          </div>

          {/* Contract me -> Scrolls to last footer section (#contact) */}
          <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontSize: "0.98rem",
                fontWeight: activeSection === "contact" ? 600 : 400,
                color: activeSection === "contact" ? "#ffffff" : "#cbd5e1",
                cursor: "pointer",
                transition: "color 0.2s",
                padding: "4px 0",
              }}
              className="nav-link"
            >
              Contract
            </button>
            {activeSection === "contact" && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  width: "36px",
                  height: "3.5px",
                  backgroundColor: "#ffffff",
                  borderRadius: "2px",
                }}
              />
            )}
          </div>

          {/* Search Icon */}
          {/* <button
            onClick={() => scrollTo("contact")}
            aria-label="Search or connect"
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
              transition: "color 0.2s, transform 0.2s",
            }}
            className="search-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button> */}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            padding: "8px",
            cursor: "pointer",
          }}
          className="mobile-hamburger"
        >
          <span
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#ffffff",
              transition: "transform 0.2s",
              transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#ffffff",
              opacity: mobileMenuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#ffffff",
              transition: "transform 0.2s",
              transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{
              backgroundColor: "rgba(5, 7, 10, 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => scrollTo("hero")}
              style={{
                fontSize: "1.05rem",
                color: activeSection === "hero" ? "#ffffff" : "#94a3b8",
                fontWeight: activeSection === "hero" ? 600 : 400,
                textAlign: "left",
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Home</span>
              {activeSection === "hero" && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-teal)" }} />
              )}
            </button>

            <button
              onClick={() => scrollTo("founder")}
              style={{
                fontSize: "1.05rem",
                color: activeSection === "founder" ? "#ffffff" : "#94a3b8",
                fontWeight: activeSection === "founder" ? 600 : 400,
                textAlign: "left",
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Vision &amp; Leadership</span>
              {activeSection === "founder" && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-teal)" }} />
              )}
            </button>

            <button
              onClick={() => scrollTo("brands")}
              style={{
                fontSize: "1.05rem",
                color: activeSection === "brands" ? "#ffffff" : "#94a3b8",
                fontWeight: activeSection === "brands" ? 600 : 400,
                textAlign: "left",
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Brands</span>
              {activeSection === "brands" && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-teal)" }} />
              )}
            </button>

            <button
              onClick={() => scrollTo("works")}
              style={{
                fontSize: "1.05rem",
                color: activeSection === "works" ? "#ffffff" : "#94a3b8",
                fontWeight: activeSection === "works" ? 600 : 400,
                textAlign: "left",
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>My works</span>
              {activeSection === "works" && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-teal)" }} />
              )}
            </button>

            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontSize: "1.05rem",
                color: activeSection === "contact" ? "#ffffff" : "#94a3b8",
                fontWeight: activeSection === "contact" ? 600 : 400,
                textAlign: "left",
                padding: "8px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Contract Me</span>
              {activeSection === "contact" && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-teal)" }} />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover,
        .search-btn:hover {
          color: #ffffff !important;
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
