'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedNumberProps {
  target: number
  suffix?: string
  duration?: number
  delay?: number
}

function AnimatedNumber({ target, suffix = '', duration = 3000, delay = 0 }: AnimatedNumberProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let startTime: number | null = null
    let lastValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) {
        startTime = currentTime - delay
      }

      const elapsed = currentTime - startTime
      const progress = (elapsed % duration) / duration
      const current = Math.floor(target * progress)
      
      // Обновляем только если значение изменилось
      if (current !== lastValue) {
        setValue(current)
        lastValue = current
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration, delay])

  return <span>{value}{suffix}</span>
}

export default function AnimatedTable() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: [0.6, 0.9, 0.6],
        y: [0, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ 
        duration: 3,
        delay: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/3 right-1/4 bg-steel-blue/10 border border-steel-blue/30 rounded-lg p-3 backdrop-blur-sm"
    >
      <div className="text-steel-blue text-xs font-semibold mb-2 opacity-80">Метрики</div>
      <table className="text-xs text-gray-300">
        <tbody>
          <tr>
            <td className="pr-3 opacity-70">Лиды:</td>
            <td className="text-steel-blue font-bold">
              <AnimatedNumber target={247} delay={0} />
            </td>
          </tr>
          <tr>
            <td className="pr-3 opacity-70">Сделки:</td>
            <td className="text-steel-blue font-bold">
              <AnimatedNumber target={89} delay={500} />
            </td>
          </tr>
          <tr>
            <td className="pr-3 opacity-70">Выручка:</td>
            <td className="text-steel-blue font-bold">
              <AnimatedNumber target={1250} suffix="K" delay={1000} />
            </td>
          </tr>
          <tr>
            <td className="pr-3 opacity-70">Конв.:</td>
            <td className="text-steel-blue font-bold">
              <AnimatedNumber target={36} suffix="%" delay={1500} />
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  )
}

