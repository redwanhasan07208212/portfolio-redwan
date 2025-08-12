"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Code, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Frontend",
              icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
              skills: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "ShadCN UI",
                "Ant Design",
                "Redux Toolkit",
                "RTK Query",
                "React Query",
              ],
              gradient: "from-blue-500/20 to-cyan-500/20",
              border: "border-blue-500/30",
            },
            {
              title: "Backend",
              icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
              skills: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose ODM",
                "REST API",
              ],
              gradient: "from-green-500/20 to-emerald-500/20",
              border: "border-green-500/30",
            },
            {
              title: "Tools",
              icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
              skills: [
                "VS Code",
                "Git CLI",
                "GitHub",
                "Postman",
                "Chrome DevTools",
                "ClickUp",
              ],
              gradient: "from-purple-500/20 to-pink-500/20",
              border: "border-purple-500/30",
            },
            {
              title: "Soft Skills",
              icon: (
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
              ),
              skills: [
                "Communication",
                "Adaptability",
                "Time Management",
                "Patience",
                "Multitasking",
              ],
              gradient: "from-orange-500/20 to-red-500/20",
              border: "border-orange-500/30",
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm border ${category.border} hover:border-opacity-60 transition-all duration-300 h-full`}
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-base sm:text-lg text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors text-xs sm:text-sm px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
