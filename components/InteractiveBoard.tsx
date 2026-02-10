'use client'

import { motion } from 'framer-motion'
import AnimatedTable from './AnimatedTable'

export default function InteractiveBoard() {
  return (
    <div className="w-full h-full flex items-center justify-center opacity-35 pointer-events-none overflow-hidden">
      <div className="w-full h-full px-8 relative">
        {/* Фон доски */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-700/10 to-transparent rounded-3xl border border-gray-600/20 backdrop-blur-sm"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Элементы на доске */}
        <div className="absolute inset-0 p-8 md:p-12">
          {/* График роста 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.1, 1],
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-12 right-12"
          >
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-steel-blue">
              <line x1="10" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              <line x1="10" y1="70" x2="10" y2="10" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              <polyline
                points="15,65 30,55 45,45 60,35 75,25 90,20 105,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
              {[
                { x: 15, y: 65 },
                { x: 30, y: 55 },
                { x: 45, y: 45 },
                { x: 60, y: 35 },
                { x: 75, y: 25 },
                { x: 90, y: 20 },
                { x: 105, y: 15 },
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="currentColor"
                  animate={{
                    r: [3, 6, 3],
                    opacity: [0.5, 1, 0.5],
                    cy: [point.y, point.y - 2, point.y],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* График роста 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              y: [0, -10, 0],
              x: [0, 3, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 right-32"
          >
            <svg width="100" height="60" viewBox="0 0 100 60" className="text-steel-blue">
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
              <line x1="10" y1="50" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
              <polyline
                points="15,45 25,40 35,35 45,28 55,22 65,18 75,15 85,12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Воронка (упрощенная) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              y: [0, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-24 left-12"
          >
            <svg width="100" height="120" viewBox="0 0 100 120" className="text-steel-blue">
              <motion.rect 
                x="0" y="0" width="100" height="20" rx="4" 
                fill="currentColor" 
                opacity="0.3"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  y: [0, -2, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.rect 
                x="10" y="30" width="80" height="20" rx="4" 
                fill="currentColor" 
                opacity="0.4"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  y: [30, 28, 30],
                }}
                transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
              />
              <motion.rect 
                x="20" y="60" width="60" height="20" rx="4" 
                fill="currentColor" 
                opacity="0.5"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  y: [60, 58, 60],
                }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
              />
              <motion.rect 
                x="35" y="90" width="30" height="20" rx="4" 
                fill="currentColor" 
                opacity="0.6"
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  y: [90, 88, 90],
                }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
              />
              <path d="M50 20 L50 30" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              <path d="M50 50 L50 60" stroke="currentColor" strokeWidth="2" opacity="0.4" />
              <path d="M50 80 L50 90" stroke="currentColor" strokeWidth="2" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Круговая диаграмма */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ 
              opacity: [0.5, 0.9, 0.5],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-24 left-16"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-steel-blue">
              <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.2" />
              <motion.circle
                cx="40"
                cy="40"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="94 188"
                strokeDashoffset="47"
                opacity="0.6"
                transform="rotate(-90 40 40)"
                animate={{ strokeDashoffset: [47, 0, 47] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <text x="40" y="45" textAnchor="middle" className="text-xs font-bold" opacity="0.7">75%</text>
            </svg>
          </motion.div>

          {/* Цифры и метрики */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.15, 1],
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20"
          >
            <div className="text-steel-blue font-bold text-2xl">+150%</div>
            <div className="text-gray-400 text-xs mt-1 opacity-60">Рост выручки</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.15, 1],
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 2.5,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-28 right-28"
          >
            <div className="text-steel-blue font-bold text-xl">90%</div>
            <div className="text-gray-400 text-xs mt-1 opacity-60">Автономность</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 0.9, 0.5],
              x: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 left-1/3"
          >
            <div className="text-steel-blue font-bold text-lg">+180%</div>
            <div className="text-gray-400 text-xs mt-1 opacity-60">Конверсия</div>
          </motion.div>

          {/* Таблица с анимирующимися цифрами */}
          <AnimatedTable />

          {/* Организационная структура отдела */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 3.5,
              delay: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-16 left-1/4"
          >
            <svg width="140" height="100" viewBox="0 0 140 100" className="text-steel-blue">
              {/* Руководитель */}
              <motion.rect
                x="50" y="0" width="40" height="25" rx="4"
                fill="currentColor"
                opacity="0.4"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text x="70" y="15" textAnchor="middle" className="text-xs font-semibold fill-current opacity-0.8">Руководитель</text>
              {/* Менеджеры */}
              <motion.rect x="10" y="40" width="35" height="20" rx="3" fill="currentColor" opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], y: [40, 38, 40] }}
                transition={{ duration: 2.5, delay: 0.2, repeat: Infinity }}
              />
              <motion.rect x="52" y="40" width="35" height="20" rx="3" fill="currentColor" opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], y: [40, 38, 40] }}
                transition={{ duration: 2.5, delay: 0.4, repeat: Infinity }}
              />
              <motion.rect x="95" y="40" width="35" height="20" rx="3" fill="currentColor" opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], y: [40, 38, 40] }}
                transition={{ duration: 2.5, delay: 0.6, repeat: Infinity }}
              />
              {/* Связи */}
              <line x1="70" y1="25" x2="27" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="70" y1="25" x2="69" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="70" y1="25" x2="112" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Стрелки и связи - центральная схема */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              opacity: { duration: 3, repeat: Infinity },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-steel-blue"
            viewBox="0 0 256 256"
          >
            <motion.path
              d="M128 50 L180 100 L128 150 L76 100 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ 
                strokeDashoffset: [0, 8, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.path
              d="M128 50 L128 100 M128 150 L128 100"
              stroke="currentColor"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              animate={{ 
                pathLength: [0.6, 1, 0.6],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
              </marker>
            </defs>
          </motion.svg>

          {/* Дополнительные стрелки */}
          <motion.svg
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              x: [0, 8, 0],
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/3 w-32 h-32 text-steel-blue"
            viewBox="0 0 128 128"
          >
            <motion.path
              d="M20 64 L100 64"
              stroke="currentColor"
              strokeWidth="2"
              markerEnd="url(#arrowhead2)"
              animate={{ 
                pathLength: [0.3, 1, 0.3],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <defs>
              <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="7" refY="2" orient="auto">
                <polygon points="0 0, 8 2, 0 4" fill="currentColor" />
              </marker>
            </defs>
          </motion.svg>

          {/* Процесс управления - блок-схема */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 3.5,
              delay: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-16 right-1/4"
          >
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-steel-blue">
              {/* Блоки процесса */}
              <motion.rect x="0" y="0" width="35" height="20" rx="3" fill="currentColor" opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <text x="17" y="13" textAnchor="middle" className="text-xs fill-current opacity-0.7">Анализ</text>
              
              <motion.rect x="42" y="0" width="35" height="20" rx="3" fill="currentColor" opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], x: [42, 44, 42] }}
                transition={{ duration: 2.5, delay: 0.3, repeat: Infinity }}
              />
              <text x="59" y="13" textAnchor="middle" className="text-xs fill-current opacity-0.7">План</text>
              
              <motion.rect x="85" y="0" width="35" height="20" rx="3" fill="currentColor" opacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], x: [85, 87, 85] }}
                transition={{ duration: 2.5, delay: 0.6, repeat: Infinity }}
              />
              <text x="102" y="13" textAnchor="middle" className="text-xs fill-current opacity-0.7">Внедрение</text>
              
              {/* Стрелки */}
              <motion.path d="M35 10 L42 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)"
                animate={{ pathLength: [0, 1, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path d="M77 10 L85 10" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)"
                animate={{ pathLength: [0, 1, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              />
              
              {/* Результат */}
              <motion.rect x="40" y="35" width="40" height="25" rx="4" fill="currentColor" opacity="0.4"
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, delay: 0.9, repeat: Infinity }}
              />
              <text x="60" y="51" textAnchor="middle" className="text-xs font-semibold fill-current opacity-0.8">Результат</text>
              
              {/* Стрелка к результату */}
              <motion.path d="M60 20 L60 35" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead3)"
                animate={{ pathLength: [0, 1, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
              />
              
              <defs>
                <marker id="arrowhead3" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
                </marker>
              </defs>
            </svg>
          </motion.div>

          {/* Заметки/блоки */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              rotate: [-3, 3, -3],
              y: [0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-24 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-3 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">KPI</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Конверсия ↑</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 3 }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              rotate: [3, -3, 3],
              y: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-24 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-3 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">Система</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Автоматизация</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              rotate: [2, -2, 2],
              x: [0, 3, 0],
            }}
            transition={{ 
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 right-12 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-2 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">CRM</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Внедрение</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.1, 1],
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 2.5,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 left-1/4 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-2 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">Воронка</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Оптимизация</div>
          </motion.div>

          {/* Новые заметки - управление */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              rotate: [-2, 2, -2],
              x: [0, -3, 0],
            }}
            transition={{ 
              duration: 3.5,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-12 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-2 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">Планирование</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Ежедневный контроль</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.08, 1],
              y: [0, 3, 0],
            }}
            transition={{ 
              duration: 3,
              delay: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-16 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-2 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">Обучение</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Тренинги команды</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              rotate: [1, -1, 1],
              x: [0, 4, 0],
            }}
            transition={{ 
              duration: 3.5,
              delay: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-2/3 left-1/3 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-2 transform"
          >
            <div className="text-steel-blue text-xs font-semibold">Мотивация</div>
            <div className="text-gray-300 text-xs mt-1 opacity-60">Система KPI</div>
          </motion.div>

          {/* Метрики управления */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              delay: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/5"
          >
            <div className="bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-2">
              <div className="text-steel-blue text-xs font-semibold">Контроль</div>
              <div className="text-gray-300 text-xs mt-1 opacity-60">Ежедневные метрики</div>
            </div>
          </motion.div>

          {/* Линии и стрелки - сеть связей */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 w-full h-full text-steel-blue"
            viewBox="0 0 800 600"
          >
            {/* Диагональные линии */}
            <motion.line 
              x1="100" y1="100" x2="200" y2="200" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="3 3"
              animate={{ 
                strokeDashoffset: [0, 6, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.line 
              x1="600" y1="150" x2="700" y2="250" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="3 3"
              animate={{ 
                strokeDashoffset: [0, 6, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            />
            <motion.line 
              x1="150" y1="250" x2="250" y2="350" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeDasharray="2 2"
              animate={{ 
                strokeDashoffset: [0, 4, 0],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ duration: 2.5, delay: 1, repeat: Infinity }}
            />
            {/* Горизонтальные линии */}
            <motion.line 
              x1="150" y1="400" x2="300" y2="400" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{ 
                pathLength: [0.4, 1, 0.4],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.line 
              x1="500" y1="350" x2="650" y2="350" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{ 
                pathLength: [0.4, 1, 0.4],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2.5, delay: 0.7, repeat: Infinity }}
            />
            <motion.line 
              x1="200" y1="200" x2="400" y2="200" 
              stroke="currentColor" 
              strokeWidth="1.5"
              animate={{ 
                pathLength: [0.2, 1, 0.2],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
            />
            {/* Вертикальные линии */}
            <motion.line 
              x1="550" y1="100" x2="550" y2="250" 
              stroke="currentColor" 
              strokeWidth="1.5"
              animate={{ 
                pathLength: [0.4, 1, 0.4],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 2.5, delay: 0.3, repeat: Infinity }}
            />
            {/* Дополнительные связи */}
            <motion.line 
              x1="300" y1="150" x2="450" y2="150" 
              stroke="currentColor" 
              strokeWidth="1.5"
              strokeDasharray="2 2"
              animate={{ 
                strokeDashoffset: [0, 4, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
            />
          </motion.svg>

          {/* Дополнительные элементы - точки соединения */}
          {[
            { left: '18%', top: '33%' },
            { left: '50%', top: '33%' },
            { left: '69%', top: '29%' },
            { left: '25%', top: '67%' },
            { left: '72%', top: '58%' },
            { left: '40%', top: '20%' },
            { left: '60%', top: '75%' },
          ].map((point, i) => (
            <motion.div
              key={i}
              className="absolute text-steel-blue"
              style={{ left: point.left, top: point.top }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-current" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

