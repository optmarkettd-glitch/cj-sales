'use client'

interface SectionDividerProps {
  isLight?: boolean
}

export default function SectionDivider({ isLight = false }: SectionDividerProps) {
  const lineColor = isLight ? 'via-steel-blue/20' : 'via-steel-blue/30'
  const dotColor = isLight ? 'bg-steel-blue/30' : 'bg-steel-blue/50'
  
  return (
    <div className="section-divider relative py-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className={`w-full h-px bg-gradient-to-r from-transparent ${lineColor} to-transparent`} />
      </div>
      <div className="relative flex justify-center">
        <div className={`w-3 h-3 rounded-full ${dotColor}`} />
      </div>
    </div>
  )
}

