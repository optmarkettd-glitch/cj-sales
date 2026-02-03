'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from './Card'

const scenarios = [
  {
    title: 'Запуск отдела продаж с нуля',
    description: 'Когда продажи держатся на собственнике или хаотичны. Выстраиваем систему и доводим до первых результатов.',
    link: '/services#zapusk',
  },
  {
    title: 'Модернизация отдела продаж',
    description: 'Отдел продаж работает, но не выполняет план. Пересобираем процессы, KPI и управление без остановки продаж.',
    link: '/services#modern',
  },
  {
    title: 'РОП на аутсорсе',
    description: 'Берём управление отделом продаж на себя. Контроль, планёрки, дисциплина и рост без найма в штат.',
    link: '/services#rop',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Услуги
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-dark-gray p-8 rounded-3xl border border-gray-700 flex flex-col">
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-steel-blue">{scenario.title}</h3>
                <p className="text-gray-300 leading-relaxed">{scenario.description}</p>
              </div>

              <div className="pt-6 border-t border-gray-700 mt-auto">
                <Link
                  href={scenario.link}
                  className="block w-full px-6 py-3 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-center"
                >
                  Узнать подробнее
                </Link>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Блоки тренингов */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center mt-16"
        >
          Тренинги
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-dark-gray p-8 rounded-3xl border border-gray-700 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-steel-blue">Тренинги для руководителей</h3>
                <p className="text-gray-400 text-sm mb-4">Развитие управленческих компетенций</p>
                <p className="text-gray-300 mb-4">
                  Обучение руководителей отдела продаж эффективному управлению командой, процессам и результатам.
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Практические инструменты управления, которые дают измеримый результат.
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Что входит:</p>
                <ul className="space-y-2">
                  {[
                    'Управление командой продаж',
                    'Постановка и контроль KPI',
                    'Проведение планерок и разборов',
                    'Мотивация и развитие команды',
                    'Работа с возражениями и сложными ситуациями',
                    'Аналитика и отчётность',
                  ].map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="text-steel-blue mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-steel-blue">Индивидуально</p>
                    <p className="text-xs text-gray-500">Стоимость</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-300">1-3 дня</p>
                    <p className="text-xs text-gray-500">Формат</p>
                  </div>
                </div>
                <Link
                  href="/trainings"
                  className="block w-full px-6 py-3 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-center"
                >
                  Узнать подробнее
                </Link>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-dark-gray p-8 rounded-3xl border border-gray-700 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-steel-blue">Тренинги для менеджеров</h3>
                <p className="text-gray-400 text-sm mb-4">Повышение эффективности продаж</p>
                <p className="text-gray-300 mb-4">
                  Практические тренинги для менеджеров по продажам: техники, скрипты, работа с клиентами.
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Отработка навыков на практике, а не теория в аудитории.
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Что входит:</p>
                <ul className="space-y-2">
                  {[
                    'Техники продаж и работа с возражениями',
                    'Холодные звонки и первичный контакт',
                    'Презентация и работа с клиентом',
                    'Закрытие сделок',
                    'Работа с воронкой продаж',
                    'CRM и инструменты продаж',
                  ].map((feature, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <span className="text-steel-blue mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-steel-blue">Индивидуально</p>
                    <p className="text-xs text-gray-500">Стоимость</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-300">1-2 дня</p>
                    <p className="text-xs text-gray-500">Формат</p>
                  </div>
                </div>
                <Link
                  href="/trainings"
                  className="block w-full px-6 py-3 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-center"
                >
                  Узнать подробнее
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-graphite transition-all font-medium text-lg mr-4"
          >
            Посмотреть все услуги
          </Link>
          <Link
            href="/trainings"
            className="inline-block px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-graphite transition-all font-medium text-lg"
          >
            Все тренинги
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

