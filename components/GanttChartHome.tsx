'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GanttChart from './GanttChart'

export default function GanttChartHome() {
  const [isOpenLaunch, setIsOpenLaunch] = useState(false)
  const [isOpenModernization, setIsOpenModernization] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark-gray via-gray-800 to-gray-700">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          План реализации проекта
        </motion.h2>
        
        <div className="space-y-6">
          {/* Первый Accordion - Запуск отдела продаж */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-graphite rounded-3xl border-2 border-steel-blue shadow-xl overflow-hidden"
          >
            <button
              onClick={() => setIsOpenLaunch(!isOpenLaunch)}
              className="w-full px-8 py-6 flex items-center justify-between cursor-pointer hover:bg-steel-blue/10 transition-colors duration-200"
              aria-expanded={isOpenLaunch}
              aria-label={isOpenLaunch ? 'Свернуть запуск отдела продаж' : 'Развернуть запуск отдела продаж'}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Запуск отдела продаж под ключ
              </h3>
              <motion.div
                animate={{ rotate: isOpenLaunch ? 180 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex-shrink-0 ml-4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-steel-blue"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpenLaunch && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-0">
                    <GanttChart increasePrice={true} showTotal={false} darkMode={true} variant="launch" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Второй Accordion - Модернизация отдела продаж */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-graphite rounded-3xl border-2 border-steel-blue shadow-xl overflow-hidden"
          >
            <button
              onClick={() => setIsOpenModernization(!isOpenModernization)}
              className="w-full px-8 py-6 flex items-center justify-between cursor-pointer hover:bg-steel-blue/10 transition-colors duration-200"
              aria-expanded={isOpenModernization}
              aria-label={isOpenModernization ? 'Свернуть модернизацию отдела продаж' : 'Развернуть модернизацию отдела продаж'}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Модернизация отдела продаж
              </h3>
              <motion.div
                animate={{ rotate: isOpenModernization ? 180 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex-shrink-0 ml-4"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-steel-blue"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpenModernization && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-0">
                    <GanttChart increasePrice={true} showTotal={false} darkMode={true} variant="modernization" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

