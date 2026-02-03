'use client'

import { motion } from 'framer-motion'
import Card from '../Card'
import Image from 'next/image'

const team = [
  {
    name: 'Ирина Жирнякова',
    role: 'Эксперт по системному управлению, лидерству и развитию команд',
    image: '/images/irina-zhirnyakova.jpg',
  },
  {
    name: 'Владимир Чернов',
    role: 'Эксперт по продажам и операционному управлению',
    image: '/images/vladimir-chernov.jpg',
  },
]

export default function MediakiteTeam() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-graphite text-center"
        >
          Наша команда
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-light-gray p-8 rounded-2xl border border-gray-200 text-center">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-steel-blue">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${index === 1 ? 'object-[center_25%]' : 'object-center'}`}
                    sizes="160px"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-graphite">{member.name}</h3>
                <p className="text-steel-blue font-medium">{member.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








