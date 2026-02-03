import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import DiagnosticModal from '@/components/DiagnosticModal'

const blogPosts: Record<string, {
  id: number
  title: string
  content: string
  image: string
  date: string
  category: string
}> = {
  '1': {
    id: 1,
    title: 'Тренинг по построению воронки продаж',
    content: `
      <p>Провели интенсивный тренинг для команды менеджеров по продажам. Разобрали все этапы воронки и точки роста.</p>
      <p>На тренинге мы:</p>
      <ul>
        <li>Проанализировали текущую воронку продаж</li>
        <li>Выявили узкие места и точки оттока клиентов</li>
        <li>Оптимизировали каждый этап процесса</li>
        <li>Настроили систему контроля и метрик</li>
      </ul>
      <p>Результат: команда получила чёткое понимание процесса и инструменты для работы.</p>
    `,
    image: '/images/blog/06c6e689-abdc-47da-83e0-7a15c8a3f04e.jpg',
    date: '15 января 2025',
    category: 'Тренинг',
  },
  '2': {
    id: 2,
    title: 'Рабочая встреча с клиентом',
    content: `
      <p>Внедрение системы продаж в производственной компании. Первые результаты уже через 3 недели.</p>
      <p>На встрече обсудили:</p>
      <ul>
        <li>Текущее состояние отдела продаж</li>
        <li>План внедрения системы</li>
        <li>Ожидаемые результаты</li>
        <li>Следующие шаги</li>
      </ul>
      <p>Клиент доволен прогрессом и видит первые улучшения в конверсии.</p>
    `,
    image: '/images/blog/4634e720-77e3-4710-b7cf-6f0b7a3fb046.jpg',
    date: '10 января 2025',
    category: 'Работа',
  },
  '3': {
    id: 3,
    title: 'Запуск нового проекта',
    content: `
      <p>Начали работу с IT-компанией. Строим отдел продаж с нуля. Команда из 5 менеджеров.</p>
      <p>Что делаем:</p>
      <ul>
        <li>Проектируем воронку продаж под специфику IT-услуг</li>
        <li>Подбираем и обучаем команду менеджеров</li>
        <li>Внедряем CRM и инструменты автоматизации</li>
        <li>Настраиваем процессы и KPI</li>
      </ul>
      <p>Проект рассчитан на 90 дней. Уже видим первые результаты.</p>
    `,
    image: '/images/blog/fb60330f-5291-495c-a2cb-6d81e4ef2db2.jpg',
    date: '5 января 2025',
    category: 'Проект',
  },
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]
  if (!post) {
    return {
      title: 'Пост не найден | C&J Consulting',
    }
  }
  return {
    title: `${post.title} | Блог C&J Consulting`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-white text-graphite min-h-screen">
      <Header />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/blog" className="text-steel-blue hover:underline mb-4 inline-block">
              ← Вернуться к блогу
            </Link>
          </div>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-steel-blue text-white text-sm font-medium rounded-full inline-block mb-4">
              {post.category}
            </span>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
          </div>

          <div className="relative w-full h-96 mb-8 rounded-3xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      <Footer />
      <DiagnosticModal />
    </main>
  )
}

