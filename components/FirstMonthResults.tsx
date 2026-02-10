'use client'

import { motion } from 'framer-motion'
import { FunnelIcon, CheckIcon, TargetIcon, LightningIcon } from './Icons'
import Card from './Card'

const results = [
  {
    title: 'Прозрачную картину текущих продаж',
    description: 'Понятную схему воронки с цифрами: где именно теряются сделки, на каких этапах и по каким причинам.',
    Icon: FunnelIcon,
  },
  {
    title: 'Чёткую модель отдела продаж',
    description: 'Зафиксированную структуру отдела: роли, зоны ответственности и точки управленческого контроля без дублирования и хаоса.',
    Icon: CheckIcon,
  },
  {
    title: 'Управляемый план продаж',
    description: 'План, связанный с реальными действиями команды: звонками, встречами, конверсиями и загрузкой менеджеров, а не формальной цифрой.',
    Icon: TargetIcon,
  },
  {
    title: 'Понятные решения для следующих шагов',
    description: 'Чёткое понимание, что делать дальше: усиливать текущую команду, менять структуру или пересобирать отдел продаж.',
    Icon: LightningIcon,
  },
]

export default function FirstMonthResults() {
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
          Что клиент получает уже в первый месяц
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-dark-gray p-6 rounded-3xl hover:bg-dark-gray/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-steel-blue flex-shrink-0">
                  <result.Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold">{result.title}</h3>
              </div>
              <p className="text-gray-400">{result.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

