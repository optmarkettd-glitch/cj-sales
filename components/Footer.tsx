import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-dark-gray via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-steel-blue">C&J Consulting</h3>
            <p className="text-gray-400">
              Построение и модернизация отделов продаж для B2B-бизнеса
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-steel-blue">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#why-us" className="hover:text-white transition-colors">
                  Почему мы
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="hover:text-white transition-colors">
                  Тренинги
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition-colors">
                  Команда
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-steel-blue">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">
                  Связаться с нами
                </Link>
              </li>
              <li>
                <Link href="/mediakit" className="hover:text-white transition-colors">
                  Медиакит
                </Link>
              </li>
            </ul>
          </div>
        </div>
            <div className="pt-8 border-t border-gray-700 text-center text-gray-500 text-sm space-y-2">
              <p>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </p>
              <p>© 2025 ИП Чернов Владимир Игоревич</p>
            </div>
      </div>
    </footer>
  )
}

