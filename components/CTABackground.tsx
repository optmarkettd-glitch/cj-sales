'use client'

import { motion } from 'framer-motion'

export default function CTABackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none overflow-hidden">
      <div className="w-full h-full max-w-4xl mx-auto relative">
        {/* Градиентные акценты */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-72 h-72 bg-steel-blue rounded-full blur-3xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-steel-blue rounded-full blur-3xl"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Схема процесса - стрелки */}
        <motion.svg
          className="absolute top-1/4 left-1/4 w-32 h-32 text-steel-blue"
          viewBox="0 0 128 128"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M20 64 L100 64"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrowhead-cta)"
            animate={{
              pathLength: [0.3, 1, 0.3],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <marker id="arrowhead-cta" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
              <polygon points="0 0, 8 2, 0 4" fill="currentColor" />
            </marker>
          </defs>
        </motion.svg>

        {/* Схема процесса - блоки */}
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="100" height="60" viewBox="0 0 100 60" className="text-steel-blue">
            <motion.rect
              x="0"
              y="0"
              width="30"
              height="20"
              rx="4"
              fill="currentColor"
              opacity="0.3"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <text x="15" y="13" textAnchor="middle" className="text-xs fill-current opacity-0.6">Шаг 1</text>
            
            <motion.path
              d="M30 10 L40 10"
              stroke="currentColor"
              strokeWidth="2"
              markerEnd="url(#arrowhead-cta2)"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.rect
              x="40"
              y="0"
              width="30"
              height="20"
              rx="4"
              fill="currentColor"
              opacity="0.3"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                x: [40, 42, 40],
              }}
              transition={{
                duration: 2.5,
                delay: 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <text x="55" y="13" textAnchor="middle" className="text-xs fill-current opacity-0.6">Шаг 2</text>
            
            <motion.path
              d="M70 10 L80 10"
              stroke="currentColor"
              strokeWidth="2"
              markerEnd="url(#arrowhead-cta2)"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.rect
              x="20"
              y="30"
              width="40"
              height="25"
              rx="5"
              fill="currentColor"
              opacity="0.4"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                delay: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <text x="40" y="46" textAnchor="middle" className="text-xs font-semibold fill-current opacity-0.7">Результат</text>
            
            <motion.path
              d="M40 20 L40 30"
              stroke="currentColor"
              strokeWidth="2"
              markerEnd="url(#arrowhead-cta2)"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                delay: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <defs>
              <marker id="arrowhead-cta2" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </motion.div>

        {/* Круговые элементы - акцент */}
        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-steel-blue">
            <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <motion.circle
              cx="30"
              cy="30"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="157 157"
              strokeDashoffset="39"
              opacity="0.5"
              transform="rotate(-90 30 30)"
              animate={{
                strokeDashoffset: [39, 0, 39],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>

        {/* Точки соединения */}
        {[
          { left: '20%', top: '30%' },
          { left: '50%', top: '25%' },
          { left: '70%', top: '35%' },
          { left: '40%', top: '60%' },
        ].map((point, i) => (
          <motion.div
            key={i}
            className="absolute text-steel-blue"
            style={{ left: point.left, top: point.top }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-current" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}








