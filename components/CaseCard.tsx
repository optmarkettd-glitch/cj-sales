'use client'

import { motion } from 'framer-motion'
import Card from './Card'
import Image from 'next/image'

interface CaseCardProps {
  caseItem: {
    company: string
    industry: string
    period?: string
    image?: string | null
    context: string
    was: string[]
    did: string[]
    became: string[]
    growth: Record<string, string>
  }
  index: number
}

export default function CaseCard({ caseItem, index }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-light-gray p-8 sm:p-12 rounded-3xl relative overflow-hidden">
      {/* Логотип как водяной знак на фоне - на всю карточку */}
      {caseItem.image && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
          <div className="relative w-full h-full">
            <Image
              src={caseItem.image}
              alt={caseItem.company}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      )}
      
      <div className="mb-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-steel-blue">{caseItem.company}</h2>
        <p className="text-gray-600">{caseItem.industry}</p>
        {caseItem.period && (
          <p className="text-gray-500 text-sm mt-1">{caseItem.period}</p>
        )}
      </div>

      <div className="mb-8 relative z-10">
        <h3 className="text-lg font-semibold mb-2 text-graphite">Контекст:</h3>
        <p className="text-gray-700">{caseItem.context}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
        <div className="bg-white p-6 rounded-3xl border-l-4 border-red-500">
          <h3 className="text-lg font-semibold mb-4 text-graphite">Было:</h3>
          <ul className="space-y-2">
            {caseItem.was.map((item, i) => (
              <li key={i} className="text-gray-700 text-sm">• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold mb-4 text-graphite">Сделали:</h3>
          <ul className="space-y-2">
            {caseItem.did.map((item, i) => (
              <li key={i} className="text-gray-700 text-sm">• {item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border-l-4 border-green-500">
          <h3 className="text-lg font-semibold mb-4 text-graphite">Стало:</h3>
          <ul className="space-y-2">
            {caseItem.became.map((item, i) => (
              <li key={i} className="text-gray-700 text-sm">• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-steel-blue text-white p-6 rounded-3xl relative z-10">
        <h3 className="text-lg font-semibold mb-4">Цифры роста:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {Object.entries(caseItem.growth)
            .filter(([key]) => key !== 'details' && key !== 'period')
            .map(([key, value]) => (
              <div key={key}>
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-sm text-gray-300 capitalize">{key}</p>
              </div>
            ))}
        </div>
        {caseItem.growth.details && (
          <div className="mt-4 pt-4 border-t border-steel-blue/30">
            <p className="text-sm text-gray-200">{caseItem.growth.details}</p>
          </div>
        )}
        {caseItem.growth.period && (
          <div className="mt-2">
            <p className="text-xs text-gray-300">{caseItem.growth.period}</p>
          </div>
        )}
      </div>
      </Card>
    </motion.div>
  )
}

