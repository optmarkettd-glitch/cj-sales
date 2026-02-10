'use client'

import { motion } from 'framer-motion'

export default function Geography() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-graphite text-center"
        >
          География работы
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-light-gray p-8 rounded-2xl border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-steel-blue rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M11 20v-5a2 2 0 012-2h2a2 2 0 012 2v5M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0v2m6-2v2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-graphite">Регион работы</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Работаем по всей России. Географические ограничения отсутствуют.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-light-gray p-8 rounded-2xl border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-steel-blue rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-graphite">Форматы работы</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-steel-blue font-bold">•</span>
                <p className="text-gray-700">Онлайн — видеоконференции, удаленная работа</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-steel-blue font-bold">•</span>
                <p className="text-gray-700">Офлайн — выезды в офис клиента, личные встречи</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-steel-blue font-bold">•</span>
                <p className="text-gray-700">Гибридный формат — комбинация онлайн и офлайн</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}








