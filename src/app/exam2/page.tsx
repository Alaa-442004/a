"use client"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useExam } from "@/contexts/ExamContext"

export default function TimeManagementStrategies() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const { answers, updateExam1Answer } = useExam();

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
    <div className="min-h-screen bg-gray-100">
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
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Time Management Strategies</h1>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 border-2 border-teal-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-700">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <form className="space-y-8">
            {/* Question 1 */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800">
                Which of the following is the first step in effective time management?
              </h3>
              <RadioGroup value={answers.exam1.question1} onValueChange={(value) => updateExam1Answer('question1', value)} className="space-y-2">
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="multitasking" id="multitasking" />
                  <Label htmlFor="multitasking" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Multitasking
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="avoiding-breaks" id="avoiding-breaks" />
                  <Label htmlFor="avoiding-breaks" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Avoiding breaks
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="setting-goals" id="setting-goals" />
                  <Label htmlFor="setting-goals" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Setting goals
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="delegating-tasks" id="delegating-tasks" />
                  <Label htmlFor="delegating-tasks" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Delegating tasks
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800">The Eisenhower Matrix categorizes tasks based on</h3>
              <RadioGroup value={answers.exam1.question2} onValueChange={(value) => updateExam1Answer('question2', value)} className="space-y-2">
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="urgency-importance" id="urgency-importance" />
                  <Label htmlFor="urgency-importance" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Urgency and importance
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="cost-benefit" id="cost-benefit" />
                  <Label htmlFor="cost-benefit" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Cost and benefit
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="difficulty-duration" id="difficulty-duration" />
                  <Label htmlFor="difficulty-duration" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Difficulty and duration
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="priority-deadline" id="priority-deadline" />
                  <Label htmlFor="priority-deadline" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Priority and deadline
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 3 */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800">Time blocking is best described as</h3>
              <RadioGroup value={answers.exam1.question3} onValueChange={(value) => updateExam1Answer('question3', value)} className="space-y-2">
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="working-without-breaks" id="working-without-breaks" />
                  <Label htmlFor="working-without-breaks" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Working without breaks until the task is done
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="grouping-similar-tasks" id="grouping-similar-tasks" />
                  <Label htmlFor="grouping-similar-tasks" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Grouping similar tasks together
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="scheduling-specific-time" id="scheduling-specific-time" />
                  <Label htmlFor="scheduling-specific-time" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Scheduling specific time slots for specific tasks
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="avoiding-tasks" id="avoiding-tasks" />
                  <Label htmlFor="avoiding-tasks" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Avoiding tasks that take too long
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 4 */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800">The Pomodoro Technique suggests working for:</h3>
              <RadioGroup value={answers.exam1.question4} onValueChange={(value) => updateExam1Answer('question4', value)} className="space-y-2">
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="10-minutes" id="10-minutes" />
                  <Label htmlFor="10-minutes" className="text-sm text-gray-700 cursor-pointer flex-1">
                    10 minutes and resting for 2 minutes
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="25-minutes" id="25-minutes" />
                  <Label htmlFor="25-minutes" className="text-sm text-gray-700 cursor-pointer flex-1">
                    25 minutes and resting for 5 minutes
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="45-minutes" id="45-minutes" />
                  <Label htmlFor="45-minutes" className="text-sm text-gray-700 cursor-pointer flex-1">
                    45 minutes and resting for 15 minutes
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="60-minutes" id="60-minutes" />
                  <Label htmlFor="60-minutes" className="text-sm text-gray-700 cursor-pointer flex-1">
                    60 minutes and resting for 10 minutes
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 5 */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-800">
                Which of the following is a common barrier to effective time management?
              </h3>
              <RadioGroup value={answers.exam1.question5} onValueChange={(value) => updateExam1Answer('question5', value)} className="space-y-2">
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="prioritizing-tasks" id="prioritizing-tasks" />
                  <Label htmlFor="prioritizing-tasks" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Prioritizing tasks
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="procrastination" id="procrastination" />
                  <Label htmlFor="procrastination" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Procrastination
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="using-planners" id="using-planners" />
                  <Label htmlFor="using-planners" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Using planners
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-gray-100 rounded">
                  <RadioGroupItem value="delegation" id="delegation" />
                  <Label htmlFor="delegation" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Delegation
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end pt-6">
              <Link href="/exam1">
                <Button type="button" style={{ backgroundColor: "#154D71" }} className="hover:opacity-90 text-white px-12 py-2 rounded">
                  Next
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
