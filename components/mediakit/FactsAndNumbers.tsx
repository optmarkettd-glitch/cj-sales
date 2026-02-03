'use client'

import { motion } from 'framer-motion'
import Card from '../Card'

const facts = [
  {
    metric: '+30–40%',
    label: 'Рост выручки',
  },
  {
    metric: '+25–40%',
    label: 'Рост эффективности ОП',
  },
  {
    metric: '+40%',
    label: 'Рост активных клиентов',
  },
  {
    metric: '20–50%',
    label: 'Снижение текучки',
  },
  {
    metric: '2–3 месяца',
    label: 'Запуск отдела продаж',
  },
  {
    metric: '50+',
    label: 'Реализованных проектов',
  },
]

export default function FactsAndNumbers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-steel-blue/5">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-graphite text-center"
        >
          Цифры и факты
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.slice(0, 3).map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white p-8 rounded-2xl border border-steel-blue/20 text-center h-full">
                <div className="text-4xl sm:text-5xl font-bold text-steel-blue mb-3">
                  {fact.metric}
                </div>
                <p className="text-gray-700 font-medium">{fact.label}</p>
              </Card>
            </motion.div>
          ))}
          {facts.slice(3).map((fact, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <Card className="bg-white p-8 rounded-2xl border border-steel-blue/20 text-center h-full">
                <div className="text-4xl sm:text-5xl font-bold text-steel-blue mb-3">
                  {fact.metric}
                </div>
                <p className="text-gray-700 font-medium">{fact.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








