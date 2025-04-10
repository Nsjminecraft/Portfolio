import Link from "next/link"
import { ArrowRight, Code, Github, Mail, User, MessageSquare, FileText } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBar } from "@/components/skill-bar"
import { ParticleBackground } from "@/components/particle-background"

export default function Home() {
  const resumeUrl = "https://docs.google.com/document/d/1wGpFTvpKhhTYYI_JTbbahSDTOyI79Gy3qR-PYk7yxfg/edit?usp=sharing"

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
          >
            Niranjan<span className="text-white"> Portfolio</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
            asChild
          >
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-purple-950/20 z-0"></div>
        <div className="container mx-auto text-center z-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Niranjan Shanmuganathan Jothilaksmi
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
            Building the future of the web with cutting-edge technologies and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
              asChild
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Link>
            </Button>
          </div>
          <div className="flex justify-center mt-12 space-x-6">
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <MessageSquare className="h-6 w-6" />
            </Link>
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FileText className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/10 to-purple-950/10 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    <Image
                      src="/images/profile.png"
                      alt="Niranjan Shanmuganathan Jothilaksmi"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Code className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <User className="mr-3 text-cyan-400" /> About Me
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate Full Stack Developer with expertise in building modern web applications using
                  cutting-edge technologies. With a strong foundation in both frontend and backend development, I create
                  seamless, responsive, and user-friendly digital experiences.
                </p>
                <p>
                  My journey in tech began 5 years ago, and since then, I've worked on various projects ranging from
                  simple login page to real-time applications. I'm constantly learning and adapting to new technologies
                  to stay at the forefront of web development.
                </p>
                <p>When I'm not coding, you can find me exploring new tech, reading, or Biking.</p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300"
                    asChild
                  >
                    <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> View Full Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-950/10 to-purple-950/10 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Technical Skills
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Frontend</h3>
              <SkillBar name="HTML" percentage={95} />
              <SkillBar name="CSS" percentage={90} />
              <SkillBar name="Javascript" percentage={95} />
              <SkillBar name="Typescript" percentage={85} />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Backend</h3>
              <SkillBar name="Flask" percentage={92} />
              <SkillBar name="Flutter" percentage={88} />
              <SkillBar name="SQL" percentage={85} />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["JavaScript", "TypeScript", "Flutter", "HTML", "CSS", "SQL"].map((tech) => (
              <Card
                key={tech}
                className="bg-gradient-to-br from-black/60 to-gray-900/60 border border-cyan-500/30 backdrop-blur-sm"
              >
                <CardContent className="p-4 text-center">
                  <span className="text-gray-300">{tech}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/10 to-purple-950/10 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              My GitHub Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="DailyDashboard"
              description="A comprehensive dashboard application providing daily information and updates at a glance."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/images/daily-dashboard.png"
              githubUrl="https://github.com/Nsjminecraft/DailyDashboard"
            />

            <ProjectCard
              title="Calculator"
              description="A Calculator built in HTML, CSS, and JavaScript with a clean user interface and full arithmetic functionality."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/images/calculator.png"
              githubUrl="https://github.com/Nsjminecraft/Calculator"
            />

            <ProjectCard
              title="News"
              description="A news aggregation application that displays current news from various sources in a user-friendly format."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/images/news.png"
              githubUrl="https://github.com/Nsjminecraft/News"
            />

            <ProjectCard
              title="Stocks"
              description="A stock tracking application that allows users to monitor stock prices and market trends."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/images/stocks.png"
              githubUrl="https://github.com/Nsjminecraft/Stocks"
            />

            <ProjectCard
              title="Weather"
              description="A weather application that provides current weather conditions and forecasts for locations worldwide."
              tags={["HTML", "CSS", "JavaScript"]}
              image="/images/weather.png"
              githubUrl="https://github.com/Nsjminecraft/Weather"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-950/10 to-purple-950/10 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Get In Touch
            </span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-black/60 to-gray-900/60 border border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-300">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-md bg-gray-900/60 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-md bg-gray-900/60 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-3 rounded-md bg-gray-900/60 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-gray-900/60 border border-cyan-500/30 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span>nerfgunredusebook@gmail.com</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
                <span>github.com/nsjminecraft</span>
              </Link>
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span>coolguy100</span>
              </Link>
              <Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} | Designed & Built with
            <span className="text-cyan-400 mx-1">♥</span>
            by <span className="text-cyan-400">Niranjan</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
