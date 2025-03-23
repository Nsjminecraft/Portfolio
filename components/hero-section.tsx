"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 py-20"
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-xl md:text-2xl font-mono text-cyan-400">Hello, I'm</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Niranjan
          </h1>
          <h2 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          Shanmuganathan Jothilakshmi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-4 max-w-xl hover:bg-white/15 transition-all duration-300"
        >
          <p className="text-white/80 text-lg">
            Building innovative web applications with modern technologies. Specializing in creating seamless user
            experiences with cutting-edge tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 pt-4"
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full px-8 backdrop-blur-md"
            asChild
          >
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-md"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="w-full lg:w-1/2 h-[450px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          transform: `translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="w-full h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 flex items-center justify-center">
          <div className="relative w-[380px] h-[380px] rounded-lg overflow-hidden border-4 border-cyan-400/30 shadow-lg shadow-cyan-400/20">
            <img
              src="/images/profile-photo.jpg"
              alt="Niranjan Shanmuganathan Jothilakshmi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

