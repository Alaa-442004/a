"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Mic,
  GraduationCap,
  Clock,
  CheckCircle,
  BarChart3,
  Users,
  Target,
  MessageSquare,
  Briefcase,
  Code,
  UserCheck,
  TrendingUp,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ExamDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white px-4 sm:px-6 py-4" style={{ backgroundColor: "#154D71" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-semibold text-base sm:text-lg" style={{ fontFamily: 'Caveat, cursive' }}>Ashridge College</span>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link href="/Home" className="hover:text-blue-200 transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link href="/my-exam" className="hover:text-gray-300 transition-colors text-sm lg:text-base font-semibold">
              My Exams
            </Link>
            <Link href="/courses" className="hover:text-gray-300 transition-colors text-sm lg:text-base">
              Courses
            </Link>
            <Link href="/Certificates" className="hover:text-blue-200 transition-colors text-sm lg:text-base">
              Certificates
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/profile">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer">
                <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" />
              </Avatar>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/my-exam" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Exams
              </Link>
              <Link 
                href="/courses" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <a 
                href="#" 
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Certificates
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Exams</h1>

          <div className="relative w-full max-w-md lg:max-w-lg">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: "#151515" }}
            />
            <Mic
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-70"
              style={{ color: "#151515" }}
            />
            <Input
              placeholder="Search exams..."
              className="pl-10 pr-10 border-#D9D9D9 rounded-full"
              style={{ 
                height: "44px",
                backgroundColor: "#D9D9D9",
                color: "#151515",
              }}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8">
          <Button
            className="text-white rounded-full font-medium flex-shrink-0"
            style={{
              backgroundColor: "#154D71",
              minWidth: "120px",
              height: "42px",
              color: "white",
            }}
          >
            Overview
          </Button>
          <Button
            variant="ghost"
            className="rounded-full font-medium border flex-shrink-0"
            style={{
              backgroundColor: "white",
              minWidth: "120px",
              height: "42px",
              color: "#1C6EA4",
              borderColor: "#1C6EA4",
            }}
          >
            In Progress
          </Button>
          <Button
            variant="ghost"
            className="rounded-full font-medium border flex-shrink-0"
            style={{
              backgroundColor: "white",
              minWidth: "120px",
              height: "42px",
              color: "#1C6EA4",
              borderColor: "#1C6EA4",
            }}
          >
            Completed Exams
          </Button>
          <Button
            variant="ghost"
            className="rounded-full font-medium border flex-shrink-0"
            style={{
              backgroundColor: "white",
              minWidth: "120px",
              height: "42px",
              color: "#1C6EA4",
              borderColor: "#1C6EA4",
            }}
          >
            Upcoming Exams
          </Button>
        </div>

        {/* Exam Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Exam Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Total Exams:</span>
                <span className="text-2xl font-bold text-blue-600">12</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Completed:</span>
                <span className="text-2xl font-bold text-blue-600">6</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">In Progress:</span>
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Not Started:</span>
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-500 mb-1">Overall Completion</div>
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray="72, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">72%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Exams */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/ecc1535ba158700e2dc112c58ead9531f6b487db.png" alt="Exam Image" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Final Exam - Time Management</h3>
                <p className="text-sm text-gray-600 mb-2">Time Management Basics</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>60 mins</span>
                </div>
                <div className="text-sm font-medium text-red-600 mb-3">Not Started</div>
                <Link href="/pre-exam">
                  <Button className="w-full" style={{ backgroundColor: "#154D71" }}>Start Exam</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/9a89255dd892bbb2a2d5521ee3c4f1694b4d1466.png" alt="Digital Marketing" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Midterm - Digital Marketing</h3>
                <p className="text-sm text-gray-600 mb-2">Marketing Essentials</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>90 mins</span>
                </div>
                <div className="text-sm font-medium text-red-600 mb-3">Not Started</div>
                <Link href="/pre-exam">
                  <Button className="w-full" style={{ backgroundColor: "#154D71" }}>Start Exam</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/8320a60207fe1fb5cb3f0d50980155d14644f840.png" alt="Financial Accounting" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Quiz - Financial Accounting</h3>
                <p className="text-sm text-gray-600 mb-2">Accounting Fundamentals</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>30 mins</span>
                </div>
                <div className="text-sm font-medium text-red-600 mb-3">Not Started</div>
                <Link href="/pre-exam">
                  <Button className="w-full" style={{ backgroundColor: "#154D71" }}>Start Exam</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/50943e8f7b279d590bdcbe027c96d49d4c3be1ad.png" alt="PMP Preparation" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Mock Exam - PMP Preparation</h3>
                <p className="text-sm text-gray-600 mb-2">Advanced PMP Prep</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>120 mins</span>
                </div>
                <div className="text-sm font-medium text-red-600 mb-3">Not Started</div>
                <Link href="/pre-exam">
                  <Button className="w-full" style={{ backgroundColor: "#154D71" }}>Start Exam</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="outline" style={{ borderColor: "#154D71", color: "#154D71" }}>Explore more</Button>
          </div>
        </div>

        {/* In Progress Exams */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">In Progress Exams</h2>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ borderRadius: "12px" }}>
            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/c21926c5525c240e0c75dbcd638ffda9895e93ae.png" alt="Project Management" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Midterm - Project Management</h3>
                <p className="text-sm text-gray-600 mb-2">Project Management 101</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>90 mins</span>
                </div>
                <div className="text-sm font-medium mb-3" style={{ color: "#34C759" }}>In Progress</div>
                <Button className="w-full" style={{ backgroundColor: "#154D71" }}>Resume Exam</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/c21926c5525c240e0c75dbcd638ffda9895e93ae.png" alt="Communication Skills" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Quiz - Communication Skills</h3>
                <p className="text-sm text-gray-600 mb-2">Soft Skills for Leaders</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock className="h-3 w-3" />
                  <span>20 min</span>
                </div>
                <div className="text-sm font-medium mb-3" style={{ color: "#34C759" }}>In Progress</div>
                <Button className="w-full" style={{ backgroundColor: "#154D71" }}>Resume Exam</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Completed Exams */}
        <div className="mb-8" style={{ borderRadius: "12px" }}>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Completed Exams</h2>
            <span className="text-2xl font-bold text-gray-900">6</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/ca5bda7e5c9c1e47bee013aa17b69ff984cbe8fd.png" alt="Agile Methodologies" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Quiz - Agile Methodologies</h3>
                <p className="text-sm text-gray-600 mb-2">Advanced PMP Prep</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>85%</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <CheckCircle className="h-4 w-4" style={{ color: "#34C759" }} />
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>Completed</span>
                </div>
                <Button className="w-full" style={{ backgroundColor: "#9CA3AF", color: "white" }}>
                  View Results
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/8c6ddb620027eac0b86a0a251acfa3200b435a63.png" alt="HR Management" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Midterm - HR Management</h3>
                <p className="text-sm text-gray-600 mb-2">HR Essentials</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>92%</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <CheckCircle className="h-4 w-4" style={{ color: "#34C759" }} />
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>Completed</span>
                </div>
                <Button className="w-full" style={{ backgroundColor: "#9CA3AF", color: "white" }}>
                  View Results
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/ce6480c7910cfff1d83c58a425dd64b206e18191.png" alt="Software Engineering" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Final - Software Engineering</h3>
                <p className="text-sm text-gray-600 mb-2">Computer Science Basics</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>89%</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <CheckCircle className="h-4 w-4" style={{ color: "#34C759" }} />
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>Completed</span>
                </div>
                <Button className="w-full" style={{ backgroundColor: "#9CA3AF", color: "white" }}>
                  View Results
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 p-0 flex items-center justify-center overflow-hidden">
                <img src="/65530976bc4c1e9ce06539695efc036e58e1062b.png" alt="Leadership Skills" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold mb-1">Quiz - Leadership Skills</h3>
                <p className="text-sm text-gray-600 mb-2">Management & Leadership</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>95%</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <CheckCircle className="h-4 w-4" style={{ color: "#34C759" }} />
                  <span className="text-sm font-medium" style={{ color: "#34C759" }}>Completed</span>
                </div>
                <Button className="w-full" style={{ backgroundColor: "#9CA3AF", color: "white" }}>
                  View Results
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end mt-4">
            <Button variant="outline" style={{ borderColor: "#154D71", color: "#154D71" }}>View more</Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#154D71" }} className="text-white mt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-10 h-10" />
            <span className="font-semibold text-white text-xl" style={{ fontFamily: 'Caveat, cursive' }}>Ashridge College</span>
          </div>

          {/* Footer Links Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* About Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">About Us</h3>
              <ul className="space-y-2 text-white text-base">
                <li>Who we are</li>
                <li>Our story</li>
                <li>Privacy policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">Follow us</h3>
              <div className="flex gap-4">
                <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
                <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">Useful Links</h3>
              <ul className="space-y-2 text-white text-base">
                <li>Courses</li>
                <li>FAQs</li>
                <li>Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
