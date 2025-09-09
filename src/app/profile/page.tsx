"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GraduationCap,
  Briefcase as Certificate,
  User,
  Shield,
  Bell,
  HelpCircle,
  FileText,
  AlertTriangle,
  UserPlus,
  LogOut,
  Target,
  CheckCircle,
} from "lucide-react"

function SidebarSection({ title, items }: { title: string; items: { icon: any; label: string; href?: string }[] }) {
  return (
    <div className="bg-black/5 rounded-md p-4 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      {items.map(({ icon: Icon, label, href }, i) =>
        href ? (
          <Link key={i} href={href} className="flex items-center gap-2 hover:text-[#154D71] transition">
            <Icon className="w-4 h-4" /> {label}
          </Link>
        ) : (
          <button key={i} className="flex items-center gap-2 hover:text-[#154D71] transition">
            <Icon className="w-4 h-4" /> {label}
          </button>
        )
      )}
    </div>
  )
}

function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "My Exams", href: "/exams" },
    { label: "Courses", href: "/courses" },
    { label: "Certificates", href: "/certificates" },
  ]

  return (
    <header className="text-white px-6 py-4" style={{ backgroundColor: "#154D71" }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/9987eb512151b450fd789b926391e339764420c7.png" alt="Graduation Icon" className="w-8 h-8" />
          <span className="font-semibold text-lg">Achridge College</span>
        </div>

        
        <nav className="hidden md:flex flex-1 justify-center gap-12 text-lg font-semibold">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className="hover:underline hover:text-blue-200">
              {link.label}
            </Link>
          ))}
        </nav>

        <Avatar className="w-12 h-12">
          <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" alt="User" />
        </Avatar>
      </div>
    </header>
  )
}
export default function ProfilePage() {
  const activityData = [
    { name: "Progress", value: 834, percentage: 11.53, color: "#3B82F6" },
    { name: "Saved", value: 2890, percentage: 39.98, color: "#F59E0B" },
    { name: "Complete", value: 3478, percentage: 48.11, color: "#10B981" },
    { name: "Cancelled", value: 826, percentage: 11.42, color: "#9CA3AF" },
  ]
  const total = activityData.reduce((sum, item) => sum + item.value, 0)
  const radius = 120
  const strokeWidth = 25
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  let cumulativePercentage = 0

  return (
    <div className="min-h-screen bg-[#FFFEFC] flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="hidden lg:block w-[300px] bg-white p-6 space-y-6">
          <h2 className="text-2xl font-bold">Settings</h2>
  <div>
    <h3 className="font-semibold mb-2">Account</h3>
    <div className="bg-black/5 rounded-md p-4 space-y-2">
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <User className="w-4 h-4" /> Edit profile
      </button>
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <Shield className="w-4 h-4" /> Security
      </button>
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <Bell className="w-4 h-4" /> Notifications
      </button>
    </div>
  </div>
  <div>
    <h3 className="font-semibold mb-2">Support & About</h3>
    <div className="bg-black/5 rounded-md p-4 space-y-2">
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <HelpCircle className="w-4 h-4" /> Help & Support
      </button>
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <FileText className="w-4 h-4" /> Terms and Policies
      </button>
    </div>
  </div>
  <div>
    <h3 className="font-semibold mb-2">Actions</h3>
    <div className="bg-black/5 rounded-md p-4 space-y-2">
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <AlertTriangle className="w-4 h-4" /> Report a problem
      </button>
      <button className="flex items-center gap-2 hover:text-[#154D71] transition">
        <UserPlus className="w-4 h-4" /> Add account
      </button>
      <Link href="/signup" className="flex items-center gap-2 hover:text-[#154D71] transition">
        <LogOut className="w-4 h-4" /> Log out
      </Link>
    </div>
  </div>
</aside>

        <main className="flex-1 p-6 space-y-10">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-[150px] h-[150px]">
              <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" alt="John" />
            </Avatar>
            <div className="text-center">
              <span className="text-gray-500 text-sm">Name</span>
              <h1 className="font-bold text-2xl">John Leo</h1>
            </div>
            <div className="text-center">
              <span className="text-gray-500 text-sm">Email</span>
              <p className="font-bold text-lg">john44@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center -mt-30">
            <div className="relative">
              <svg width="450" height="450" className="transform -rotate-90">
                {activityData.map((item, index) => {
                  const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`
                  const strokeDashoffset = (-cumulativePercentage * circumference) / 100
                  cumulativePercentage += item.percentage

                  return (
                    <circle
                      key={index}
                      cx="225"
                      cy="225"
                      r={normalizedRadius}
                      fill="transparent"
                      stroke={item.color}
                      strokeWidth={strokeWidth}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000 ease-in-out"
                    />
                  )
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-800">Activity</span>
              </div>
            </div>
          </div>

                
   <div className="flex justify-center -mt-30">
  <div className="space-y-2">
  {activityData.map((item, i) => (
    <div
      key={i}
      className="flex flex-row items-center gap-[18px] w-[353px] h-[46px] border-b border-[#E5E5E5] pb-[9px]"
    >
      <div
        className="w-[13.6px] h-[13.6px] rounded-full"
        style={{ backgroundColor: item.color }}
      ></div>
      <span className="font-roboto font-normal text-[18px] leading-[27px] text-[#404040] flex-1">
        {item.name}
      </span>
      <span className="font-roboto font-medium text-[18px] leading-[27px] text-[#0A0A0A] text-right flex-1">
        {item.value}
      </span>
      <span className="font-roboto font-medium text-[18px] leading-[27px] text-[#0A0A0A] text-right flex-1">
        {item.percentage}%
      </span>
    </div>
  ))}
</div>
</div>

        </main>

       <aside className="hidden lg:block w-[342px] h-auto bg-white p-6 space-y-4 mt-6">

          <div className="space-y-2">
            <h3 className="font-bold text-xl">Course-wise Progress</h3>
            <div className="bg-black/5 rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zc2XO8KiDqcDQcLjBiz0RFkkj06WVL.png"
                    alt="Circle"
                    className="w-4 h-4"
                  />
                  Project Management Basics
                </span>
                <span className="text-[#154D71]">40/48</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" /> Risk Management for PMP
                </span>
                <span className="text-[#154D71]">6/24</span>
              </div>
              <div className="text-center mt-3">
                <span className="text-black hover:underline cursor-pointer">More</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl mb-3">Quizzes Progress</h3>
            <div className="bg-black/5 rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> 3 of 5 quizzes completed
                </span>
                <span className="text-[#154D71]">60%</span>
              </div>
              <div className="text-center mt-3">
                <span className="text-black hover:underline cursor-pointer">More</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-xl mb-3">Latest Certificate</h3>
            <div className="bg-black/5 rounded-md p-4 space-y-3 text-center">
            <img 
                src="/d1f87059c38845612f71a3b2d07edd459d694cec.png" 
                 alt="Latest Certificate" 
                 className="w-20 h-10 object-contain mx-auto rounded-md shadow"
                    />
              <div className="flex justify-center gap-3">
                <Button className="bg-[#154D71] text-white rounded-lg">View Certificate</Button>
                <Button className="bg-[#154D71] text-white rounded-lg">Download PDF</Button>
              </div>
            </div>
          </div>
        </aside>
      </div> 
    </div>  
  )
}
