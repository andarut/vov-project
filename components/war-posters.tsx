'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

const posters = [
  { id: 1, title: 'Родина-мать зовет!', year: 1941, artist: 'Ираклий Тоидзе', image: '/images/rodina-mat-zovet.jpg' },
  { id: 2, title: 'Ты записался добровольцем?', year: 1920, artist: 'Дмитрий Моор', image: '/images/ty-zapisalsya-dobrovolcem.jpg' },
  { id: 3, title: 'За Родину!', year: 1941, artist: 'Алексей Кокорекин', image: '/images/za-rodinu.jpg' },
  { id: 4, title: 'Воин Красной Армии, спаси!', year: 1942, artist: 'Виктор Корецкий', image: '/images/voin-krasnoi-armii-spasi.jpg' },
  { id: 5, title: 'Ты - фронт', year: 1942, artist: '', image: '/images/5.png' },
  { id: 6, title: 'Одна битва, одна воля, одна цель: победа любой ценой!', year: 1941, artist: '', image: '/images/6.jpg' },
  { id: 7, title: 'Победа будет за нами!', year: 1942, artist: '', image: '/images/7.png' },
  { id: 8, title: 'Ваше пожертвование "Hitler Free Plaza" служит солидарности народа', year: 1942, artist: '', image: '/images/8.png' },
  { id: 9, title: 'Ваша работа обеспечивает победу!', year: 1943, artist: '', image: '/images/9.jpg' }
]

export function WarPosters() {
  const [selectedPoster, setSelectedPoster] = useState<{ id: number; title: string; year: number; artist: string; image: string; } | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posters.map((poster) => (
        <motion.div key={poster.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="cursor-pointer">
            <CardContent className="p-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    width={300}
                    height={400}
                    className="rounded-lg mb-4"
                    onClick={() => setSelectedPoster(poster)}
                  />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{poster.title}</DialogTitle>
                  </DialogHeader>
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    width={500}
                    height={700}
                    className="rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-500">{poster.year} г., художник: {poster.artist}</p>
                </DialogContent>
              </Dialog>
              <h3 className="font-semibold mb-2">{poster.title}</h3>
              <p className="text-sm text-gray-500">{poster.year} г., {poster.artist}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}