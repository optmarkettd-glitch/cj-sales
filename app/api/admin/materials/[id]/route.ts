import { NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'materials.json')

interface MaterialSubmission {
  name: string
  phone: string
  consent: boolean
  createdAt: string
  contacted?: boolean
  meetingScheduled?: boolean
  comment?: string
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Проверяем авторизацию
    const isAuthenticated = await verifyAuth()
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Не авторизован' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const id = parseInt(params.id)

    // Читаем данные
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json(
        { error: 'Файл данных не найден' },
        { status: 404 }
      )
    }

    const fileContent = fs.readFileSync(DATA_FILE, 'utf-8')
    const submissions: MaterialSubmission[] = JSON.parse(fileContent)

    // Сортируем так же, как в GET endpoint
    const sortedSubmissions = [...submissions].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    if (id < 0 || id >= sortedSubmissions.length) {
      return NextResponse.json(
        { error: 'Заявка не найдена' },
        { status: 404 }
      )
    }

    // Находим заявку в оригинальном массиве по уникальным полям
    const targetSubmission = sortedSubmissions[id]
    const originalIndex = submissions.findIndex(
      (s) => s.createdAt === targetSubmission.createdAt && 
             s.name === targetSubmission.name && 
             s.phone === targetSubmission.phone
    )

    if (originalIndex === -1) {
      return NextResponse.json(
        { error: 'Заявка не найдена в исходном массиве' },
        { status: 404 }
      )
    }

    // Обновляем заявку
    submissions[originalIndex] = {
      ...submissions[originalIndex],
      ...body,
    }

    // Сохраняем
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8')

    return NextResponse.json(submissions[originalIndex], { status: 200 })
  } catch (error) {
    console.error('Error updating material:', error)
    return NextResponse.json(
      { error: 'Ошибка при обновлении заявки' },
      { status: 500 }
    )
  }
}

