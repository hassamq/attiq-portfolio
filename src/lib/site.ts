export const links = {
  email: "attiqrehman130@gmail.com",
  linkedin: "https://www.linkedin.com/in/attiq-rehman-/",
  upwork: "https://www.upwork.com/freelancers/attiqrehmann",
};

export const profile = {
  name: "Attiq Rehman",
  fullName: "Attiq Ur Rehman",
  title: "ADA & WCAG Accessibility Specialist",
  initials: "AR",
  location: "Pakistan",
  credentials: "ADA · WCAG · Section 508 · VPAT · Web Development",
  tagline:
    "I help eCommerce, healthcare, nonprofit, and SaaS teams find and fix accessibility issues before they become legal or reputational damage.",
  about: [
    "Certified ADA/WCAG consultant and developer. I've audited and remediated 50+ websites across Shopify, WordPress, Webflow, and custom platforms—without relying on overlay plugins or scanner-only reports.",
    "I test manually with screen readers (NVDA, JAWS, VoiceOver, TalkBack) and keyboard-only navigation, then fix issues myself in your codebase or CMS. Plain-English reports, direct remediation, and 3 months of free post-project monitoring.",
  ],
  services: [
    {
      title: "Accessibility audits & compliance",
      body: "Full WCAG 2.0/2.1/2.2 audits (A, AA, or AAA) mapped to ADA, Section 508, AODA, EAA, or EN 301 549. VPAT/ACR docs and remediation for inaccessible PDFs, Word, Excel, and PowerPoint files.",
    },
    {
      title: "Web development & remediation",
      body: "I fix what the audit finds—on Shopify & Shopify Plus, WordPress, Webflow, Wix, BigCommerce, Magento, and custom stacks (HTML, CSS, JavaScript, React, PHP, Liquid).",
    },
    {
      title: "Voice control setup",
      body: "Hands-free computer access for users with limited mobility using Apple Voice Control and Windows Voice Access—custom commands plus one-on-one training.",
    },
  ],
  skills: [
    "WCAG 2.0 / 2.1 / 2.2",
    "ADA compliance",
    "Section 508",
    "Accessibility testing",
    "Web accessibility",
    "VPAT / ACR",
    "Manual testing",
    "Shopify",
    "Shopify Plus",
    "Shopify redesign",
    "WordPress",
    "Squarespace",
    "React",
    "Custom ecommerce",
    "Web development",
  ],
};

export const siteConfig = {
  name: "Attiq Ur Rehman",
  shortName: "Attiq Rehman",
  title: "Attiq Ur Rehman | ADA & WCAG Accessibility Specialist",
  description:
    "Certified ADA/WCAG consultant and developer. Manual accessibility audits, remediation, VPAT documentation, and accessible web development for Shopify, WordPress, and custom platforms.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://attiqportfolio.vercel.app",
  locale: "en_US",
  email: links.email,
  linkedin: links.linkedin,
  upwork: links.upwork,
  keywords: [
    "Attiq Ur Rehman",
    "ADA accessibility specialist",
    "WCAG consultant",
    "Section 508",
    "VPAT",
    "accessibility audit",
    "Shopify accessibility",
    "Shopify Plus",
    "manual accessibility testing",
    "screen reader testing",
    "web remediation",
    "Upwork accessibility freelancer",
  ],
};

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/accessibility", label: "Accessibility" },
];
