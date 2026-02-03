'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface DiagnosticSubmission {
  name: string
  phone: string
  role: string
  consent: boolean
  createdAt: string
  contacted?: boolean
  meetingScheduled?: boolean
  comment?: string
}

interface MaterialSubmission {
  name: string
  phone: string
  consent: boolean
  createdAt: string
  contacted?: boolean
  meetingScheduled?: boolean
  comment?: string
}

type TabType = 'diagnostics' | 'materials' | 'all'
type SubmissionType = 'diagnostic' | 'material'

interface EditingSubmission {
  type: SubmissionType
  index: number
  data: DiagnosticSubmission | MaterialSubmission
}

export default function AdminPanel() {
  const [diagnostics, setDiagnostics] = useState<DiagnosticSubmission[]>([])
  const [materials, setMaterials] = useState<MaterialSubmission[]>([])
  const [activeTab, setActiveTab] = useState<TabType>('all')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [editing, setEditing] = useState<EditingSubmission | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchAllSubmissions()
  }, [])

  const fetchAllSubmissions = async () => {
    try {
      setIsLoading(true)
      const [diagnosticsResponse, materialsResponse] = await Promise.all([
        fetch('/api/admin/diagnostics'),
        fetch('/api/admin/materials'),
      ])
      
      if (diagnosticsResponse.status === 401 || materialsResponse.status === 401) {
        router.push('/admin/login')
        return
      }

      if (!diagnosticsResponse.ok || !materialsResponse.ok) {
        throw new Error('Ошибка при загрузке заявок')
      }

      const diagnosticsData = await diagnosticsResponse.json()
      const materialsData = await materialsResponse.json()

      setDiagnostics(diagnosticsData)
      setMaterials(materialsData)
    } catch (error) {
      console.error('Error fetching submissions:', error)
      setError('Ошибка при загрузке заявок')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleUpdateStatus = async (
    type: SubmissionType,
    index: number,
    field: 'contacted' | 'meetingScheduled',
    value: boolean
  ) => {
    try {
      const endpoint = type === 'diagnostic' 
        ? `/api/admin/diagnostics/${index}` 
        : `/api/admin/materials/${index}`

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      })

      if (!response.ok) {
        throw new Error('Ошибка при обновлении')
      }

      // Обновляем локальное состояние
      if (type === 'diagnostic') {
        const updated = [...diagnostics]
        updated[index] = { ...updated[index], [field]: value }
        setDiagnostics(updated)
      } else {
        const updated = [...materials]
        updated[index] = { ...updated[index], [field]: value }
        setMaterials(updated)
      }
    } catch (error) {
      console.error('Error updating status:', error)
      alert('Ошибка при обновлении статуса')
    }
  }

  const handleEdit = (type: SubmissionType, index: number) => {
    const data = type === 'diagnostic' ? diagnostics[index] : materials[index]
    setEditing({ type, index, data: { ...data } })
  }

  const handleSaveEdit = async () => {
    if (!editing) return

    try {
      setIsSaving(true)
      const endpoint = editing.type === 'diagnostic' 
        ? `/api/admin/diagnostics/${editing.index}` 
        : `/api/admin/materials/${editing.index}`

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contacted: editing.data.contacted,
          meetingScheduled: editing.data.meetingScheduled,
          comment: editing.data.comment,
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка при сохранении')
      }

      // Обновляем локальное состояние
      if (editing.type === 'diagnostic') {
        const updated = [...diagnostics]
        updated[editing.index] = { ...updated[editing.index], ...editing.data }
        setDiagnostics(updated)
      } else {
        const updated = [...materials]
        updated[editing.index] = { ...updated[editing.index], ...editing.data }
        setMaterials(updated)
      }

      setEditing(null)
    } catch (error) {
      console.error('Error saving edit:', error)
      alert('Ошибка при сохранении изменений')
    } finally {
      setIsSaving(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getTotalCount = () => {
    switch (activeTab) {
      case 'diagnostics':
        return diagnostics.length
      case 'materials':
        return materials.length
      case 'all':
        return diagnostics.length + materials.length
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-steel-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-graphite">Админ-панель</h1>
              <p className="text-gray-600 text-sm mt-1">Управление заявками</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">
                Всего заявок: <span className="font-semibold text-steel-blue">{getTotalCount()}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Вкладки */}
        <div className="bg-white rounded-2xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-steel-blue text-steel-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Все заявки ({diagnostics.length + materials.length})
              </button>
              <button
                onClick={() => setActiveTab('diagnostics')}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'diagnostics'
                    ? 'border-steel-blue text-steel-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Диагностика ({diagnostics.length})
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'materials'
                    ? 'border-steel-blue text-steel-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Материалы ({materials.length})
              </button>
            </nav>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Таблица для диагностики */}
        {(activeTab === 'all' || activeTab === 'diagnostics') && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-semibold text-graphite">
                Заявки на диагностику {activeTab === 'all' && `(${diagnostics.length})`}
              </h2>
            </div>
            {diagnostics.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                Нет заявок на диагностику
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Дата
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Имя
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Телефон
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Роль
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Связались
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Встреча
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Комментарий
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Действия
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {diagnostics.map((submission, index) => (
                      <tr 
                        key={`diagnostic-${index}`} 
                        className={`hover:bg-gray-50 transition-colors ${
                          submission.contacted ? 'bg-green-50/30' : ''
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(submission.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <a
                            href={`tel:${submission.phone}`}
                            className="text-steel-blue hover:text-steel-blue/80"
                          >
                            {submission.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {submission.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            checked={submission.contacted || false}
                            onChange={(e) => handleUpdateStatus('diagnostic', index, 'contacted', e.target.checked)}
                            className="w-5 h-5 text-steel-blue border-gray-300 rounded focus:ring-steel-blue"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            checked={submission.meetingScheduled || false}
                            onChange={(e) => handleUpdateStatus('diagnostic', index, 'meetingScheduled', e.target.checked)}
                            className="w-5 h-5 text-steel-blue border-gray-300 rounded focus:ring-steel-blue"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                          {submission.comment ? (
                            <span className="truncate block" title={submission.comment}>
                              {submission.comment}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                          <button
                            onClick={() => handleEdit('diagnostic', index)}
                            className="text-steel-blue hover:text-steel-blue/80 font-medium"
                          >
                            Редактировать
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Таблица для материалов */}
        {(activeTab === 'all' || activeTab === 'materials') && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-semibold text-graphite">
                Заявки на материалы {activeTab === 'all' && `(${materials.length})`}
              </h2>
            </div>
            {materials.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                Нет заявок на материалы
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Дата
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Имя
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Телефон
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Связались
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Встреча
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Комментарий
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Действия
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {materials.map((submission, index) => (
                      <tr 
                        key={`material-${index}`} 
                        className={`hover:bg-gray-50 transition-colors ${
                          submission.contacted ? 'bg-green-50/30' : ''
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(submission.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <a
                            href={`tel:${submission.phone}`}
                            className="text-steel-blue hover:text-steel-blue/80"
                          >
                            {submission.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            checked={submission.contacted || false}
                            onChange={(e) => handleUpdateStatus('material', index, 'contacted', e.target.checked)}
                            className="w-5 h-5 text-steel-blue border-gray-300 rounded focus:ring-steel-blue"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            checked={submission.meetingScheduled || false}
                            onChange={(e) => handleUpdateStatus('material', index, 'meetingScheduled', e.target.checked)}
                            className="w-5 h-5 text-steel-blue border-gray-300 rounded focus:ring-steel-blue"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                          {submission.comment ? (
                            <span className="truncate block" title={submission.comment}>
                              {submission.comment}
                            </span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                          <button
                            onClick={() => handleEdit('material', index)}
                            className="text-steel-blue hover:text-steel-blue/80 font-medium"
                          >
                            Редактировать
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={fetchAllSubmissions}
            className="px-4 py-2 bg-steel-blue text-white rounded-lg hover:bg-steel-blue/90 transition-colors"
          >
            Обновить
          </button>
        </div>
      </div>

      {/* Модальное окно редактирования */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-graphite">Редактирование заявки</h2>
              <button
                onClick={() => setEditing(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                disabled={isSaving}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Клиент: <span className="font-semibold">{editing.data.name}</span>
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон: <span className="font-semibold">{editing.data.phone}</span>
                </label>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="edit-contacted"
                    checked={editing.data.contacted || false}
                    onChange={(e) => setEditing({
                      ...editing,
                      data: { ...editing.data, contacted: e.target.checked }
                    })}
                    className="w-5 h-5 text-steel-blue border-gray-300 rounded focus:ring-steel-blue"
                    disabled={isSaving}
                  />
                  <label htmlFor="edit-contacted" className="ml-3 text-sm font-medium text-gray-700">
                    Удалось связаться
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="edit-meeting"
                    checked={editing.data.meetingScheduled || false}
                    onChange={(e) => setEditing({
                      ...editing,
                      data: { ...editing.data, meetingScheduled: e.target.checked }
                    })}
                    className="w-5 h-5 text-steel-blue border-gray-300 rounded focus:ring-steel-blue"
                    disabled={isSaving}
                  />
                  <label htmlFor="edit-meeting" className="ml-3 text-sm font-medium text-gray-700">
                    Удалось назначить встречу
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="edit-comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  id="edit-comment"
                  value={editing.data.comment || ''}
                  onChange={(e) => setEditing({
                    ...editing,
                    data: { ...editing.data, comment: e.target.value }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-steel-blue text-gray-900"
                  rows={5}
                  placeholder="Введите комментарий..."
                  disabled={isSaving}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isSaving}
              >
                Отмена
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={isSaving}
                className="px-4 py-2 bg-steel-blue text-white rounded-lg hover:bg-steel-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Сохранение...' : 'Сохранить'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
