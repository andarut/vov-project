import React from 'react'

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-8">{children}</div>
}

export const TimelineItem = ({ date, title, children }: { date: string; title: string; children: React.ReactNode }) => {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 bg-red-600 w-4 h-4 rounded-full"></div>
      <div className="border-l-2 border-gray-300 pl-8 ml-2">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p>{children}</p>
      </div>
    </div>
  )
}