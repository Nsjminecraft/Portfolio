"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    // Reset form
    e.currentTarget.reset()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Get In Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        <p className="text-white/70 max-w-2xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-4">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex items-start gap-4 hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-white/70">nerfgunredusebook@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex items-start gap-4 hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-white/70">+1 (436) 605 4607</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 flex items-start gap-4 hover:bg-white/15 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-white/70">Brampton, Canada</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300"
        >
          <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6">
            Send Me a Message
          </motion.h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div variants={itemVariants}>
              <Input
                placeholder="Your Name"
                required
                className="bg-white/10 border-white/20 placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="bg-white/10 border-white/20 placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                placeholder="Subject"
                required
                className="bg-white/10 border-white/20 placeholder:text-white/50 focus:border-cyan-400 focus:ring-cyan-400/20"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Textarea
                placeholder="Your Message"
                required
                className="bg-white/10 border-white/20 placeholder:text-white/50 min-h-[150px] focus:border-cyan-400 focus:ring-cyan-400/20"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 backdrop-blur-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

