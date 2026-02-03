'use client'

import { motion } from 'framer-motion'
import Card from '../Card'

const services = [
  'Диагностика отделов продаж',
  'Аудиты бизнес-процессов',
  'Запуск отделов продаж и филиалов',
  'Пересборка и оптимизация ОП',
  'KPI, мотивация, регламенты',
  'Наставничество руководителей',
  'Менторинг собственников',
  'Корпоративные тренинги',
  'Стратегические сессии',
]

export default function WhatWeHelp() {
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
          В чем мы помогаем
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="bg-white p-6 rounded-2xl border border-gray-200">
                <p className="text-gray-700 font-medium">{service}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








