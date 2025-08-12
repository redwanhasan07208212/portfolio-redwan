"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My professional journey in software development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg sm:text-xl text-white mb-2">
                    Junior Software Developer (Front-end)
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg font-medium text-blue-400">
                    TheDevGarden
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2 text-slate-400">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-sm sm:text-base">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 rounded-full px-3 py-1.5 sm:py-2 self-start">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-sm sm:text-base whitespace-nowrap">
                    Dec 2023 - Mar 2024
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 sm:space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed">
                    Playing a pivotal role in the front-end development of a
                    CryptoCurrency Website, ensuring its successful journey from
                    inception to production.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed">
                    Upholding code quality standards while actively involved in
                    building new features, and codebase refactoring utilizing
                    JavaScript, React, and other front-end technologies.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
