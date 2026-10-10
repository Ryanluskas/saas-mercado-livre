import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D10", // Fundo principal
        "background-secondary": "#11151B",
        foreground: "#F3F5F7",
        muted: "#929BA8", // Texto secundário
        border: "#292F3A", // Bordas discretas
        primary: {
          DEFAULT: "#28D17C", // Verde de destaque
          foreground: "#0B0D10",
        },
        card: {
          DEFAULT: "#171C24", // Superfícies e cartões
          foreground: "#F3F5F7",
        },
        danger: "#F06A75", // Vermelho para perdas e erros
        warning: "#F3BE55", // Amarelo para alertas
      },
    },
  },
  plugins: [],
};
export default config;
