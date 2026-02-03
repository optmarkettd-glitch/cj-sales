import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostCard from '@/components/BlogPostCard'
import DiagnosticModal from '@/components/DiagnosticModal'

const blogPosts = [
  {
    id: 1,
    title: 'Тренинг по построению воронки продаж',
    excerpt: 'Провели интенсивный тренинг для команды менеджеров. Разобрали все этапы воронки и точки роста.',
    image: '/images/blog/06c6e689-abdc-47da-83e0-7a15c8a3f04e.jpg',
    date: '15 января 2025',
    category: 'Тренинг',
    content: 'Полный текст поста...',
  },
  {
    id: 2,
    title: 'Рабочая встреча с клиентом',
    excerpt: 'Внедрение системы продаж в производственной компании. Первые результаты уже через 3 недели.',
    image: '/images/blog/4634e720-77e3-4710-b7cf-6f0b7a3fb046.jpg',
    date: '10 января 2025',
    category: 'Работа',
    content: 'Полный текст поста...',
  },
  {
    id: 3,
    title: 'Запуск нового проекта',
    excerpt: 'Начали работу с IT-компанией. Строим отдел продаж с нуля. Команда из 5 менеджеров.',
    image: '/images/blog/fb60330f-5291-495c-a2cb-6d81e4ef2db2.jpg',
    date: '5 января 2025',
    category: 'Проект',
    content: 'Полный текст поста...',
  },
]

export const metadata = {
  title: 'Блог | C&J Consulting',
  description: 'Тренинги, рабочие встречи, кейсы и мысли о продажах. Практика построения отделов продаж.',
}

export default function BlogPage() {
  return (
    <main className="bg-white text-graphite min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center">Блог</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Тренинги, рабочие встречи, кейсы и мысли о продажах
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <DiagnosticModal />
    </main>
  )
}

