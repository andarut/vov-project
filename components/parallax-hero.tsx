'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxHero() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.3, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/images/hero-bg-1.jpg')] bg-cover bg-center"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-center"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 shadow-text">Великая Отечественная война</h1>
          <p className="text-2xl mb-8 shadow-text">1941-1945</p>
        </div>
      </motion.div>
    </div>
  )
}