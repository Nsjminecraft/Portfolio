"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg backdrop-blur-md bg-white/5 border border-white/10 h-full flex flex-col">
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white">Featured</Badge>
          </div>
        )}

        <div className="relative overflow-hidden h-48">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
          />

          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-3">
              <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" /> Demo
                </a>
              </Button>
              <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" /> Code
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-white/20 text-white/70">
                {tag}
              </Badge>
            ))}
          </div>

          <Button variant="ghost" className="self-start p-0 hover:bg-transparent hover:text-cyan-400 group" asChild>
            <a href={project.demoUrl} target="_blank" className="flex items-center">
              View Details
              <motion.div initial={{ x: 0 }} animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:text-cyan-400" />
              </motion.div>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

