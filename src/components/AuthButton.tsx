"use client"

import React from 'react'

interface AuthButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'social'
  className?: string
  disabled?: boolean
}

export function AuthButton({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  className = "",
  disabled = false
}: AuthButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `
          bg-ashridge-primary text-white hover:bg-ashridge-primary-dark
          focus:ring-2 focus:ring-ashridge-primary focus:ring-offset-2
        `
      case 'secondary':
        return `
          bg-white text-ashridge-primary border-2 border-ashridge-primary
          hover:bg-ashridge-secondary focus:ring-2 focus:ring-ashridge-primary focus:ring-offset-2
        `
      case 'social':
        return `
          bg-ashridge-border text-ashridge-text hover:bg-ashridge-gray
          focus:ring-2 focus:ring-ashridge-primary focus:ring-offset-2
        `
      default:
        return ''
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full h-12 rounded-design-md font-semibold text-base
        transition-all duration-200 transform hover:scale-[1.02]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${getVariantStyles()}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
