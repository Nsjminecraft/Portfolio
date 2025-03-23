"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Layers } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">About Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-white/80">
              I'm a coder based in Brampton, Ontario with a passion for web development. I'm building my skills in
              HTML, CSS,JavaScript, and Flask while exploring modern frameworks and technologies. I enjoy creating interactive
              web applications and solving problems through code.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-white/80">
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best
             practices. My approach combines technical expertise with creative problem-solving to deliver
              exceptional results for every project.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">Frontend</h4>
            <p className="text-white/70 text-sm">Creating responsive, interactive user interfaces</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">Backend</h4>
            <p className="text-white/70 text-sm">Building server-side applications</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-pink-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">Clean Code</h4>
            <p className="text-white/70 text-sm">Writing maintainable, efficient code</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold mb-2">Architecture</h4>
            <p className="text-white/70 text-sm">Designing scalable application structures</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

