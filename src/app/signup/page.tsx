"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthInput } from '@/components/AuthInput'
import { AuthButton } from '@/components/AuthButton'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all fields')
      return
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters')
      return
    }

    console.log('Sign up data:', formData)
    
    // Simulate successful registration and redirect to profile
    setTimeout(() => {
      router.push('/profile')
    }, 500)
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
    // Handle social login logic here
  }

  return (
    <div className="min-h-screen bg-ashridge-background font-inter">
      {/* Logo at top left */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
            <span className="font-semibold text-lg" style={{ fontFamily: 'Caveat, cursive' }}>Ashridge College</span>
      </div>
      </div>
      
      <div className="flex min-h-screen">
        {/* Left Panel - Welcome Back */}
        <div className="w-1/2 bg-[#154D71] flex flex-col justify-center items-center p-16 text-white">
          {/* Welcome Content */}
          <div className="text-center max-w-lg">
            <h1 className="text-4xl font-bold mb-8">Welcome Back!</h1>
            <p className="text-xl leading-8 mb-8">
              To keep connect with us please login with your personal information
            </p>
            <Link href="/login">
              <AuthButton variant="secondary" className="bg-white text-ashridge-primary hover:bg-ashridge-secondary">
                Sign in
              </AuthButton>
            </Link>
          </div>
        </div>

        {/* Right Panel - Create Account Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-16">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-ashridge-text mb-6">
              Create Account
            </h2>

            {/* Social Login Buttons */}
            <div className="flex gap-4 mb-4">
              <AuthButton 
                variant="social" 
                className="flex-1 flex items-center justify-center gap-2 h-12"
                onClick={() => handleSocialLogin('Google')}
              >
                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                Google
              </AuthButton>
              <AuthButton 
                variant="social" 
                className="flex-1 flex items-center justify-center gap-2 h-12"
                onClick={() => handleSocialLogin('Microsoft')}
              >
                <img src="/microsoft.svg" alt="Microsoft" className="w-5 h-5" />
                Microsoft
              </AuthButton>
            </div>

            <div className="text-center text-ashridge-text-secondary text-sm mb-4">
              or use your email for registration
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <AuthInput
                type="text"
                label="Name"
                value={formData.name}
                onChange={(value) => handleInputChange('name', value)}
                icon="user"
                inputClassName="h-14 text-lg px-4"
              />

              <AuthInput
                type="email"
                label="Email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                icon="envelope"
                inputClassName="h-14 text-lg px-4"
              />

              <AuthInput
                type="password"
                label="Password"
                value={formData.password}
                onChange={(value) => handleInputChange('password', value)}
                icon="lock"
                inputClassName="h-14 text-lg px-4"
              />

              <div className="pt-4">
                <AuthButton type="submit" variant="primary">
                  Sign up
                </AuthButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
