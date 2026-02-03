'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({ value, duration = 2000, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)
  const [endCount, setEndCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Парсим значение - может быть числом, диапазоном или строкой с символами
  const parseValue = (val: string): { number: number; isRange: boolean; rangeEnd?: number; suffix: string } => {
    // Проверяем, есть ли диапазон (например, "3-6")
    if (val.includes('-') && !val.startsWith('-')) {
      const parts = val.split('-')
      const start = parseFloat(parts[0]) || 0
      const end = parseFloat(parts[1]) || 0
      const extractedSuffix = parts[1]?.replace(/[\d]/g, '') || ''
      return { number: start, isRange: true, rangeEnd: end, suffix: extractedSuffix }
    }
    
    // Убираем все нечисловые символы кроме +, -, и точки
    const cleanValue = val.replace(/[^\d.+-]/g, '')
    const num = parseFloat(cleanValue) || 0
    
    // Извлекаем суффикс (%, +, - и т.д.)
    const extractedSuffix = val.replace(/[\d.+-]/g, '')
    
    return { number: num, isRange: false, suffix: extractedSuffix }
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const parsed = parseValue(value)
      const startTime = Date.now()
      
      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Используем easing функцию для плавности
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        if (parsed.isRange && parsed.rangeEnd !== undefined) {
          // Для диапазона анимируем оба числа
          const currentStart = Math.floor(parsed.number * easeOutQuart)
          const currentEnd = Math.floor(parsed.rangeEnd * easeOutQuart)
          setCount(currentStart)
          setEndCount(currentEnd)
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(parsed.number)
            setEndCount(parsed.rangeEnd)
            setHasAnimated(true)
          }
        } else {
          // Для обычного числа
          const current = Math.floor(parsed.number * easeOutQuart)
          setCount(current)
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(parsed.number)
            setHasAnimated(true)
          }
        }
      }
      
      animate()
    }
  }, [isInView, hasAnimated, value, duration])

  const parsed = parseValue(value)
  const displaySuffix = suffix || parsed.suffix

  // Если это диапазон, показываем оба числа
  if (parsed.isRange && parsed.rangeEnd !== undefined) {
    return (
      <span ref={ref}>
        {prefix}
        {count}
        {displaySuffix}
        {endCount}
      </span>
    )
  }

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('ru-RU')}
      {displaySuffix}
    </span>
  )
}
