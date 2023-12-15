import type { Config } from "tailwindcss";

// tablet: 768px = md
// desktop: xl < 1440px < 2xl

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d87d4a",
        "primary-light": "#fbaf85",
        "neutral-925": "#101010",
        "neutral-150": "#f1f1f1",
        // "neutral-50": '#fafafa', (native tailwind colour)
      },
      padding: {
        "42": "10.5rem",
      },
      lineHeight: {
        "11": "2.75rem",
      },
      backgroundImage: {
        "hero-mobile": "url('/img/home/mobile/image-hero.jpg')",
        "hero-tablet": "url('/img/home/tablet/image-hero.jpg')",
        "hero-desktop": "url('/img/home/desktop/image-hero.jpg')",
        "pattern-circles": "url('/svg/pattern-circles.svg')",
      },
      gridTemplateColumns: {
        "header-lg": "1fr auto 1fr",
        header: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
export default config;

