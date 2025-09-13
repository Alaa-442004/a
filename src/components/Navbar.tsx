import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  return (
    <nav className="bg-ashridge-primary text-white px-design-lg py-design-md h-[60px] flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-design-md">
          <img 
            src="/9987eb512151b450fd789b926391e339764420c7.png" 
            alt="Ashridge College Logo" 
            className="w-[100px] h-auto"
          />
          <span className="font-semibold text-lg">Ashridge College</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-design-xl">
          <Link 
            href="/" 
            className="hover:text-ashridge-secondary transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            href="/my-exam" 
            className="hover:text-ashridge-secondary transition-colors duration-200 font-medium"
          >
            My Exams
          </Link>
          <Link 
            href="/courses" 
            className="hover:text-ashridge-secondary transition-colors duration-200 font-medium"
          >
            Courses
          </Link>
          <Link 
            href="/certificates" 
            className="hover:text-ashridge-secondary transition-colors duration-200 font-medium"
          >
            Certificates
          </Link>
        </div>
        
        {/* Profile Avatar */}
        <div className="w-10 h-10 rounded-full bg-ashridge-secondary flex items-center justify-center">
          <Avatar className="w-full h-full">
            <AvatarImage src="/9b47a023caf29f113237d61170f34ad9.jpg" alt="User Profile" />
            <AvatarFallback className="bg-ashridge-secondary text-ashridge-primary font-semibold">
              JL
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
