"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always excited to discuss new opportunities and interesting projects. Let's create something amazing
            together!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-3 text-slate-400 bg-slate-800/30 rounded-lg p-4">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>redwanhasancse@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 bg-slate-800/30 rounded-lg p-4">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+880 1568283360</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
