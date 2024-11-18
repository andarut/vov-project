'use client'

import { useState, useRef } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function VideoPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current?.pause()
      setIsPlaying(false)
    }
  }

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <video ref={videoRef} src={src} className="w-full mb-4 rounded" />
      <div className="flex justify-center space-x-4">
        <Button onClick={togglePlay}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </Button>
        <Button onClick={restart}>
          <RotateCcw size={24} />
        </Button>
      </div>
    </div>
  )
}