import React from "react"

interface SplitScreenProps {
  leftPanel: React.ReactNode
  rightPanel: React.ReactNode
}

export default function SplitScreen({ leftPanel, rightPanel }: SplitScreenProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
        {leftPanel}
      </div>
      
      {/* Right Panel */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        {rightPanel}
      </div>
    </div>
  )
}
