"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download } from "lucide-react"
import Image from "next/image"
import banner_image from "@/app/asset/banner.png"
export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 border-2 border-primary px-4 py-1.5 rounded-sm">
            <span className="font-bold text-sm">Hi everyone 👋, I am Sadikur Rahman</span>
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            MERN Stack<br />
            <span className="relative text-primary">
              Developer
              <svg className="absolute -bottom-2 left-0 w-full" fill="none" height="10" viewBox="0 0 400 10">
                <path d="M2 8C50 3 150 3 400 8" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
            </span>
          </h1>

          <p className="font-body text-lg text-text-main/80 max-w-lg">
            I'm a MERN Stack Developer passionate about building robust, scalable applications and seamless user experiences from the database to the front-end interface.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
            <a href="#projects">
              <Button size="lg" className="rounded-lg gap-2 group text-base h-14 px-8">
                View Projects
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="https://docs.google.com/document/d/1liuin06dADzezDJbtDJWd6TvbDNMc5YmKcAX3annmaE/export?format=pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="gap-2 font-bold group text-base h-14 px-6">
                Download CV
                <Download className="group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-12">
            <span className="font-medium text-text-main/70">Find me on:</span>
            <div className="flex gap-3">
              <a href="https://github.com/sadikur-sadik" target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" /><path d="M9 18c-4.51 1.5-5-2-7-2" /></svg>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/sadikur-rahman-sadik/" target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-12 md:mt-0"
        >
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 left-0 z-0">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative w-full max-w-[500px] mx-auto md:ml-auto aspect-square bg-bg-surface/50 rounded-full overflow-hidden shadow-2xl flex items-center justify-center border border-primary/10 z-10">
            <Image
              alt="Sadikur Rahman - Web Developer"
              className="w-full h-full object-cover drop-shadow-xl"
              src={banner_image}
              placeholder="blur"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 w-48 h-12 bg-primary rounded-full rotate-[-25deg] -z-10 blur-xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  )
}
