"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-40 bg-slate-900/40 backdrop-blur-md border-b border-slate-800"
      >
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Redwan Hasan
          </motion.h1>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-blue-400 transition-all duration-300 relative group font-medium"
                  >
                    {item}
                    <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </Link>
                </motion.div>
              )
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full bg-slate-900/95 backdrop-blur-md border-l border-slate-700/50 z-50 flex flex-col p-8 md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end mb-8 text-white hover:text-blue-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-6">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="text-white hover:text-blue-400 text-2xl font-semibold p-2"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 mb-6 text-sm md:text-base">
              &copy; 2025 Redwan Hasan. Crafted with passion and code.
            </p>
            <div className="flex items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link
                  href="https://github.com/redwanhasan07208212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <Link
                  href="https://www.linkedin.com/in/redwan-hasan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
