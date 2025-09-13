import React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src="/9987eb512151b450fd789b926391e339764420c7.png" 
        alt="Ashridge College Logo" 
        className="w-8 h-8" 
      />
      {showText && (
        <span className="font-semibold text-lg">Ashridge College</span>
      )}
    </div>
  )
}
