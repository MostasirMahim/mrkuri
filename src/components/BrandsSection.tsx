"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandsSectionProps {
  onSelectBrand?: (brandName: "nolok" | "prochari" | "signature_man") => void;
}

const SHOW_PROCHARI = false; // Code preserved, toggle to true to show again

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  },
};

export function BrandsSection({ onSelectBrand }: BrandsSectionProps = {}) {
  return (
    <section
      id="brands"
      data-name="brands"
      aria-label="Brand Ventures: Nolok, Prochari, Signature Man"
      style={{
        position: "relative",
        padding: "100px 0 120px 0",
        backgroundColor: "#05070a",
      }}
    >
      {/* Ambient background glows */}
      <div
        className="ambient-glow-teal"
        style={{ top: "25%", right: "5%", opacity: 0.3 }}
      />
      <div
        className="ambient-glow-amber"
        style={{ bottom: "25%", left: "5%", opacity: 0.25 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* BRAND 1: NOLOK (Jewelry) */}
        <motion.div
          className="brand-row"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(180px, 0.65fr) minmax(0, 1.35fr)",
            alignItems: "center",
            gap: "54px",
            padding: "80px 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {/* Left: Official Nolok Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
            className="brand-logo-container"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "230px",
                height: "64px",
              }}
              className="nolok-logo-wrapper"
            >
              <Image
                src="/nolok-brand.png"
                alt="Nolok Jewelry Brand"
                fill
                sizes="(max-width: 768px) 100vw, 230px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>

          {/* Right: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{ maxWidth: "780px", width: "100%" }}
            className="brand-text-content"
          >
            <p
              style={{
                fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                lineHeight: 1.85,
                color: "#e2e8f0",
                marginBottom: "20px",
                fontWeight: 300,
              }}
            >
              As the founder and CEO of Nolok. My vision was simple yet ambitious:
              to bring timeless elegance, artisanal craftsmanship, and modern
              trends together for the discerning style conscious. From curated
              sterling silver and diamond-cut collections to custom, handmade
              pieces crafted to tell your unique story, building Nolok has been
              an incredible journey of merging design excellence with authentic
              quality.
            </p>

            <p
              style={{
                fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                lineHeight: 1.85,
                color: "#94a3b8",
                marginBottom: "32px",
                fontWeight: 300,
              }}
            >
              We aren&apos;t just building a jewelry brand, we are creating
              moments of effortless luxury for every occasion.
            </p>

            <motion.a
              href="https://nolok.store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand btn-brand-gold"
              id="nolok-explore-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Explore Nolok
            </motion.a>
          </motion.div>
        </motion.div>

        {/* BRAND 2: PROCHARI (Digital Agency) - Code preserved, hidden as requested */}
        {SHOW_PROCHARI && (
          <motion.div
            className="brand-row prochari-row"
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(180px, 0.65fr)",
              alignItems: "center",
              gap: "54px",
              padding: "90px 0",
              borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Left: Description & CTA */}
            <div style={{ maxWidth: "780px", width: "100%" }}>
              <p
                style={{
                  fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                  lineHeight: 1.85,
                  color: "#e2e8f0",
                  marginBottom: "20px",
                  fontWeight: 300,
                }}
              >
                Co-Founder &amp; CEO of Prochari, a tech-driven digital marketing
                agency in Bangladesh specializing in performance marketing,
                search engine optimization (SEO), brand strategy, and high-impact
                visual storytelling. Combining deep creative production
                capabilities with data-backed growth strategies, Prochari helps
                modern brands scale their digital presence, optimize customer
                acquisition, and build compelling brand identities.
              </p>

              <div
                style={{
                  marginBottom: "32px",
                  fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                  lineHeight: 1.75,
                  color: "#94a3b8",
                  fontWeight: 300,
                }}
              >
                <p style={{ color: "#ffffff", fontWeight: 500, marginBottom: "6px" }}>
                  Ready to accelerate your brand&apos;s digital growth?
                </p>
                <p>
                  Partner with Prochari to scale your performance and claim your
                  market leadership.
                </p>
              </div>

              <motion.a
                href="https://procharidigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand btn-brand-orange"
                id="prochari-visit-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Visit Prochari
              </motion.a>
            </div>

            {/* Right: Official Prochari Logo */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "230px",
                  height: "64px",
                }}
              >
                <Image
                  src="/prochari-brand.png"
                  alt="Prochari Digital Agency"
                  fill
                  sizes="(max-width: 768px) 100vw, 230px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* BRAND 3: SIGNATURE MAN (Men's Essentials) */}
        <motion.div
          className="brand-row"
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(180px, 0.65fr) minmax(0, 1.35fr)",
            alignItems: "center",
            gap: "54px",
            padding: "90px 0 40px 0",
          }}
        >
          {/* Left: Official Signature Man Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
            className="brand-logo-container"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "160px",
                height: "115px",
              }}
              className="signature-logo-wrapper"
            >
              <Image
                src="/signature-brand.png"
                alt="Signature Man Logo"
                fill
                sizes="(max-width: 768px) 100vw, 160px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>

          {/* Right: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{ maxWidth: "780px", width: "100%" }}
            className="brand-text-content"
          >
            <h3
              style={{
                fontFamily: "var(--font-display), 'Syne', sans-serif",
                fontSize: "clamp(1.25rem, 1.8vw, 1.55rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              Define Your Style. Wear Your Signature.
            </h3>

            <p
              style={{
                fontSize: "clamp(0.98rem, 1.25vw, 1.08rem)",
                lineHeight: 1.85,
                color: "#94a3b8",
                marginBottom: "32px",
                fontWeight: 300,
              }}
            >
              Premium collection of men&apos;s essentials — leather shoes, belts,
              wallets &amp; more. Crafted for the modern gentleman who values class,
              confidence, and quality.
            </p>

            <motion.a
              href="https://www.facebook.com/signatureman.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand btn-brand-white"
              id="signature-man-shop-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Shop Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .btn-brand {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 12px 26px;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          border-radius: 8px;
          border: 1px solid transparent;
          backdrop-filter: blur(10px);
          cursor: pointer;
          text-decoration: none;
          transition: box-shadow 0.25s ease;
          font-family: var(--font-display), sans-serif;
        }
        .btn-brand-gold {
          color: #e5b95a;
          border-color: rgba(229, 185, 90, 0.45);
          background: rgba(229, 185, 90, 0.06);
        }
        .btn-brand-gold:hover {
          border-color: #e5b95a;
          background: rgba(229, 185, 90, 0.14);
          box-shadow: 0 6px 24px rgba(229, 185, 90, 0.2);
          color: #fff;
        }
        .btn-brand-orange {
          color: #ff7a45;
          border-color: rgba(255, 87, 34, 0.45);
          background: rgba(255, 87, 34, 0.05);
        }
        .btn-brand-orange:hover {
          border-color: #ff5722;
          background: rgba(255, 87, 34, 0.14);
          box-shadow: 0 6px 24px rgba(255, 87, 34, 0.22);
          color: #fff;
        }
        .btn-brand-white {
          color: #f1f5f9;
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.04);
        }
        .btn-brand-white:hover {
          border-color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 6px 24px rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        @media (max-width: 768px) {
          .brand-row {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 48px 0 !important;
            text-align: center;
          }
          .brand-text-content {
            margin: 0 auto !important;
            max-width: 100% !important;
          }
          .brand-text-content p {
            margin-bottom: 22px !important;
            line-height: 1.75 !important;
          }
          .nolok-logo-wrapper {
            max-width: 190px !important;
            height: 52px !important;
          }
          .signature-logo-wrapper {
            max-width: 135px !important;
            height: 96px !important;
          }
          .btn-brand {
            padding: 13px 32px !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
