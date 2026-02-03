'use client'

import { motion } from 'framer-motion'
import Card from './Card'

interface ServiceStage {
  name: string
  work: string[]
  duration: string
  hours: string
  cost: string
  comment: string
}

interface Service {
  title: string
  forWho: string
  whatWeDo?: string[]
  result?: string
  format?: string
  price?: string
  stages?: ServiceStage[]
}

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-light-gray p-8 sm:p-12 rounded-3xl border-l-4 border-steel-blue">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-steel-blue">{service.title}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-graphite">Для кого:</h3>
          <p className="text-gray-700">{service.forWho}</p>
        </div>
        {service.stages && service.stages.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold mb-3 text-graphite">Этапы работы:</h3>
            <div className="space-y-4">
              {service.stages.map((stage, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-3xl border border-gray-200"
                >
                  <div className="mb-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                    <h4 className="text-lg font-semibold text-graphite">
                      {stage.name}
                    </h4>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-steel-blue/10">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-steel-blue/80">
                        Стоимость
                      </span>
                      <span
                        className="text-xl sm:text-2xl font-bold text-aura"
                        data-text={stage.cost}
                      >
                        {stage.cost}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Содержание работ:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {stage.work.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="font-semibold">Срок:</span>{' '}
                        {stage.duration}
                      </p>
                      <p>
                        <span className="font-semibold">Комментарий:</span>{' '}
                        {stage.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {service.whatWeDo && service.whatWeDo.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-graphite">Что делаем:</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {service.whatWeDo.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.result && (
              <div className="bg-white p-6 rounded-3xl border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-graphite">Какой результат:</h3>
                <p className="text-gray-700 font-medium">{service.result}</p>
              </div>
            )}

            {service.format && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-graphite">Формат работы:</h3>
                <p className="text-gray-700">{service.format}</p>
              </div>
            )}

            {service.price && (
              <div className="pt-4 border-t border-gray-300">
                <p className="text-2xl font-bold text-steel-blue">{service.price}</p>
                <p className="text-sm text-gray-600">Стоимость</p>
              </div>
            )}
          </>
        )}
      </div>
      </Card>
    </motion.div>
  )
}

