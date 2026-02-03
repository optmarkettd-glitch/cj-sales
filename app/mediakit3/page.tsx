import InteractiveBoard from '@/components/InteractiveBoard'

export default function Mediakite3() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Базовый фон - на всю ширину экрана */}
      <div 
        className="absolute inset-0 bg-graphite z-0" 
        style={{ 
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)'
        }} 
      />
      
      {/* Интерактивный слой - ограничен по ширине, центрирован */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="w-full max-w-7xl mx-auto h-full relative">
          <InteractiveBoard />
        </div>
      </div>
    </div>
  )
}

