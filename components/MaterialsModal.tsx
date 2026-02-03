'use client'

import { useState, useImperativeHandle, forwardRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MATERIALS_LINK = 'https://drive.google.com/drive/folders/1HaxYBuMU-0qDgNU0Ox5MzDbvMcFz64mC?hl=ru'

export interface MaterialsModalHandle {
  open: () => void
}

const MaterialsModal = forwardRef<MaterialsModalHandle>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length === 0) return ''
    if (numbers.length <= 1) return `+7 (${numbers}`
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData({ ...formData, phone: formatted })
    if (errors.phone) {
      setErrors({ ...errors, phone: '' })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа'
    }

    const phoneNumbers = formData.phone.replace(/\D/g, '')
    if (!formData.phone) {
      newErrors.phone = 'Введите номер телефона'
    } else if (phoneNumbers.length !== 11) {
      newErrors.phone = 'Введите корректный номер телефона'
    }

    if (!formData.consent) {
      newErrors.consent = 'Необходимо согласие на обработку данных'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Отправляем данные на сервер
      const response = await fetch('/api/materials/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при отправке формы')
      }

      // Перенаправляем на материалы
      window.open(MATERIALS_LINK, '_blank', 'noopener,noreferrer')
      
      // Закрываем модальное окно
      setIsOpen(false)
      
      // Сбрасываем форму
      setFormData({ name: '', phone: '', consent: false })
      setErrors({})
    } catch (error) {
      console.error('Error submitting materials form:', error)
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false)
      setFormData({ name: '', phone: '', consent: false })
      setErrors({})
    }
  }

  useImperativeHandle(ref, () => ({
    open: handleOpen,
  }))

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-graphite rounded-3xl border-2 border-steel-blue p-8 max-w-md w-full z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              disabled={isSubmitting}
              aria-label="Закрыть"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-2 text-white">Получить бесплатные материалы</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Оставьте контакты, и мы откроем доступ к полезным материалам
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="materials-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="materials-name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (errors.name) {
                      setErrors({ ...errors, name: '' })
                    }
                  }}
                  className={`w-full px-4 py-3 bg-graphite border rounded-2xl text-white focus:outline-none focus:border-steel-blue ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Ваше имя"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="materials-phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="materials-phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-3 bg-graphite border rounded-2xl text-white focus:outline-none focus:border-steel-blue ${
                    errors.phone ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="+7 (___) ___-__-__"
                  maxLength={18}
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="materials-consent"
                  checked={formData.consent}
                  onChange={(e) => {
                    setFormData({ ...formData, consent: e.target.checked })
                    if (errors.consent) {
                      setErrors({ ...errors, consent: '' })
                    }
                  }}
                  className="mt-1 mr-2"
                  disabled={isSubmitting}
                />
                <label htmlFor="materials-consent" className="text-sm text-gray-400">
                  Согласен с{' '}
                  <Link href="/privacy" target="_blank" className="text-steel-blue hover:text-steel-blue/80 underline">
                    политикой конфиденциальности
                  </Link>
                  {' '}и обработкой персональных данных
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Открываю материалы...' : 'Получить материалы'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  )
})

MaterialsModal.displayName = 'MaterialsModal'

export default MaterialsModal

