"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NolokLogo, ProchariLogo, SignatureManLogo } from "./BrandLogos";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "540px",
          backgroundColor: "#0b0f17",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          padding: "36px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "#94a3b8",
            fontSize: "1.5rem",
            lineHeight: 1,
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        <h3
          style={{
            fontFamily: "var(--font-display), 'Syne', sans-serif",
            fontSize: "1.8rem",
            color: "#ffffff",
            fontWeight: 800,
            marginBottom: "8px",
          }}
        >
          Let&apos;s Build Something Unforgettable
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginBottom: "24px" }}>
          Reach out for multimedia production, creative direction, or brand partnerships.
        </p>

        {submitted ? (
          <div
            style={{
              padding: "30px",
              textAlign: "center",
              backgroundColor: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: "12px",
            }}
          >
            <p style={{ color: "#4ade80", fontSize: "1.2rem", fontWeight: 600 }}>
              Message Received!
            </p>
            <p style={{ color: "#cbd5e1", marginTop: "8px", fontSize: "0.95rem" }}>
              Thank you for reaching out. Sowrab Kuri will get back to you promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px" }}>
                Your Name
              </label>
              <input
                required
                type="text"
                placeholder="John Doe"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px" }}>
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px" }}>
                Service or Inquiry Type
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#161c28",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                }}
              >
                <option value="direction">Creative Direction & Brand Strategy</option>
                <option value="video">High-Impact Video Production</option>
                <option value="motion">Motion Graphics & VFX</option>
                <option value="nolok">Nolok Jewelry Collaboration</option>
                <option value="prochari">Prochari Marketing Agency Partnership</option>
                <option value="signature">Signature Man Collection</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#cbd5e1", marginBottom: "6px" }}>
                Project Overview
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell me about your goals, timeline, and vision..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-outline"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "6px",
                backgroundColor: "rgba(45, 212, 191, 0.15)",
                borderColor: "var(--accent-teal)",
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Send Inquiry
            </button>
          </form>
        )}

        {/* Quick Contact Badges */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <button
            onClick={() => copyToClipboard("+8801816451919", "phone")}
            style={{
              fontSize: "0.85rem",
              color: "#94a3b8",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "8px 14px",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {copied === "phone" ? "✓ Phone Copied" : "📞 +8801816451919"}
          </button>

          <button
            onClick={() => copyToClipboard("sowrabkuri1022003@gmail.com", "email")}
            style={{
              fontSize: "0.85rem",
              color: "#94a3b8",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "8px 14px",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {copied === "email" ? "✓ Email Copied" : "✉️ sowrabkuri1022003@gmail.com"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface BrandModalProps {
  brand: "nolok" | "prochari" | "signature_man" | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function BrandModal({ brand, onClose, onOpenContact }: BrandModalProps) {
  if (!brand) return null;

  const brandDetails = {
    nolok: {
      name: "NOLOK",
      tagline: "Effortless Luxury & Handcrafted Elegance",
      subtitle: "Curated Sterling Silver & Diamond-Cut Jewelry",
      logo: (
        <div style={{ position: "relative", width: "180px", height: "45px" }}>
          <Image src="/nolok-brand.png" alt="Nolok" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      description:
        "Founded by Sowrab Kuri, Nolok represents a fusion of timeless artisanal craftsmanship and contemporary fashion. Every single collection—from hand-chiseled 925 sterling silver bands to custom statement necklaces—is created to evoke personal significance and lasting elegance.",
      metrics: [
        { label: "Craftsmanship", value: "925 Sterling Silver" },
        { label: "Collection", value: "Diamond-Cut & Bespoke" },
        { label: "Vision", value: "Modern Timeless Luxury" },
      ],
      photo: "/Studio_portrait_photo_2K_.jpg.jpeg",
      btnText: "Inquire Nolok Pieces",
      btnClass: "btn-outline-gold",
    },
    prochari: {
      name: "Prochari",
      tagline: "Tech-Driven Digital Marketing & Growth",
      subtitle: "Scaling Market Leaders in Bangladesh & Worldwide",
      logo: (
        <div style={{ position: "relative", width: "170px", height: "45px" }}>
          <Image src="/prochari-brand.png" alt="Prochari" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      description:
        "Prochari is a premier digital growth agency co-founded by Sowrab Kuri. Specializing in performance marketing, algorithmic SEO, cinematic brand storytelling, and customer acquisition funnels, Prochari has steered high-trajectory brands to undisputed market authority.",
      metrics: [
        { label: "Performance", value: "Data-Backed Growth" },
        { label: "Expertise", value: "SEO & Brand Strategy" },
        { label: "Production", value: "Cinematic Visuals" },
      ],
      photo: "/2nd.jpg.jpeg",
      btnText: "Consult With Prochari",
      btnClass: "btn-outline-orange",
    },
    signature_man: {
      name: "Signature Man",
      tagline: "Define Your Style. Wear Your Signature.",
      subtitle: "Bespoke Leather Goods & Men's Essentials",
      logo: (
        <div style={{ position: "relative", width: "130px", height: "70px" }}>
          <Image src="/signature-brand.png" alt="Signature Man" fill style={{ objectFit: "contain" }} />
        </div>
      ),
      description:
        "Crafted for the modern gentleman who demands uncompromising quality. Signature Man designs handcrafted full-grain leather footwear, tailored belts, minimalist wallets, and daily luxury accessories that elevate executive presence.",
      metrics: [
        { label: "Material", value: "Genuine Full-Grain Leather" },
        { label: "Philosophy", value: "Confidence & Class" },
        { label: "Design", value: "Ergonomic & Minimal" },
      ],
      photo: "/1st.jpg.jpeg",
      btnText: "Explore Collection",
      btnClass: "btn-outline",
    },
  };

  const current = brandDetails[brand];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(14px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "#0b0f17",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: "24px 30px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>{current.logo}</div>
          <button
            onClick={onClose}
            style={{
              color: "#94a3b8",
              fontSize: "1.5rem",
              lineHeight: 1,
              cursor: "pointer",
            }}
            aria-label="Close brand details"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: "30px", overflowY: "auto" }}>
          {/* Brand Visual Banner */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "220px",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "24px",
            }}
          >
            <Image
              src={current.photo}
              alt={current.name}
              fill
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(11, 15, 23, 0.95) 0%, transparent 70%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "20px",
                right: "20px",
              }}
            >
              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                }}
              >
                {current.tagline}
              </h4>
              <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>
                {current.subtitle}
              </p>
            </div>
          </div>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "0.98rem",
              lineHeight: 1.75,
              marginBottom: "24px",
              fontWeight: 300,
            }}
          >
            {current.description}
          </p>

          {/* Metrics / Key highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "14px",
              marginBottom: "28px",
            }}
          >
            {current.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.95rem" }}>
                  {m.value}
                </div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: "4px" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action button */}
          <div style={{ display: "flex", gap: "14px" }}>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className={current.btnClass}
              style={{ flex: 1, padding: "14px" }}
            >
              {current.btnText}
            </button>
            <a
              href="https://wa.me/8801816451919"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "14px 20px" }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
