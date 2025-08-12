"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-lg">My professional journey in software development</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-white mb-2">Junior Software Developer (Front-end)</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-400">TheDevGarden</CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 rounded-full px-3 py-1">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 2023 - Mar 2024</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Playing a pivotal role in the front-end development of a CryptoCurrency Website, ensuring its
                    successful journey from inception to production.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Upholding code quality standards while actively involved in building new features, and codebase
                    refactoring utilizing JavaScript, React, and other front-end technologies.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
