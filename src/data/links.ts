/**
 * Official ClipBlox links — single source of truth.
 * Update a URL here and every button, card and footer link on the site updates.
 */
export const LINKS = {
  discord: "https://discord.gg/Z5Gt5Rvgd9",
  whop: "https://whop.com/clipbloxnation",
  tiktok: "https://www.tiktok.com/@clipblox.agency",
  instagram: "https://www.instagram.com/clipblox.nation?cplk=ampkM3Z6ZjEwYXpi",
  youtube: "https://youtube.com/@clipbloxagency?si=A2mg0I0-7TKgLfss",
  x: "https://x.com/clipbloxnation",
  email: "clipbloxnation@gmail.com",
} as const;

export const EMAIL_HREF = `mailto:${LINKS.email}`;
export const BUSINESS_EMAIL_HREF = `mailto:${LINKS.email}?subject=${encodeURIComponent(
  "ClipBlox Business Inquiry"
)}`;

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "tutorials", label: "Tutorials", href: "#tutorials" },
  { id: "campaigns", label: "Campaigns", href: "#campaigns" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "brands", label: "For Brands", href: "#brands" },
] as const;
