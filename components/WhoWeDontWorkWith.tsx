'use client'

import { motion } from 'framer-motion'
import Card from './Card'

const exclusions = [
  {
    title: 'Тем, кто ищет волшебную таблетку',
    description: 'Если вы ждёте, что мы «включим кнопку» и всё заработает само — мы не подходим друг другу.',
  },
  {
    title: 'Тем, кто не готов вовлекаться',
    description: 'Без вашего участия система не заработает. Мы строим, но вы должны быть частью процесса.',
  },
  {
    title: 'Тем, кому нужен «инфобизнес»',
    description: 'Мы проводим тренинги, где главное — не мотивация, а результат. Наша цель — чтобы вы внедрили знания и сделали это частью своей системы.',
  },
  {
    title: 'Тем, кто не готов к цифрам и дисциплине',
    description: 'Система продаж — это метрики, процессы, контроль. Если это не про вас, лучше не начинать.',
  },
]

export default function WhoWeDontWorkWith() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          С кем мы НЕ работаем
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Жёсткий отбор — это защита вашего времени и наших ресурсов
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exclusions.map((exclusion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-dark-gray p-6 rounded-3xl border border-steel-blue/30 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-steel-blue">{exclusion.title}</h3>
              <p className="text-gray-400 flex-grow">{exclusion.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

