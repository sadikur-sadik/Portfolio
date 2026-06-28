"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Languages, Code2, Rocket } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-bg-surface py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 order-2 lg:order-1"
        >
          <div className="relative pl-12 border-l-2 border-primary/30 space-y-16">
            <div className="relative">
              <div className="absolute left-[-58px] top-0 w-4 h-4 rounded-full bg-primary ring-8 ring-bg-surface"></div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-text-main">API Integration</h3>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[-58px] top-0 w-4 h-4 rounded-full bg-primary ring-8 ring-bg-surface"></div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-text-main">Fast Performance</h3>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[-58px] top-0 w-4 h-4 rounded-full bg-primary ring-8 ring-bg-surface"></div>
              <div className="flex flex-col gap-2 group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Languages className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-text-main">Language Proficiency</h3>
                </div>
                <div className="pl-22 flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-sm py-1">IELTS 7.5</Badge>
                  <Badge variant="outline" className="text-sm py-1">Native Bangla</Badge>
                  <Badge variant="outline" className="text-sm py-1">Fluent English</Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-1 lg:order-2"
        >
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-text-main">About me</h2>
          <p className="font-body text-lg text-text-main/70 leading-relaxed">
            I am a results-driven Full Stack Web Developer with a strong foundation in modern web technologies. My expertise lies in building scalable web applications and intuitive user interfaces. I bridge the gap between design and robust backend architecture, ensuring a seamless experience across all devices. While I haven't handled any clients yet, I have built numerous extensive projects to hone my skills and deliver impactful results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
