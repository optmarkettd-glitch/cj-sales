'use client'

import { motion } from 'framer-motion'
import Card from '../Card'

const cases = [
  {
    industry: 'Оптовая торговля',
    what: 'Провели аудит отдела продаж, перестроили процессы, внедрили KPI и систему контроля.',
    result: 'Рост выручки +25% за 4 месяца. План выполняется стабильно.',
  },
  {
    industry: 'Агентство недвижимости',
    what: 'Запустили отдел продаж с нуля, обучили команду, настроили CRM и процессы.',
    result: 'Отдел из 5 менеджеров работает автономно. Выручка +180% за 6 месяцев.',
  },
  {
    industry: 'Digital-агентство',
    what: 'Модернизировали отдел продаж, оптимизировали воронку, внедрили систему мотивации.',
    result: 'Конверсия выросла в 2.5 раза. Текучка снизилась на 80%.',
  },
  {
    industry: 'IT-компания',
    what: 'Построили отдел продаж для B2B-продукта, обучили команду, настроили процессы.',
    result: 'Выручка +150% за 6 месяцев. Отдел масштабируется.',
  },
  {
    industry: 'Туризм',
    what: 'Запустили филиал, построили отдел продаж, внедрили систему управления.',
    result: 'Филиал вырос с 800 тыс до 3 млн ₽ за 4 месяца.',
  },
]

export default function MediakiteCases() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-graphite text-center"
        >
          Кейсы
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-light-gray p-6 rounded-2xl border border-gray-200 h-full flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-steel-blue">{caseItem.industry}</h3>
                <div className="mb-4 flex-grow">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Что сделали:</p>
                  <p className="text-gray-700 text-sm mb-4">{caseItem.what}</p>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Результат:</p>
                  <p className="text-graphite font-medium text-sm">{caseItem.result}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








