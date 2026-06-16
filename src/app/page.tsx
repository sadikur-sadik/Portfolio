import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
