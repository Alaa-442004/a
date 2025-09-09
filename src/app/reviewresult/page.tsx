"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function PMPQuizPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#154D71] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
            <span className="font-semibold text-lg">Acbridge College</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <a href="#" className="hover:text-blue-200 transition-colors">My Exams</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Courses</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Certificates</a>
          </nav>

          <Avatar className="w-10 h-10">
            <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" />
          </Avatar>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1440px] mx-auto pt-36 pb-20 px-4 bg-[#FFFEFC]">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#151515] leading-tight">
            PMP Practice Test
          </h1>
              <h1 className="text-3xl md:text-5xl font-bold text-[#151515] leading-tight">
            Project Management Basics
          </h1>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#F5F5F5] rounded-2xl max-w-7xl mx-auto p-12 md:p-20 shadow-md">
          <h3 className="text-3xl md:text-4xl font-bold text-[#154D71] mb-8">
            Quiz Details
          </h3>
          <div className="flex flex-col gap-2 text-lg md:text-xl text-[#151515] text-left">
            <p>Start Date: 3 September 2025</p>
            <p>Time: 12 pm</p>
            <p>End Date: 3 September 2025</p>
            <p>Time: 12:30 pm</p>
            <p className="font-semibold mt-2">Time Limit: 30 min</p>
          </div>
        </div>

        {/* Start Quiz Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-2xl shadow-md p-8 md:p-12 mt-12 gap-6 max-w-7xl mx-auto">
          <img src="/5b274863a7c30f04efc68f450426816ad6d19240.png" alt="check" className="w-20 h-20 md:w-24 md:h-24" />
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-[#151515]">Start your quiz now</p>
            <p className="text-xl md:text-2xl font-bold text-[#A7A7A7] mt-2">Due Sep 3, 12:31 pm · 1 Attempt</p>
          </div>
          <button className="bg-[#154D71] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-xl md:text-2xl font-bold">
            Re-Attempts
          </button>
        </div>

        {/* Grade & Time Card */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white rounded-2xl shadow-md mt-12 max-w-7xl mx-auto">
          {/* Receive Grade */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8 px-4">
            <img src="/5b274863a7c30f04efc68f450426816ad6d19240.png" alt="check" className="w-20 h-20 mb-2" />
            <p className="text-2xl md:text-3xl font-bold text-[#151515]">Receive grade</p>
            <p className="text-xl md:text-2xl font-bold text-gray-500">Pass</p>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8 px-4">
            <img src="/5b274863a7c30f04efc68f450426816ad6d19240.png" alt="check" className="w-20 h-20 mb-2" />
            <p className="text-2xl md:text-3xl font-bold text-[#151515]">Time</p>
            <p className="text-xl md:text-2xl font-bold text-gray-500">15 min</p>
          </div>

          {/* Your Grade */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8 px-4">
            <p className="text-2xl md:text-3xl font-bold text-[#151515]">Your grade</p>
            <p className="text-xl md:text-2xl font-bold text-gray-500">4/5</p>
          </div>

          {/* Review */}
          <div className="flex flex-col items-center justify-center py-6 md:py-8 px-4">
            <p className="text-2xl md:text-3xl font-bold text-[#154D71] cursor-pointer hover:underline mt-2 md:mt-4">Review</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#154D71] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-10 h-10" />
              <span className="font-semibold text-xl">Acbridge College</span>
            </div>
            <h3 className="font-semibold text-lg">About Us</h3>
            <ul className="space-y-2 text-base">
              <li>Who we are</li>
              <li>Our story</li>
              <li>Privacy policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Follow us</h3>
            <div className="flex gap-4 mt-2">
              <Twitter className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <Linkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Useful Links</h3>
            <ul className="space-y-2 text-base mt-2">
              <li>Courses</li>
              <li>FAQs</li>
              <li>Certificates</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
