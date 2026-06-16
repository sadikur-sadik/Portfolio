"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const educations = [
    {
      degree: "Honours in English",
      institution: "Leading University, Sylhet",
      icon: BookOpen,
      delay: 0.1
    },
    {
      degree: "HSC (Science) - GPA 5.00",
      institution: "BAF Shaheen College, Shamshernagar",
      icon: Award,
      delay: 0.2
    },
    {
      degree: "SSC (Science) - GPA 4.94",
      institution: "BAF Shaheen College, Shamshernagar",
      icon: GraduationCap,
      delay: 0.3
    }
  ]

  return (
    <section id="education" className="py-32 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-text-main">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="font-body text-lg text-text-main/70 max-w-2xl mx-auto">
            My academic journey has built a strong foundation in critical thinking, communication, and logical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/50 transition-colors bg-bg-surface shadow-md hover:shadow-xl group">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-xl font-bold text-text-main">{item.degree}</h3>
                    <p className="font-body text-text-main/70">{item.institution}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
