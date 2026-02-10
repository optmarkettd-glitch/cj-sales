import { NextResponse } from 'next/server'
import { verifyAuth } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'diagnostics.json')

export async function GET() {
  try {
    // Проверяем авторизацию
    const isAuthenticated = await verifyAuth()
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Не авторизован' },
        { status: 401 }
      )
    }

    // Читаем данные
    let submissions: any[] = []
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8')
      submissions = JSON.parse(fileContent)
    }

    // Сортируем по дате (новые первые)
    submissions.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    return NextResponse.json(submissions, { status: 200 })
  } catch (error) {
    console.error('Error fetching diagnostics:', error)
    return NextResponse.json(
      { error: 'Ошибка при получении заявок' },
      { status: 500 }
    )
  }
}



