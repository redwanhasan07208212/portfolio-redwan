"use client";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text content */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 justify-center lg:justify-start"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-blue-300 text-xs sm:text-sm font-medium">
                  Available for opportunities
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Frontend
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                I craft beautiful, performant web experiences with React.js,
                Next.js, and TypeScript. Passionate about clean code and solving
                real-world problems through innovative technology.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 rounded-full px-3 sm:px-4 py-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-xs sm:text-sm">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 rounded-full px-3 sm:px-4 py-2">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span className="text-xs sm:text-sm">
                    3+ Years Experience
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                  >
                    <a
                      href="mailto:redwanhasancse@gmail.com"
                      className="flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                  >
                    <a
                      href="/public/redwan-hasan-resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </motion.div>

                <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 sm:mt-0">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="text-slate-400 hover:text-blue-400"
                    >
                      <Link
                        href="https://github.com/redwanhasan07208212"
                        target="_blank"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="text-slate-400 hover:text-blue-400"
                    >
                      <Link
                        href="https://www.linkedin.com/in/redwan-hasan/"
                        target="_blank"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center lg:justify-end"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative z-10"
              >
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Redwan Hasan"
                    width={180}
                    height={180}
                    className="rounded-3xl object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 pointer-events-none"
              >
                {[
                  { icon: "⚛️", position: "top-2 left-2 sm:top-4 sm:left-4" },
                  { icon: "📱", position: "top-2 right-2 sm:top-4 sm:right-4" },
                  {
                    icon: "🚀",
                    position: "bottom-2 left-2 sm:bottom-4 sm:left-4",
                  },
                  {
                    icon: "💻",
                    position: "bottom-2 right-2 sm:bottom-4 sm:right-4",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} text-xl sm:text-2xl`}
                    animate={{
                      rotate: -360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
