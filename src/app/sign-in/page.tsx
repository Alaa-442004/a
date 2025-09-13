"use client"

import type React from "react"
import { useState } from "react"
import { User, Mail, Lock, GraduationCap } from "lucide-react"

interface InputProps {
  type: string
  placeholder: string
  icon: React.ReactNode
  value: string
  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({ type, placeholder, icon, value, onChange }) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0AEC0]">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-[#E2E8F0] rounded-lg text-[#2D3748] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#00478A] focus:border-transparent"
        required
      />
    </div>
  )
}

interface ButtonProps {
  type?: "button" | "submit"
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ type = "button", children, className = "", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#00478A] text-white border-none py-3 px-6 rounded-lg text-base font-semibold hover:bg-[#003366] transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign up data:", formData)
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Welcome Back Section */}
      <div className="w-full lg:w-1/2 bg-[#00478A] flex flex-col justify-center items-center p-8 lg:p-16 text-white">
        {/* Logo */}
        <div className="mb-8 lg:mb-12">
          <GraduationCap className="w-16 h-16 lg:w-24 lg:h-24 text-white" />
        </div>

        {/* Welcome Content */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Welcome Back!</h1>
          <p className="text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 max-w-sm">
            To keep connect with us please login with your personal information
          </p>
        </div>

        {/* Sign In Button */}
        <a
          href="/login"
          className="bg-white text-[#00478A] border-none py-3 px-8 rounded-lg text-base font-semibold w-full max-w-xs hover:bg-gray-50 transition-colors text-center block"
        >
          Sign in
        </a>
      </div>

      {/* Right Panel - Create Account Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8 lg:p-16">
        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-[#2D3748] text-center mb-4 lg:mb-6">Create Account</h2>

        {/* Social Login Icons */}
        <div className="flex gap-4 mb-4 lg:mb-6">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="w-12 h-12 border border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Sign up with Google"
          >
            <span className="text-lg font-semibold text-[#2D3748]">G</span>
          </button>
          <button
            onClick={() => handleSocialLogin("Microsoft")}
            className="w-12 h-12 border border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Sign up with Microsoft"
          >
            <span className="text-lg font-semibold text-[#2D3748]">M</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <Input
            type="text"
            placeholder="Name"
            icon={<User className="w-5 h-5" />}
            value={formData.name}
            onChange={(value) => handleInputChange("name", value)}
          />

          <Input
            type="email"
            placeholder="Email"
            icon={<Mail className="w-5 h-5" />}
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />

          <Input
            type="password"
            placeholder="Password"
            icon={<Lock className="w-5 h-5" />}
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
          />

          <div className="pt-6 lg:pt-8">
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
