'use client'

import { motion } from 'framer-motion'
import Card from './Card'
import { DiagnosisIcon, DesignIcon, ImplementationIcon, ResultIcon } from './Icons'

const processSteps = [
  {
    step: '01',
    title: 'Диагностика',
    description: 'Аудит процессов, воронки продаж и CRM. Выявление точек роста.',
    Icon: DiagnosisIcon,
  },
  {
    step: '02',
    title: 'Проектирование',
    description: 'Разработка системы продаж, KPI и регламентов работы.',
    Icon: DesignIcon,
  },
  {
    step: '03',
    title: 'Внедрение',
    description: 'Настройка CRM, обучение команды, запуск процессов.',
    Icon: ImplementationIcon,
  },
  {
    step: '04',
    title: 'Результат',
    description: 'Рост выручки, стабильное выполнение плана, автономная работа.',
    Icon: ResultIcon,
  },
]

export default function ProcessVisualization() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-700 via-gray-800 to-dark-gray">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Как мы работаем
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto"
        >
          Системный подход к построению отдела продаж. От диагностики до результата.
        </motion.p>

        {/* Линия соединения (только на десктопе) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-steel-blue/30 to-transparent transform -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-graphite p-6 rounded-3xl border border-gray-700 text-center relative">
                {/* Номер шага */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-steel-blue flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Иконка */}
                <div className="mb-4 mt-2 flex justify-center">
                  <step.Icon className="w-16 h-16 text-steel-blue" />
                </div>

                {/* Заголовок */}
                <h3 className="text-xl font-bold mb-3 text-steel-blue">{step.title}</h3>

                {/* Описание */}
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Стрелка (только на десктопе, кроме последнего) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-steel-blue/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

