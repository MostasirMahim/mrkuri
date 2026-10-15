"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-name="hero"
      aria-label="Hero Introduction"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: `
          linear-gradient(to right, rgba(5, 7, 10, 0.88) 0%, rgba(5, 7, 10, 0.65) 35%, rgba(5, 7, 10, 0.15) 65%, transparent 100%),
          linear-gradient(to top, #05070a 0%, transparent 18%),
          linear-gradient(to bottom, #05070a 0%, transparent 12%),
          url('/1st.jpg.jpeg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        paddingTop: "100px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
      className="hero-section"
    >
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {/* DESKTOP VIEW (>768px): Full wide layout with full text */}
        <div style={{ maxWidth: "640px" }} className="hero-desktop-content">
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
              fontWeight: 500,
              color: "#ffffff",
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            Hello i&apos;m
          </motion.p>

          <motion.h1
            {...fadeUp(0.22)}
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "24px",
              letterSpacing: "-0.03em",
            }}
          >
            Sowrab Kuri
          </motion.h1>

          <motion.p
            {...fadeUp(0.36)}
            style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              lineHeight: 1.7,
              color: "#e2e8f0",
              marginBottom: "40px",
              fontWeight: 300,
              maxWidth: "580px",
            }}
          >
            Multimedia Producer, Creative Director, and Brand Strategist
            specializing in high-impact video production, motion graphics,
            photography, and e-commerce brand development.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
            className="hero-btn-group"
          >
            <motion.button
              onClick={() => scrollTo("works")}
              className="btn-hero-primary"
              id="hero-my-works-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              My Works
            </motion.button>

            <motion.button
              onClick={() => scrollTo("contact")}
              className="btn-hero-ghost"
              id="hero-contract-me-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Contract Me
            </motion.button>
          </motion.div>
        </div>

        {/* MOBILE VIEW (<=768px): Image on Right side, Shorter Text on Left side, NO blur card */}
        <div className="hero-mobile-view">
          {/* Left Side: Shorter text content, NO card/box */}
          <div className="hero-mobile-text-col">
            <motion.p {...fadeUp(0.1)} className="hero-mobile-greeting">
              Hello i&apos;m
            </motion.p>

            <motion.h1 {...fadeUp(0.2)} className="hero-mobile-name">
              Sowrab<br />Kuri
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="hero-mobile-short-bio">
              Multimedia Producer &amp; Creative Director
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="hero-mobile-btns">
              <button
                onClick={() => scrollTo("works")}
                className="btn-hero-primary hero-btn-sm"
              >
                My Works
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-hero-ghost hero-btn-sm"
              >
                Contract Me
              </button>
            </motion.div>
          </div>

          {/* Right Side: Portrait Image with soft edge fades */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-mobile-img-col"
          >
            <div className="hero-mobile-img-wrapper">
              <Image
                src="/1st.jpg.jpeg"
                alt="Sowrab Kuri"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 300px"
                style={{
                  objectFit: "cover",
                  objectPosition: "78% 22%",
                }}
              />
              <div className="hero-mobile-img-vignette" />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 30px;
          font-size: 0.93rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: #05070a;
          background: #ffffff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s;
          font-family: var(--font-display), sans-serif;
        }
        .btn-hero-primary:hover {
          background: #e2e8f0;
          box-shadow: 0 6px 24px rgba(255,255,255,0.18);
        }
        .btn-hero-ghost {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 30px;
          font-size: 0.93rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: #ffffff;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 8px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.22s ease;
          font-family: var(--font-display), sans-serif;
        }
        .btn-hero-ghost:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.7);
          box-shadow: 0 4px 20px rgba(255,255,255,0.08);
        }

        /* Default (Desktop): show desktop content, hide mobile split */
        .hero-mobile-view {
          display: none;
        }
        .hero-desktop-content {
          display: block;
        }

        /* Mobile (<= 768px): Split layout, NO blur card, Image on right, Short text on left */
        @media (max-width: 768px) {
          .hero-desktop-content {
            display: none !important;
          }
          .hero-section {
            background-image: none !important;
            background-color: #05070a !important;
            min-height: 85vh !important;
            padding-top: 90px !important;
            padding-bottom: 40px !important;
            justify-content: center !important;
          }
          .hero-mobile-view {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px !important;
            width: 100% !important;
          }
          /* Left Text Column */
          .hero-mobile-text-col {
            flex: 1.15;
            max-width: 58%;
            z-index: 2;
          }
          .hero-mobile-greeting {
            font-size: 0.95rem;
            color: #94a3b8;
            font-weight: 500;
            margin-bottom: 4px;
            letter-spacing: 0.02em;
          }
          .hero-mobile-name {
            font-family: var(--font-display), 'Syne', sans-serif;
            font-size: clamp(1.8rem, 7.2vw, 2.4rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.05;
            margin-bottom: 10px;
            letter-spacing: -0.02em;
          }
          .hero-mobile-short-bio {
            font-size: clamp(0.78rem, 3vw, 0.88rem);
            line-height: 1.5;
            color: #cbd5e1;
            font-weight: 300;
            margin-bottom: 18px;
          }
          .hero-mobile-btns {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            max-width: 135px;
          }
          .hero-btn-sm {
            padding: 9px 12px !important;
            font-size: 0.8rem !important;
            border-radius: 6px !important;
            justify-content: center !important;
            text-align: center !important;
          }
          /* Right Image Column */
          .hero-mobile-img-col {
            flex: 0.85;
            max-width: 42%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hero-mobile-img-wrapper {
            position: relative;
            width: 100%;
            height: 360px;
            border-radius: 12px;
            overflow: hidden;
          }
          .hero-mobile-img-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: 
              linear-gradient(to right, #05070a 0%, transparent 22%),
              linear-gradient(to top, #05070a 0%, transparent 20%),
              linear-gradient(to bottom, #05070a 0%, transparent 15%);
          }
        }
      `}</style>
    </section>
  );
}
