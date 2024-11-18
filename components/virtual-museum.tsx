'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

const exhibits = [
  { id: 1, name: 'Т-34', type: 'Средний танк', year: '1940', image: '/images/t-34.jpg', description: 'Один из самых известных и значимых средних танков Второй мировой войны, который стал символом победы Красной армии. Его история, конструкция и боевое применение делают его важной частью военной истории.' },
  { id: 2, name: 'ИЛ-2', type: 'Штурмовик', year: '1941', image: '/images/il-2.jpg', description: 'Ил-2, также известный как “Штурмовик Ил-2”, является одним из самых известных и массовых советских самолетов Второй мировой войны. Он сыграл ключевую роль в воздушной поддержке наземных войск и стал символом советской авиации в годы войны.' },
  { id: 3, name: 'ППШ-41', type: 'Пистолет-пулемет', year: '1941', image: '/images/ppsh-41.jpg', description: 'Одно из самых известных и массовых стрелковых оружий, использовавшихся в Советском Союзе во время Второй мировой войны. Он стал символом советской пехоты и был широко распространён как на фронте, так и среди партизан.' },
  { id: 4, name: 'Катюша', type: 'Реактивная система залпового огня', year: '1941', image: '/images/katyusha.jpg', description: 'Легендарная советская реактивная система залпового огня (РСЗО), которая сыграла ключевую роль в ходе Великой Отечественной войны. Она была известна своей мощью, внезапностью и эффективностью, что сделало её одним из символов советской артиллерии.' },
  { id: 5, name: 'Пантера', type: 'Средний танк', year: '1943', image: '/images/panther.png', description: 'Разработан для борьбы с советскими Т-34, сочетал хорошую маневренность и огневую мощь.' },
  { id: 6, name: 'САУ “Фердинанд”', type: 'Тяжелый танк', year: '1943', image: '/images/sau.jpg', description: 'Использовалась для уничтожения танков и укреплений противника.' },
  { id: 7, name: 'Мессершмитт Bf 109', type: 'Штурмовик', year: '1937', image: '/images/bf.jpg', description: 'Основной истребитель Люфтваффе, использовавшийся в различных ролях — от перехвата до поддержки наземных войск.' },
  { id: 8, name: 'Sd.Kfz. 251', type: 'Бронетранспортер', year: '1941', image: '/images/sd.jpg', description: 'Предназначен для транспортировки пехоты к линии фронта, обеспечивал защиту от стрелкового оружия.' },
]

export function VirtualMuseum() {
  const [selectedExhibit, setSelectedExhibit] = useState<{ id: number; name: string; type: string; year: string;  image: string; description: string;} | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {exhibits.map((exhibit) => (
        <motion.div key={exhibit.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="cursor-pointer h-full flex flex-col">
            <CardHeader>
              <CardTitle>{exhibit.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <Image src={exhibit.image} alt={exhibit.name} width={450} height={200} className="rounded-lg mb-4" />
              <div>
                <p className="text-sm text-gray-500 mb-2">{exhibit.type}, {exhibit.year} г.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => setSelectedExhibit(exhibit)}>Подробнее</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                      <DialogTitle>{exhibit.name}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Image src={exhibit.image} alt={exhibit.name} width={400} height={300} className="rounded-lg" />
                      <p>{exhibit.description}</p>
                      <p className="text-sm text-gray-500">{exhibit.type}, {exhibit.year} г.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}