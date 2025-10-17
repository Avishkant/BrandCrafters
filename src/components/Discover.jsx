import React, { useEffect, useRef } from 'react'
import Button from './Button'
import img1 from '../assets/discover1_mfunos.png'
import img2 from '../assets/discover2_aoabxg.png'
import img3 from '../assets/discover3_qrh3lz.png'

export default function Discover() {
  const refs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const factors = [0, 0.4, 0.8] // Stronger parallax movement for 2 & 3
    let currentY = window.scrollY

    const update = () => {
      const scrollY = window.scrollY
      const delta = scrollY - currentY
      currentY += delta * 0.08 // smooth easing (lower = smoother)

      refs.forEach((r, i) => {
        const el = r.current
        if (!el) return
        const offset = currentY * factors[i] * -1 // parallax up on scroll
        el.style.transform = `translateY(${offset}px)`
      })

      requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [])

  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-medium text-gray-800 mb-4 relative inline-block">
            Discover
            <br />
            <span className="relative z-10">Best Influencers</span>
            <span className="absolute left-0 bottom-1 z-0 w-40 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm"></span>
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>No Garbage</strong>
                <div className="text-sm">opa manually vets & rates each influencer</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Comprehensive Data</strong>
                <div className="text-sm">
                  use 30+ metrics like age, kids, profession, city, engagement, etc.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Insider Information</strong>
                <div className="text-sm">
                  use data from 4lakh+ collabs done by opa to find winners
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative" style={{ width: '560px', height: '550px' }}>
            {/* discover1 */}
            <div
              ref={refs[0]}
              className="absolute rounded-2xl overflow-hidden shadow-xl"
              style={{
                left: '0px',
                top: '0px',
                width: '220px',
                height: '420px',
                zIndex: 30,
              }}
            >
              <img src={img1} alt="person-1" className="w-full h-full object-cover block" />
            </div>

            {/* discover2 */}
            <div
              ref={refs[1]}
              className="absolute rounded-2xl overflow-hidden shadow-xl"
              style={{
                left: '160px',
                top: '80px',
                width: '200px',
                height: '360px',
                zIndex: 20,
              }}
            >
              <img src={img2} alt="person-2" className="w-full h-full object-cover block" />
            </div>

            {/* discover3 (moved upward + full height visible) */}
            <div
              ref={refs[2]}
              className="absolute rounded-2xl overflow-hidden shadow-xl bg-white"
              style={{
                left: '320px',
                top: '60px', // moved up
                width: '220px',
                height: '480px',
                zIndex: 10,
              }}
            >
              <img
                src={img3}
                alt="person-3"
                className="w-full h-full object-contain block bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
