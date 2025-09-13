import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-ashridge-primary text-white hover:bg-ashridge-primary-dark focus:ring-ashridge-primary",
    secondary: "bg-ashridge-background text-ashridge-primary border-2 border-ashridge-primary hover:bg-ashridge-secondary focus:ring-ashridge-primary",
    outline: "bg-transparent text-ashridge-primary border-2 border-ashridge-primary hover:bg-ashridge-primary hover:text-white focus:ring-ashridge-primary"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-design-sm",
    md: "px-design-lg py-design-sm text-sm rounded-design-md",
    lg: "px-design-xl py-design-md text-base rounded-design-md"
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
