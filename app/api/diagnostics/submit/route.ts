import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'diagnostics.json')

interface DiagnosticSubmission {
  name: string
  phone: string
  role: string
  consent: boolean
  createdAt: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, role, consent } = body

    // Валидация
    if (!name || !phone || !role || !consent) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
        { status: 400 }
      )
    }

    // Проверка формата телефона
    const phoneNumbers = phone.replace(/\D/g, '')
    if (phoneNumbers.length !== 11) {
      return NextResponse.json(
        { error: 'Неверный формат телефона' },
        { status: 400 }
      )
    }

    // Создаем заявку
    const submission: DiagnosticSubmission = {
      name: name.trim(),
      phone: phone.trim(),
      role: role.trim(),
      consent,
      createdAt: new Date().toISOString(),
    }

    // Читаем существующие данные
    let submissions: DiagnosticSubmission[] = []
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8')
      submissions = JSON.parse(fileContent)
    }

    // Добавляем новую заявку
    submissions.push(submission)

    // Сохраняем в файл
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8')

    return NextResponse.json(
      { message: 'Заявка успешно отправлена', id: submissions.length - 1 },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving diagnostic submission:', error)
    return NextResponse.json(
      { error: 'Ошибка при сохранении заявки' },
      { status: 500 }
    )
  }
}



