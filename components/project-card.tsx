import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  githubUrl?: string
}

export function ProjectCard({ title, description, tags, image, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group bg-gradient-to-br from-black/60 to-gray-900/60 border border-cyan-500/30 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/60">
      <div className="relative overflow-hidden h-48 flex items-center justify-center">
        {image.startsWith("/images/") ? (
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="object-contain max-h-full"
          />
        ) : (
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex gap-2">
            {githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
                asChild
              >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white"
            >
              Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
