export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Авторизация проверяется через middleware
  return <>{children}</>
}

