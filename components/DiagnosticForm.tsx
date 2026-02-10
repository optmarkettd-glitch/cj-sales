'use client'

import { useState } from 'react'
import Link from 'next/link'

interface DiagnosticFormProps {
  isDark?: boolean
}

export default function DiagnosticForm({ isDark = true }: DiagnosticFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: '',
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

    if (!formData.role.trim()) {
      newErrors.role = 'Укажите вашу роль в компании'
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
      const response = await fetch('/api/diagnostics/submit', {
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

      alert('Спасибо! Мы свяжемся с вами в течение 2 часов в рабочее время.')
      setFormData({ name: '', phone: '', role: '', consent: false })
      setErrors({})
      
      // Закрываем модальное окно, если оно открыто
      const modal = document.getElementById('diagnostic-modal') as HTMLDialogElement
      if (modal) {
        modal.close()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
          Имя *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value })
            if (errors.name) {
              setErrors({ ...errors, name: '' })
            }
          }}
          className={`w-full px-4 py-3 ${isDark ? 'bg-graphite border-gray-600 text-white' : 'bg-white border-gray-300 text-graphite'} border ${errors.name ? 'border-red-500' : ''} rounded-2xl focus:outline-none focus:border-steel-blue transition-colors`}
          placeholder="Ваше имя"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="phone" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
          Телефон *
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          className={`w-full px-4 py-3 ${isDark ? 'bg-graphite border-gray-600 text-white' : 'bg-white border-gray-300 text-graphite'} border ${errors.phone ? 'border-red-500' : ''} rounded-2xl focus:outline-none focus:border-steel-blue transition-colors`}
          placeholder="+7 (___) ___-__-__"
        />
        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="role" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
          Роль в компании *
        </label>
        <input
          type="text"
          id="role"
          value={formData.role}
          onChange={(e) => {
            setFormData({ ...formData, role: e.target.value })
            if (errors.role) {
              setErrors({ ...errors, role: '' })
            }
          }}
          className={`w-full px-4 py-3 ${isDark ? 'bg-graphite border-gray-600 text-white' : 'bg-white border-gray-300 text-graphite'} border ${errors.role ? 'border-red-500' : ''} rounded-2xl focus:outline-none focus:border-steel-blue transition-colors`}
          placeholder="Директор, владелец, руководитель отдела продаж..."
        />
        {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role}</p>}
      </div>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={(e) => {
            setFormData({ ...formData, consent: e.target.checked })
            if (errors.consent) {
              setErrors({ ...errors, consent: '' })
            }
          }}
          className="mt-1 mr-2"
        />
        <label htmlFor="consent" className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} ${errors.consent ? 'text-red-400' : ''}`}>
          Согласен с{' '}
          <Link href="/privacy" target="_blank" className="text-steel-blue hover:text-steel-blue/80 underline">
            политикой конфиденциальности
          </Link>
          {' '}и обработкой персональных данных *
        </label>
      </div>
      {errors.consent && <p className="text-red-400 text-sm ml-6">{errors.consent}</p>}
      <div className={`${isDark ? 'bg-graphite/50' : 'bg-gray-50'} p-4 rounded-2xl text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="font-semibold mb-1">Что будет дальше:</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>Свяжемся с вами в течение 2 часов (в рабочее время)</li>
          <li>Проведём бесплатную диагностику вашей системы продаж</li>
          <li>Покажем конкретные точки роста и возможности улучшения</li>
        </ul>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-lg"
      >
        {isSubmitting ? 'Отправка...' : 'Записаться на диагностику'}
      </button>
    </form>
  )
}

