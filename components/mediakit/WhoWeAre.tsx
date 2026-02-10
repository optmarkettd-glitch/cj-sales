'use client'

import { motion } from 'framer-motion'

export default function WhoWeAre() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-graphite">Кто мы такие</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            C&J Consulting — практическая консалтинговая команда, которая помогает бизнесу
            выстраивать системные продажи, управляемые отделы, процессы и команды «под ключ».
            Мы работаем в связке <strong className="text-graphite">СТРАТЕГИЯ + ПРОДАЖИ + УПРАВЛЕНИЕ</strong>, чтобы давать измеримый результат.
          </p>
        </motion.div>
      </div>
    </section>
  )
}








