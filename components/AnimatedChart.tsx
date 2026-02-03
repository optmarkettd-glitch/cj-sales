'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Устанавливаем размеры canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Данные для графика (рост выручки)
    const dataPoints = [
      { x: 0, y: 0.3 },
      { x: 0.15, y: 0.35 },
      { x: 0.3, y: 0.4 },
      { x: 0.45, y: 0.5 },
      { x: 0.6, y: 0.65 },
      { x: 0.75, y: 0.8 },
      { x: 0.9, y: 0.95 },
      { x: 1, y: 1 },
    ]

    let animationProgress = 0
    const animationSpeed = 0.005

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Настройки
      const padding = 100
      const chartWidth = canvas.width - padding * 2
      const chartHeight = canvas.height - padding * 2
      const startX = padding
      const startY = canvas.height - padding
      const endX = canvas.width - padding
      const endY = padding

    // Рисуем сетку (только горизонтальные линии)
    ctx.strokeStyle = 'rgba(74, 111, 165, 0.08)'
    ctx.lineWidth = 1
    for (let i = 0; i <= 4; i++) {
      const y = startY - (chartHeight / 4) * i
      ctx.beginPath()
      ctx.moveTo(startX, y)
      ctx.lineTo(endX, y)
      ctx.stroke()
    }

      // Рисуем линию графика
      ctx.strokeStyle = 'rgba(74, 111, 165, 0.6)'
      ctx.lineWidth = 3
      ctx.beginPath()

      const visiblePoints = dataPoints.filter((point) => point.x <= animationProgress)

      if (visiblePoints.length > 0) {
        visiblePoints.forEach((point, index) => {
          const x = startX + point.x * chartWidth
          const y = startY - point.y * chartHeight * 0.7

          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            // Плавная кривая
            const prevPoint = visiblePoints[index - 1]
            const prevX = startX + prevPoint.x * chartWidth
            const prevY = startY - prevPoint.y * chartHeight * 0.7
            const cpX = (prevX + x) / 2
            const cpY = (prevY + y) / 2
            ctx.quadraticCurveTo(cpX, prevY, x, y)
          }
        })
        ctx.stroke()

        // Рисуем точки
        ctx.fillStyle = 'rgba(74, 111, 165, 0.8)'
        visiblePoints.forEach((point) => {
          const x = startX + point.x * chartWidth
          const y = startY - point.y * chartHeight * 0.7
          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fill()
        })

        // Градиент под линией
        if (visiblePoints.length > 1) {
          const gradient = ctx.createLinearGradient(startX, startY, startX, endY)
          gradient.addColorStop(0, 'rgba(74, 111, 165, 0.2)')
          gradient.addColorStop(1, 'rgba(74, 111, 165, 0)')

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.moveTo(startX, startY)
          visiblePoints.forEach((point) => {
            const x = startX + point.x * chartWidth
            const y = startY - point.y * chartHeight * 0.7
            ctx.lineTo(x, y)
          })
          const lastX = startX + visiblePoints[visiblePoints.length - 1].x * chartWidth
          ctx.lineTo(lastX, startY)
          ctx.closePath()
          ctx.fill()
        }
      }

      // Обновляем прогресс анимации
      if (animationProgress < 1) {
        animationProgress += animationSpeed
        if (animationProgress > 1) animationProgress = 1
      } else {
        // Циклическая анимация
        animationProgress = 0
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

