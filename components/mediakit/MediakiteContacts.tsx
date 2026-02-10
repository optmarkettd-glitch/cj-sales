'use client'

import { motion } from 'framer-motion'

export default function MediakiteContacts() {
  const handleCTAClick = () => {
    const modal = document.getElementById('diagnostic-modal')
    if (modal) {
      (modal as HTMLDialogElement).showModal()
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-light-gray p-12 rounded-3xl border-2 border-steel-blue"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-graphite text-center">
            Контакты
          </h2>
          
          <div className="space-y-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Телефон</p>
              <a 
                href="tel:+79139459666" 
                className="text-steel-blue hover:text-steel-blue/80 transition-colors font-medium"
              >
                +7 913 945 96 66
              </a>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Email</p>
              <a 
                href="mailto:info@cj-sales.ru" 
                className="text-steel-blue hover:text-steel-blue/80 transition-colors font-medium"
              >
                info@cj-sales.ru
              </a>
            </div>
            
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Telegram</p>
              <a 
                href="https://t.me/workshop_with_Zhirnyakova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-steel-blue hover:text-steel-blue/80 transition-colors font-medium"
              >
                Мастерская руководителей с Жирняковой
              </a>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="px-8 py-4 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-lg"
            >
              Записаться на бесплатную диагностику
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

