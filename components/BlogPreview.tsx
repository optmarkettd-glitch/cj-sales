'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

const blogPosts = [
  {
    id: 1,
    title: 'Тренинг по построению воронки продаж',
    excerpt: 'Провели интенсивный тренинг для команды менеджеров. Разобрали все этапы воронки и точки роста.',
    image: '/images/blog/06c6e689-abdc-47da-83e0-7a15c8a3f04e.jpg',
    date: '15 января 2025',
    category: 'Тренинг',
  },
  {
    id: 2,
    title: 'Рабочая встреча с клиентом',
    excerpt: 'Внедрение системы продаж в производственной компании. Первые результаты уже через 3 недели.',
    image: '/images/blog/4634e720-77e3-4710-b7cf-6f0b7a3fb046.jpg',
    date: '10 января 2025',
    category: 'Работа',
  },
  {
    id: 3,
    title: 'Запуск нового проекта',
    excerpt: 'Начали работу с IT-компанией. Строим отдел продаж с нуля. Команда из 5 менеджеров.',
    image: '/images/blog/fb60330f-5291-495c-a2cb-6d81e4ef2db2.jpg',
    date: '5 января 2025',
    category: 'Проект',
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-700 via-gray-800 to-dark-gray">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Блог
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto"
        >
          Тренинги, рабочие встречи, кейсы и мысли о продажах
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-graphite rounded-3xl overflow-hidden border border-gray-700">
              <Link href={`/blog/${post.id}`}>
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-steel-blue text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-steel-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white hover:text-graphite transition-all font-medium text-lg"
          >
            Все записи блога
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

