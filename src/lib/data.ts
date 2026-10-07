import type {
  AboutCard,
  ContactDetail,
  NavLink,
  Product,
  Stat,
  TeamMember,
} from "@/lib/types";

/** Canonical origin used for metadata, sitemap, robots and OG tags. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iemcindia.com"
).replace(/\/$/, "");

export const company = {
  name: "IEMC India Pvt. Ltd.",
  shortName: "IEMC INDIA",
  legalName: "PVT. LTD.",
  tagline: "Industrial Precision • System Automation • Global Quality",
  certification: "ISO 9001:2015 Certified Engineering",
  email: "contact@iemcindia.com",
  phone: "+91 98946 97390",
  phoneHref: "tel:+919894697390",
  address: "MIG 297, New ASTC Hudco, Hosur, Tamil Nadu - 635109, India",
  linkedin: "#",
} as const;

export const navLinks: NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Products", href: "#products" },
  { label: "Leadership", href: "#team" },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  badge: company.certification,
  titleLine1: "Engineering Precision.",
  titleLine2: "Powering",
  titleAccent: "Industrial Growth",
  description:
    "IEMC India Pvt. Ltd. delivers cutting-edge industrial systems, customized automation machinery, and robust engineering solutions built to power global manufacturing.",
  image:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
  imageAlt: "Precision Engineering at IEMC India",
  badgeTitle: "Industry 4.0 Ready",
  badgeSubtitle: "Smart Automation & Sensors",
};

export const stats: Stat[] = [
  { target: 15, suffix: "+", label: "Years of Excellence" },
  { target: 240, suffix: "+", label: "Turnkey Projects" },
  { target: 99, suffix: "%", label: "Client Retention" },
];

export const aboutCards: AboutCard[] = [
  {
    icon: "shield",
    title: "Pioneering Engineering",
    body: "Headquartered with deep roots in Indian industrial manufacturing, IEMC India Pvt. Ltd. provides complete product lifecycle engineering—from research and prototype conception to turnkey commissioning.",
    highlight: true,
  },
  {
    icon: "gears",
    title: "Advanced Manufacturing",
    body: "Our multi-axis CNC cells, clean-room fabrication, and automated testing rigs adhere to strict ASME, CE, and ISO international safety and performance benchmarks.",
  },
  {
    icon: "globe",
    title: "Global Export Footprint",
    body: "Serving Tier-1 automotive, heavy machinery, renewable energy, and aerospace suppliers with zero-defect quality and dependable after-sales technical support.",
  },
];

export const visionMission = {
  vision: {
    title: "Our Vision",
    body: "To be India’s premier global technology and industrial equipment provider, renowned for driving clean energy, high precision automation, and sustainable manufacturing practices worldwide",
    points: [
      "Benchmark in high-precision engineering",
      "Carbon-conscious manufacturing processes",
      "Global benchmark for indigenous innovation",
    ],
  },
  mission: {
    title: "Our Mission",
    body: "Deliver robust, defect-free, and high-efficiency mechanical and automation solutions by combining rigorous quality standards, digital transformation, and an agile workforce.",
    points: [
      "Uncompromising adherence to ISO quality metrics",
      "Rapid lead times through lean manufacturing",
      "Fostering long-term customer partnerships",
    ],
  },
};

export const products: Product[] = [
  {
    slug: "neeri-sense",
    id: "Neeri-Sense",
    category: "Domestic Automated Water Management",
    title: "With App Monitoring & leak detection",
    desc: "Wireless installation with real-time water usage monitoring. Full protection with an unconditional 1-year Replacement Warranty backed by an Industry leading 5-Year Service Assurance.",
    details:
      "Seamlessly track and manage multiple overhead tanks and sumps simultaneously from a single smartphone dashboard",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Neeri-Sense water management controller",
    specs: [
      { label: "Power Input", value: "Direct/Battery" },
      { label: "Max. wireless coverage", value: "500 m" },
      { label: "Device Dimensions", value: "800 × 750 × 500 mm" },
    ],
  },
];

export const team: TeamMember[] = [
  {
    name: "Manikandan Govindarajan",
    role: "Managing Director & CEO",
    bio: "Over 35 years of leadership directing manufacturing facilities, enterprise operations, and international engineering partnerships.",
    image: "",
    linkedin: "#",
  },
  {
    name: "Mathivanan",
    role: "CTO & Head of Engineering",
    bio: "Certified Six Sigma Black Belt overseeing stringent ISO 9001/14001, ASME, and CE standard compliance across all manufactured units.",
    image: "",
    linkedin: "#",
  },
];

export const contactDetails: ContactDetail[] = [
  { icon: "pin", label: "Headquarters", value: company.address },
  { icon: "mail", label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: "phone", label: "Phone", value: company.phone, href: company.phoneHref },
];

/* -------------------------------------------------------------------------- */
/* Homepage content (all derived from verified company information)            */
/* -------------------------------------------------------------------------- */

export const capabilities = [
  {
    title: "Product Lifecycle Engineering",
    body: "Research, prototype conception, and turnkey commissioning under one engineering roof.",
  },
  {
    title: "Precision Manufacturing",
    body: "Multi-axis CNC cells, clean-room fabrication, and automated testing rigs.",
  },
  {
    title: "Automation & Industrial Systems",
    body: "Customized automation machinery and robust engineering solutions for global manufacturing.",
  },
  {
    title: "Quality & Compliance",
    body: "ASME, CE, and ISO international safety and performance benchmarks, enforced end to end.",
  },
  {
    title: "Zero-Defect Standards",
    body: "Rigorous quality processes, automated inspection, and ISO 9001:2015 adherence.",
  },
  {
    title: "Technical Support",
    body: "Dependable after-sales technical support across the product lifecycle.",
  },
] as const;

export const industries = [
  "Tier-1 Automotive",
  "Heavy Machinery",
  "Renewable Energy",
  "Aerospace",
  "Industrial Manufacturing",
] as const;

export const qualityPillars = [
  "ISO 9001:2015 / ISO 14001 compliance",
  "ASME & CE engineering benchmarks",
  "Automated testing & inspection rigs",
  "Six Sigma Black Belt oversight",
  "1-year replacement warranty",
  "5-year service assurance",
] as const;

export const processSteps = [
  { title: "Understand", body: "Deep-dive research into the industrial requirement." },
  { title: "Engineer", body: "Prototype conception and precision system design." },
  { title: "Manufacture", body: "Multi-axis CNC cells and clean-room fabrication." },
  { title: "Inspect", body: "Automated testing rigs and rigid quality benchmarks." },
  { title: "Deliver", body: "Turnkey commissioning with long-term technical support." },
] as const;

export const whyIEMC = [
  { title: "Industrial Precision", body: "Every component engineered and delivered to exact specification." },
  { title: "System Automation", body: "Wireless monitoring and smart automation built for real facilities." },
  { title: "Global Quality", body: "ASME, CE, and ISO benchmarks across every manufactured unit." },
  { title: "Certified Engineering", body: "ISO 9001:2015 certified processes from prototype to commissioning." },
  { title: "Zero-Defect Standards", body: "Automated inspection ensures consistency, every batch, every time." },
  { title: "Long-Term Support", body: "Dependable after-sales support backed by a 5-year service assurance." },
] as const;

export const footer = {
  brand: company.name,
  tagline: company.tagline,
};

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
