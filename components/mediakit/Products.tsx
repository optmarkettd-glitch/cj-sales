'use client'

import { motion } from 'framer-motion'
import Card from '../Card'

const products = [
  {
    title: 'Комплексный аудит отдела продаж',
    description: 'Полная диагностика процессов, воронки, команды и инструментов. Выявление точек роста и узких мест.',
    format: 'Онлайн/офлайн, 5-10 дней',
    result: 'Дорожная карта улучшений с приоритетами',
  },
  {
    title: 'Внедрение изменений',
    description: 'Поэтапное внедрение улучшений: процессы, KPI, мотивация, регламенты, обучение команды.',
    format: 'Проект 30-90 дней',
    result: 'Работающая система продаж',
  },
  {
    title: 'Запуск отдела продаж / филиала',
    description: 'Построение отдела с нуля: подбор команды, настройка процессов, внедрение CRM, обучение.',
    format: 'Проект 60-120 дней',
    result: 'Автономный отдел продаж',
  },
  {
    title: 'РОП на аутсорсе',
    description: 'Временное управление отделом продаж: контроль процессов, развитие команды, достижение KPI.',
    format: 'От 3 месяцев',
    result: 'Стабильные результаты и передача системы',
  },
  {
    title: 'Менторство руководителей',
    description: 'Индивидуальная работа с руководителем отдела продаж: развитие навыков управления, решение задач.',
    format: 'Регулярные сессии',
    result: 'Рост компетенций руководителя',
  },
  {
    title: 'Корпоративные тренинги',
    description: 'Обучение команды продаж: техники продаж, работа с возражениями, закрытие сделок.',
    format: 'Однодневные или модульные программы',
    result: 'Повышение эффективности команды',
  },
]

export default function Products() {
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
          Продукты
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-light-gray p-6 rounded-2xl border border-gray-200 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-steel-blue">{product.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
                <div className="pt-4 border-t border-gray-300 space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Формат:</p>
                    <p className="text-sm text-gray-700">{product.format}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Результат:</p>
                    <p className="text-sm text-gray-700">{product.result}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








