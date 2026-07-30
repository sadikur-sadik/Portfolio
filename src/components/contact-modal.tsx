"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader2, CheckCircle2, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export const openContactModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-contact-modal"))
  }
}

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener("open-contact-modal", handler)
    return () => window.removeEventListener("open-contact-modal", handler)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

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
        setTimeout(() => {
          setIsOpen(false)
          setStatus("idle")
        }, 3000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-lg bg-bg-surface border border-primary/20 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-primary/10 flex justify-between items-center bg-bg-surface/50">
                  <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
                    Send a Message
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-primary/10 text-text-main/70 hover:text-primary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent!</h3>
                      <p className="text-text-main/70">
                        Thanks for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-medium text-text-main/80">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-bg-surface border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main placeholder:text-text-main/30 transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-text-main/80">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-bg-surface border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main placeholder:text-text-main/30 transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="message" className="text-sm font-medium text-text-main/80">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Hello, I'd like to talk about..."
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
                        className="w-full h-12 text-base font-bold gap-2 mt-4"
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
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-bg-surface rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow flex items-center justify-center"
            aria-label="Contact Me"
          >
            <MessageSquare className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
