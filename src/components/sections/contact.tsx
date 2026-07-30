"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://formsubmit.co/ajax/sadikur.r.sadik@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setStatus("success")
        e.currentTarget.reset()
        setTimeout(() => {
          setStatus("idle")
        }, 5000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const contactInfo = [
    {
      title: "Email Me",
      value: "sadikur.r.sadik@gmail.com",
      href: "mailto:sadikur.r.sadik@gmail.com",
      icon: Mail,
      label: "Send an email"
    },
    {
      title: "Call / SMS",
      value: "+880 1605-542776",
      href: "tel:+8801605542776",
      icon: Phone,
      label: "Call now"
    },
    {
      title: "WhatsApp",
      value: "+880 1862-582870",
      href: "https://wa.me/8801862582870",
      icon: MessageSquare,
      label: "Message on WhatsApp"
    }
  ]

  return (
    <section id="contact" className="bg-bg-surface py-32 relative overflow-hidden border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-text-main uppercase tracking-widest">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="font-body text-text-main/70 max-w-md mx-auto">
            Let's build something great together. Reach out via direct channels or leave a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-bg-main border border-primary/10 rounded-2xl hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-sans font-bold text-sm text-text-main/60 uppercase tracking-wider">
                      {info.title}
                    </h3>
                    <p className="font-body text-lg font-bold text-text-main truncate group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                    <span className="inline-block text-xs font-semibold text-primary/75 group-hover:underline">
                      {info.label} &rarr;
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-bg-main border border-primary/10 rounded-2xl p-8 shadow-sm">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h3>
                <p className="text-text-main/70">
                  Thank you for your message. I'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-text-main/80">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-bg-surface border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main placeholder:text-text-main/30 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-text-main/80">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-bg-surface border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main placeholder:text-text-main/30 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-text-main/80">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello, I'd like to collaborate on..."
                    className="w-full px-4 py-3 bg-bg-surface border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main placeholder:text-text-main/30 transition-all resize-none"
                  />
                </div>

                {/* Honeypot field for FormSubmit anti-spam */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_captcha" value="false" />

                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">
                    Something went wrong. Please try again later.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto h-12 text-base font-bold px-8 gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
