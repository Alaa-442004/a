"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useExam } from "@/contexts/ExamContext"

export default function TimeManagementStrategies() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const { answers, updateExam2Answer } = useExam();

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="text-white px-4 sm:px-6 py-4" style={{ backgroundColor: "#154D71" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-semibold text-base sm:text-lg">Achridge College</span>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link href="/" className="hover:text-blue-200 transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link href="/my-exam" className="hover:text-gray-300 transition-colors text-sm lg:text-base">
              My Exams
            </Link>
            <Link href="/courses" className="hover:text-gray-300 transition-colors text-sm lg:text-base">
              Courses
            </Link>
            <a href="#" className="hover:text-blue-200 transition-colors text-sm lg:text-base">
              Certificates
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/profile">
              <div className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer bg-gray-300 rounded-full overflow-hidden">
                <img src="/9b47a023caf29f113237d61170f34ad9.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Page Title and Timer */}
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Time Management Strategies</h1>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 border-2 border-teal-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Quiz Form */}
          <form className="space-y-12">
            {/* Question 1 */}
            <div className="space-y-4">
              <label className="block text-base font-medium text-gray-800 mb-3">
                Explain the importance of prioritization in time management?
              </label>
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 focus-within:border-blue-500 focus-within:bg-white transition-all">
                <Textarea
                  value={answers.exam2.question1}
                  onChange={(e) => updateExam2Answer('question1', e.target.value)}
                  className="min-h-[120px] w-full resize-none border-none bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400"
                  placeholder="Write your answer here..."
                />
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <label className="block text-base font-medium text-gray-800 mb-3">
                What is the role of goal setting in effective time management?
              </label>
              <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 focus-within:border-blue-500 focus-within:bg-white transition-all">
                <Textarea
                  value={answers.exam2.question2}
                  onChange={(e) => updateExam2Answer('question2', e.target.value)}
                  className="min-h-[120px] w-full resize-none border-none bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400"
                  placeholder="Write your answer here..."
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-8">
              <Link href="/exam1">
                <Button type="button" style={{ backgroundColor: "#154D71" }} className="hover:opacity-90 text-white px-8 py-2">
                  Previous
                </Button>
              </Link>
              <Link href="/reviewresult2">
                <Button type="button" style={{ backgroundColor: "#154D71" }} className="hover:opacity-90 text-white px-8 py-2">
                  Submit
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
