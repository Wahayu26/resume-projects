import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://wahyusatria.sec.id";

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profileData.name} — ${profileData.title}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.summary,
  keywords: [
    "Wahyu Satria Aji",
    "IT Security Engineer",
    "SOC Analyst",
    "PAM Specialist",
    "IAM Specialist",
    "CrowdStrike Falcon EDR",
    "CyberArk PAM",
    "Fortigate",
    "Palo Alto Firewall",
    "Jakarta Security Engineer",
  ],
  authors: [{ name: profileData.name, url: profileData.contact.linkedin }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.summary,
    siteName: `${profileData.name} Security Operations Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profileData.name} — ${profileData.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — ${profileData.title}`,
    description: profileData.summary,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    image: `${SITE_URL}${profileData.photoUrl}`,
    jobTitle: profileData.title,
    description: profileData.summary,
    email: `mailto:${profileData.contact.email}`,
    telephone: profileData.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    url: SITE_URL,
    sameAs: [profileData.contact.linkedin, profileData.contact.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profileData.education.institution,
    },
    knowsAbout: profileData.skills.flatMap((s) => s.skills),
  };

  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-[#F2A516] selection:text-[#0B1220]">
        {children}
      </body>
    </html>
  );
}
