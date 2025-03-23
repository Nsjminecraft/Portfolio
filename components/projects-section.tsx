"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import ProjectCard from "@/components/project-card"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // Updated with all repositories and specific images
  const projects: Project[] = [
    {
      id: 1,
      title: "Calculator",
      description:
        "A calculator built with HTML, CSS, and JavaScript. Features a clean interface with standard calculator functionality.",
      image: "/images/calculator-project.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://nsjminecraft.github.io/Calculator/",
      githubUrl: "https://github.com/Nsjminecraft/Calculator",
      featured: true,
    },
    {
      id: 2,
      title: "DailyDashboard",
      description:
        "A comprehensive dashboard application that displays weather, time, date, upcoming holidays, to-do lists, and stock market information in a sleek interface.",
      image: "/images/dashboard-project.jpg",
      tags: ["HTML", "CSS", "JavaScript", "API Integration"],
      demoUrl: "https://nsjminecraft.github.io/DailyDashboard/",
      githubUrl: "https://github.com/Nsjminecraft/DailyDashboard",
      featured: true,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A modern portfolio website with a sleek dark theme and cyan accents, showcasing my projects and skills as a developer.",
      image: "/images/portfolio-project.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demoUrl: "https://github.com/Nsjminecraft/personal-portfolio",
      githubUrl: "https://github.com/Nsjminecraft/personal-portfolio",
      featured: false,
    },
    {
      id: 4,
      title: "Stocks",
      description:
        "A stock market tracking application with interactive charts for visualizing price trends and trading volume, featuring a sleek dark mode interface.",
      image: "/images/stocks-project.jpg",
      tags: ["JavaScript", "HTML", "CSS", "Data Visualization"],
      demoUrl: "https://github.com/Nsjminecraft/Stocks",
      githubUrl: "https://github.com/Nsjminecraft/Stocks",
      featured: false,
    },
  ]

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">My Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        <p className="text-white/70 max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4">
          Explore my collection of projects showcasing my skills and experience in web development. Each project
          represents a step in my journey as a developer.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full text-white gap-2">
                <Filter className="h-4 w-4" />
                {activeFilter === "all" ? "All Projects" : activeFilter}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="backdrop-blur-xl bg-black/80 border border-white/20 text-white">
              <DropdownMenuItem
                className={activeFilter === "all" ? "bg-white/10" : ""}
                onClick={() => setActiveFilter("all")}
              >
                All Projects
              </DropdownMenuItem>
              {allTags.map((tag) => (
                <DropdownMenuItem
                  key={tag}
                  className={activeFilter === tag ? "bg-white/10" : ""}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-12 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg">
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-white/70">Try selecting a different filter</p>
          </div>
        )}
      </div>
    </div>
  )
}

