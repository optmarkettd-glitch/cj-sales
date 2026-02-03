'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './Card'

const faqs = [
  {
    question: 'Сколько времени занимает внедрение системы продаж?',
    answer: 'Зависит от масштаба проекта. Минимальный срок — 30 дней для настройки воронки, стандартный — 90 дней для отдела под ключ. Первые улучшения в конверсии видны уже через 2-3 недели.',
  },
  {
    question: 'Что если у нас уже есть отдел продаж?',
    answer: 'Мы не заменяем, а модернизируем. Работаем с существующей командой, оптимизируем процессы, внедряем систему KPI и контроля. Результат — рост эффективности без потери команды.',
  },
  {
    question: 'Гарантируете ли вы результат?',
    answer: 'Мы гарантируем внедрение системы и передачу работающих процессов. Результат зависит от готовности клиента следовать системе. В 90% случаев клиенты получают рост выручки в первые 6 месяцев.',
  },
  {
    question: 'Что входит в стоимость?',
    answer: 'Диагностика, оценка команды, формирование структуры отдела продаж, найм, внедрение, обучение команды, настройка инструментов, передача системы и документов. Все включено.',
  },
  {
    question: 'Нужно ли нам нанимать новых менеджеров?',
    answer: 'Зависит от ситуации. Если есть команда, мы проводим оценку компетенций и вовлечённости сотрудников. Если индикаторы положительные, мы работаем с этой командой. В случае отрицательных индикаторов мы рекомендуем замену. Также в ходе аудита процессов мы оцениваем нагрузку менеджеров. При необходимости рекомендуем найм.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Частые вопросы
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Ответы на вопросы, которые задают перед началом работы
        </motion.p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-dark-gray rounded-3xl border border-gray-700 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-dark-gray/80 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-steel-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

