"use client"

import React from 'react'

interface ToggleSwitchProps {
  label: string
  defaultChecked?: boolean
  onChange: (checked: boolean) => void
  icon?: React.ReactNode
  className?: string
}

export default function ToggleSwitch({ 
  label, 
  defaultChecked = false, 
  onChange, 
  icon,
  className = ""
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked)

  const handleToggle = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange(newChecked)
  }

  return (
    <div className={`flex items-center justify-between p-4 bg-white/10 rounded-lg ${className}`}>
      <div className="flex items-center gap-3">
        {icon && <div className="text-white/80">{icon}</div>}
        <span className="text-white font-medium">{label}</span>
      </div>
      
      <button
        type="button"
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${isChecked ? 'bg-blue-600' : 'bg-gray-600'}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${isChecked ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  )
}

