"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  category: "production" | "vision";
  description: string;
}

const leftSkills: SkillItem[] = [
  {
    name: "Video Editor",
    category: "production",
    description: "Cinematic pacing, sound design, rhythm cutting, and narrative flow across high-budget commercials and brand films.",
  },
  {
    name: "Videographer",
    category: "production",
    description: "Professional camera operation, studio lighting, dynamic camera movements, and evocative visual composition.",
  },
  {
    name: "Graphics Disigner",
    category: "production",
    description: "Striking visual identities, typography systems, marketing collateral, and high-conversion e-commerce assets.",
  },
  {
    name: "Motion Graphics",
    category: "production",
    description: "2D & 3D title sequences, kinetic typography, brand animations, and VFX compositing for digital campaigns.",
  },
];

const rightSkills: SkillItem[] = [
  {
    name: "Artist",
    category: "vision",
    description: "Bringing conceptual imagination to life through fine art principles, color theory, and visual metaphors.",
  },
  {
    name: "Leader",
    category: "vision",
    description: "Inspiring and directing multidisciplinary creative teams to deliver work that exceeds expectations.",
  },
  {
    name: "Director",
    category: "vision",
    description: "Guiding end-to-end creative direction, talent coaching, storytelling architecture, and cinematic vision.",
  },
  {
    name: "Entrepreneur",
    category: "vision",
    description: "Founding and scaling venture brands with sustainable growth, customer obsession, and market differentiation.",
  },
];

const allSkills: SkillItem[] = [...leftSkills, ...rightSkills];

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  return (
    <section
      id="works"
      data-name="works"
      aria-label="Creative Works and Disciplines"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `
          linear-gradient(to top, #05070a 0%, transparent 20%),
          linear-gradient(to bottom, #05070a 0%, transparent 20%),
          radial-gradient(ellipse at center, rgba(5, 7, 10, 0.2) 0%, rgba(5, 7, 10, 0.75) 60%, #05070a 100%),
          url('/3rd.jpg.jpeg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
        padding: "120px 0",
        overflow: "hidden",
      }}
      className="skills-section"
    >
      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* DESKTOP VIEW (>768px): 3-column flanking layout */}
        <div className="skills-desktop-view">
          <div
            className="skills-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr 1fr",
              alignItems: "center",
              gap: "36px",
              maxWidth: "1150px",
              margin: "0 auto",
            }}
          >
            {/* Left Column of Skills */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "26px",
              }}
              className="skills-col"
            >
              {leftSkills.map((skill, i) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setActiveSkill(activeSkill?.name === skill.name ? null : skill)
                  }
                  className="skill-pill"
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    borderRadius: "8px",
                    border:
                      activeSkill?.name === skill.name
                        ? "1px solid var(--accent-teal)"
                        : "1px solid rgba(255, 255, 255, 0.22)",
                    backgroundColor:
                      activeSkill?.name === skill.name
                        ? "rgba(20, 184, 166, 0.16)"
                        : "rgba(10, 14, 22, 0.65)",
                    backdropFilter: "blur(12px)",
                    color: "#ffffff",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    textAlign: "center",
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                    transition: "border 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                    boxShadow:
                      activeSkill?.name === skill.name
                        ? "0 0 24px rgba(20, 184, 166, 0.3)"
                        : "0 4px 15px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  {skill.name}
                </motion.button>
              ))}
            </div>

            {/* Center Column Spacer */}
            <div
              style={{
                minHeight: "440px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="skills-center-spacer"
            />

            {/* Right Column of Skills */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "26px",
              }}
              className="skills-col"
            >
              {rightSkills.map((skill, i) => (
                <motion.button
                  key={skill.name}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setActiveSkill(activeSkill?.name === skill.name ? null : skill)
                  }
                  className="skill-pill"
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    borderRadius: "8px",
                    border:
                      activeSkill?.name === skill.name
                        ? "1px solid var(--accent-teal)"
                        : "1px solid rgba(255, 255, 255, 0.22)",
                    backgroundColor:
                      activeSkill?.name === skill.name
                        ? "rgba(20, 184, 166, 0.16)"
                        : "rgba(10, 14, 22, 0.65)",
                    backdropFilter: "blur(12px)",
                    color: "#ffffff",
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    textAlign: "center",
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                    transition: "border 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                    boxShadow:
                      activeSkill?.name === skill.name
                        ? "0 0 24px rgba(20, 184, 166, 0.3)"
                        : "0 4px 15px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  {skill.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Skill Brief Details Drawer */}
          {activeSkill && (
            <div
              style={{
                marginTop: "44px",
                padding: "24px 32px",
                borderRadius: "14px",
                backgroundColor: "rgba(10, 14, 22, 0.9)",
                border: "1px solid var(--accent-teal)",
                backdropFilter: "blur(16px)",
                maxWidth: "600px",
                margin: "44px auto 0 auto",
                textAlign: "center",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6)",
              }}
            >
              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                  fontFamily: "var(--font-display), sans-serif",
                }}
              >
                {activeSkill.name}
              </h4>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                {activeSkill.description}
              </p>
            </div>
          )}
        </div>

        {/* MOBILE VIEW (<=768px): Image on Left, Skills Column on Right, NO blur card */}
        <div className="skills-mobile-view">
          {/* Left Side: Portrait Image looking over shoulder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="skills-mobile-img-col"
          >
            <div className="skills-mobile-img-wrapper">
              <Image
                src="/3rd.jpg.jpeg"
                alt="Sowrab Kuri Skills"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                style={{
                  objectFit: "cover",
                  objectPosition: "52% 16%",
                }}
              />
              <div className="skills-mobile-img-vignette" />
            </div>
          </motion.div>

          {/* Right Side: Clean Column of 8 Skills Pills */}
          <div className="skills-mobile-skills-col">
            {allSkills.map((skill, i) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                onClick={() =>
                  setActiveSkill(activeSkill?.name === skill.name ? null : skill)
                }
                className={`skills-mobile-pill ${activeSkill?.name === skill.name ? "active" : ""}`}
              >
                {skill.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Active Skill Details Drawer */}
        {activeSkill && (
          <div className="skills-mobile-active-drawer">
            <h5>{activeSkill.name}</h5>
            <p>{activeSkill.description}</p>
          </div>
        )}
      </div>

      <style>{`
        /* Desktop */
        .skills-desktop-view {
          display: block;
          width: 100%;
        }
        .skills-mobile-view {
          display: none;
        }
        .skills-mobile-active-drawer {
          display: none;
        }

        .skill-pill:hover {
          border-color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5) !important;
        }

        /* Mobile (<=768px): Split layout, NO blur card, Image on Left, Skills on Right */
        @media (max-width: 768px) {
          .skills-desktop-view {
            display: none !important;
          }
          .skills-section {
            background-image: none !important;
            background-color: #05070a !important;
            min-height: unset !important;
            padding: 50px 0 !important;
          }
          .skills-mobile-view {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px !important;
            width: 100% !important;
          }

          /* Left Image Column */
          .skills-mobile-img-col {
            flex: 0.82;
            max-width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .skills-mobile-img-wrapper {
            position: relative;
            width: 100%;
            height: 380px;
            border-radius: 12px;
            overflow: hidden;
          }
          .skills-mobile-img-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: 
              linear-gradient(to left, #05070a 0%, transparent 22%),
              linear-gradient(to top, #05070a 0%, transparent 20%),
              linear-gradient(to bottom, #05070a 0%, transparent 15%);
          }

          /* Right Skills Column */
          .skills-mobile-skills-col {
            flex: 1.18;
            max-width: 60%;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .skills-mobile-pill {
            width: 100%;
            padding: 8px 10px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: rgba(10, 14, 22, 0.7);
            color: #ffffff;
            font-size: 0.78rem;
            font-weight: 500;
            text-align: center;
            letter-spacing: 0.02em;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .skills-mobile-pill:active,
          .skills-mobile-pill.active {
            border-color: var(--accent-teal);
            background: rgba(20, 184, 166, 0.18);
            box-shadow: 0 0 12px rgba(20, 184, 166, 0.25);
          }

          /* Mobile Active Drawer */
          .skills-mobile-active-drawer {
            display: block !important;
            margin-top: 18px;
            padding: 14px 18px;
            border-radius: 10px;
            background: rgba(10, 14, 22, 0.85);
            border: 1px solid var(--accent-teal);
            text-align: center;
          }
          .skills-mobile-active-drawer h5 {
            color: #ffffff;
            font-size: 0.95rem;
            font-weight: 700;
            margin-bottom: 4px;
            font-family: var(--font-display), sans-serif;
          }
          .skills-mobile-active-drawer p {
            color: #cbd5e1;
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}
