'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { date: '22 июня', year: 1941, event: 'Начало Великой Отечественной войны' },
  { date: '28 июня', year: 1941, event: 'Начало обороны Брестской крепости' },
  { date: '10 июля', year: 1941, event: 'Начало Смоленского сражения' },
  { date: '5 августа', year: 1943, event: 'Первый салют в Москве в честь освобождения Орла и Белгорода' },
  { date: '23 августа', year: 1943, event: 'Завершение Курской битвы' },
  { date: '6 ноября', year: 1943, event: 'Освобождение Киева' },
  { date: '27 января', year: 1944, event: 'Полное снятие блокады Ленинграда' },
  { date: '9 мая', year: 1945, event: 'День Победы' }
]

export function ThisDayInHistory({ className }: { className?: string }) {
  const [todayEvent, setTodayEvent] = useState<typeof events[0] | null>(null)

  useEffect(() => {
    const today = new Date()
    const todayString = `${today.getDate()} ${today.toLocaleString('default', { month: 'long' })}`
    const event = events.find(e => e.date === todayString)
    setTodayEvent(event || null)
  }, [])

  if (!todayEvent) return null

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Этот день в истории войны</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          {todayEvent.date} {todayEvent.year} года: {todayEvent.event}
        </p>
      </CardContent>
    </Card>
  )
}