'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from './Card'

const team = [
  {
    name: 'Ирина Жирнякова',
    role: 'Партнёр, эксперт по операционному управлению',
    experience: 'Более 11 лет опыта в сфере продаж и развития команд. Помогаю руководителям и собственникам внедрять системный менеджмент, развивать управленческие навыки, повышать эффективность отделов и удерживать ключевых сотрудников без хаоса и выгорания.',
    achievements: [
      'Рост выручки до +20% год к году за счёт системных изменений в процессах',
      'Развитие 30+ сотрудников до управленческих ролей',
      'Внедрение систем мотивации, адаптации и грейдов (рост вовлечённости +24% за первый год)',
      'Автор и разработчик обучающей программы для руководителей "Основы менеджмента"',
    ],
    focus: '',
    image: '/images/irina-zhirnyakova.jpg',
  },
  {
    name: 'Владимир Чернов',
    role: 'Партнёр, эксперт по построению отделов продаж',
    experience: 'Более 10 лет в продажах и 8 лет в управлении. Умею зажечь команду, вдохновить на результат и дожать до цели. Руководитель-практик: иду «в поля», вижу, где теряются деньги, и помогаю компании расти.',
    achievements: [
      'Вывел среднюю выручку IT-отдела с 8 до 20+ млн ₽ в месяц.',
      'Запустил 15+ отделов продаж с нуля: от малого бизнеса до компаний с оборотом 1+ млрд.',
      'Провёл 40+ тренингов и стратегических сессий для руководителей и команд продаж.',
    ],
    focus: '',
    image: '/images/vladimir-chernov.jpg',
  },
]

export default function TeamPreview() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark-gray via-gray-800 to-gray-700">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-steel-blue rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Команда
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-graphite p-8 rounded-3xl border border-gray-700 h-full flex flex-col">
              <div className="mb-6">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden border-2 border-steel-blue shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${index === 1 ? 'object-[center_25%]' : 'object-center'}`}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
              <p className="text-steel-blue font-medium mb-4 text-center">{member.role}</p>
              <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{member.experience}</p>
              {member.achievements && member.achievements.length > 0 && (
                <div className="mb-4 space-y-2">
                  <p className="text-sm font-semibold text-white mb-2">Ключевые достижения:</p>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-steel-blue mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {member.focus && (
                <p className="text-gray-400 italic border-t border-gray-700 pt-4 mt-auto text-center">{member.focus}</p>
              )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

