"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertInDark: true },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertInDark: true },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui", invertInDark: true },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "DaisyUI", icon: "https://cdn.simpleicons.org/daisyui" },
  { name: "HeroUI", icon: "https://cdn.simpleicons.org/heroui" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
]

export function Skills() {
  return (
    <section id="skills" className="bg-bg-surface py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-20">
        <div className="space-y-4">
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-text-main uppercase tracking-widest">
            Technical Arsenal
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="relative w-24 h-24 flex items-center justify-center p-4 bg-bg-main rounded-2xl shadow-sm border border-primary/10 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ${skill.invertInDark ? 'dark:invert' : ''}`}
                />
              </div>
              <h4 className="font-sans font-bold text-lg text-text-main group-hover:text-primary transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
