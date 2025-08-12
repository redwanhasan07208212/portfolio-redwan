"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">Some of my recent work that I'm proud of</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "MediCare",
              description: "Full-stack online doctor appointment platform",
              features: [
                "Built separate panels for users, doctors, and administrators with role-based functionality",
                "Designed user-friendly interfaces using React.js with appointment scheduling features",
                "Developed secure doctor panel for schedule and patient management",
                "Implemented admin dashboard for platform monitoring and user management",
                "Ensured responsive design and performance optimization across all devices",
              ],
              tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
              gradient: "from-blue-500/20 to-purple-500/20",
              border: "border-blue-500/30",
            },
            {
              title: "NihonBeauty",
              description: "Feature-rich e-commerce website for cosmetics",
              features: [
                "Developed e-commerce platform focused on cosmetics and beauty products",
                "Built dynamic product listing, filtering, and search functionality",
                "Designed engaging and responsive UI using React.js, Next.js, and TypeScript",
                "Integrated secure shopping cart and checkout system with quantity management",
                "Ensured accessibility with clean UI/UX design tailored for mobile-first audiences",
              ],
              tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
              gradient: "from-purple-500/20 to-pink-500/20",
              border: "border-purple-500/30",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.border} hover:border-opacity-60 transition-all duration-300 h-full`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-slate-300">{project.description}</CardDescription>
                    </div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-blue-400">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-300 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
                        >
                          {tech}
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
  )
}
