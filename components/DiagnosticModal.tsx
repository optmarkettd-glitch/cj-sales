'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import DiagnosticForm from './DiagnosticForm'

export default function DiagnosticModal() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    // Модальное окно появляется автоматически только на главной странице
    if (isHomePage) {
      const timer = setTimeout(() => {
        const modal = document.getElementById('diagnostic-modal') as HTMLDialogElement
        if (modal && !modal.hasAttribute('open')) {
          modal.showModal()
        }
      }, 60000) // 60 секунд

      return () => clearTimeout(timer)
    }
  }, [isHomePage])

  return (
    <dialog id="diagnostic-modal" className="backdrop:bg-black/50 bg-transparent rounded-3xl max-w-2xl w-full p-0">
      <div className="bg-graphite p-8 rounded-3xl border-2 border-steel-blue">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-steel-blue">Разобрать вашу ситуацию?</h3>
            <p className="text-gray-400">Бесплатная диагностика системы продаж за 30 минут</p>
          </div>
          <button
            onClick={() => {
              const modal = document.getElementById('diagnostic-modal') as HTMLDialogElement
              modal?.close()
            }}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Закрыть"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <DiagnosticForm />
      </div>
    </dialog>
  )
}

