'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const initialStories = [
  {
    id: 1,
    author: 'Анна Иванова',
    content: 'Мой дедушка был танкистом. Он участвовал в Курской битве и дошел до Берлина. Его награды - наша семейная реликвия.'
  },
  {
    id: 2,
    author: 'Петр Сидоров',
    content: 'Моя бабушка работала медсестрой в госпитале. Она спасла жизни сотням раненых солдат. Ее самоотверженность вдохновляет меня каждый день.'
  }
]

export function FamilyStories() {
  const [stories, setStories] = useState(initialStories)
  const [newStory, setNewStory] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newStory && author) {
      setStories([...stories, { id: Date.now(), author, content: newStory }])
      setNewStory('')
      setAuthor('')
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {stories.map((story) => (
          <Card key={story.id}>
            <CardHeader>
              <CardTitle>{story.author}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{story.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Ваше имя"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <Textarea
          placeholder="Поделитесь историей вашей семьи..."
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
        />
        <Button type="submit">Отправить историю</Button>
      </form>
    </div>
  )
}