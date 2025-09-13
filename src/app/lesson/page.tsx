import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  GraduationCap,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Download,
  Play,
  SkipBack,
  SkipForward,
  Clock,
 Facebook, Twitter, Instagram, Linkedin,
} from "lucide-react"

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white px-6 py-4" style={{ backgroundColor: "#154D71" }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
            <span className="font-semibold text-lg">Achridge College</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="hover:text-blue-200 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              My Exams
            </a>
            <a href="/courses" className="hover:text-blue-200 transition-colors">
              Courses
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Certificates
            </a>
          </nav>

          <Avatar className="w-10 h-10">
            <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" />
          </Avatar>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Course Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Time Management Strategies</h1>
            <p className="text-gray-600">Beginner • 45 minutes • Earn Certification</p>
          </div>

          {/* Progress Circle */}
          <div className="relative w-20 h-20">
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
                strokeDasharray="20, 80"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-900">1/5</span>
            </div>
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
              Learn why time management matters and explore the most common challenges faced by students and
              professionals.
            </p>

            {/* Video Player */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
              <img
                src="/business-meeting-time-management.jpg"
                alt="Time Management Lesson"
                className="w-full h-full object-cover"
              />

              {/* Video Controls Overlay */}
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
                  <ThumbsUp className="w-4 h-4" />
                  Liked
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-700">
                  <ThumbsDown className="w-4 h-4" />
                  Dislike
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-700">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
              </div>

              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notes Section */}
        <Card>
          <CardContent className="p-6">
            <Textarea placeholder="Add a Note..." className="min-h-[100px] border-gray-300 resize-none" />
          </CardContent>
        </Card>
      </main>

      
                
                 {/* Footer */}
<footer style={{ backgroundColor: "#154D71" }} className="text-white flex justify-center">
  <div
    className="flex justify-between"
    style={{
      width: "1440px",
      height: "380px",
      opacity: 1,
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "21.58px",
      lineHeight: "150%",
      letterSpacing: "-1.1%",
      padding: "50px 40px", 
      boxSizing: "border-box",
      alignItems: "flex-start", 
    }}
  >
    {/* About Us */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <img
          src="/9987eb512151b450fd789b926391e339764420c7.png"
          alt="Logo"
          className="w-10 h-10"
        />
        <span className="font-semibold text-white text-xl">Achridge College</span>
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
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-white text-lg">Follow us</h3>
      <div className="flex gap-4 mt-2">
        <Twitter className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
        <Linkedin className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
        <Facebook className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
        <Instagram className="w-6 h-6 text-white hover:text-gray-300 cursor-pointer" />
      </div>
    </div>

    {/* Useful Links */}
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-white text-lg">Useful Links</h3>
      <ul className="space-y-2 text-white text-base mt-2">
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
