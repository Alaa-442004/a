"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Lightbulb, Pencil } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Navigate to exam2 page
    router.push('/exam2')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="flex-1 bg-blue-100 flex items-center justify-center p-6">
        <div className="text-center text-gray-800 max-w-md">

          {/* Quiz Illustration */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <FileText className="w-24 h-32 text-gray-600" strokeWidth={1.5} />
              <div className="absolute -top-2 -right-6">
                <div className="relative">
                  <Lightbulb className="w-12 h-12 text-yellow-300" fill="currentColor" />
                  <div className="absolute -top-1 -left-1 w-3 h-1 bg-yellow-300 rounded-full opacity-60" />
                  <div className="absolute -top-2 left-2 w-2 h-1 bg-yellow-300 rounded-full opacity-40" />
                  <div className="absolute -top-1 left-4 w-1 h-1 bg-yellow-300 rounded-full opacity-60" />
                </div>
              </div>
              <Pencil className="absolute -bottom-2 -left-4 w-8 h-8 text-orange-400 rotate-45" />
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-4">Take a Quiz</h1>
        </div>
      </div>
      
      {/* Right Panel */}
      <div className="flex-1 bg-white flex flex-col p-8">
        <div className="flex justify-end mb-6">
          <div className="bg-[#154D71] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-5 h-5" />
            <span className="font-medium">Ashridge College</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center flex-1">
          <div className="w-full max-w-md">

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-6">Enter Name</h2>

                <Input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mb-4 rounded-xl border-2 border-gray-400 bg-gray-100 text-gray-800 font-medium" 
                />

                <div>
                  <label className="block text-xl font-bold text-gray-800 mb-2">Password</label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 border-gray-400 bg-gray-100 text-gray-800 font-medium"
                  />
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Forget password?
                </a>
              </div>

              <Button type="submit" className="w-full bg-[#154D71] hover:bg-[#0f3a5a] text-white" size="lg">
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
