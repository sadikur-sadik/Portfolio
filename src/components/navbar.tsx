"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Animation state for Logo
  const [logoText, setLogoText] = useState("S")
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fullName = "Sadik"
    let currentText = "S"
    let i = 1
    let phase = "typing" // "typing" | "paused" | "deleting" | "done"
    let timer: NodeJS.Timeout

    const tick = () => {
      if (phase === "typing") {
        if (i < fullName.length) {
          i++
          currentText = fullName.substring(0, i)
          setLogoText(currentText)
          timer = setTimeout(tick, 150)
        } else {
          phase = "paused"
          timer = setTimeout(() => {
            phase = "deleting"
            tick()
          }, 1500)
        }
      } else if (phase === "deleting") {
        if (i > 1) {
          i--
          currentText = fullName.substring(0, i)
          setLogoText(currentText)
          timer = setTimeout(tick, 100)
        } else {
          phase = "done"
          setIsTypingDone(true)
        }
      }
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "https://docs.google.com/document/d/1liuin06dADzezDJbtDJWd6TvbDNMc5YmKcAX3annmaE/export?format=pdf", external: true },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-bg-surface/80 backdrop-blur-md border-b border-primary/20 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Animation */}
        <div className="flex-1 flex items-center font-sans font-extrabold text-2xl text-primary h-8">
          <span>{'{'}</span>
          <span>{logoText}</span>
          {!isTypingDone && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-0.5 h-6 bg-primary ml-0.5 mr-0.5"
            />
          )}
          <span>{'}'}</span>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-text-main hover:text-primary font-medium transition-colors"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center gap-4 justify-end">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          
          {/* Get in touch removed */}

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-b border-primary/20 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-text-main font-medium block w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Get in touch removed */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
