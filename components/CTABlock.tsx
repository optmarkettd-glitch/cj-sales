'use client'

import { motion } from 'framer-motion'
import DiagnosticForm from './DiagnosticForm'
import Card from './Card'
import CTABackground from './CTABackground'

export default function CTABlock() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фоновые элементы */}
      <CTABackground />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-dark-gray p-8 sm:p-12 rounded-3xl border-2 border-steel-blue">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Запишитесь на диагностику системы продаж
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Разберём вашу ситуацию и покажем, что можно улучшить уже сейчас
          </p>
              <DiagnosticForm />
            </Card>
          </motion.div>
      </div>
    </section>
  )
}

