"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FooterSection() {
  const [copiedType, setCopiedType] = useState<"phone" | "email" | null>(null);

  const copyToClipboard = (
    text: string,
    type: "phone" | "email",
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  return (
    <footer
      id="contact"
      data-name="contact"
      aria-label="Contact and LAT'S TALK"
      style={{
        position: "relative",
        backgroundColor: "#030508",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        paddingTop: "90px",
        paddingBottom: "40px",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            className="lets-talk-heading"
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontSize: "clamp(3.5rem, 11vw, 8.5rem)",
              fontWeight: 900,
              letterSpacing: "0.08em",
              lineHeight: 1,
              textTransform: "uppercase",
              userSelect: "none",
              background:
                "linear-gradient(180deg, #64748b 0%, #1e293b 80%, #0f172a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LAT&apos;S TALK
          </h2>
        </motion.div>

        {/* Contact Info — simple one-line rows, no box */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          {/* Phone */}
          <div className="contact-line-row">
            <a href="tel:+8801816451919" className="contact-line-link" id="contact-phone-link">
              <span className="contact-line-key">Call</span>
              <span className="contact-line-sep">:</span>
              <span className="contact-line-val">+880 1816 451919</span>
            </a>
            <button
              onClick={(e) => copyToClipboard("+8801816451919", "phone", e)}
              className="contact-copy-inline"
              title="Copy phone"
              aria-label="Copy phone number"
            >
              <AnimatePresence mode="wait">
                {copiedType === "phone" ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    style={{ color: "#22c55e", fontSize: "0.7rem", fontWeight: 700 }}
                  >
                    Copied!
                  </motion.span>
                ) : (
                  <motion.svg
                    key="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Email */}
          <div className="contact-line-row">
            <a href="mailto:sowrabkuri1022003@gmail.com" className="contact-line-link" id="contact-email-link">
              <span className="contact-line-key">Email</span>
              <span className="contact-line-sep">:</span>
              <span className="contact-line-val">sowrabkuri1022003@gmail.com</span>
            </a>
            <button
              onClick={(e) => copyToClipboard("sowrabkuri1022003@gmail.com", "email", e)}
              className="contact-copy-inline"
              title="Copy email"
              aria-label="Copy email address"
            >
              <AnimatePresence mode="wait">
                {copiedType === "email" ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    style={{ color: "#22c55e", fontSize: "0.7rem", fontWeight: 700 }}
                  >
                    Copied!
                  </motion.span>
                ) : (
                  <motion.svg
                    key="icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          <a href="https://www.facebook.com/mrkuri.official" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.75-.14-2.8 0-4.75 1.7-4.75 4.88V9.5H7v4h3V22h4v-8.5z" />
            </svg>
          </a>
          <a href="https://wa.me/8801816451919?text=Hello%20Sowrab,%20I%20am%20interested%20in%20connecting!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.106 8.106 0 01-1.25-4.29c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.54 1.55 2.39 3.6 2.39 5.78 0 4.51-3.67 8.15-8.12 8.15z" />
            </svg>
          </a>
          <a href="https://mrkuri.online" target="_blank" rel="noopener noreferrer" aria-label="Website" className="social-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        </motion.div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.85rem",
            color: "#64748b",
          }}
        >
          <p>© 2026 mrkuri.online. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#terms" className="footer-link">Terms and Conditions</a>
            <a href="#privacy" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        /* Contact line rows — no box, just text */
        .contact-line-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 3px 0;
        }
        .contact-line-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .contact-line-link:hover {
          opacity: 0.85;
        }
        .contact-line-key {
          font-family: var(--font-display), 'Syne', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #475569;
        }
        .contact-line-sep {
          color: #334155;
          font-size: 0.85rem;
        }
        .contact-line-val {
          font-family: var(--font-display), 'Syne', sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          font-weight: 700;
          color: #f1f5f9;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .contact-line-link:hover .contact-line-val {
          color: #ffffff;
        }
        .contact-copy-inline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #475569;
          opacity: 0;
          pointer-events: none;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .contact-line-row:hover .contact-copy-inline {
          opacity: 1;
          pointer-events: auto;
          color: #94a3b8;
        }
        .contact-copy-inline:hover {
          background: rgba(45,212,191,0.12);
          border-color: rgba(45,212,191,0.4);
          color: #2dd4bf;
        }
        /* Social */
        .social-icon-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          background: rgba(18,22,31,0.6);
          transition: all 0.25s ease;
        }
        .social-icon-btn:hover {
          color: #ffffff;
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255,255,255,0.1);
        }
        .footer-link { color: #64748b; transition: color 0.2s; }
        .footer-link:hover { color: #cbd5e1; }
        .lets-talk-heading:hover { filter: brightness(1.3); }
        @media (max-width: 600px) {
          .footer-bottom-bar { flex-direction: column; text-align: center; }
          .contact-copy-inline { opacity: 0.85 !important; pointer-events: auto !important; }
          .contact-line-row {
            max-width: 100%;
            justify-content: center;
          }
          .contact-line-val {
            font-size: clamp(0.85rem, 3.7vw, 1.05rem) !important;
          }
        }
      `}</style>
    </footer>
  );
}
