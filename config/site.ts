export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bimbel Sholuna | Solusi Belajar Tepat Guna",
  description:
    "Sistem belajar Online, Privat (1 murid 1 guru) dan Semiprivat (maks.3 murid)",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Layanan",
      href: "#layanan",
    },
    {
      label: "Testimoni",
      href: "#testimoni",
    },
    {
      label: "Kurikulum",
      href: "#kurikulum",
    },
    {
      label: "Pengajar",
      href: "#pengajar",
    },
    {
      label: "Galeri",
      href: "#galeri",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
