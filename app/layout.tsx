import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'C&J Consulting | От хаоса к прогнозируемой выручке',
  description: 'Построение и модернизация отделов продаж для малого и среднего B2B-бизнеса. Системный подход, результат, а не процесс.',
  keywords: 'консалтинг продаж, отдел продаж под ключ, B2B продажи, построение отдела продаж',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}








