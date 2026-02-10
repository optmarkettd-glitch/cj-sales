'use client'

import { motion } from 'framer-motion'

export default function FlagshipProduct() {
  const handleCTAClick = () => {
    const modal = document.getElementById('diagnostic-modal')
    if (modal) {
      (modal as HTMLDialogElement).showModal()
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-graphite p-8 sm:p-12 rounded-3xl border-2 border-steel-blue"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-steel-blue">
              Из хаоса в систему
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Отдел продаж под ключ
            </h3>
            <div className="space-y-4 mb-8 text-gray-300">
              <p className="text-lg">
                <span className="text-steel-blue font-bold">90-дневная программа</span> внедрения системы продаж с нуля или модернизации существующей.
              </p>
              <p className="text-lg">
                Мы не просто консультируем. Мы строим работающую систему, передаём её вам и уходим, когда она работает самостоятельно.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-xl font-bold text-white mb-2">Что входит:</p>
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                  <li>Диагностика текущей ситуации</li>
                  <li>Проектирование воронки продаж</li>
                  <li>Настройка процессов и KPI</li>
                  <li>Подбор и обучение команды</li>
                  <li>Внедрение CRM и инструментов</li>
                  <li>Передача системы и документов</li>
                </ul>
              </div>
            </div>
            <button
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-8 py-4 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-lg"
            >
              Узнать подробнее
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

