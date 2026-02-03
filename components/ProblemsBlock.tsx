'use client'

import { motion } from 'framer-motion'
import { ProblemIcon, ChaosIcon, PlanIcon, ScaleIcon } from './Icons'
import Card from './Card'

const problems = [
  {
    title: 'Продажи держатся на одном человеке',
    description: 'Продажи завязаны на собственнике или одном сильном менеджере. Любой сбой - минус выручка.',
    Icon: ProblemIcon,
  },
  {
    title: 'Нет прозрачной картины по воронке',
    description: 'Вы видите общий итог, но не понимаете, где именно теряются сделки и почему.',
    Icon: ChaosIcon,
  },
  {
    title: 'План есть, но он не управляем',
    description: 'План продаж формально есть, но он не связан с ежедневными действиями команды.',
    Icon: PlanIcon,
  },
  {
    title: 'Рост требует всё больше вашего участия',
    description: 'Любой рост выручки требует ручного управления, контроля и постоянного "тушения пожаров".',
    Icon: ScaleIcon,
  },
]

export default function ProblemsBlock() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark-gray via-gray-800 to-gray-700">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
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
          Признаки, что отдел продаж перестал быть управляемым
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-graphite p-6 rounded-3xl border border-gray-700 h-full flex flex-col">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-steel-blue flex-shrink-0">
                  <problem.Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-steel-blue flex-1">{problem.title}</h3>
              </div>
              <p className="text-gray-300 flex-1">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

