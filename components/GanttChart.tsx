'use client'

import { motion } from 'framer-motion'

interface Task {
  name: string
  startWeek: number
  duration: number
  cost?: string
  hours?: number
}

interface Stage {
  title: string
  tasks: Task[]
}

const stagesLaunch: Stage[] = [
  {
    title: 'I этап: Предстартовый этап',
    tasks: [
      { name: 'Определение точки А - старта', startWeek: 0, duration: 1 },
      { name: 'Определение точки В через 3 - 6 мес, фин планирование. Стратегия продаж', startWeek: 0, duration: 1 },
      { name: 'Анализ роли собственника в системе продаж: где он незаменим, где это тормозит масштабирование', startWeek: 0, duration: 1 },
      { name: 'Кол-во уровней ОП, кол-во сотрудников, должности', startWeek: 1, duration: 1 },
      { name: 'Анализ ролей и зон ответственности: менеджеров, собственника, РОП', startWeek: 1, duration: 1 },
      { name: 'Разработка стратегии продаж', startWeek: 1, duration: 1 },
      { name: 'Выстраивание процессов, каналов продаж (повторные продажи, входящие лиды, холодные продажи)', startWeek: 1, duration: 1 },
      { name: 'Формирование текущей воронки продаж и логики движения клиента', startWeek: 2, duration: 1 },
      { name: 'Система ведение клиентской базы', startWeek: 2, duration: 1 },
      { name: 'Построение системы контроля сотрудников (отчётность)', startWeek: 2, duration: 1 },
      { name: 'Создание книги продаж, регламентов и скриптов', startWeek: 2, duration: 1 },
      { name: 'Создание чек листа управления ОП: планёрки, разборы сделок, индивидуальная работа с менеджерами', startWeek: 3, duration: 1 },
      { name: 'Анализ конкурентов и рынка', startWeek: 3, duration: 1 },
      { name: 'Анализ продуктовой линейки. Создания карточки продукта с элементами ХПВ', startWeek: 3, duration: 1 },
      { name: 'Разработка скриптов', startWeek: 3, duration: 1 },
      { name: 'Создание коммерческих предложений скриптов', startWeek: 3, duration: 1 },
    ],
  },
  {
    title: 'II этап: Найм и адаптация',
    tasks: [
      { name: 'Формирование портретов кандидатов', startWeek: 4, duration: 1 },
      { name: 'Регламенты и должностная инструкция', startWeek: 4, duration: 1 },
      { name: 'Создание программы онбординга новых сотрудников и ввода в должность', startWeek: 4, duration: 1 },
      { name: 'Формирование системы мотивации и ФОТ', startWeek: 4, duration: 1 },
      { name: 'Процесс найма: первичные интервью, кейсовое задание (в случае найма РОПа) финальные интервью с заказчиком, тестовые дни (стажировка)', startWeek: 5, duration: 2 },
      { name: 'Онбординг (погружение в должность, продукт, рынок, специфику бизнеса)', startWeek: 7, duration: 1 },
      { name: 'Формирование ИПР для сотрудника на период испытательного срока', startWeek: 7, duration: 1 },
    ],
  },
  {
    title: 'III этап: Обучение и развитие команды',
    tasks: [
      { name: 'Формирования плана обучения + создание чек-листа оценки качества диалогов менеджеров (ОКК)', startWeek: 8, duration: 1 },
      { name: 'Обучение (тренинги) по технологии продаж, работа с возражениями, работа с повторными продажами и ростом среднего чека', startWeek: 8, duration: 2 },
      { name: 'Формирование базы знаний для команды (в помощь РОПу)', startWeek: 9, duration: 1 },
      { name: 'Развитие управленческих навыков РОПа (по согласованию, индивидуальная работа)', startWeek: 10, duration: 1 },
    ],
  },
  {
    title: 'IV этап: Внедрение управленческого ритма',
    tasks: [
      { name: 'Написание регламентов по CRM и ее внедрение в ОП', startWeek: 11, duration: 1 },
      { name: 'Внедрение отчётности. Система взаимодействия и управления отделом продаж', startWeek: 11, duration: 2 },
      { name: 'Внедрение системы планерок и работы с командой (командообразование и индивидуальная работа внутри команды)', startWeek: 12, duration: 2 },
    ],
  },
  {
    title: 'V этап: Разгон команды на прогнозный результат (сопровождение)',
    tasks: [
      { name: 'Вариант 1: Сопровождение команды, закрепление всех процессов, обучений, регламентов и задач через работу с нанятым РОПом', startWeek: 14, duration: 2 },
      { name: 'Вариант 2: Сопровождение команды, закрепление всех процессов, обучений, регламентов и задач, выполнение плановых показателей через услугу РОП на аутсорсе', startWeek: 14, duration: 2 },
      { name: 'Вариант 3: Сопровождение команды, закрепление всех процессов, обучений, регламентов и задач, разгон отдела на выполнение плановых показателей с форматом работы напрямую с командой и далее передача ОП заказчику', startWeek: 14, duration: 2 },
    ],
  },
]

const stagesModernization: Stage[] = [
  {
    title: 'I этап: Аудит',
    tasks: [
      { name: 'Индивидуальные интервью (1:1) с каждым менеджером', startWeek: 0, duration: 1 },
      { name: 'Прослушивание и анализ звонков', startWeek: 0, duration: 1 },
      { name: 'Анализ работы в CRM', startWeek: 0, duration: 1 },
      { name: 'Анализ текущей воронки продаж и логики движения клиента', startWeek: 1, duration: 1 },
      { name: 'Анализ всех каналов: повторные продажи, входящие лиды, холодные продажи', startWeek: 1, duration: 1 },
      { name: 'Анализ ролей и зон ответственности: менеджеров, собственника, операционного директора', startWeek: 1, duration: 1 },
      { name: 'Анализ книги продаж, регламентов и скриптов', startWeek: 1, duration: 1 },
      { name: 'Анализ системы онбординга, обучений', startWeek: 2, duration: 1 },
      { name: 'Оценка текущей нагрузки менеджеров', startWeek: 2, duration: 1 },
      { name: 'Анализ текущей системы мотивации менеджеров', startWeek: 2, duration: 1 },
      { name: 'Анализ системы контроля и отчётности: какие показатели используются, какие реально нужны для управления', startWeek: 2, duration: 1 },
      { name: 'Анализ формата управленческих ритмов: планёрки, разборы сделок, индивидуальная работа с менеджерами', startWeek: 3, duration: 1 },
      { name: 'Анализ конкурентов и рынка', startWeek: 3, duration: 1 },
      { name: 'Анализ продуктовой линейки', startWeek: 3, duration: 1 },
      { name: 'Анализ роли собственника в системе продаж: где он незаменим, где это тормозит масштабирование', startWeek: 3, duration: 1 },
      { name: 'Анализ и диагностика компетенций РОПа', startWeek: 3, duration: 1 },
      { name: 'Определение точки А - старта', startWeek: 4, duration: 1 },
      { name: 'Определение точки В через 3 - 6 мес, фин планирование. Стратегия продаж', startWeek: 4, duration: 1 },
      { name: 'Оптимальная структура ОП', startWeek: 4, duration: 1 },
      { name: 'Пошаговая дорожная карта внедрения с приоритетами и сроками', startWeek: 4, duration: 1 },
      { name: 'Презентация итогового аудита и плана внедрения заказчику. Обсуждение итогов и согласование перечня работ на этапе Внедрения', startWeek: 4, duration: 1 },
    ],
  },
  {
    title: 'II этап: Внедрение',
    tasks: [
      { name: 'Формирование портретов кандидатов (РОП, менеджер)', startWeek: 5, duration: 1 },
      { name: 'Разработка мотивации для РОПа, для менеджеров, формирование ИПР на испытательный срок', startWeek: 5, duration: 1 },
      { name: 'Участие в найме: первичные интервью, кейсовое задание (в случае найма РОПа) финальные интервью с заказчиком, тестовые дни (стажировка)', startWeek: 5, duration: 1 },
      { name: 'Онбординг (погружение в должность, продукт, рынок, специфику бизнеса)', startWeek: 6, duration: 1 },
      { name: 'Формирование ИПР для сотрудника на период испытательного срока', startWeek: 6, duration: 1 },
      { name: 'Обучение по технологии продаж, работа с возражениями, работа с повторными продажами и ростом среднего чека', startWeek: 7, duration: 2 },
      { name: 'Развитие управленческих навыков РОПа (по согласованию, индивидуальная работа)', startWeek: 8, duration: 1 },
      { name: 'Внедрение отчётности. Система взаимодействия и управления отделом продаж', startWeek: 9, duration: 2 },
      { name: 'Внедрение изменений по работе с CRM (по итогам аудита если будет необходимо) + скриптов и регламентов', startWeek: 10, duration: 2 },
      { name: 'При необходимости внедрение системы планерок и работы с командой (командообразование и индивидуальная работа внутри команды)', startWeek: 11, duration: 2 },
      { name: 'Скорректировать работу отдела продаж в рамках процессах, технологии продаж и т.д', startWeek: 11, duration: 1 },
      { name: 'Закрепление всех внесенных изменений и выход на прогнозные цифры (обговоренные на этапе формирования точки В)', startWeek: 11, duration: 1 },
      { name: 'Передача проекта заказчику. Встреча с заказчиком', startWeek: 11, duration: 1 },
    ],
  },
]

const weeksLaunch = [
  '1 неделя', '2 неделя', '3 неделя', '4 неделя', '5 неделя', '6 неделя', '7 неделя', '8 неделя',
  '9 неделя', '10 неделя', '11 неделя', '12 неделя', '13 неделя', '14 неделя', '15 неделя', '16 неделя',
]

const weeksModernization = [
  '1 неделя', '2 неделя', '3 неделя', '4 неделя', '5 неделя', '6 неделя', '7 неделя', '8 неделя',
  '9 неделя', '10 неделя', '11 неделя', '12 неделя',
]

interface GanttChartProps {
  increasePrice?: boolean
  showTotal?: boolean
  darkMode?: boolean
  variant?: 'launch' | 'modernization'
}

export default function GanttChart({ increasePrice = false, showTotal = true, darkMode = false, variant = 'launch' }: GanttChartProps = {}) {
  const stages = variant === 'modernization' ? stagesModernization : stagesLaunch
  const weeks = variant === 'modernization' ? weeksModernization : weeksLaunch
  const totalWeeks = weeks.length
  const weekWidth = 100 / totalWeeks

  // Функция для увеличения цены на 30%
  const adjustPrice = (price: string): string => {
    if (!increasePrice || price === 'Цена после обсуждения') return price
    
    // Обработка формата "130 000 / 120 000"
    if (price.includes('/')) {
      const parts = price.split('/').map(p => p.trim())
      return parts.map(p => {
        const num = parseInt(p.replace(/\s/g, ''))
        return Math.round(num * 1.3).toLocaleString('ru-RU')
      }).join(' / ')
    }
    
    // Обычная цена
    const num = parseInt(price.replace(/\s/g, ''))
    return Math.round(num * 1.3).toLocaleString('ru-RU')
  }

  // Получаем этапы с увеличенными ценами если нужно
  const adjustedStages = increasePrice
    ? stages.map(stage => ({
        ...stage,
        tasks: stage.tasks.map(task => ({
          ...task,
          cost: task.cost ? adjustPrice(task.cost) : undefined,
        })),
      }))
    : stages

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1400px]">
        {/* Заголовок временной шкалы */}
        <div className={`flex mb-4 border-b-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'} pb-2`}>
          <div className={`w-80 flex-shrink-0 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Задача</div>
          <div className="flex-1 relative" style={{ minHeight: '30px' }}>
            {weeks.map((week, index) => (
              <div
                key={index}
                className={`absolute text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center border-r ${darkMode ? 'border-gray-600' : 'border-gray-300'} py-2 top-0 bottom-0 flex items-center justify-center`}
                style={{
                  left: `${index * weekWidth}%`,
                  width: `${weekWidth}%`,
                }}
              >
                <span className="transform -rotate-45 origin-center whitespace-nowrap">
                  {week}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Этапы и задачи */}
        {adjustedStages.map((stage, stageIndex) => (
          <div key={stageIndex} className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-80 flex-shrink-0">
                <h3 className={`font-bold ${darkMode ? 'text-steel-blue' : 'text-steel-blue'} text-base`}>{stage.title}</h3>
              </div>
              <div className="flex-1"></div>
            </div>

            {stage.tasks.map((task, taskIndex) => (
              <div key={taskIndex} className="flex items-center mb-3 min-h-[50px]">
                <div className="w-80 flex-shrink-0 pr-4">
                  <div className="flex flex-col gap-1">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-tight`}>{task.name}</span>
                    <div className="flex gap-2 flex-wrap">
                      {task.hours && (
                        <span className={`text-xs ${darkMode ? 'text-gray-400 bg-gray-700' : 'text-gray-500 bg-gray-100'} px-2 py-0.5 rounded`}>
                          {task.hours}ч
                        </span>
                      )}
                      {task.cost && (
                        <span className={`text-xs font-semibold text-steel-blue ${darkMode ? 'bg-steel-blue/20' : 'bg-steel-blue/10'} px-2 py-0.5 rounded`}>
                          {task.cost}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`flex-1 relative h-10 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded`}>
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 'auto', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (stageIndex * 0.1) + (taskIndex * 0.05) }}
                    className="absolute top-1 bottom-1 bg-steel-blue rounded-md shadow-md flex items-center justify-center px-2"
                    style={{
                      left: `${task.startWeek * weekWidth}%`,
                      width: `${task.duration * weekWidth}%`,
                    }}
                  >
                    <span className="text-xs text-white font-medium whitespace-nowrap">
                      {task.duration} {task.duration === 1 ? 'нед' : 'нед'}
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Итоги */}
        {showTotal && (
          <div className="mt-8 pt-6 border-t-2 border-steel-blue">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
              <span className={`font-bold ${darkMode ? 'text-gray-300' : 'text-graphite'}`}>Итого стоимость за 1, 2, 3 этап фиксированная:</span>
              <span className="font-bold text-steel-blue text-lg">
                {increasePrice ? '574 600 ₽' : '442 000 ₽'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`font-bold ${darkMode ? 'text-gray-300' : 'text-graphite'}`}>Этап 4: Фикс + % (% обсуждается отдельно):</span>
              <span className="font-bold text-steel-blue text-lg">
                {increasePrice ? '169 000 ₽' : '130 000 ₽'}
              </span>
            </div>
            <div className={`flex justify-between items-center pt-2 border-t ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
              <span className={`font-bold text-xl ${darkMode ? 'text-gray-300' : 'text-graphite'}`}>Итого стоимость:</span>
                <span className="font-bold text-2xl text-steel-blue">
                  {increasePrice ? '743 600 ₽' : '572 000 ₽'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

