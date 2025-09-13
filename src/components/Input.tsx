import React from "react"
import { Input as UIInput } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  className?: string
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <UIInput 
      className={cn("", className)} 
      {...props} 
    />
  )
}
