'use client'

import { motion } from 'framer-motion'

export default function MediakiteHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light-gray to-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-graphite">
                <span className="text-aura inline-block" data-text="C&J">C&J</span>{' '}
                <span className="text-aura inline-block" data-text="Consulting">Consulting</span>
              </h1>
          <p className="text-2xl sm:text-3xl text-gray-700 mb-4 font-medium">
            <span className="text-aura inline-block" data-text="Практический">Практический</span>{' '}
            <span className="text-aura inline-block" data-text="консалтинг">консалтинг</span>{' '}
            <span className="text-aura inline-block" data-text="по">по</span>{' '}
            <span className="text-aura inline-block" data-text="построению">построению</span>{' '}
            <span className="text-aura inline-block" data-text="и">и</span>{' '}
            <span className="text-aura inline-block" data-text="модернизации">модернизации</span>{' '}
            <span className="text-aura inline-block" data-text="отделов">отделов</span>{' '}
            <span className="text-aura inline-block" data-text="продаж">продаж</span>
          </p>
          <p className="text-xl sm:text-2xl text-steel-blue font-bold">
            От хаоса к прогнозируемой выручке
          </p>
        </motion.div>
      </div>
    </section>
  )
}

