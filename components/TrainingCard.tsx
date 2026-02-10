'use client'

import { motion } from 'framer-motion'
import Card from './Card'

interface TrainingCardProps {
  training: {
    title: string
    subtitle: string
    description: string
    details: string
    forWho: string
    whatWeDo: string[]
    result: string
    format: string
    price: string
    duration: string
  }
  index: number
}

export default function TrainingCard({ training, index }: TrainingCardProps) {
  const handleCTAClick = () => {
    const modal = document.getElementById('diagnostic-modal')
    if (modal) {
      (modal as HTMLDialogElement).showModal()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="bg-light-gray p-8 sm:p-12 rounded-3xl border border-gray-200">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-steel-blue">{training.title}</h2>
          <p className="text-xl text-gray-600 mb-4">{training.subtitle}</p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">{training.description}</p>
          <p className="text-gray-600 leading-relaxed">{training.details}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-graphite">Для кого</h3>
          <p className="text-gray-700 leading-relaxed">{training.forWho}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-graphite">Что входит</h3>
          <ul className="space-y-3">
            {training.whatWeDo.map((item, i) => (
              <li key={i} className="text-gray-700 flex items-start leading-relaxed">
                <span className="text-steel-blue mr-3 font-bold text-xl">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-graphite">Результат</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">{training.result}</p>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-graphite">Формат</h4>
            <p className="text-gray-700">{training.format}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-graphite">Длительность</h4>
            <p className="text-gray-700">{training.duration}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-3xl font-bold text-steel-blue mb-1">{training.price}</p>
              <p className="text-sm text-gray-600">Стоимость</p>
            </div>
            <button
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-8 py-4 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-lg"
            >
              Записаться на тренинг
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}








