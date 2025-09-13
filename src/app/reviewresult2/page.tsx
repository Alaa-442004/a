import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function ReviewResultPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <header className="bg-[#154D71] text-white px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="text-lg sm:text-xl font-semibold">Achridge College</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/Home" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/my-exam" className="hover:text-gray-300 transition-colors">
              My Exams
            </Link>
            <Link href="/Courses" className="hover:text-gray-300 transition-colors">
              Courses
            </Link>
            <Link href="Certificates" className="hover:text-gray-300 transition-colors">
              Certificates
            </Link>
            <Button variant="outline" className="bg-[#FFFBCA] text-[#154D71] hover:bg-gray-100 border-[#FFFBCA]">
              Contact us
            </Button>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Panel - Submission Details */}
          <div className="xl:col-span-2">
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Submission Received</h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Your answers were submitted successfully. Here are your instant results.
                  </p>
                </div>

                <div className="space-y-10 md:space-y-12">
                  {/* Student Info */}
                  <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Student Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Name</p>
                        <p className="text-lg font-semibold text-gray-900">John Leo</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Student ID</p>
                        <p className="text-lg font-semibold text-gray-900">2025401</p>
                      </div>
                    </div>
                  </div>

                  {/* Total Score */}
                  <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Total Score</h3>
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#154D71] mb-4">72%</p>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">4/5 Grade: B</p>
                  </div>

                  {/* Progress */}
                  <div className="bg-green-50 rounded-xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Progress Overview</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-700">Completion Rate</span>
                        <span className="text-lg font-bold text-[#154D71]">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 md:h-6">
                        <div
                          className="bg-[#154D71] h-4 md:h-6 rounded-full transition-all duration-500 ease-in-out shadow-sm"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button className="bg-[#154D71] hover:bg-[#0f3a56] text-white text-lg py-6 px-8 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl flex-1">
                      Review Answers
                    </Button>
                    <Link href="/certificate-exam2">
                      <Button variant="outline" className="border-2 border-[#154D71] text-[#154D71] hover:bg-[#154D71] hover:text-white text-lg py-6 px-8 rounded-xl transition-all duration-200 flex-1 w-full">
                        Download Certificate
                      </Button>
                    </Link>
                  </div>

                  {/* Remark */}
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-lg p-6 md:p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">!</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-lg md:text-xl font-bold text-gray-900">Remark</p>
                        <p className="text-base md:text-lg text-gray-700 mt-1">Very good performance! Keep up the excellent work.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Performance Charts */}
          <div className="space-y-8">
            {/* Circular Progress Chart */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Performance Overview</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40 md:w-48 md:h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#154D71"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={`${72 * 3.14159} ${(100 - 72) * 3.14159}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-in-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm md:text-base text-gray-500 font-medium">COMPLETED</span>
                      <span className="text-3xl md:text-4xl font-bold text-[#154D71]">72%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Performance Chart */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Skills Breakdown</h3>
                <div className="space-y-6">
                  <div className="flex items-end justify-between h-40 md:h-48 px-4">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-12 md:w-16 bg-teal-500 rounded-t shadow-sm transition-all duration-500 hover:shadow-md" style={{ height: "80px" }}></div>
                      <span className="text-xs md:text-sm text-gray-600 mt-3 text-center font-medium">Project Management</span>
                      <span className="text-sm md:text-base font-bold text-teal-600 mt-1">80%</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-12 md:w-16 bg-yellow-400 rounded-t shadow-sm transition-all duration-500 hover:shadow-md" style={{ height: "60px" }}></div>
                      <span className="text-xs md:text-sm text-gray-600 mt-3 text-center font-medium">Agile Methods</span>
                      <span className="text-sm md:text-base font-bold text-yellow-600 mt-1">60%</span>
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-12 md:w-16 bg-purple-500 rounded-t shadow-sm transition-all duration-500 hover:shadow-md" style={{ height: "100px" }}></div>
                      <span className="text-xs md:text-sm text-gray-600 mt-3 text-center font-medium">Leadership Skills</span>
                      <span className="text-sm md:text-base font-bold text-purple-600 mt-1">90%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#154D71] text-white mt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-10 h-10" />
            <span className="font-semibold text-white text-xl">Achridge College</span>
          </div>

          {/* Footer Links Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* About Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">About Us</h3>
              <ul className="space-y-2 text-white text-base">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Who we are</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Our story</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Privacy policy</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Terms and Conditions</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">Follow us</h3>
              <div className="flex gap-4">
                <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white text-lg">Useful Links</h3>
              <ul className="space-y-2 text-white text-base">
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Courses</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">FAQs</li>
                <li className="hover:text-gray-300 cursor-pointer transition-colors">Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
