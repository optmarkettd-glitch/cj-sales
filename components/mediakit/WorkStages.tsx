'use client'

import { motion } from 'framer-motion'

const stages = [
  { name: 'Диагностика', number: '01' },
  { name: 'Аудит', number: '02' },
  { name: 'Внедрение', number: '03' },
  { name: 'Сопровождение', number: '04' },
  { name: 'Результат и масштабирование', number: '05' },
]

export default function WorkStages() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-graphite text-center"
        >
          Этапы работы
        </motion.h2>
        <div className="relative">
          {/* Соединительная линия (только на десктопе) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-steel-blue/30 via-steel-blue/50 to-steel-blue/30 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-steel-blue shadow-lg relative z-10">
                  <span className="text-steel-blue font-bold text-lg">{stage.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-graphite">{stage.name}</h3>
                {/* Стрелка (кроме последнего, только на десктопе) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <svg className="w-6 h-6 text-steel-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

