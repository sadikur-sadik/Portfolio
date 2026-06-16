"use client"

import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-bg-surface py-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="font-sans text-2xl font-extrabold text-text-main">
            Sadikur <span className="text-primary">Rahman</span>
          </h2>
          <p className="font-body text-text-main/60 text-sm">
            © {new Date().getFullYear()} Sadikur Rahman. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/sadikur-sadik" target="_blank" rel="noreferrer" className="font-medium text-text-main hover:text-primary transition-colors flex items-center gap-1">
            GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/sadikur-rahman-sadik/" target="_blank" rel="noreferrer" className="font-medium text-text-main hover:text-primary transition-colors flex items-center gap-1">
            LinkedIn <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="https://docs.google.com/document/d/1liuin06dADzezDJbtDJWd6TvbDNMc5YmKcAX3annmaE/export?format=pdf" target="_blank" rel="noreferrer" className="font-medium text-text-main hover:text-primary transition-colors flex items-center gap-1">
            Resume <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
