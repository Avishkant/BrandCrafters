import React, { useEffect, useRef } from 'react'
import Button from './Button'
import why from '../assets/why-opa_uvwrqx.png'
import dropImg from '../assets/diamond_jwp0xg.png'
import Bubble from './Bubble'

export default function WhyOpa(){
  const dropRef = useRef(null)

  useEffect(() => {
    let rafId = null
    let lastY = window.scrollY

    const handle = () => {
      const currentY = window.scrollY
      // small factor for slow movement (parallax)
      const offset = currentY * 0.15
      if (dropRef.current) {
        dropRef.current.style.transform = `translateY(${offset}px)`
      }
      rafId = null
    }

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(handle)
      lastY = window.scrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="container mx-auto px-6 py-20 relative overflow-visible">
      {/* large background bubble (SVG) */}
      <div className="pointer-events-none absolute -left-20 -top-12 opacity-40 w-2/3 transform -rotate-6 -z-10">
        <Bubble />
      </div>

      {/* floating decorative drop (parallax on scroll) */}
      <img ref={dropRef} src={dropImg} alt="decorative-drop" className="pointer-events-none absolute left-8 top-8 w-12 opacity-80 transform transition-transform duration-200" />

      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Why
          <span className="block">OPA</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 px-6">
          <h3 className="text-4xl font-medium text-gray-800">With OPA</h3>
          <p className="mt-4 text-gray-600">You only have to focus on the important tasks like - setting campaign guidelines, selecting influencers and analyzing performance. Rest is taken care by OPA.</p>
          <div className="mt-6">
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <img src={why} alt="Why OPA" className="max-w-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
