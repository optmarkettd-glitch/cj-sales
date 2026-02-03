import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticForm from '@/components/DiagnosticForm'
import DiagnosticModal from '@/components/DiagnosticModal'

export const metadata = {
  title: 'Контакты | C&J Consulting',
  description: 'Свяжитесь с нами для бесплатной диагностики системы продаж.',
}

export default function ContactsPage() {
  return (
    <main className="bg-white text-graphite min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center">Контакты</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Запишитесь на бесплатную диагностику или задайте вопрос
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@cj-sales.ru" className="text-steel-blue hover:text-steel-blue/80 transition-colors">
                    info@cj-sales.ru
                  </a>
                </p>
                <p>
                  <strong>Телефон:</strong>{' '}
                  <a href="tel:+79139459666" className="text-steel-blue hover:text-steel-blue/80 transition-colors">
                    +7 913 945 96 66
                  </a>
                </p>
                <p>
                  <strong>Telegram:</strong>{' '}
                  <a 
                    href="https://t.me/workshop_with_Zhirnyakova" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-steel-blue hover:text-steel-blue/80 transition-colors"
                  >
                    Мастерская руководителей с Жирняковой
                  </a>
                </p>
                <p className="mt-6">
                  Мы работаем с компаниями малого и среднего B2B-бизнеса, которые готовы строить систему продаж и получать результат.
                </p>
              </div>
            </div>
            
            <div className="bg-light-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Записаться на диагностику</h2>
              <DiagnosticForm isDark={false} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <DiagnosticModal />
    </main>
  )
}

