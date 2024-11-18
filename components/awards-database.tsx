'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const awards = [
  { id: 1, name: 'Орден Отечественной войны', image: '/images/order-of-patriotic-war.jpg', description: 'Учрежден 20 мая 1942 года. Вручался за храбрость, стойкость и мужество, проявленные в боях с врагами Советского Союза.' },
  { id: 2, name: 'Орден Красной Звезды', image: '/images/order-of-the-red-star.png', description: 'Учрежден 6 апреля 1930 года. Вручался за большие заслуги в деле обороны Союза ССР как в военное, так и в мирное время.' },
  { id: 3, name: 'Медаль "За отвагу"', image: '/images/medal-for-courage.png', description: 'Учреждена 17 октября 1938 года. Вручалась за личное мужество и отвагу в боях с врагами Советского Союза.' },
  { id: 4, name: 'Медаль "За оборону Ленинграда"', image: '/images/medal-for-the-defense-of-leningrad.jpg', description: 'Учреждена 22 декабря 1942 года. Вручалась всем участникам обороны Ленинграда.' },
  { id: 5, name: 'Рыцарский крест Железного креста', image: '/images/x.jpeg', description: 'Она была учреждена в 1939 году и предназначалась для военнослужащих, проявивших выдающуюся доблесть.' },
  { id: 6, name: 'Германский орден', image: '/images/german.jpg', description: 'Учрежденный в 1942 году, этот орден был высшей партийной наградой и вручался исключительно по личному распоряжению Адольфа Гитлера. ' },
]

export function AwardsDatabase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAward, setSelectedAward] = useState(null)

  const filteredAwards = awards.filter(award =>
    award.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {awards.map((award) => (
          <motion.div key={award.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle>{award.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={award.image} alt={award.name} width={300} height={200} className="rounded-lg mb-4 mx-auto" />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Подробнее</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                      <DialogTitle>{award.name}</DialogTitle>
                    </DialogHeader>
                    <Image src={award.image} alt={award.name} width={300} height={300} className="rounded-lg mb-4" />
                    <p>{award.description}</p>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}