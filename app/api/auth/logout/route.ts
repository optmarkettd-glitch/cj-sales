import { NextResponse } from 'next/server'
import { removeAuthToken } from '@/lib/auth'

export async function POST() {
  try {
    await removeAuthToken()
    return NextResponse.json(
      { message: 'Выход выполнен успешно' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Ошибка при выходе' },
      { status: 500 }
    )
  }
}



