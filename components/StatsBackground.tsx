'use client'

import { motion } from 'framer-motion'

export default function StatsBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
      <div className="w-full h-full max-w-7xl mx-auto px-8 relative">
        {/* Градиентные пятна */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-steel-blue rounded-full blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-steel-blue rounded-full blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Графики роста */}
        <motion.div
          className="absolute top-16 left-16"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="150" height="100" viewBox="0 0 150 100" className="text-steel-blue">
            <line x1="10" y1="90" x2="140" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <line x1="10" y1="90" x2="10" y2="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <motion.polyline
              points="20,80 40,70 60,55 80,40 100,30 120,20 130,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {[
              { x: 20, y: 80 },
              { x: 40, y: 70 },
              { x: 60, y: 55 },
              { x: 80, y: 40 },
              { x: 100, y: 30 },
              { x: 120, y: 20 },
              { x: 130, y: 15 },
            ].map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="currentColor"
                animate={{
                  r: [4, 7, 4],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Круговая диаграмма */}
        <motion.div
          className="absolute top-32 right-20"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-steel-blue">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="251 251"
              strokeDashoffset="63"
              opacity="0.5"
              transform="rotate(-90 50 50)"
              animate={{
                strokeDashoffset: [63, 0, 63],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <text x="50" y="55" textAnchor="middle" className="text-sm font-bold" opacity="0.6">75%</text>
          </svg>
        </motion.div>

        {/* Столбчатая диаграмма */}
        <motion.div
          className="absolute bottom-24 left-1/4"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-steel-blue">
            <line x1="10" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <line x1="10" y1="70" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            {[
              { x: 20, height: 30 },
              { x: 40, height: 45 },
              { x: 60, height: 55 },
              { x: 80, height: 60 },
            ].map((bar, i) => (
              <motion.rect
                key={i}
                x={bar.x - 8}
                y={70 - bar.height}
                width="16"
                height={bar.height}
                fill="currentColor"
                opacity="0.4"
                rx="2"
                animate={{
                  height: [bar.height * 0.8, bar.height, bar.height * 0.8],
                  opacity: [0.3, 0.6, 0.3],
                  y: [70 - bar.height * 0.8, 70 - bar.height, 70 - bar.height * 0.8],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Процентные индикаторы */}
        <motion.div
          className="absolute bottom-32 right-1/3"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-steel-blue">
            <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.2" />
            <motion.circle
              cx="40"
              cy="40"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="188 188"
              strokeDashoffset="47"
              opacity="0.5"
              transform="rotate(-90 40 40)"
              animate={{
                strokeDashoffset: [47, 0, 47],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <text x="40" y="45" textAnchor="middle" className="text-xs font-bold" opacity="0.6">90%</text>
          </svg>
        </motion.div>

        {/* Линии тренда */}
        <motion.svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-steel-blue"
          viewBox="0 0 256 256"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M20 200 L60 160 L100 120 L140 80 L180 60 L220 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{
              strokeDashoffset: [0, 8, 0],
              pathLength: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>
    </div>
  )
}








