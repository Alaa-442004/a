"use client"

import React from 'react'
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'

interface AuthInputProps {
  type: 'text' | 'email' | 'password'
  label: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  icon?: 'user' | 'envelope' | 'lock'
  className?: string
  inputClassName?: string
}

export function AuthInput({ 
  type, 
  label, 
  placeholder, 
  value, 
  onChange, 
  icon,
  className = "",
  inputClassName = ""
}: AuthInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  
  const getIcon = () => {
    switch (icon) {
      case 'user':
        return <User className="w-5 h-5 text-ashridge-text-secondary" />
      case 'envelope':
        return <Mail className="w-5 h-5 text-ashridge-text-secondary" />
      case 'lock':
        return <Lock className="w-5 h-5 text-ashridge-text-secondary" />
      default:
        return null
    }
  }

  const inputType = type === 'password' && showPassword ? 'text' : type

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        {icon && (
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
            {getIcon()}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder || label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full h-14 bg-ashridge-border border-none rounded-design-md
            px-4 ${icon ? 'pl-14' : 'pl-4'} ${type === 'password' ? 'pr-14' : 'pr-4'}
            text-lg text-ashridge-text placeholder-ashridge-text-secondary
            focus:outline-none focus:ring-2 focus:ring-ashridge-primary
            transition-all duration-200
          ${inputClassName}
          `}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-ashridge-text-secondary" />
            ) : (
              <Eye className="w-5 h-5 text-ashridge-text-secondary" />
            )}
          </button>
        )}
      </div>
    </div>
  )
}
