'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    const modal = document.getElementById('diagnostic-modal')
    if (modal) {
      (modal as HTMLDialogElement).showModal()
    }
  }

  const headerClasses = isHomePage
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-graphite/95 backdrop-blur-sm shadow-lg' : 'bg-graphite'
      }`
    : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`

  const textColor = isHomePage ? 'text-white' : 'text-graphite'
  const linkColor = isHomePage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-graphite'
  const logoHover = isHomePage ? 'hover:text-steel-blue' : 'hover:text-steel-blue'
  const menuButtonColor = isHomePage ? 'text-white' : 'text-graphite'

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className={`text-2xl font-bold ${textColor} ${logoHover} transition-colors`}>
            C&J Consulting
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage && (
              <Link href="#why-us" className={`${linkColor} transition-colors`}>
                Почему мы
              </Link>
            )}
            <Link href="/services" className={`${linkColor} transition-colors`}>
              Услуги
            </Link>
            <Link href="/trainings" className={`${linkColor} transition-colors`}>
              Тренинги
            </Link>
            <Link href="/cases" className={`${linkColor} transition-colors`}>
              Кейсы
            </Link>
            {isHomePage && (
              <Link href="#team" className={`${linkColor} transition-colors`}>
                Команда
              </Link>
            )}
            <Link href="/contacts" className={`${linkColor} transition-colors`}>
              Контакты
            </Link>
            <button
              onClick={handleCTAClick}
              className="px-6 py-2 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium"
            >
              Записаться на диагностику
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${menuButtonColor} p-2`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 space-y-4 ${isHomePage ? 'bg-graphite' : 'bg-white'}`}>
            {isHomePage && (
              <Link href="#why-us" className={`block ${linkColor} transition-colors`}>
                Почему мы
              </Link>
            )}
            <Link href="/services" className={`block ${linkColor} transition-colors`}>
              Услуги
            </Link>
            <Link href="/trainings" className={`block ${linkColor} transition-colors`}>
              Тренинги
            </Link>
            <Link href="/cases" className={`block ${linkColor} transition-colors`}>
              Кейсы
            </Link>
            {isHomePage && (
              <Link href="#team" className={`block ${linkColor} transition-colors`}>
                Команда
              </Link>
            )}
            <Link href="/contacts" className={`block ${linkColor} transition-colors`}>
              Контакты
            </Link>
            <button
              onClick={handleCTAClick}
              className="w-full px-6 py-2 bg-steel-blue text-white rounded-2xl hover:bg-steel-blue/90 transition-all font-medium"
            >
              Записаться на диагностику
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

