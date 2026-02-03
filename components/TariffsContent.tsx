interface TariffColumn {
  label: string
  values: [string, string, string]
}

interface TariffsContentProps {
  columns: string[]
  rows: TariffColumn[]
  upsideServices: { name: string; price: string }[]
}

export default function TariffsContent({
  columns,
  rows,
  upsideServices,
}: TariffsContentProps) {
  return (
    <div className="space-y-8">
      {/* Таблица тарифов */}
      <div className="bg-light-gray/60 rounded-3xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-graphite">
            РОП на аутсорсе
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Выберите формат участия РОПа в зависимости от задач и масштаба
            команды
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={col}
                    className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide ${
                      idx === 0
                        ? 'text-gray-500'
                        : 'text-steel-blue text-center'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-gray-200">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-graphite align-top w-1/4">
                    {row.label}
                  </th>
                  {row.values.map((value, colIndex) => {
                    const isScale = colIndex === 2
                    const isPriceRow = row.label === 'Цена'
                    const isCheck = value === '✔'
                    const isDash = value === '—'

                    return (
                      <td
                        key={colIndex}
                        className={`px-4 py-4 text-sm align-top ${
                          isScale
                            ? 'bg-steel-blue/5 border-l border-r border-t-0 border-b-0 border-steel-blue/40'
                            : ''
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center text-center h-full ${
                            isScale ? 'font-medium' : ''
                          }`}
                        >
                          {isPriceRow ? (
                            <div className="inline-flex flex-col items-center">
                              <span className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                                Цена
                              </span>
                              <span
                                className="text-2xl sm:text-3xl font-bold text-aura"
                                data-text={value}
                              >
                                {value}
                              </span>
                            </div>
                          ) : isCheck ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-steel-blue/40 text-steel-blue text-sm">
                              ✓
                            </span>
                          ) : isDash ? (
                            <span className="text-gray-400">—</span>
                          ) : (
                            <span className="text-gray-700">{value}</span>
                          )}
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Дополнительные услуги (Upside) */}
      <section className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-graphite">
          Дополнительные услуги (Upside)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upsideServices.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 rounded-2xl bg-gray-50"
            >
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className="text-steel-blue font-semibold">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

