import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['"Roboto"', 'system-ui'],
        raleway: ['"Raleway"', 'system-ui'],
        playwrite: ['"Playwrite CU"', 'system-ui'],
        playfair: ['"Playfair Display"', 'system-ui'],
        oswald: ['"Oswald"', 'system-ui'],
        newAmsterdam: ['"New Amsterdam"', 'system-ui'],
        nerkoOne: ['"Nerko One"', 'system-ui'],
        metamorphous: ['"Metamorphous"', 'system-ui'],
        matemasie: ['"Matemasie"', 'system-ui'],
        greatVibes: ['"Great Vibes"', 'system-ui'],
        dancingScript: ['"Dancing Script"', 'system-ui'],
        baskervville: ['"Baskervville SC"', 'system-ui'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
    },
  },
  plugins: [],
};
export default config;
