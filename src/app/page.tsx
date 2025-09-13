"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Clock, Video, Star, Facebook, Twitter, Instagram, Linkedin, Mic } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header style={{ backgroundColor: "#154D71" }} className="text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
            <span className="font-semibold text-lg" style={{ fontFamily: 'Caveat, cursive' }}>Ashridge College</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/Home" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <Link href="/my-exam" className="hover:text-gray-300 transition-colors">
              My Exams
            </Link>
            <Link href="/courses" className="hover:text-gray-300 transition-colors">
              Courses
            </Link>
            <Link href="/Certificates" className="hover:text-gray-300 transition-colors">
              Certificates
            </Link>
          </nav>

          <Link href="/signup">
            <Button
              variant="outline"
              style={{ backgroundColor: "#FFFBCA", color: "#154D71" }}
              className="hover:bg-gray-100 bg-transparent"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-inter font-extrabold text-[72px] leading-[1.2] text-center -mt-15" >
              The <span style={{ color: "#1C6EA4" }}>Smarter</span>  Way to
              Get <span style={{ color: "#1C6EA4" }}>Certified</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed mt-6">
              We provide accredited courses and service online examinations designed to help you in your learning
              journey. Whether you're looking to learn new skills, from registration to certification, everything is
              digital, seamless, and tailored to your learning journey. Unlock your potential and take the next step in
              your professional future.
            </p>

            <div className="relative" style={{ width: "610px", maxWidth: "100%" }}>
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: "#1D1D1D" }}
              />
              <Mic
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-70"
                style={{ color: "#1D1D1D" }}
              />
              <Input
                placeholder="Search courses..."
                className="pl-10 pr-10 border-#D9D9D9; rounded-full"
                style={{
                  height: "44px",
                  backgroundColor: "#D9D9D9",
                  color: "#151515",
                }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/ad24c28677461ff32ef6bd6fecfee937caefc7b3.jpg"
              alt="Student with books and educational symbols"
              className="w-full max-w-md"
              style={{ width: "1000px", height: "580px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Available Courses Section */}
    <section className="container mx-auto px-4 py-16">
  <div className="flex items-center gap-2 mb-12">
    <h2 className="text-3xl font-bold text-gray-900">Available Courses</h2>
    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
      <span className="text-white text-sm">→</span>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Course Card 1 */}
    <div className="bg-white h-full flex flex-col p-3">
      <div className="mb-2 relative" >
        <img src="/4a1ee7646fbdb5b21e47ed1cc80e6dc80f77da82.jpg" alt="Time Management" className="w-full aspect-[16/9] object-cover rounded-lg"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">Time Management Strategies</h3>
      <p className="text-sm text-black-600 mb-2">Beginner</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>3 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-4 h-4" />
          <span>12 video</span>
        </div>
      </div>
    </div>

    {/* Course Card 2 */}
    <div className="bg-white h-full flex flex-col p-3">
      <div className="mb-2 relative">
        <img src="/5e0714dcab7807fa3c7c7ed361eb642d2737d899.jpg" alt="PMP Exam Preparation"  className="w-full aspect-[16/9] object-cover rounded-lg"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">Advanced PMP Exam Preparation</h3>
      <p className="text-sm text-black-600 mb-2">Advanced</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">

        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>15 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-4 h-4" />
          <span>25 video</span>
        </div>
      </div>
    </div>

    {/* Course Card 3 */}
    <div className="bg-white h-full flex flex-col p-3">
      <div className="mb-2 relative">
        <img src="/db99ec7f180167f38cd9f0d2493a695309c7d8e4(1).jpg" alt="Agile Project Management" className="w-full aspect-[16/9] object-cover rounded-lg"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">Agile Project Management Basic</h3>
      <p className="text-sm text-black-600 mb-2">Beginner</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">

        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>8 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-4 h-4" />
          <span>17 video</span>
        </div>
      </div>
    </div>

    {/* Course Card 4 */}
    <div className="bg-white h-full flex flex-col p-3">
      <div className="mb-2 relative">
        <img src="/3ce8736f9a955cc99e6c738a725e22541ef37a50.jpg" alt="Quality Management"  className="w-full aspect-[16/9] object-cover rounded-lg"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">Quality Management in Projects</h3>
      <p className="text-sm text-black-600 mb-2">Intermediate</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>10 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-4 h-4" />
          <span>22 video</span>
        </div>
      </div>
    </div>

    {/* Course Card 5 */}
    <div className="bg-white h-full flex flex-col p-3">
      <div className="mb-2 relative">
        <img src="/19f2609de44e5afa92587d563abfcd5e9af712f1.jpg" alt="Leadership for Project Managers" className="w-full aspect-[16/9] object-cover rounded-lg"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">Leadership for Project Managers</h3>
      <p className="text-sm text-black-600 mb-2">Beginner</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">

        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>6 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-4 h-4" />
          <span>18 video</span>
        </div>
      </div>
    </div>

    {/* Course Card 6 */}
    <div className="bg-white h-full flex flex-col p-3">
      <div className="mb-2 relative">
        <img src="/d112bf3e58a6c643703fb26dee0dac402744e78d.jpg" alt="Risk Management"  className="w-full aspect-[16/9] object-cover rounded-lg"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-70 transition-all">
            <Video className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2">Risk Management for PMP Professionals</h3>
      <p className="text-sm text-black-600 mb-2">Intermediate</p>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>12 hours</span>
        </div>
        <div className="flex items-center gap-1">
          <Video className="w-4 h-4" />
          <span>28 video</span>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* Recommended Section */}
      <section className="w-full px-8 py-16">
  <div className="flex items-center gap-3 mb-12">
    <h2 className="text-3xl font-bold text-gray-900">Recommended for You</h2>
    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
      <span className="text-white text-sm">→</span>
    </div>
  </div>

  <div className="relative overflow-hidden">
    <style jsx global>{`
      @keyframes float-scroll {
        0% { transform: translateX(0) translateY(0); }
        25% { transform: translateX(-12.5%) translateY(-5px); }
        50% { transform: translateX(-25%) translateY(0); }
        75% { transform: translateX(-37.5%) translateY(5px); }
        100% { transform: translateX(-50%) translateY(0); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(28, 110, 164, 0.3); }
        50% { box-shadow: 0 0 40px rgba(28, 110, 164, 0.6); }
      }
      @keyframes bounce-in {
        0% { transform: scale(0.8) rotate(-5deg); opacity: 0; }
        50% { transform: scale(1.05) rotate(2deg); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
      .animate-float-scroll {
        animation: float-scroll 40s ease-in-out infinite;
      }
      .animate-float-scroll:hover {
        animation-play-state: paused;
      }
      .course-card {
        animation: bounce-in 0.6s ease-out;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .course-card:hover {
        transform: scale(1.1) rotate(3deg);
        animation: pulse-glow 2s ease-in-out infinite;
      }
      .course-card:nth-child(odd) {
        animation-delay: 0.1s;
      }
      .course-card:nth-child(even) {
        animation-delay: 0.2s;
      }
    `}</style>
    <div className="flex gap-6 animate-float-scroll">

            {/* Course 1 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">Leadership for Project Managers</h3>
                <p className="text-sm text-gray-200 mb-4">Become an exceptional team leader</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">PMP Mastery</h3>
                <p className="text-sm text-gray-200 mb-4">Suggested for intermediate learners</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">Agile Fundamentals</h3>
                <p className="text-sm text-gray-200 mb-4">Master agile methodologies</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 4 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">Digital Marketing</h3>
                <p className="text-sm text-gray-200 mb-4">Grow your online presence</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 5 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">Data Analytics</h3>
                <p className="text-sm text-gray-200 mb-4">Turn data into insights</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 6 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">Cloud Computing</h3>
                <p className="text-sm text-gray-200 mb-4">Master AWS and Azure</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 7 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">Cybersecurity</h3>
                <p className="text-sm text-gray-200 mb-4">Protect digital assets</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 8 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">UX/UI Design</h3>
                <p className="text-sm text-gray-200 mb-4">Create amazing user experiences</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>

            {/* Course 9 */}
            <div className="flex-shrink-0 course-card">
              <div
                className="w-64 h-64 rounded-full flex flex-col items-center justify-center text-white text-center p-8"
                style={{ backgroundColor: "#1C6EA4" }}
              >
                <h3 className="font-semibold text-lg mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-200 mb-4">Build intelligent systems</p>
                <Button
                  size="sm"
                  style={{ backgroundColor: "#FFFBCA", color: "#1C6EA4" }}
                  className="hover:opacity-90 transition-opacity font-medium"
                >
                  Enroll
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#154D71] text-white mt-16">
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