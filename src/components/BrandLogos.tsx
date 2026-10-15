import React from "react";

export function NolokLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`nolok-brand-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-serif), 'Cinzel', serif",
          fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
          fontWeight: 700,
          letterSpacing: "0.22em",
          background: "linear-gradient(135deg, #f7dfa5 0%, #d8ac58 50%, #9e7526 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 4px 25px rgba(216, 172, 88, 0.25)",
          textTransform: "uppercase",
          display: "inline-block",
        }}
      >
        NOLOK
      </span>
    </div>
  );
}

export function ProchariLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`prochari-brand-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Orange origami stylized P icon */}
      <svg
        width="46"
        height="52"
        viewBox="0 0 46 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 2px 12px rgba(255, 87, 34, 0.4))" }}
      >
        {/* Left vertical stem */}
        <path
          d="M6 4H18V48H6C3.79086 48 2 46.2091 2 44V8C2 5.79086 3.79086 4 6 4Z"
          fill="url(#prochari-orange-1)"
        />
        {/* Upper facet of the loop */}
        <path
          d="M18 4H32C38.6274 4 44 9.37258 44 16C44 19.5 42.5 22.5 40 24.5L28 17L18 17V4Z"
          fill="url(#prochari-orange-2)"
        />
        {/* Lower folded facet */}
        <path
          d="M28 17L40 24.5C38 27.5 34.5 30 30 30H18V17H28Z"
          fill="url(#prochari-orange-3)"
        />
        {/* Crease accent */}
        <path
          d="M18 17L40 24.5"
          stroke="#FFA066"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="prochari-orange-1" x1="2" y1="4" x2="18" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7043" />
            <stop offset="1" stopColor="#E64A19" />
          </linearGradient>
          <linearGradient id="prochari-orange-2" x1="18" y1="4" x2="44" y2="24.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8A65" />
            <stop offset="1" stopColor="#FF5722" />
          </linearGradient>
          <linearGradient id="prochari-orange-3" x1="18" y1="17" x2="40" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4511E" />
            <stop offset="1" stopColor="#D84315" />
          </linearGradient>
        </defs>
      </svg>

      <span
        style={{
          fontFamily: "var(--font-display), 'Syne', sans-serif",
          fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          color: "#ffffff",
          lineHeight: 1,
        }}
      >
        <span style={{ color: "#ff5722" }}>P</span>rochari
      </span>
    </div>
  );
}

export function SignatureManLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`signature-man-logo ${className}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
      }}
    >
      {/* Geometric white origami/monogram SM */}
      <svg
        width="110"
        height="70"
        viewBox="0 0 110 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 2px 14px rgba(255, 255, 255, 0.15))" }}
      >
        {/* Left peak of 'M' */}
        <path
          d="M10 60L42 12L56 36L68 18L98 60"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Intersecting ribbon loop forming the S curve */}
        <path
          d="M26 42L45 42L65 42L82 42"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      <span
        style={{
          fontFamily: "var(--font-main), sans-serif",
          fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
          fontWeight: 600,
          letterSpacing: "0.32em",
          color: "#ffffff",
          textTransform: "uppercase",
          paddingLeft: "0.32em",
        }}
      >
        Signature Man
      </span>
    </div>
  );
}
