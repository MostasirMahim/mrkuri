"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section
      id="founder"
      data-name="founder"
      aria-label="Founder Leadership"
      style={{
        position: "relative",
        minHeight: "85vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundImage: `
          linear-gradient(to right, transparent 0%, rgba(5, 7, 10, 0.4) 35%, rgba(5, 7, 10, 0.92) 65%, #05070a 100%),
          linear-gradient(to top, #05070a 0%, transparent 18%),
          linear-gradient(to bottom, #05070a 0%, transparent 18%),
          url('/2ndp.jpg.jpeg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        padding: "110px 0",
        overflow: "hidden",
      }}
      className="founder-section"
    >
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {/* DESKTOP VIEW (>768px): Text on Right, Sowrab in background on Left */}
        <div className="founder-desktop-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maxWidth: "580px",
            }}
            className="founder-text-wrapper"
          >
            {/* Leadership Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(20, 184, 166, 0.12)",
                border: "1px solid rgba(20, 184, 166, 0.3)",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-teal)",
                  boxShadow: "0 0 8px var(--accent-teal)",
                }}
              />
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent-teal)",
                  fontFamily: "var(--font-display), sans-serif",
                }}
              >
                Vision &amp; Leadership
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display), 'Syne', sans-serif",
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px",
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              Founder <span style={{ color: "var(--accent-teal)", fontWeight: 300 }}>|</span> Strategist{" "}
              <span style={{ color: "var(--accent-teal)", fontWeight: 300 }}>|</span> Director
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(1.02rem, 1.35vw, 1.2rem)",
                lineHeight: 1.8,
                color: "#cbd5e1",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              True leadership isn&apos;t just about building a brand, it&apos;s about
              sculpting a vision so clear and compelling that it turns abstract
              ideas into unforgettable realities.
            </motion.p>
          </motion.div>
        </div>

        {/* MOBILE VIEW (<=768px): Image on Left, Shorter Text on Right, NO blur card */}
        <div className="founder-mobile-view">
          {/* Left Side: Portrait Image looking right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="founder-mobile-img-col"
          >
            <div className="founder-mobile-img-wrapper">
              <Image
                src="/2ndp.jpg.jpeg"
                alt="Sowrab Kuri Founder"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                style={{
                  objectFit: "cover",
                  objectPosition: "20% 25%",
                }}
              />
              <div className="founder-mobile-img-vignette" />
            </div>
          </motion.div>

          {/* Right Side: Shorter Text Content, NO box */}
          <div className="founder-mobile-text-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="founder-mobile-badge"
            >
              <span className="founder-mobile-dot" />
              <span>Leadership</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="founder-mobile-title"
            >
              Founder <span style={{ color: "var(--accent-teal)" }}>|</span> Director
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="founder-mobile-short-quote"
            >
              Sculpting a compelling vision that turns abstract ideas into unforgettable realities.
            </motion.p>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop: show desktop view, hide mobile view */
        .founder-desktop-content {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .founder-mobile-view {
          display: none;
        }

        /* Mobile (<= 768px): Split layout, NO blur card, Image on Left, Shorter text on Right */
        @media (max-width: 768px) {
          .founder-desktop-content {
            display: none !important;
          }
          .founder-section {
            background-image: none !important;
            background-color: #05070a !important;
            min-height: unset !important;
            padding: 60px 0 !important;
            justify-content: center !important;
          }
          .founder-mobile-view {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 12px !important;
            width: 100% !important;
          }

          /* Left Image Column */
          .founder-mobile-img-col {
            flex: 0.85;
            max-width: 42%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .founder-mobile-img-wrapper {
            position: relative;
            width: 100%;
            height: 320px;
            border-radius: 12px;
            overflow: hidden;
          }
          .founder-mobile-img-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: 
              linear-gradient(to left, #05070a 0%, transparent 22%),
              linear-gradient(to top, #05070a 0%, transparent 20%),
              linear-gradient(to bottom, #05070a 0%, transparent 15%);
          }

          /* Right Text Column - NO card, NO blur */
          .founder-mobile-text-col {
            flex: 1.15;
            max-width: 58%;
            z-index: 2;
          }
          .founder-mobile-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 9999px;
            background-color: rgba(20, 184, 166, 0.12);
            border: 1px solid rgba(20, 184, 166, 0.3);
            margin-bottom: 10px;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--accent-teal);
            font-family: var(--font-display), sans-serif;
          }
          .founder-mobile-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: var(--accent-teal);
            box-shadow: 0 0 6px var(--accent-teal);
          }
          .founder-mobile-title {
            font-family: var(--font-display), 'Syne', sans-serif;
            font-size: clamp(1.15rem, 4.4vw, 1.45rem);
            font-weight: 700;
            color: #ffffff;
            line-height: 1.25;
            margin-bottom: 10px;
            letter-spacing: -0.01em;
          }
          .founder-mobile-short-quote {
            font-size: clamp(0.78rem, 3vw, 0.88rem);
            line-height: 1.55;
            color: #cbd5e1;
            font-weight: 300;
            letter-spacing: 0.01em;
          }
        }
      `}</style>
    </section>
  );
}
