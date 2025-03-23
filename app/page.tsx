"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import { ArrowDown, ExternalLink, Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

// Dynamically import components with no SSR
const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: false })
const AboutSection = dynamic(() => import("@/components/about-section"), { ssr: false })
const SkillsSection = dynamic(() => import("@/components/skills-section"), { ssr: false })
const ProjectsSection = dynamic(() => import("@/components/projects-section"), { ssr: false })
const ContactSection = dynamic(() => import("@/components/contact-section"), { ssr: false })
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const Cursor = dynamic(() => import("@/components/cursor"), { ssr: false })

// Dynamically import Canvas with no SSR
const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })

const DynamicStars = dynamic(() => import("@react-three/drei").then((mod) => mod.Stars), { ssr: false })

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const sectionsRef = useRef<HTMLDivElement>(null)

  // Only initialize scrollYProgress after mounting
  const scrollData = useScroll({
    target: sectionsRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollData.scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollData.scrollYProgress, [0, 0.2], [1, 0.9])

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      if (!document) return

      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Don't render anything until client-side
  if (!isMounted) {
    return null
  }

  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Cursor />

      {/* Background Canvas */}
      <div className="fixed inset-0 z-0">
        <DynamicCanvas>
          <DynamicStars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </DynamicCanvas>
      </div>

      {/* Gradient overlay */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

      {/* Glass panel overlay */}
      <div className="fixed inset-0 z-5 backdrop-blur-[2px] bg-gradient-to-b from-cyan-900/5 to-purple-900/5 pointer-events-none"></div>

      <Navbar activeSection={activeSection} />

      <div ref={sectionsRef} className="relative z-20">
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
          <motion.div
            style={{ opacity, scale }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown className="w-8 h-8 text-white/70" />
            </motion.div>
          </motion.div>
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen py-20">
          <AboutSection />
        </section>

        <section id="skills" className="min-h-screen py-20">
          <SkillsSection />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <ProjectsSection />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <ContactSection />
        </section>
      </div>

      <footer className="relative z-20 border-t border-white/10 py-8 backdrop-blur-xl bg-black/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-4 py-2">
              © {new Date().getFullYear()} | Designed & Built with Next.js
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

