'use client'

import { motion } from 'framer-motion'
import Card from '../Card'

const pricing = [
  {
    service: 'Аудит',
    price: '50 000 – 100 000 ₽',
  },
  {
    service: 'Внедрение',
    price: 'Индивидуально',
  },
  {
    service: 'Запуск ОП',
    price: 'От 300 000 ₽',
  },
  {
    service: 'РОП на аутсорсе',
    price: 'От 64 000 ₽ / мес',
  },
  {
    service: 'Менторинг',
    price: 'По запросу',
  },
  {
    service: 'Тренинги',
    price: 'Индивидуально',
  },
]

export default function PricingAndFormats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-graphite text-center"
        >
          Стоимость и форматы
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-graphite">{item.service}</h3>
                  <p className="text-steel-blue font-bold text-lg">{item.price}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








