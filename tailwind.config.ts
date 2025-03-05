
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
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
          DEFAULT: "#0088ff",
          foreground: "#ffffff",
          50: "#e6f3ff",
          100: "#cce7ff",
          200: "#99cfff",
          300: "#66b7ff",
          400: "#339fff",
          500: "#0088ff",
          600: "#006dcc",
          700: "#005299",
          800: "#003666",
          900: "#001b33",
        },
        secondary: {
          DEFAULT: "#ffa500",
          foreground: "#ffffff",
          50: "#fff8e6",
          100: "#ffefc9",
          200: "#ffe093",
          300: "#ffd15d",
          400: "#ffc227",
          500: "#ffa500",
          600: "#cc8400",
          700: "#996300",
          800: "#664200",
          900: "#332100",
        },
        destructive: {
          DEFAULT: "#ff3366",
          foreground: "#ffffff",
          50: "#ffe6ed",
          100: "#ffccd9",
          200: "#ff99b3",
          300: "#ff668d",
          400: "#ff3366",
          500: "#ff0040",
          600: "#cc0033",
          700: "#990026",
          800: "#66001a",
          900: "#33000d",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#6c7ae0",
          foreground: "#ffffff",
          50: "#eaecfb",
          100: "#d5d9f7",
          200: "#abb3ef",
          300: "#818ee7",
          400: "#6c7ae0",
          500: "#4857d6",
          600: "#3a46ab",
          700: "#2b3480",
          800: "#1d2356",
          900: "#0e112b",
        },
        success: {
          DEFAULT: "#00cc88",
          foreground: "#ffffff",
          50: "#e6fff4",
          100: "#ccffe9",
          200: "#99ffd3",
          300: "#66ffbd",
          400: "#33ffa7",
          500: "#00cc88",
          600: "#00a36d",
          700: "#007a51",
          800: "#005236",
          900: "#00291b",
        },
        warning: {
          DEFAULT: "#ffc107",
          foreground: "#ffffff",
          50: "#fff9e6",
          100: "#fff3cc",
          200: "#ffe799",
          300: "#ffdb66",
          400: "#ffcf33",
          500: "#ffc107",
          600: "#cc9a06",
          700: "#997304",
          800: "#664d03",
          900: "#332601",
        },
        info: {
          DEFAULT: "#6c7ae0",
          foreground: "#ffffff",
          50: "#eaecfb",
          100: "#d5d9f7",
          200: "#abb3ef",
          300: "#818ee7",
          400: "#6c7ae0",
          500: "#4857d6",
          600: "#3a46ab",
          700: "#2b3480",
          800: "#1d2356",
          900: "#0e112b",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1e293b",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      boxShadow: {
        card: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
