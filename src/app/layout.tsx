import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bendavid D Walker C | AI & Data Science Engineer",
  description: "Portfolio of Bendavid D Walker C, an Artificial Intelligence & Data Science Engineer passionate about Deep Learning, Generative AI, Computer Vision, and Cybersecurity. Explore featured projects, professional internships, and technical research.",
  keywords: [
    "Bendavid D Walker C",
    "Bendavid D Walker",
    "Bendavid Walker",
    "Ben David D Walker C",
    "AI Engineer",
    "Machine Learning Developer",
    "Generative AI",
    "Data Science Engineer",
    "Deep Learning",
    "Computer Vision",
    "Portfolio"
  ],
  authors: [{ name: "Bendavid D Walker C", url: "https://github.com/BenDavid95" }],
  openGraph: {
    title: "Bendavid D Walker C | AI & Data Science Engineer",
    description: "Building Intelligent Systems that solve real-world problems. Discover projects in Deep Learning, Generative AI, and Security.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bendavid D Walker C",
    "alternateName": [
      "Bendavid D Walker",
      "Bendavid Walker",
      "Ben David D Walker C"
    ],
    "jobTitle": "Artificial Intelligence & Data Science Engineer",
    "url": "https://bendavid95.github.io",
    "sameAs": [
      "https://github.com/BenDavid95",
      "https://linkedin.com/in/bendavid-d-walker-c-228996249"
    ],
    "description": "Artificial Intelligence & Data Science Engineer specializing in Deep Learning, Generative AI, Computer Vision, and Cybersecurity.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Karunya Institute of Technology and Sciences"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-deep text-slate-100 selection:bg-accent-purple/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
