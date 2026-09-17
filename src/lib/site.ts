export const links = {
  email: "attiqrehman130@gmail.com",
  linkedin: "https://www.linkedin.com/in/attiq-rehman-/",
  github: "https://github.com/attiqrehman-ar",
};

export const profile = {
  name: "Attiq Rehman",
  fullName: "Attiq Ur Rehman",
  title: "ADA & WCAG Accessibility Specialist",
  initials: "AR",
  responseTime: "Usually replies within a few hours",
};

export const siteConfig = {
  name: "Attiq Ur Rehman",
  shortName: "Attiq Rehman",
  title: "Attiq Ur Rehman | ADA & WCAG Accessibility Specialist",
  description:
    "Manual WCAG audits, accessibility remediation, and ongoing testing for websites and digital products. Make your website accessible — and keep it that way.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://attiqportfolio.vercel.app",
  locale: "en_US",
  email: links.email,
  linkedin: links.linkedin,
  github: links.github,
  keywords: [
    "Attiq Ur Rehman",
    "ADA accessibility specialist",
    "WCAG audit",
    "accessibility remediation",
    "Section 508",
    "VPAT",
    "Shopify accessibility",
    "manual accessibility testing",
  ],
};

export const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#results", label: "Results" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "50+", label: "Websites audited & remediated" },
  { value: "WCAG 2.2", label: "Audits at A, AA, or AAA" },
  { value: "3 months", label: "Free post-project monitoring" },
  { value: "Hours", label: "Typical reply time" },
];

export const industries = [
  {
    title: "eCommerce",
    body: "Shoppers using keyboards and screen readers need to browse, add to cart, and checkout. Accessibility gaps here mean lost sales and legal risk.",
  },
  {
    title: "Healthcare",
    body: "Patients must access forms, portals, and content reliably. Accessibility failures can block care and create compliance exposure.",
  },
  {
    title: "SaaS & product",
    body: "Product UIs change often. Without testing and retesting, new releases reintroduce barriers for customers who rely on assistive tech.",
  },
  {
    title: "Nonprofit & public",
    body: "Mission-driven sites serve broad audiences. Inclusive access protects trust and often aligns with funding or regulatory expectations.",
  },
];

export const services = [
  {
    title: "Accessibility audits",
    summary:
      "Find out what is broken, who it affects, and what to fix first — in plain language.",
    what: [
      "What barriers exist on key pages and flows",
      "Which WCAG criteria apply",
      "What legal framework maps to your situation (ADA, Section 508, EAA, and related standards)",
      "Clear priority: critical, serious, and lower-impact issues",
    ],
    deliverable: "Plain-English audit report + prioritized fix list",
  },
  {
    title: "Accessibility remediation",
    summary:
      "I don’t only list problems — I implement and verify the fixes in your site.",
    what: [
      "Keyboard traps, focus order, and skip links",
      "Missing labels, headings, and accessible names",
      "Contrast, forms, errors, and media alternatives",
      "Interactive components that break with assistive tech",
    ],
    where: [
      "Shopify & Shopify Plus",
      "WordPress",
      "Webflow, Wix, BigCommerce, Magento",
      "Custom HTML, CSS, JavaScript, React, PHP, Liquid",
    ],
    deliverable: "Fixes applied in your CMS or codebase",
  },
  {
    title: "Testing & retesting",
    summary:
      "Audit → Fix → Verify. After remediation, I re-test so changes actually work.",
    what: [
      "Retest affected pages and components",
      "Confirm fixes with keyboard and screen readers",
      "Catch remaining barriers before release",
      "Support ongoing checks after deploys",
    ],
    deliverable: "Verification notes + remaining issue list",
  },
  {
    title: "VPAT / ACR documentation",
    summary:
      "Procurement-ready accessibility documentation for teams that need to prove compliance.",
    what: [
      "VPAT / ACR aligned to your product or site",
      "Mapped conformance claims you can share with buyers",
    ],
    deliverable: "Completed VPAT / ACR package",
  },
  {
    title: "Document accessibility",
    summary:
      "Make PDFs and Office files usable — not just the website.",
    what: [
      "Inaccessible PDFs",
      "Word, Excel, and PowerPoint files",
    ],
    deliverable: "Remediated documents ready to publish",
  },
  {
    title: "Voice control setup",
    summary:
      "Hands-free computer access for users with limited mobility or dexterity.",
    what: [
      "Apple Voice Control (Mac / iOS)",
      "Windows Voice Access",
      "Custom voice commands for daily workflows",
      "One-on-one training",
    ],
    deliverable: "Configured setup + training session",
  },
];

export const processSteps = [
  {
    title: "Discover",
    body: "Share your URL, platform, and goals so we define the right scope.",
  },
  {
    title: "Audit",
    body: "Identify barriers with automated checks plus manual testing.",
  },
  {
    title: "Document",
    body: "Explain each issue, its impact, WCAG criterion, and recommended fix.",
  },
  {
    title: "Remediate",
    body: "Implement fixes directly in your website or codebase.",
  },
  {
    title: "Retest",
    body: "Re-test with keyboard navigation, screen readers, and related methods.",
  },
  {
    title: "Monitor",
    body: "Help catch regressions after updates go live.",
  },
];

export const results = [
  {
    title: "Shopify store accessibility cleanup",
    context: "eCommerce",
    problem:
      "Key product and checkout flows failed keyboard and screen-reader use.",
    outcome:
      "Critical barriers remediated, retested, and documented for ongoing checks.",
  },
  {
    title: "Multi-page WCAG audit for a service site",
    context: "SaaS / marketing",
    problem:
      "Leadership needed clarity on risk before a redesign — not a tool dump.",
    outcome:
      "Prioritized AA findings with plain-English impact and a practical fix plan.",
  },
  {
    title: "Remediation + verification cycle",
    context: "Custom web app",
    problem:
      "Previous “fixes” still left forms and dialogs unusable for assistive tech.",
    outcome:
      "Implemented and re-verified fixes so remaining issues were explicit and actionable.",
  },
];

export const platforms = [
  "Shopify",
  "Shopify Plus",
  "WordPress",
  "Webflow",
  "Wix",
  "BigCommerce",
  "Magento",
  "React",
  "Custom",
];

export const faqs = [
  {
    q: "Do you only run automated scanners?",
    a: "No. Automated tools help, but I also test manually with keyboard navigation and screen readers. Overlays and scanner-only reports often miss (or worsen) real barriers.",
  },
  {
    q: "Can you fix issues — or only report them?",
    a: "Both. I can audit, implement remediation in your CMS or codebase, then retest so the fixes hold up.",
  },
  {
    q: "Which platforms do you work on?",
    a: "Shopify and Shopify Plus, WordPress, Webflow, Wix, BigCommerce, Magento, React apps, and custom sites.",
  },
  {
    q: "Do you provide VPAT / ACR?",
    a: "Yes. I can produce VPAT/ACR documentation for procurement when that is part of your requirement.",
  },
  {
    q: "How fast do you reply?",
    a: "I usually reply within a few hours. Send your website URL and what you need, and I’ll recommend the next step.",
  },
];

export const contactChecklist = [
  "Website URL",
  "Platform — Shopify, WordPress, custom, etc.",
  "What you’re looking for — audit, remediation, VPAT/ACR, ongoing testing",
  "Any deadline or compliance requirement",
];
