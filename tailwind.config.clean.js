/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ashridge Design System Colors
        'ashridge-primary': '#00478A',
        'ashridge-primary-light': '#0066CC',
        'ashridge-primary-dark': '#003366',
        'ashridge-secondary': '#E9F5FF',
        'ashridge-background': '#FFFFFF',
        'ashridge-text': '#2D3748',
        'ashridge-text-secondary': '#718096',
        'ashridge-success': '#10B981',
        'ashridge-warning': '#F59E0B',
        'ashridge-danger': '#EF4444',
        'ashridge-gray': '#CBD5E0',
        'ashridge-light-gray': '#F7FAFC',
        'ashridge-border': '#E2E8F0',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        'design-xs': "0.25rem",
        'design-sm': "0.5rem",
        'design-md': "1rem",
        'design-lg': "1.5rem",
        'design-xl': "2rem",
        'design-2xl': "2.5rem",
      },
      borderRadius: {
        'design-sm': "0.25rem",
        'design-md': "0.5rem",
        'design-lg': "1rem",
        'design-full': "9999px",
      },
      boxShadow: {
        'design-sm': "0 1px 2px rgba(0, 0, 0, 0.1)",
        'design-md': "0 4px 6px rgba(0, 0, 0, 0.1)",
        'design-lg': "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
