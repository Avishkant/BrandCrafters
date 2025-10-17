import React, { useState } from 'react'

export default function Button({ children, onClick }) {
  const [fill, setFill] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center bg-[#3f3735] rounded-full px-6 pr-14 py-3 shadow-md overflow-hidden"
    >
      {/* white overlay that scales from right to left */}
      <span
        className={`absolute inset-0 bg-white transform origin-right transition-transform duration-700 ease-in-out ${fill ? 'scale-x-100' : 'scale-x-0'}`}
        style={{ transformOrigin: 'right' }}
        aria-hidden
      />

      {/* content on top */}
      <span className={`relative z-10 text-lg font-medium transition-colors duration-300 ${fill ? 'text-[#3f3735]' : 'text-white'}`}>{children}</span>

      {/* circular CTA at extreme right with persistent border and inner animated fill */}
      <span
        className={`absolute z-20 right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${fill ? 'bg-[#3f3735] text-white' : 'bg-white text-[#3f3735]'}`}
        onMouseEnter={() => { setFill(true); setHover(true) }}
        onMouseLeave={() => { setFill(false); setHover(false) }}
      >
        {/* outer border ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#3f3735] pointer-events-none" />

        {/* inner white fill that scales on hover; keep border visible */}
        <span
          className={`absolute inset-0 rounded-full bg-white transition-transform duration-300 ease-in-out ${hover ? 'scale-100' : 'scale-0'}`}
          style={{ transformOrigin: 'right' }}
          aria-hidden
        />

        {/* arrow icon on top */}
        <span className={`relative transition-colors duration-200 ${hover ? 'text-[#3f3735]' : 'text-[#3f3735]'}`}>→</span>
      </span>
    </button>
  )
}
