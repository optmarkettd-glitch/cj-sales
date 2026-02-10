'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const materials = [
  {
    title: 'Практический гайдбук для руководителей отделов продаж',
    description: 'Практические инструменты и методики для эффективного управления отделом продаж.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Полезный гайд по ключевым компетенциям для руководителя + тест',
    description: 'Определите свои сильные стороны и зоны роста как руководителя.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: '5 инструментов нематериальной мотивации для команды',
    description: 'Проверенные способы мотивировать команду без дополнительных затрат.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Чек-лист для проведения эффективных планерок',
    description: 'Структура и алгоритм проведения планерок, которые дают результат.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Гайд по проведению встреч с сотрудником',
    description: 'Как проводить 1-on-1 встречи, которые развивают сотрудников.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Гайд: Инструменты нематериальной мотивации',
    description: 'Расширенный набор инструментов для работы с мотивацией команды.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Гайд: Наведи порядок в себе',
    description: 'Практические советы по организации собственной работы руководителя.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Карта мотиваторов команды (Шаблон)',
    description: 'Готовый шаблон для определения мотиваторов каждого члена команды.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Памятка по онбордингу нового сотрудника',
    description: 'Пошаговый план адаптации нового сотрудника в отделе продаж.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
  {
    title: 'Методика проведения утренних разминок',
    description: 'Как проводить утренние разминки для повышения энергии и вовлеченности команды.',
    link: 'https://drive.google.com/file/d/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC/view?usp=drive_link',
  },
]

export default function MediakiteMaterials() {
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
          Полезные материалы
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 text-lg"
        >
          Гайды, чек-листы и шаблоны для руководителей отделов продаж
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-light-gray p-6 rounded-2xl border border-gray-200 hover:border-steel-blue transition-colors h-full flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-graphite">{material.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{material.description}</p>
                <Link
                  href="https://drive.google.com/drive/folders/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC?hl=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-steel-blue hover:text-steel-blue/80 font-medium text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Скачать материал
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








