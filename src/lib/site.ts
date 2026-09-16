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
  tagline:
    "Inclusive Shopify and React experiences—built for clarity, compliance, and conversion.",
  about: [
    "Software engineer focused on accessible, user-centered products. I specialize in WCAG/ADA compliance, SEO, and practical frontend systems.",
    "Background from the University of Gujrat, with hands-on work across Shopify Liquid, React, Python, and modern web stacks.",
  ],
  services: [
    {
      title: "Digital accessibility",
      body: "WCAG, ADA, Section 508, and EAA audits plus remediation for inclusive UX.",
    },
    {
      title: "Shopify & ecommerce",
      body: "Custom Liquid themes, migrations, app integrations, and conversion-focused stores.",
    },
    {
      title: "Frontend engineering",
      body: "React and Next.js systems that stay fast, maintainable, and accessible.",
    },
  ],
  skills: [
    "Shopify Liquid",
    "React.js",
    "Next.js",
    "TypeScript",
    "Python",
    "Django",
    "Flask",
    "HTML / CSS",
    "WCAG / ADA",
    "SEO",
    "WordPress",
    "API integrations",
  ],
};

export const siteConfig = {
  name: "Attiq Ur Rehman",
  shortName: "Attiq Rehman",
  title: "Attiq Ur Rehman | Digital Accessibility Specialist",
  description:
    "Attiq Ur Rehman is a digital accessibility specialist helping teams build inclusive, WCAG-compliant web and Shopify experiences.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://attiqportfolio.vercel.app",
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

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
