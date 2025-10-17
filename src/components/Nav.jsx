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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}
      style={{ transform: scrolled ? 'translateY(0)' : 'translateY(8px)' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className={`logo text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>OPA</div>

        <nav className="hidden md:flex gap-8 text-gray-600">
          <a className={`hover:text-gray-900 transition-colors ${scrolled ? '' : ''}`} href="#">Pricing</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Case Studies</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Blog</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Contact Us</a>
          <a className="hover:text-gray-900 transition-colors" href="#">Features</a>
          <a className="hover:text-gray-900 transition-colors" href="#">About Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300">I am an Influencer <span className="ml-2">→</span></button>
          <button className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full">Brand Login <span className="ml-2">→</span></button>
        </div>
      </div>
    </header>
  )
}
