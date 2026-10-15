"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  const wpUrl =
    "https://wa.me/8801816451919?text=Hi%20Sowrab%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.88 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 999 }}
          className="floating-wp-wrap"
        >
          <motion.a
            href={wpUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            id="floating-whatsapp-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background:
                "linear-gradient(135deg, rgba(8, 14, 20, 0.97) 0%, rgba(5, 18, 12, 0.97) 100%)",
              border: "1px solid rgba(37, 211, 102, 0.45)",
              padding: "10px 18px",
              borderRadius: "9999px",
              backdropFilter: "blur(18px)",
              boxShadow:
                "0 6px 28px rgba(0,0,0,0.6), 0 0 20px rgba(37,211,102,0.18), inset 0 1px 0 rgba(255,255,255,0.05)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {/* Label */}
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "0.025em",
                fontFamily: "var(--font-display), sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Message me
            </span>

            {/* WhatsApp icon + green active dot */}
            <div style={{ position: "relative", display: "flex", alignItems: "center", flexShrink: 0 }}>
              {/* WA SVG */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.303A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"
                  fill="#25D366"
                />
                <path
                  d="M16.735 14.388c-.237-.119-1.4-.69-1.617-.769-.217-.079-.374-.119-.532.119-.158.237-.611.769-.749.927-.138.158-.277.178-.514.059-.237-.119-1-.369-1.905-1.175-.704-.628-1.179-1.403-1.317-1.64-.138-.238-.015-.366.104-.484.107-.106.237-.277.356-.416.119-.138.158-.237.237-.395.079-.158.04-.297-.02-.416-.059-.119-.532-1.283-.729-1.757-.192-.461-.388-.398-.532-.406l-.454-.008c-.158 0-.415.059-.632.297-.217.237-.829.81-.829 1.973 0 1.164.848 2.288.967 2.447.119.158 1.669 2.548 4.044 3.573.565.244 1.006.39 1.35.498.567.18 1.083.155 1.491.094.455-.068 1.4-.572 1.597-1.125.198-.553.198-1.027.139-1.125-.059-.099-.217-.158-.454-.277Z"
                  fill="#ffffff"
                />
              </svg>

              {/* Static green active dot — top right of icon */}
              <span
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  border: "1.5px solid rgba(8, 14, 20, 0.97)",
                }}
              />
            </div>
          </motion.a>

          <style>{`
            @media (max-width: 480px) {
              .floating-wp-wrap {
                bottom: 20px !important;
                right: 18px !important;
              }
              #floating-whatsapp-btn {
                padding: 9px 15px !important;
                font-size: 0.85rem !important;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
