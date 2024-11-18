'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

const photos = [
  { id: 1, title: 'Знамя Победы над Рейхстагом', year: 1945, photographer: 'Евгений Халдей', image: '/images/flag-over-reichstag.jpg' },
  { id: 2, title: 'Парад на Красной площади 7 ноября 1941 года', year: 1941, photographer: 'Неизвестен', image: '/images/parade-1941.jpg' },
  { id: 3, title: 'Встреча на Эльбе', year: 1945, photographer: 'Неизвестен', image: '/images/meeting-on-elbe.jpg' },
  { id: 4, title: 'Жители блокадного Ленинграда', year: 1942, photographer: 'Борис Кудояров', image: '/images/leningrad-blockade.jpg' },
  { id: 5, title: 'Толпа, собравшаяся на Оперной площади в Берлине, чтобы сжечь книги, которые были объявлены "негерманскими".', year: 1933, photographer: '', image: '/images/_5.jpg' },
  { id: 6, title: 'Занятие по расовой теории в немецкой школе.', year: 0, photographer: '', image: '/images/_6.jpg' },
]

export function PhotoArchive() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPhoto, setSelectedPhoto] = useState<{ id: number; title: string; year: number; photographer: string; image: string} | null>(null);

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.year.toString().includes(searchTerm) ||
    photo.photographer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((photo) => (
          <motion.div key={photo.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="cursor-pointer">
              <CardContent className="p-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={500}
                      height={300}
                      className="rounded-lg mb-4"
                      onClick={() => setSelectedPhoto(photo)}
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>{photo.title}</DialogTitle>
                    </DialogHeader>
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={600}
                      height={400}
                      className="rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-500">{photo.year} г., фотограф: {photo.photographer}</p>
                  </DialogContent>
                </Dialog>
                <h3 className="font-semibold mb-2">{photo.title}</h3>
                <p className="text-sm text-gray-500">{photo.year} г., {photo.photographer}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}