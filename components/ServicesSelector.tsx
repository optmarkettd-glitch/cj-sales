'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceCard from './ServiceCard'
import TariffsContent from './TariffsContent'

interface ServiceStage {
  name: string
  work: string[]
  duration: string
  hours: string
  cost: string
  comment: string
}

interface Service {
  id: string
  title: string
  forWho: string
  stages: ServiceStage[]
}

interface TariffColumn {
  label: string
  values: [string, string, string]
}

interface ServicesSelectorProps {
  services: Service[]
  tariffs?: {
    columns: string[]
    rows: TariffColumn[]
    upsideServices: { name: string; price: string }[]
  }
}

export default function ServicesSelector({
  services,
  tariffs,
}: ServicesSelectorProps) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null)

  // Объединяем услуги и тарифы в один массив для отображения
  const allOptions = [
    ...services,
    ...(tariffs ? [{ id: 'rop', title: 'РОП на аутсорсе' }] : []),
  ]

  return (
    <>
      {/* Блок выбора услуги */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        {allOptions.map((option) => (
          <button
            key={option.id}
            onClick={() =>
              setActiveServiceId(
                activeServiceId === option.id ? null : option.id
              )
            }
            className={`px-8 py-4 rounded-2xl font-medium text-lg transition-all ${
              activeServiceId === option.id
                ? 'bg-steel-blue text-white'
                : 'bg-light-gray text-graphite hover:bg-gray-200'
            }`}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Отображение выбранной услуги */}
      <AnimatePresence mode="wait">
        {activeServiceId && (
          <motion.div
            key={activeServiceId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeServiceId === 'rop' && tariffs ? (
              <TariffsContent
                columns={tariffs.columns}
                rows={tariffs.rows}
                upsideServices={tariffs.upsideServices}
              />
            ) : (
              services
                .filter((s) => s.id === activeServiceId)
                .map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

