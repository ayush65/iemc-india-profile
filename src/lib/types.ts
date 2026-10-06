export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  /** URL-safe identifier, used for `/products/[slug]`. */
  slug: string;
  /** Legacy identifier kept for parity with the original static site. */
  id: string;
  category: string;
  title: string;
  desc: string;
  details: string;
  image: string;
  imageAlt?: string;
  specs: ProductSpec[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Empty string renders a generated initials avatar. */
  image: string;
  linkedin: string;
};

export type NavLink = {
  label: string;
  href: string;
  cta?: boolean;
};

export type Stat = {
  target: number;
  suffix: string;
  label: string;
};

export type AboutCard = {
  icon: "shield" | "gears" | "globe";
  title: string;
  body: string;
  highlight?: boolean;
};

export type ContactDetail = {
  icon: "pin" | "mail" | "phone";
  label: string;
  value: string;
  href?: string;
};

export type InquiryInput = {
  name: string;
  phone: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput | "form", string>>;
