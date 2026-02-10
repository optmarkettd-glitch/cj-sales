'use client'

import { motion } from 'framer-motion'
import Card from './Card'

const advantages = [
  {
    title: 'Работаем «в полях»',
    description: 'Не из кабинета. Мы вникаем в ваш бизнес, ваших клиентов, ваши процессы. Реальные решения для реальных проблем.',
  },
  {
    title: 'Передаём систему, а не советы',
    description: 'Вы получаете работающую систему продаж, которую можно масштабировать. Не набор рекомендаций, которые забудутся через месяц.',
  },
  {
    title: 'Фокус на прибыли',
    description: 'Нас интересует только результат: рост выручки и прибыли. Всё остальное — инструменты для достижения цели.',
  },
  {
    title: 'Без воды и иллюзий',
    description: 'Прямой разговор. Жёсткие цифры. Реальные сроки. Никаких обещаний «за 30 дней до миллиона».',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark-gray via-gray-800 to-gray-700">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Почему мы
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-graphite p-8 rounded-3xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-steel-blue">{advantage.title}</h3>
              <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

