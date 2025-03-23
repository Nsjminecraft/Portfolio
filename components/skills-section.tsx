"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Layers, Zap, Server, GitBranch, Braces, Palette, Workflow } from "lucide-react"

type Skill = {
  name: string
  level: number
  category: "frontend" | "backend" | "other"
  color: string
  icon: React.ReactNode
}

type CategoryInfo = {
  name: string
  color: string
  icon: React.ReactNode
}

// Replace the BubbleForceGraph component with HorizontalBarGraph
function HorizontalBarGraph({
  skills,
  category,
}: {
  skills: Skill[]
  category: "frontend" | "backend" | "other"
}) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)

  // Filter skills by category and sort by level (highest first)
  const categorySkills = skills.filter((skill) => skill.category === category).sort((a, b) => b.level - a.level)

  // Get category color
  const categoryColor = getCategoryColor(category)

  return (
    <div className="w-full h-full p-4 overflow-y-auto">
      <div className="space-y-4">
        {categorySkills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center mb-1">
              <div className="flex items-center gap-2 w-32 flex-shrink-0">
                {skill.icon}
                <span className="text-sm font-medium text-white/80 truncate">{skill.name}</span>
              </div>
              <span className="ml-auto text-sm font-bold">{skill.level}%</span>
            </div>

            <div className="relative h-8 bg-white/10 rounded-md overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full rounded-md"
                style={{ backgroundColor: skill.color }}
              />

              {hoveredSkill === skill && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-white drop-shadow-md">{skill.level}% Proficiency</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Helper function to get category color
function getCategoryColor(category: string, opacity = 1): string {
  const colors = {
    frontend: `rgba(94, 234, 212, ${opacity})`, // cyan
    backend: `rgba(167, 139, 250, ${opacity})`, // purple
    other: `rgba(244, 114, 182, ${opacity})`, // pink
  }

  return colors[category as keyof typeof colors] || `rgba(255, 255, 255, ${opacity})`
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const categoryInfo: Record<string, CategoryInfo> = {
    frontend: {
      name: "Frontend Development",
      color: "#5eead4",
      icon: <Globe className="w-5 h-5" />,
    },
    backend: {
      name: "Backend Development",
      color: "#a78bfa",
      icon: <Database className="w-5 h-5" />,
    },
    other: {
      name: "DevOps & Tools",
      color: "#f472b6",
      icon: <Layers className="w-5 h-5" />,
    },
  }

  const skills: Skill[] = [
    // Frontend
    {
      name: "HTML",
      level: 85,
      category: "frontend",
      color: "#e34c26",
      icon: <Braces className="w-5 h-5 text-[#e34c26]" />,
    },
    {
      name: "CSS",
      level: 80,
      category: "frontend",
      color: "#264de4",
      icon: <Palette className="w-5 h-5 text-[#264de4]" />,
    },
    {
      name: "JavaScript",
      level: 75,
      category: "frontend",
      color: "#f7df1e",
      icon: <Code className="w-5 h-5 text-[#f7df1e]" />,
    },
    {
      name: "Responsive Design",
      level: 70,
      category: "frontend",
      color: "#38bdf8",
      icon: <Zap className="w-5 h-5 text-[#38bdf8]" />,
    },

    // Backend
  
    {
      name: "API Integration",
      level: 75,
      category: "backend",
      color: "#ffffff",
      icon: <Workflow className="w-5 h-5 text-white" />,
    },
    {
      name: "JSON",
      level: 65,
      category: "backend",
      color: "#47a248",
      icon: <Database className="w-5 h-5 text-[#47a248]" />,
    },
    {
      name: "Flask",
      level: 85,
      category: "backend",
      color: "#336791",
      icon: <Database className="w-5 h-5 text-[#336791]" />,
    },

    // Other
    {
      name: "Git",
      level: 70,
      category: "other",
      color: "#f05032",
      icon: <GitBranch className="w-5 h-5 text-[#f05032]" />,
    },
    {
      name: "GitHub",
      level: 75,
      category: "other",
      color: "#ffffff",
      icon: <GitBranch className="w-5 h-5 text-white" />,
    },
    {
      name: "VS Code",
      level: 80,
      category: "other",
      color: "#2496ed",
      icon: <Layers className="w-5 h-5 text-[#2496ed]" />,
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">My Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        <p className="text-white/70 max-w-2xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-4">
          Explore my interactive skill bubbles across three key areas. The size of each bubble represents my proficiency
          level. Hover over any bubble to see detailed information about that skill.
        </p>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {Object.entries(categoryInfo).map(([category, info]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: category === "frontend" ? 0.1 : category === "backend" ? 0.2 : 0.3 }}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            style={{ height: "400px" }}
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${info.color}33` }}
              >
                {info.icon}
              </div>
              <h3 className="text-xl font-bold" style={{ color: info.color }}>
                {info.name}
              </h3>
            </div>

            <div className="h-[calc(100%-60px)]">
              {isMounted && (
                <HorizontalBarGraph skills={skills} category={category as "frontend" | "backend" | "other"} />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 mx-auto">
            <div className="w-10 h-10 rounded-full bg-cyan-400/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-cyan-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Frontend Development</h3>
          <p className="text-white/70">
            Creating responsive, interactive user interfaces with modern frameworks and libraries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
            <div className="w-10 h-10 rounded-full bg-purple-400/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-purple-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-purple-400">Backend Development</h3>
          <p className="text-white/70">Building server-side applications with scalable architecture</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 mx-auto">
            <div className="w-10 h-10 rounded-full bg-pink-400/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-pink-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-pink-400">Tools</h3>
          <p className="text-white/70">Implementing Git and APIS</p>
        </motion.div>
      </div>
    </div>
  )
}

