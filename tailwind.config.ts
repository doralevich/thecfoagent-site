import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sampled from public/images/the-cfo-agent-wordmark.svg.
        //
        // Navy is dark, so unlike the other sites this brand needs two tones. `brand` is
        // the wordmark navy and works on the light grounds; `brand-tint` is the same hue
        // raised in lightness, and is what the dark sections use - the wordmark navy is
        // illegible against a near-black navy ground.
        brand: {
          DEFAULT: "#1E305F",
          dark: "#152242",
          tint: "#7F98D7",
        },
        ground: "#0A1628",
        cream: "#F2F0EB",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
