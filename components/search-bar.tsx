'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar({ className }: { className?: string }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика поиска
    console.log('Поиск:', searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className={`flex items-center ${className}`}>
      <Input
        type="text"
        placeholder="Поиск по сайту..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" className="ml-2">
        <Search size={20} />
      </Button>
    </form>
  )
}