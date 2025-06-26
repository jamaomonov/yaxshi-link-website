import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "yaxshi-green": "#0AC213",
        "yaxshi-green-light": "#4CF554",
        "yaxshi-accent": "#FF6B00", // Energetic Orange for accents
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "subtle-float": {
          "0%, 100%": { 
            transform: "translateY(0px) scale(1)",
            animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          },
          "50%": { 
            transform: "translateY(-10px) scale(1.02)",
            animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          },
        },
        "blob-morph": {
          "0%, 100%": { 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "scale(1) rotate(0deg)"
          },
          "33%": { 
            borderRadius: "40% 60% 50% 50% / 70% 40% 60% 30%",
            transform: "scale(1.05) rotate(120deg)"
          },
          "66%": { 
            borderRadius: "50% 30% 70% 40% / 40% 70% 30% 60%",
            transform: "scale(0.95) rotate(240deg)"
          },
        },
        "float-up": {
          "0%": { 
            transform: "translateY(100px) rotate(0deg) scale(0.8)", 
            opacity: "0",
            filter: "blur(2px)"
          },
          "10%": { opacity: "0.3", filter: "blur(1px)" },
          "50%": { opacity: "1", filter: "blur(0px)" },
          "90%": { opacity: "0.3", filter: "blur(1px)" },
          "100%": { 
            transform: "translateY(-100px) rotate(360deg) scale(1.2)", 
            opacity: "0",
            filter: "blur(2px)"
          },
        },
        "float-diagonal": {
          "0%": { 
            transform: "translate(0, 100px) rotate(0deg) scale(0.9)", 
            opacity: "0",
            filter: "blur(1px)"
          },
          "15%": { opacity: "0.4" },
          "50%": { opacity: "0.8", filter: "blur(0px)" },
          "85%": { opacity: "0.4" },
          "100%": { 
            transform: "translate(50px, -100px) rotate(180deg) scale(1.1)", 
            opacity: "0",
            filter: "blur(1px)"
          },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(10, 194, 19, 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(10, 194, 19, 0.6)",
            transform: "scale(1.02)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "subtle-float": "subtle-float 6s ease-in-out infinite",
        "blob-morph": "blob-morph 12s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "float-up": "float-up 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "float-diagonal": "float-diagonal 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "slide-up": "slide-up 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        "slide-down": "slide-down 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        "fade-in": "fade-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
      },
      fontFamily: {
        sans: ['Arial Rounded MT Pro Cyr', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'arial-rounded': ['Arial Rounded MT Pro Cyr', 'sans-serif'],
        mono: ["var(--font-geist-mono)"],
      },
      willChange: {
        'transform-opacity': 'transform, opacity',
        'transform-scale': 'transform, scale',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
