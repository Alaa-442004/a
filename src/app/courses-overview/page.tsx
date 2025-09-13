"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Download,
  Play,
  SkipBack,
  SkipForward,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react"

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white px-6 py-4" style={{ backgroundColor: "#154D71" }}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/9987eb512151b450fd789b926391e339764420c7.png"
              alt="Graduation Icon"
              className="w-10 h-10"
            />
            <span className="font-semibold text-xl">Achridge College</span>
          </div>

          <nav className="hidden md:flex gap-8 font-medium text-base">
            <Link href="#" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Courses</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link>
          </nav>

          {/* Avatar */}
          <div className="hidden md:flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" alt="User Avatar" />
            </Avatar>
          </div>

          <div className="md:hidden">
            <button className="text-white text-2xl focus:outline-none">☰</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Time Management Strategies</h1>
            <p className="text-gray-600">Beginner • 45 minutes • Earn Certification</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Progress Circle */}
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="100, 0"
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900">5/5</span>
              </div>
            </div>

            {/* Start Quiz Button */}
            <Link href="/quizdetails">
              <Button
                style={{ width: "192px", height: "58px", backgroundColor: "#1C6EA4", color: "white" }}
              >
                Start Quiz
              </Button>
            </Link>
          </div>
        </div>

        {/* Lesson Content */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Introduction to Time Management</h2>
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>5 min</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Learn why time management matters and explore the most common challenges faced by students and professionals.
            </p>

            {/* Video Player */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
              <img
                src="/402a1103f54169e37357eee48e1440c67f6237b7.png"
                alt="Time Management Lesson"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-6">
                  <SkipBack className="w-8 h-8 text-white cursor-pointer hover:text-gray-300" />
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </div>
                  <SkipForward className="w-8 h-8 text-white cursor-pointer hover:text-gray-300" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Button variant="ghost" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <ThumbsUp className="w-4 h-4" /> Liked
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-700">
                  <ThumbsDown className="w-4 h-4" /> Dislike
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-700">
                  <Bookmark className="w-4 h-4" /> Save
                </Button>
              </div>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notes Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Textarea placeholder="Add a Note..." className="min-h-[100px] border-gray-300 resize-none" />
          </CardContent>
        </Card>

        {/* Time Management Strategies */}
        <section className="mb-12 flex gap-8">
          {/* Left side - Course description */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Time Management Strategies</h2>
            <p className="text-gray-700 mb-4 font-semibold">
              <span className="font-bold">Skills you will gain:</span> Boost productivity with quick lessons on
              prioritization, focus, and daily planning. Learn practical techniques in just 5-10 minutes per session.
            </p>
            <div className="text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.1 Review (1,184 Reviews)</span>
              </div>
              <div>
                <span>Beginner • 50 minutes • Earn Certificate</span>
              </div>
            </div>
          </div>

          {/* Right side - Horizontal Lesson Cards */}
          <div className="flex-1">
            <style jsx>{`
              .lesson-card {
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;
              }
              .lesson-card:hover {
                transform: scale(1.05);
              }
              .lesson-card:hover .play-overlay {
                opacity: 1;
              }
              .play-overlay {
                opacity: 0;
                transition: opacity 0.3s ease;
              }
            `}</style>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {/* Horizontal Lesson Cards */}
              {[
                { title: "Introduction to Time Management", img: "/1b1d64feac27bba3135fe698d4159b905e93dd52.png", duration: "5 min" },
                { title: "Prioritization Techniques", img: "/3ce8736f9a955cc99e6c738a725e22541ef37a50.jpg", duration: "7 min" },
                { title: "Pomodoro Technique", img: "/51fb834678cd28afd22ded32193631c189890d53.png", duration: "6 min" },
                { title: "Avoiding Distractions", img: "/b2f405819fca34a54a03044b1b382251aaa8d1f6.png", duration: "8 min" },
                { title: "Daily Planning Methods", img: "/b537f28cdfde47cd3c53abe24fbf80af1337a472.png", duration: "9 min" },
              ].map((lesson, idx) => (
                <Card key={idx} className="flex-shrink-0 lesson-card" style={{ width: "162px", height: "234px" }}>
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img src={lesson.img} alt={lesson.title} className="w-full h-full object-cover" />
                    {/* Play Overlay */}
                    <div className="play-overlay absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">{lesson.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{lesson.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-2">
              <ChevronLeft className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
                            <ChevronRight className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        </section>
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

