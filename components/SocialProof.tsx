'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import Card from './Card'
import StatsBackground from './StatsBackground'

const stats = [
  {
    number: '50',
    suffix: '+',
    label: 'Реализованных проектов',
    description: 'От малого бизнеса до компаний с оборотом 1+ млрд',
  },
  {
    number: '40',
    prefix: '+',
    suffix: '%',
    label: 'Средний рост выручки',
    description: 'За первые 6 месяцев после внедрения',
  },
  {
    number: '90',
    suffix: '%',
    label: 'Клиентов продолжают работать',
    description: 'Система работает автономно после передачи',
  },
  {
    number: '90',
    label: 'Дней до результата',
    description: 'Первые улучшения уже через 2-3 недели',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-700 via-gray-800 to-dark-gray">
      {/* Фоновые элементы */}
      <StatsBackground />
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Цифры, которые говорят сами за себя
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto"
        >
          Реальные результаты реальных компаний. Без приукрашиваний и обещаний.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-graphite p-8 rounded-3xl border border-gray-700 text-center h-full flex flex-col">
              <div className="text-5xl sm:text-6xl font-bold text-steel-blue mb-3 min-h-[4rem] flex items-center justify-center">
                <AnimatedCounter 
                  value={stat.number} 
                  prefix={stat.prefix || ''} 
                  suffix={stat.suffix || ''}
                  duration={2000}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm flex-grow">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

