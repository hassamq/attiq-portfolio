export const links = {
  email: "attiqrehman130@gmail.com",
  linkedin: "https://www.linkedin.com/in/attiq-rehman-/",
};

export const profile = {
  name: "Attiq Rehman",
  fullName: "Attiq Ur Rehman",
  title: "Digital Accessibility Specialist",
  initials: "AR",
  location: "Pakistan",
  skills: [
    "Digital Accessibility",
    "WCAG",
    "ADA Compliance",
    "Section 508",
    "Shopify",
    "Frontend Development",
    "React",
    "Next.js",
  ],
};

/** Production site URL — override with NEXT_PUBLIC_SITE_URL when deploying. */
export const siteConfig = {
  name: "Attiq Ur Rehman",
  shortName: "Attiq Rehman",
  title: "Attiq Ur Rehman | Digital Accessibility Specialist",
  description:
    "Attiq Ur Rehman is a digital accessibility specialist helping teams build inclusive, WCAG-compliant web and Shopify experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://attiqportfolio.vercel.app",
  locale: "en_US",
  email: links.email,
  linkedin: links.linkedin,
  keywords: [
    "Attiq Ur Rehman",
    "Attiq Rehman",
    "digital accessibility specialist",
    "WCAG consultant",
    "ADA compliance",
    "Section 508",
    "accessible websites",
    "Shopify accessibility",
    "frontend developer",
    "inclusive design",
  ],
};
