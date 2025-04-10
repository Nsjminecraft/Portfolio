"use client"

import { useEffect, useState } from "react"

interface SkillBarProps {
  name: string
  percentage: number
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300">{name}</span>
        <span className="text-cyan-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
