/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        'ashridge-primary': '#154D71',
        'ashridge-primary-light': '#0066CC',
        'ashridge-primary-dark': '#103850',
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
        // Original shadcn colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
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
        'design-xs': '0.25rem',
        'design-sm': '0.5rem',
        'design-md': '1rem',
        'design-lg': '1.5rem',
        'design-xl': '2rem',
        'design-2xl': '2.5rem'
      },
      borderRadius: {
        'design-sm': '0.25rem',
        'design-md': '0.5rem',
        'design-lg': '1rem'
      },
      boxShadow: {
        'design-sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'design-md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'design-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'design-xl': '0 20px 40px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
