'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import InteractiveBoard from './InteractiveBoard'
import MaterialsModal, { MaterialsModalHandle } from './MaterialsModal'

export default function Hero() {
  const materialsModalRef = useRef<MaterialsModalHandle>(null)

  const handleCTAClick = () => {
    const modal = document.getElementById('diagnostic-modal')
    if (modal) {
      (modal as HTMLDialogElement).showModal()
    }
  }

  const handleMaterialsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    materialsModalRef.current?.open()
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Базовый фон - на всю ширину экрана */}
      <div 
        className="absolute inset-0 bg-graphite z-0" 
        style={{ 
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)'
        }} 
      />
      
      {/* Интерактивный слой - ограничен по ширине, центрирован */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="w-full max-w-7xl mx-auto h-full relative">
          <InteractiveBoard />
        </div>
      </div>
      
      {/* Контент - поверх всех слоев */}
      <div className="container mx-auto relative z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl relative z-20"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <div className="block">
              <span className="text-aura inline-block" data-text="Строим">Строим</span>{' '}
              <span className="text-aura inline-block" data-text="отделы">отделы</span>{' '}
              <span className="text-aura inline-block" data-text="продаж">продаж</span>{' '}
              <span className="text-aura inline-block" data-text="под">под</span>{' '}
              <span className="text-aura inline-block" data-text="ключ">ключ</span>
            </div>
            <div className="block">
              <span className="text-aura inline-block" data-text="с">с</span>{' '}
              <span className="text-aura inline-block" data-text="управляемыми">управляемыми</span>{' '}
              <span className="text-aura inline-block" data-text="показателями">показателями</span>
            </div>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-10 text-balance max-w-3xl leading-relaxed">
            Выстраиваем процессы, метрики и контроль так, чтобы отдел работал без ручного управления.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCTAClick}
              className="px-8 py-4 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-lg"
            >
              Записаться на диагностику
            </button>
            <button
              onClick={handleMaterialsClick}
              className="px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-graphite transition-all font-medium text-lg text-center"
            >
              Получить бесплатные материалы
            </button>
          </div>
        </motion.div>
      </div>
      <MaterialsModal ref={materialsModalRef} />
    </section>
  )
}

