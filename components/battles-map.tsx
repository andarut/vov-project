'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const battles = [
  { id: 1, name: 'Битва за Москву', coordinates: { x: 53.3, y: 32.3 }, date: '30 сентября 1941 - 20 апреля 1942' },
  { id: 2, name: 'Сталинградская битва', coordinates: { x: 70.3, y: 66.3 }, date: '17 июля 1942 - 2 февраля 1943' },
  { id: 3, name: 'Курская битва', coordinates: { x: 51, y: 52 }, date: '5 июля - 23 августа 1943' },
  { id: 4, name: 'Операция "Багратион"', coordinates: { x: 40, y: 40 }, date: '23 июня - 29 августа 1944' },
  { id: 5, name: 'Битва за Берлин', coordinates: { x: 4, y: 39 }, date: '16 апреля - 8 мая 1945' },
]

export function BattlesMap() {
  const [selectedBattle, setSelectedBattle] = useState<{ id: number; name: string; coordinates: { x: number; y: number; }; date: string; } | null>(null);

  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
        <img src="/images/eastern-front-map.jpg" alt="Карта Восточного фронта" className="object-cover" />
        {battles.map((battle) => (
          <motion.div
            key={battle.id}
            className="absolute w-6 h-6 bg-red-600 rounded-full cursor-pointer"
            style={{ left: `${battle.coordinates.x}%`, top: `${battle.coordinates.y}%` }}
            whileHover={{ scale: 1.5 }}
            onClick={() => setSelectedBattle(battle)}
          />
        ))}
      </div>
      {selectedBattle && (
        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">{selectedBattle.name}</h3>
          <p className="text-gray-600">{selectedBattle.date}</p>
        </div>
      )}
    </div>
  )
}