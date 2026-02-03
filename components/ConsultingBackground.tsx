'use client'

import { motion } from 'framer-motion'

export default function ConsultingBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/10 via-gray-700/5 to-transparent" />
      
      {/* Воронка продаж - главная */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10"
      >
        <svg width="200" height="280" viewBox="0 0 200 280" className="text-steel-blue">
          <text x="100" y="20" textAnchor="middle" className="text-xs font-semibold fill-current opacity-60">Воронка продаж</text>
          
          {/* Этап 1 - Лиды */}
          <motion.g
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              y: [0, -2, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <rect 
              x="20" y="40" width="160" height="40" rx="6" 
              fill="currentColor" 
              opacity="0.3"
            />
          </motion.g>
          <text x="100" y="65" textAnchor="middle" className="text-sm font-bold fill-current opacity-80">1000 Лидов</text>
          <text x="100" y="80" textAnchor="middle" className="text-xs fill-current opacity-60">Конверсия: 10%</text>
          
          {/* Стрелка вниз */}
          <motion.path 
            d="M100 80 L100 100" 
            stroke="currentColor" 
            strokeWidth="3" 
            markerEnd="url(#arrow)"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Этап 2 - Квалификация */}
          <motion.g
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              y: [0, -2, 0],
            }}
            transition={{ duration: 2.5, delay: 0.2, repeat: Infinity }}
          >
            <rect 
              x="40" y="110" width="120" height="35" rx="6" 
              fill="currentColor" 
              opacity="0.4"
            />
          </motion.g>
          <text x="100" y="132" textAnchor="middle" className="text-sm font-bold fill-current opacity-80">100 Квалифицированных</text>
          <text x="100" y="145" textAnchor="middle" className="text-xs fill-current opacity-60">Конверсия: 30%</text>
          
          <motion.path 
            d="M100 145 L100 165" 
            stroke="currentColor" 
            strokeWidth="3" 
            markerEnd="url(#arrow)"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
          />
          
          {/* Этап 3 - Предложения */}
          <motion.g
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              y: [0, -2, 0],
            }}
            transition={{ duration: 2.5, delay: 0.4, repeat: Infinity }}
          >
            <rect 
              x="60" y="175" width="80" height="30" rx="6" 
              fill="currentColor" 
              opacity="0.5"
            />
          </motion.g>
          <text x="100" y="195" textAnchor="middle" className="text-sm font-bold fill-current opacity-80">30 Предложений</text>
          <text x="100" y="210" textAnchor="middle" className="text-xs fill-current opacity-60">Конверсия: 50%</text>
          
          <motion.path 
            d="M100 210 L100 230" 
            stroke="currentColor" 
            strokeWidth="3" 
            markerEnd="url(#arrow)"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          
          {/* Этап 4 - Сделки */}
          <motion.g
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              y: [0, -2, 0],
            }}
            transition={{ duration: 2.5, delay: 0.6, repeat: Infinity }}
          >
            <rect 
              x="75" y="240" width="50" height="25" rx="6" 
              fill="currentColor" 
              opacity="0.6"
            />
          </motion.g>
          <text x="100" y="257" textAnchor="middle" className="text-sm font-bold fill-current opacity-80">15 Сделок</text>
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </motion.div>

      {/* LTV и метрики */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-20"
      >
        <div className="bg-steel-blue/10 border border-steel-blue/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="text-steel-blue text-lg font-bold mb-2">LTV</div>
          <div className="text-2xl font-bold text-steel-blue mb-1">₽450K</div>
          <div className="text-xs text-gray-600 opacity-70">Lifetime Value</div>
          <div className="mt-2 text-xs text-green-600 font-semibold">↑ +25%</div>
        </div>
      </motion.div>

      {/* CAC и ROI */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -5, 0],
        }}
        transition={{ 
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-64 right-32"
      >
        <div className="bg-steel-blue/10 border border-steel-blue/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="text-steel-blue text-sm font-semibold mb-1">CAC</div>
          <div className="text-xl font-bold text-steel-blue mb-2">₽15K</div>
          <div className="text-xs text-steel-blue font-semibold mb-1">ROI</div>
          <div className="text-lg font-bold text-green-600">300%</div>
        </div>
      </motion.div>

      {/* График конверсии */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          x: [0, 5, 0],
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-32"
      >
        <svg width="180" height="120" viewBox="0 0 180 120" className="text-steel-blue">
          <text x="90" y="15" textAnchor="middle" className="text-xs font-semibold fill-current opacity-60">Динамика конверсии</text>
          <line x1="20" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <line x1="20" y1="100" x2="20" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <polyline
            points="25,90 45,75 65,60 85,50 105,45 125,40 145,35 155,32"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
          {[
            { x: 25, y: 90, label: '8%' },
            { x: 45, y: 75, label: '12%' },
            { x: 65, y: 60, label: '18%' },
            { x: 85, y: 50, label: '22%' },
            { x: 105, y: 45, label: '25%' },
            { x: 125, y: 40, label: '28%' },
            { x: 145, y: 35, label: '32%' },
            { x: 155, y: 32, label: '35%' },
          ].map((point, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="currentColor"
                animate={{
                  r: [4, 7, 4],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
              <text x={point.x} y={point.y - 8} textAnchor="middle" className="text-xs fill-current opacity-70">{point.label}</text>
            </motion.g>
          ))}
        </svg>
      </motion.div>

      {/* KPI панель */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-24"
      >
        <div className="bg-steel-blue/10 border border-steel-blue/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="text-steel-blue text-sm font-semibold mb-3">KPI Отдела продаж</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Средний чек</span>
              <span className="text-sm font-bold text-steel-blue">₽125K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Цикл сделки</span>
              <span className="text-sm font-bold text-steel-blue">21 день</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Конверсия</span>
              <span className="text-sm font-bold text-green-600">35% ↑</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Выручка/мес</span>
              <span className="text-sm font-bold text-steel-blue">₽2.5M</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Метрики воронки */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          rotate: [-2, 2, -2],
        }}
        transition={{ 
          duration: 4,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-1/4"
      >
        <div className="bg-steel-blue/10 border border-steel-blue/30 rounded-xl p-4 backdrop-blur-sm">
          <div className="text-steel-blue text-sm font-semibold mb-2">Метрики воронки</div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Лиды → Квалификация</span>
              <span className="font-semibold text-steel-blue">10%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Квалификация → Предложение</span>
              <span className="font-semibold text-steel-blue">30%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Предложение → Сделка</span>
              <span className="font-semibold text-green-600">50%</span>
            </div>
            <div className="mt-2 pt-2 border-t border-steel-blue/20">
              <div className="flex justify-between">
                <span className="text-gray-600 font-semibold">Общая конверсия</span>
                <span className="font-bold text-steel-blue text-sm">1.5%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Диаграмма источников трафика */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 3.5,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4"
      >
        <svg width="140" height="140" viewBox="0 0 140 140" className="text-steel-blue">
          <text x="70" y="20" textAnchor="middle" className="text-xs font-semibold fill-current opacity-60">Источники трафика</text>
          <motion.circle
            cx="70"
            cy="70"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            opacity="0.2"
          />
          <motion.circle
            cx="70"
            cy="70"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray="94 188"
            strokeDashoffset="47"
            opacity="0.5"
            transform="rotate(-90 70 70)"
            animate={{ strokeDashoffset: [47, 0, 47] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <text x="70" y="75" textAnchor="middle" className="text-sm font-bold fill-current opacity-70">50%</text>
          <text x="70" y="90" textAnchor="middle" className="text-xs fill-current opacity-60">Органика</text>
        </svg>
      </motion.div>

      {/* Дополнительные метрики */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -3, 0],
        }}
        transition={{ 
          duration: 3,
          delay: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/3"
      >
        <div className="bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-3 backdrop-blur-sm">
          <div className="text-steel-blue text-xs font-semibold mb-1">Средний LTV</div>
          <div className="text-lg font-bold text-steel-blue">₽450K</div>
          <div className="text-xs text-gray-600 opacity-70 mt-1">CAC: ₽15K</div>
          <div className="text-xs text-green-600 font-semibold mt-1">LTV:CAC = 30:1</div>
        </div>
      </motion.div>

      {/* Линии связей */}
      <motion.svg
        className="absolute inset-0 w-full h-full text-steel-blue opacity-20"
        viewBox="0 0 1920 1080"
      >
        <motion.path
          d="M200 200 Q400 300 600 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{ 
            strokeDashoffset: [0, 8, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M1200 300 Q1400 400 1600 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{ 
            strokeDashoffset: [0, 8, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 3, delay: 1, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  )
}
