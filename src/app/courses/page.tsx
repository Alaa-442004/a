import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Star, Clock, ChevronLeft, ChevronRight, Search, Mic, GraduationCap, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function AshridgeCollege() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white px-6 py-4" style={{ backgroundColor: "#154D71" }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
            <span className="font-semibold text-lg">Acbridge College</span>
          </div>


          <nav className="hidden md:flex items-center gap-8">
             <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <a href="#" className="hover:text-blue-200 transition-colors">
              My Exams
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
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
        {/* Recommended Credentials Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Recommended credentials</h1>
              <div className="relative" style={{ width: "610px", maxWidth: "100%" }}>
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: "#151515" }}
              />
              <Mic
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-70"
                style={{ color: "#151515" }}
              />
              <Input
                placeholder="Search courses..."
                className="pl-10 pr-10 border-#D9D9D9 rounded-full"
                style={{ 
                  height: "44px",
                  backgroundColor: "#D9D9D9",
                  color: "#151515",
                }}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button
              className="text-white rounded-full font-medium"
              style={{
                backgroundColor: "#154D71",
                width: "150px",
                height: "42px",
                color: "white",
              }}
            >
              Beginner
            </Button>
            <Button
              variant="ghost"
              className="rounded-full font-medium border"
              style={{
                backgroundColor: "white",
                width: "150px",
                height: "42px",
                color: "#1C6EA4",
                borderColor: "#1C6EA4",
              }}
            >
              Intermediate
            </Button>
          </div>
        </div>
{/* Time Management Strategies */}
        <section className="mb-12">
          <div className="flex gap-8 mb-6">
            {/* Left side - Course description and buttons */}
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
              <div className="flex gap-2">
                <Link href="/lesson">
                  <Button className="text-white" style={{ backgroundColor: "#154D71" }}>
                    Enroll
                  </Button>
                </Link>
                <Button variant="outline" className="bg-transparent">
                  View Details
                </Button>
              </div>
            </div>

            {/* Right side - Horizontal lesson cards */}
            <div className="flex-1">
              <div className="flex gap-4 overflow-x-auto pb-4">
                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/1b1d64feac27bba3135fe698d4159b905e93dd52.png"
                      alt="Introduction to Time Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Introduction to Time Management</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>5 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/3ce8736f9a955cc99e6c738a725e22541ef37a50.jpg"
                      alt="Prioritization Techniques"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Prioritization Techniques</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>7 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/51fb834678cd28afd22ded32193631c189890d53.png"
                      alt="Pomodoro Technique"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Pomodoro Technique</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>6 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/b2f405819fca34a54a03044b1b382251aaa8d1f6.png"
                      alt="Avoiding Distractions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Avoiding Distractions</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>8 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/b537f28cdfde47cd3c53abe24fbf80af1337a472.png"
                      alt="Daily Planning Methods"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Daily Planning Methods</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>9 min</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <ChevronLeft className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
                <ChevronRight className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Advanced PMP Exam Preparation */}
        <section className="mb-12">
          <div className="flex gap-8 mb-6">
            {/* Left side - Course description and buttons */}
            <div className="flex-1 max-w-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced PMP Exam Preparation</h2>
              <p className="text-gray-700 mb-4 font-semibold">
                <span className="font-bold">Skills you will gain:</span> Sharpen your PMP® knowledge with<br/> advanced
                strategies, practice questions, and exam<br/> techniques. Short, focused lessons to boost confidence and<br/> help
                you pass on the first try.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.1 Review (9,274 Reviews)</span>
                </div>
                <div>
                  <span>Beginner • 50 minutes • Earn Certificate</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="text-white" style={{ backgroundColor: "#154D71" }}>
                  Enroll
                </Button>
                <Button variant="outline" className="bg-transparent">
                  View Details
                </Button>
              </div>
            </div>

            {/* Right side - Horizontal lesson cards */}
            <div className="flex-1">
              <div className="flex gap-4 overflow-x-auto pb-4">
                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/c475d005e945eb5ebac49ea975f9fc5e5ac688dc.png"
                      alt="Exam Overview & Key Domains"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Exam Overview & Key Domains</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>8 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/e1da81746d3266b659ac06cb706f5cc76ba15fb5.png"
                      alt="Advanced Project Management Concepts"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Advanced Project Management Concepts</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>10 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/f5c55bd4524d927b076dff8f7d3f3636f3db9d50.png"
                      alt="Critical Path & Advanced Scheduling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Critical Path & Advanced Scheduling</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>7 min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0" style={{ width: "162.31px", height: "233.99px" }}>
                  <div className="aspect-video bg-gray-200">
                    <img
                      src="/dcd142ecc03c749f2a004c9bfe18cbcddcaf1a4d.png"
                      alt="Risk & Quality Management Deep Dive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">Risk & Quality Management Deep Dive</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>9 min</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <ChevronLeft className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
                <ChevronRight className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>
        </section>

        <div className="text-right mb-12">
          <Button
            variant="outline"
            style={{ color: "#1C6EA4", borderColor: "#1C6EA4" }}
            className="hover:bg-blue-50 bg-transparent"
          >
            Show more
          </Button>
        </div>

        {/* Full Courses Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Ready to go <span style={{ color: "#154D71" }}>deeper</span>? Try our{" "}
              <span style={{ color: "#154D71" }}>Full Courses</span>!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src="/402a1103f54169e37357eee48e1440c67f6237b7.png"
                  alt="Risk Management Essentials"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management Essentials</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>10 hours</span>
                </div>
                <Button className="w-full text-white" style={{ backgroundColor: "#154D71" }}>
                  Start Lesson
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src="/e1da81746d3266b659ac06cb706f5cc76ba15fb5.png"
                  alt="Leadership for Project Managers"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership for Project Managers</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>4 hours</span>
                </div>
                <Button className="w-full text-white" style={{ backgroundColor: "#154D71" }}>
                  Start Lesson
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <img
                  src="/dcd142ecc03c749f2a004c9bfe18cbcddcaf1a4d.png"
                  alt="PMP Mock Tests"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">PMP Mock Tests</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                  <Clock className="w-3 h-3" />
                  <span>4 hours</span>
                </div>
               <Link href="/pre-courses">
              <Button className="w-full text-white" style={{ backgroundColor: "#154D71" }}>
              Start Lesson
               </Button>
                </Link> 
              </CardContent>
            </Card>
          </div>

          <div className="text-right">
            <Button
              variant="outline"
              style={{ color: "#1C6EA4", borderColor: "#1C6EA4" }}
              className="hover:bg-blue-50 bg-transparent"
            >
              Show more
            </Button>
          </div>
        </section>
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
