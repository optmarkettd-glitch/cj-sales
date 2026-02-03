'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Card from './Card'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-light-gray rounded-3xl overflow-hidden border border-gray-200">
      <Link href={`/blog/${post.id}`}>
        <div className="relative w-full h-64 overflow-hidden">
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
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <h3 className="text-xl font-bold mb-3 text-graphite hover:text-steel-blue transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
        </div>
      </Link>
      </Card>
    </motion.div>
  )
}

