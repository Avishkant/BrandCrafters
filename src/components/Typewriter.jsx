import React, { useEffect, useState, useRef } from 'react'

// Simple typewriter that types each word, pauses, then deletes it.
export default function Typewriter({ words = [], typingSpeed = 80, deletingSpeed = 40, pause = 1200 }) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    let timer

    const currentWord = words[index % words.length] || ''
    if (!isDeleting) {
      // type next char
      timer = setTimeout(() => {
        setDisplay(currentWord.slice(0, display.length + 1))
        if (display.length + 1 === currentWord.length) {
          // pause then delete
          setTimeout(() => {
            if (mounted.current) setIsDeleting(true)
          }, pause)
        }
      }, typingSpeed)
    } else {
      // deleting
      timer = setTimeout(() => {
        setDisplay(currentWord.slice(0, display.length - 1))
        if (display.length - 1 === 0) {
          setIsDeleting(false)
          setIndex((i) => i + 1)
        }
      }, deletingSpeed)
    }

    return () => {
      mounted.current = false
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, index, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className="inline-flex items-center">
      <span className="mr-1">{display}</span>
      <span className="animate-blink">|</span>
    </span>
  )
}
