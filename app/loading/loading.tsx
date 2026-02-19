'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = '/assets/waves.svg'
    
    img.onload = () => {
      setLoading(false)
    }

    // Fallback timeout in case image doesn't load
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  if (!loading) return null

  return (
    <div className="loading">
      <div className="loader"></div>
    </div>
  )
}
