'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from 'lucide-react'

const documents = [
  { id: 1, title: 'Приказ № 227 "Ни шагу назад!"', date: '28 июля 1942', path: '/images/documents/1.pdf' },
  { id: 2, title: 'Акт о безоговорочной капитуляции Германии', date: '8 мая 1945', path: '/images/documents/2.pdf' }
]

export function WarArchive() {
  const [selectedDocument, setSelectedDocument] = useState<{ id: number; title: string; date: string; path: string;} | null>(null);

  return (
    <div className=" gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Список документов</h3>
        <div className="space-y-4">
          {documents.map((doc) => (
            <motion.div
              key={doc.id}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
            >
              <Card
                className="cursor-pointer"
                onClick={() => setSelectedDocument(doc)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    {doc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{doc.date}</p>
                </CardContent>
                <a href={doc.path}>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Скачать документ
              </Button>
              </a>
              </Card>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}