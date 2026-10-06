import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { company, siteUrl } from "@/lib/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IEMC India Pvt. Ltd. | Industrial & Technology Solutions",
    template: "%s | IEMC India Pvt. Ltd.",
  },
  description:
    "Official portfolio of IEMC India Pvt. Ltd. - Engineering high-precision industrial systems, automation, and enterprise solutions.",
  keywords: [
    "IEMC India",
    "industrial automation",
    "precision engineering",
    "water management",
    "turnkey projects",
    "Hosur",
  ],
  applicationName: company.name,
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.name,
    title: "IEMC India Pvt. Ltd. | Industrial & Technology Solutions",
    description:
      "Cutting-edge industrial systems, customized automation machinery, and robust engineering solutions built to power global manufacturing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEMC India Pvt. Ltd. | Industrial & Technology Solutions",
    description:
      "Cutting-edge industrial systems, customized automation machinery, and robust engineering solutions.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  url: siteUrl,
  email: `mailto:${company.email}`,
  telephone: company.phone,
  slogan: company.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "MIG 297, New ASTC Hudco",
    addressLocality: "Hosur",
    addressRegion: "Tamil Nadu",
    postalCode: "635109",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${grotesk.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
