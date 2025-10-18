import React, { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setScrolled(y > 40)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
      }`}
      style={{ transform: scrolled ? 'translateY(0)' : 'translateY(4px)' }}
    >
      {/* Constrain width + center content */}
      <div className="w-full max-w-6xl px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-gray-800 tracking-tight">
          OPA
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
          <a className="hover:text-gray-900 transition-colors" href="/">Pricing</a>
          <a className="hover:text-gray-900 transition-colors" href="/case-studies">Case Studies</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Blog</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Features</a>
          <a className="hover:text-gray-900 transition-colors" href="#">About</a>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            I am an Influencer <span className="ml-1">→</span>
          </button>
          <button className="inline-flex items-center gap-1.5 bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-700 transition-colors">
            Brand Login <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </header>
  )
}
