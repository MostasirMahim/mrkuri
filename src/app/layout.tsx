import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mrkuri.online"),
  title: {
    default: "Mr. Kuri | Sowrab Kuri — Multimedia Producer, Creative Director & Brand Strategist",
    template: "%s | Mr. Kuri",
  },
  description:
    "Official portfolio of Sowrab Kuri (Mr. Kuri). Multimedia Producer, Creative Director, and Brand Strategist. Founder of Nolok and Signature Man. Turning visionary concepts into high-impact visual realities through video production, cinematography, and brand strategy.",
  applicationName: "Mr. Kuri",
  keywords: [
    "Sowrab Kuri",
    "Mr Kuri",
    "Mr. Kuri",
    "mrkuri",
    "mrkuri.online",
    "Multimedia Producer",
    "Creative Director",
    "Brand Strategist",
    "Video Editor",
    "Videographer",
    "Cinematographer",
    "Motion Graphics",
    "Graphics Designer",
    "Nolok",
    "Signature Man",
    "Video Production Bangladesh",
    "Creative Director Bangladesh",
    "Ecommerce Brand Strategy",
  ],
  authors: [{ name: "Sowrab Kuri", url: "https://mrkuri.online" }],
  creator: "Sowrab Kuri",
  publisher: "Mr. Kuri",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  alternates: {
    canonical: "https://mrkuri.online",
  },
  openGraph: {
    title: "Mr. Kuri | Sowrab Kuri — Multimedia Producer & Creative Director",
    description:
      "Official portfolio of Sowrab Kuri. Founder of Nolok and Signature Man. Specializing in high-impact video production, motion graphics, and e-commerce brand development.",
    url: "https://mrkuri.online",
    siteName: "Mr. Kuri",
    images: [
      {
        url: "/1st.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Sowrab Kuri - Multimedia Producer & Creative Director",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr. Kuri | Sowrab Kuri — Multimedia Producer & Creative Director",
    description:
      "Multimedia Producer, Creative Director, and Brand Strategist. Turning abstract ideas into unforgettable realities.",
    images: ["/1st.jpg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/kuri-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/kuri-logo.png", type: "image/png" },
    ],
    shortcut: "/kuri-logo.png",
  },
  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mrkuri.online/#person",
      "name": "Sowrab Kuri",
      "alternateName": ["Mr. Kuri", "Mr Kuri"],
      "url": "https://mrkuri.online",
      "image": "https://mrkuri.online/1st.jpg.jpeg",
      "jobTitle": ["Multimedia Producer", "Creative Director", "Brand Strategist"],
      "telephone": "+8801816451919",
      "email": "sowrabkuri1022003@gmail.com",
      "sameAs": [
        "https://www.facebook.com/mrkuri.official",
        "https://nolok.store",
        "https://www.facebook.com/signatureman.bd"
      ],
      "knowsAbout": [
        "Video Production",
        "Cinematography",
        "Motion Graphics",
        "Graphic Design",
        "Brand Identity",
        "E-Commerce Growth Strategy"
      ],
      "worksFor": [
        {
          "@type": "Organization",
          "name": "Nolok",
          "url": "https://nolok.store"
        },
        {
          "@type": "Organization",
          "name": "Signature Man",
          "url": "https://www.facebook.com/signatureman.bd"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mrkuri.online/#website",
      "url": "https://mrkuri.online",
      "name": "Mr. Kuri",
      "description": "Official Portfolio of Sowrab Kuri — Multimedia Producer, Creative Director & Brand Strategist",
      "publisher": {
        "@id": "https://mrkuri.online/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/kuri-logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/kuri-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
