'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from './Card'
import Image from 'next/image'

const cases = [
  {
    company: 'Агентство Недвижимости "Ривьера"',
    industry: 'B2B производство',
    period: 'Проект: 90 дней',
    image: '/images/AN.jpg',
    was: 'Необходимость систематизации процессов продаж и повышения эффективности отдела.',
    did: 'Провели аудит всех процессов и воронки продаж. Составили дорожную карту и приступили к внедрению. Обновили CRM, выстроили систему планирования и отчётности. Настроили мотивацию, обучили команду и руководителя отдела продаж. Провели серию практических тренингов по продажам и управлению. Все процессы зафиксировали в регламентах.',
    became: 'Через 3 месяца компания вышла на 103% от прогнозных показателей. Отдел полностью перешёл на системную модель работы и стабильно выполняет план.',
    growth: '+30%',
    growthPeriod: 'за полгода',
    details: 'Прирост выручки: +21% за 3 месяца, +30% за полгода',
  },
  {
    company: 'Рекламное агентство "Брусника"',
    industry: 'B2B услуги',
    period: 'Проект: 60 дней',
    image: '/images/brusnika.jpg',
    was: 'Необходимость оптимизации процессов продаж и разгрузки собственника от операционных задач.',
    did: 'Провели аудит воронки продаж, CRM и клиентской базы. Переписали скрипты, стандарты и систему отчётности. Провели обучение менеджеров и внедрили контроль качества звонков. Подготовили старшего менеджера, разгрузив собственника от операционных задач.',
    became: 'Уже через 2 месяца отдел вышел на стабильное выполнение плана. Дисциплина и вовлечённость команды заметно выросли.',
    growth: '+18%',
    growthPeriod: 'за 2 месяца',
    details: 'Рост выручки: +18%. Конверсия обращений увеличилась.',
  },
]

export default function CasesPreview() {
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
          Кейсы
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square"
            >
              <Card className="bg-dark-gray p-8 rounded-3xl border border-gray-700 relative overflow-hidden h-full">
              {/* Логотип как водяной знак на фоне - на всю карточку */}
              {caseItem.image && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
                  <div className="relative w-full h-full">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.company}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">{caseItem.company}</h3>
                <p className="text-gray-400 text-sm mb-1">{caseItem.industry}</p>
                <p className="text-gray-500 text-xs">{caseItem.period}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-semibold">Было:</p>
                  <p className="text-gray-300">{caseItem.was}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-semibold">Что сделали:</p>
                  <p className="text-gray-300">{caseItem.did}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-semibold">Результат:</p>
                  <p className="text-white font-medium">{caseItem.became}</p>
                </div>
                {caseItem.details && (
                  <div className="bg-graphite/50 p-3 rounded-2xl">
                    <p className="text-xs text-gray-400 mb-1">Дополнительные результаты:</p>
                    <p className="text-sm text-gray-300">{caseItem.details}</p>
                  </div>
                )}
              </div>
              
              {/* График роста */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <p className="text-3xl font-bold text-steel-blue mb-1">{caseItem.growth}</p>
                    <p className="text-sm text-gray-400">Рост выручки</p>
                    {caseItem.growthPeriod && (
                      <p className="text-xs text-gray-500 mt-1">{caseItem.growthPeriod}</p>
                    )}
                  </div>
                  {/* Мини-график */}
                  <div className="flex items-end gap-1 h-12">
                    {[0.3, 0.4, 0.5, 0.65, 0.8, 0.95, 1].map((height, i) => (
                      <div
                        key={i}
                        className="w-2 bg-steel-blue rounded-t transition-all duration-500"
                        style={{
                          height: `${height * 100}%`,
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/cases"
            className="inline-block px-8 py-3 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-graphite transition-all font-medium"
          >
            Все кейсы
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

