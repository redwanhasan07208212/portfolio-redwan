"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Code, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Education & Training
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My academic background and professional development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {[
            {
              title: "B.Sc. in Computer Science & Engineering",
              institution: "Stamford University Bangladesh",
              location: "51 Siddheswari Road, Dhaka-1217",
              period: "2020 - 2025",
              icon: (
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              ),
            },
            {
              title: "Complete Web Development Course",
              institution: "Programming Hero",
              location: "Online",
              period: "2024",
              icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
            },
          ].map((education, index) => (
            <motion.div
              key={education.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        {education.icon}
                        <CardTitle className="text-base sm:text-lg md:text-xl text-white leading-tight">
                          {education.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm sm:text-base md:text-lg font-medium text-blue-400 mb-2">
                        {education.institution}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          {education.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 rounded-full px-3 py-1.5 sm:py-2 self-start">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-sm sm:text-base whitespace-nowrap">
                        {education.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
