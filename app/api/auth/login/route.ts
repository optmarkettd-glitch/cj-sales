import { NextRequest, NextResponse } from 'next/server'
import { checkPassword, setAuthToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json(
        { error: 'Пароль обязателен' },
        { status: 400 }
      )
    }

    if (checkPassword(password)) {
      await setAuthToken()
      return NextResponse.json(
        { message: 'Успешная авторизация' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Неверный пароль' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Ошибка при авторизации' },
      { status: 500 }
    )
  }
}



