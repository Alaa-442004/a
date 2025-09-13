
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthInput } from '@/components/AuthInput'
import { AuthButton } from '@/components/AuthButton'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })
  const router = useRouter()

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.password) {
      alert('Please fill in all fields')
      return
    }

    console.log('Login data:', formData)
    
    // Simulate successful login and redirect to profile
    setTimeout(() => {
      router.push('/profile')
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#154D71] to-[#FFFBCA] font-inter flex items-center justify-center p-6">
      {/* Circular Container */}
      <div className="w-[640px] h-[640px] bg-[#D9D9D9] rounded-full shadow-design-xl flex flex-col items-center justify-center p-14 relative">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-12 h-12 bg-ashridge-primary rounded-full flex items-center justify-center">
            <img 
              src="/9987eb512151b450fd789b926391e339764420c7.png" 
              alt="Ashridge College Logo" 
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-ashridge-text mb-8 text-center">
          Sign in
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <AuthInput
            type="text"
            label="Name"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            icon="user"
            inputClassName="h-20 bg-[#154D714D] text-ashridge-text placeholder-ashridge-text text-xl"
          />

          <AuthInput
            type="password"
            label="Password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            icon="lock"
            inputClassName="h-20 bg-[#154D714D] text-ashridge-text placeholder-ashridge-text text-xl"
          />

          <div className="pt-4">
            <AuthButton type="submit" variant="primary">
              Sign in
            </AuthButton>
          </div>
        </form>

        {/* Links */}
        <div className="mt-4 text-center space-y-2">
          <Link href="#" className="block text-sm text-ashridge-text-secondary hover:text-ashridge-primary">
            Forget your password?
          </Link>
          <Link href="/signup" className="block text-sm text-ashridge-text-secondary hover:text-ashridge-primary">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
