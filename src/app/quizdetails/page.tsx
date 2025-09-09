"use client"

import { useState, useEffect } from "react"
import { Clock, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"

const questions = [
  {
    question: "Which document officially authorizes a project?",
    options: ["Work Breakdown Structure", "Project Charter", "Project Scope Statement", "Risk Register"],
  },
  {
    question: "Which of the following is a key output of the Define Scope process?",
    options: ["Scope Statement", "Project Charter", "Risk Register", "Quality Management Plan"],
  },
  {
    question: 'In project management, which constraint is known as the "triple constraint"?',
    options: ["Scope, Time, Cost", "Quality, Cost, Procurement", "Stakeholder, Time, Resources", "Risk, Budget, Schedule"],
  },
  {
    question: "During which process group is the majority of a project's budget spent?",
    options: ["Executing", "Initiating", "Closing", "Planning"],
  },
  {
    question: "Which tool is used to break down project deliverables into smaller components?",
    options: ["Work Breakdown Structure (WBS)", "Stakeholder Analysis", "Responsibility Assignment Matrix", "Risk Register"],
  },
]

export default function PMPTest() {
  const router = useRouter()
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 دقيقة بالثواني

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          alert("Time's up!")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const handleOptionClick = (qIndex: number, optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[qIndex] = optionIndex
    setAnswers(newAnswers)
  }

  const handleFinish = () => {
    router.push("/reviewresult") // ربط مباشر للصفحة الجديدة
  }

  return (
    <div className="relative min-h-screen flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* Timer */}
      <div className="fixed top-6 right-6 flex items-center gap-2 bg-gray-200 rounded-2xl px-6 py-3 shadow-lg z-50">
        <span className="text-2xl font-bold text-gray-900">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
        <Clock className="w-8 h-8 text-gray-900" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PMP Practice Test: <br/>
            Project Management Basics
          </h1>
        </div>

        {/* Questions */}
        <div className="space-y-12">
          {questions.map((q, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{q.question}</h2>
              <div className="space-y-4">
                {q.options.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOptionClick(i, idx)}
                    className={`flex items-center px-6 py-4 border rounded-lg cursor-pointer transition-colors
                      ${answers[i] === idx ? "bg-blue-100 border-blue-500" : "bg-white hover:bg-gray-50"}
                    `}
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Finish Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleFinish}
            className="px-12 py-4 md:px-24 md:py-6 text-white font-bold rounded-lg text-2xl md:text-4xl"
            style={{ backgroundColor: "#154D71" }}
          >
            Finish
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#154D71] text-white mt-16">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row justify-between gap-10">
          
          {/* About Us */}
          <div className="flex flex-col gap-4 mt-16">
            <div className="flex items-center gap-3">
              <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Logo" className="w-10 h-10" />
              <span className="font-semibold text-white text-xl">Acbridge College</span>
            </div>
            <h3 className="font-semibold text-white text-lg">About Us</h3>
            <ul className="space-y-2 text-white text-base">
              <li>Who we are</li>
              <li>Our story</li>
              <li>Privacy policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="font-semibold text-white text-lg">Follow us</h3>
            <div className="flex gap-4 mt-2">
              <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4 mt-2">
            <h3 className="font-semibold text-white text-lg">Useful Links</h3>
            <ul className="space-y-2 text-white text-base">
              <li>Courses</li>
              <li>FAQs</li>
              <li>Certificates</li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  )
}