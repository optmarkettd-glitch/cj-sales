import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'BE8r41ny' // В production используйте переменные окружения

export async function verifyAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('admin-auth')
  
  if (!authToken) {
    return false
  }
  
  // Проверяем токен (в production используйте JWT или сессии)
  return authToken.value === 'authenticated'
}

export async function setAuthToken() {
  const cookieStore = await cookies()
  cookieStore.set('admin-auth', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 дней
  })
}

export async function removeAuthToken() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-auth')
}

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}



