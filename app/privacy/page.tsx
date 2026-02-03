import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticModal from '@/components/DiagnosticModal'

export const metadata = {
  title: 'Политика конфиденциальности | C&J Consulting',
  description: 'Политика конфиденциальности и обработки персональных данных сайта C&J Consulting.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-white text-graphite min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-gray-600">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта <a href="https://cj-sales.ru" className="text-steel-blue hover:text-steel-blue/80">https://cj-sales.ru</a> (далее — Сайт).
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">1. Общие положения</h2>
              <div className="space-y-3">
                <p>
                  <strong>1.1.</strong> Использование Сайта означает согласие пользователя с настоящей Политикой и условиями обработки его персональных данных.
                </p>
                <p>
                  <strong>1.2.</strong> В случае несогласия с условиями Политики пользователь должен прекратить использование Сайта.
                </p>
                <p>
                  <strong>1.3.</strong> Администрация Сайта не проверяет достоверность персональных данных, предоставляемых пользователем.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">2. Персональные данные, которые собираются</h2>
              <div className="space-y-3">
                <p>
                  <strong>2.1.</strong> Сайт может собирать следующие данные:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Имя, фамилия;</li>
                  <li>Номер телефона;</li>
                  <li>Адрес электронной почты;</li>
                  <li>Наименование компании и должность;</li>
                  <li>Иные данные, предоставленные пользователем добровольно при заполнении форм на Сайте.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">3. Цели обработки персональных данных</h2>
              <div className="space-y-3">
                <p>
                  <strong>3.1.</strong> Персональные данные используются для:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>связи с пользователем, включая направление уведомлений, запросов и информации, связанных с использованием Сайта;</li>
                  <li>оказания консультационных и информационных услуг;</li>
                  <li>улучшения качества работы Сайта и клиентского сервиса.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">4. Условия обработки персональных данных</h2>
              <div className="space-y-3">
                <p>
                  <strong>4.1.</strong> Сайт обеспечивает конфиденциальность и безопасность персональных данных.
                </p>
                <p>
                  <strong>4.2.</strong> Обработка персональных данных осуществляется с согласия пользователя и может включать сбор, запись, хранение, уточнение, использование, передачу (в пределах РФ) и уничтожение.
                </p>
                <p>
                  <strong>4.3.</strong> Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">5. Хранение и защита данных</h2>
              <div className="space-y-3">
                <p>
                  <strong>5.1.</strong> Администрация Сайта принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования и распространения.
                </p>
                <p>
                  <strong>5.2.</strong> Данные хранятся в течение срока, необходимого для достижения целей обработки, либо до момента отзыва согласия пользователем.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">6. Права пользователя</h2>
              <div className="space-y-3">
                <p>
                  <strong>6.1.</strong> Пользователь имеет право:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>получать информацию о своих персональных данных и способах их обработки;</li>
                  <li>требовать уточнения, блокирования или уничтожения своих данных;</li>
                  <li>отозвать согласие на обработку персональных данных, направив письменное уведомление на адрес электронной почты Администрации Сайта: <a href="mailto:info@cj-sales.ru" className="text-steel-blue hover:text-steel-blue/80">info@cj-sales.ru</a>.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-graphite">7. Заключительные положения</h2>
              <div className="space-y-3">
                <p>
                  <strong>7.1.</strong> Администрация Сайта вправе изменять настоящую Политику без предварительного уведомления пользователей.
                </p>
                <p>
                  <strong>7.2.</strong> Новая редакция Политики вступает в силу с момента её размещения на Сайте.
                </p>
                <p className="mt-6 text-gray-600">
                  <strong>Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <DiagnosticModal />
    </main>
  )
}








