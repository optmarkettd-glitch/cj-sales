'use client'

import { motion } from 'framer-motion'

const funnelStages = [
  { name: 'Lead', label: 'Лиды', width: 100, color: 'rgba(74, 111, 165, 0.4)' },
  { name: 'Qualification', label: 'Квалификация', width: 70, color: 'rgba(74, 111, 165, 0.5)' },
  { name: 'Proposal', label: 'Предложение', width: 45, color: 'rgba(74, 111, 165, 0.6)' },
  { name: 'Close', label: 'Сделка', width: 25, color: 'rgba(74, 111, 165, 0.8)' },
]

export default function SalesFunnelVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-end opacity-40 pointer-events-none overflow-hidden pr-8 lg:pr-16">
      <div className="w-full max-w-md lg:max-w-lg">
        {/* Воронка */}
        <div className="relative flex flex-col items-center gap-3">
          {funnelStages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
              style={{
                width: `${stage.width}%`,
                transformOrigin: 'center',
              }}
            >
              {/* Основной блок этапа */}
              <div
                className="h-24 rounded-xl border-2 border-steel-blue/40 relative overflow-hidden backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${stage.color} 0%, ${stage.color}80 50%, transparent 100%)`,
                  boxShadow: `0 8px 32px ${stage.color}60, inset 0 0 20px ${stage.color}40`,
                }}
              >
                {/* Внутренний glow эффект */}
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: `radial-gradient(ellipse at center, ${stage.color}, transparent 60%)`,
                  }}
                />
                
                {/* Метка этапа */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-steel-blue/80 uppercase tracking-widest drop-shadow-lg">
                    {stage.label}
                  </span>
                </div>
              </div>

              {/* Стрелка вниз (кроме последнего этапа) */}
              {index < funnelStages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + 0.3,
                  }}
                  className="flex justify-center mt-3"
                >
                  <svg
                    className="w-6 h-6 text-steel-blue/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Декоративные элементы - тонкие линии по бокам */}
        <div className="absolute top-1/4 left-0 w-full h-1/2 pointer-events-none">
          {/* Левая линия */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-steel-blue/30 to-transparent"
          />
          {/* Правая линия */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute right-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-steel-blue/30 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}

