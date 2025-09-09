"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  })

  const router = useRouter()

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    console.log("Form data:", formData)
    alert("Account created successfully!")
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-gray-400 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden flex">
        {/* Left - illustration */}
        <div className="flex-1 bg-white flex flex-col">
          {/* Logo - pinned top left */}
          <div className="p-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl font-medium bg-[#154D71] text-white w-fit">
              <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
              Ashridge College
            </div>
          </div>

          {/* Illustration centered */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/a4beaf9bbcb47ac3397ad0cbb05c680a3d292909(1).png"
              alt="Sign up illustration"
              className="w-80 h-72 object-contain"
            />
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 p-8">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">Create an account</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                    placeholder="Minimum 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                    placeholder="Re-enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={formData.role === "admin"}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                    />
                    Admin
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="role"
                      value="student"
                      checked={formData.role === "student"}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                    />
                    Student
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-medium"
                style={{ backgroundColor: "#154D71" }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
