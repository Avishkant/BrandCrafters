import React, { useEffect, useRef } from 'react'
import Button from './Button'
import img1 from '../assets/discover1_mfunos.png'
import img2 from '../assets/discover2_aoabxg.png'
import img3 from '../assets/discover3_qrh3lz.png'
import cards from '../assets/live-report_xjzbow.png'

export default function Discover(){
  const refs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    let rafId = null

    const factors = [0.03, 0.14, 0.18] // small for left most, stronger for discover2 & discover3

    const update = () => {
      refs.forEach((r, i) => {
        const el = r.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elCenter = rect.top + rect.height / 2
        const viewportCenter = window.innerHeight / 2
        const distance = elCenter - viewportCenter
        // translate opposite to the scroll distance for parallax feel
        const offset = -distance * factors[i]
        el.style.transform = `translateY(${offset}px)`
        el.style.willChange = 'transform'
      })
      rafId = null
    }

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // initial position
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
  <section className="container mx-auto px-6 py-20 relative">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-medium text-gray-800 mb-4 relative inline-block">Discover<br/>
            <span className="relative z-10">Best Influencers</span>
            <span className="absolute left-0 bottom-1 z-0 w-40 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm"></span>
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3"><span className="text-lg">✦</span><div><strong>No Garbage</strong><div className="text-sm">opa manually vets & rates each influencer</div></div></li>
            <li className="flex items-start gap-3"><span className="text-lg">✦</span><div><strong>Comprehensive Data</strong><div className="text-sm">use 30+ metrics like age, kids, profession, city, engagement, etc.</div></div></li>
            <li className="flex items-start gap-3"><span className="text-lg">✦</span><div><strong>Insider Information</strong><div className="text-sm">use data from 4lakh+ collabs done by opa to find winners</div></div></li>
          </ul>

          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          {/* overlay cards (center-right) */}
          {/* <div className="absolute right-28 top-12 z-20 w-96">
            <img src={cards} alt="cards" className="w-full rounded-xl shadow-lg" />
          </div> */}

          {/* stacked extreme-right tall images */}
          <div className="absolute right-8 z-20" style={{width: '560px', height: '480px', top: '30%', transform: 'translateY(-50%)', overflow: 'visible'}}>
            {/* main large image (discover1) */}
            <div ref={refs[0]} className="absolute rounded-2xl overflow-hidden shadow-lg" style={{right: '220px', top: '0', width: '220px', height: '420px'}}>
              <img src={img1} alt="person-1" className="w-full h-full object-cover block"/>
            </div>

            {/* discover2: smaller and positioned to the right-bottom corner of the first image */}
            <div ref={refs[1]} className="absolute rounded-2xl overflow-hidden shadow-lg" style={{right: '100px', top: '80px', width: '140px', height: '260px'}}>
              <img src={img2} alt="person-2" className="w-full h-full object-cover block"/>
            </div>

            {/* discover3: smaller and to the right of discover2 */}
            <div ref={refs[2]} className="absolute rounded-2xl overflow-hidden shadow-lg" style={{right: '20px', top: '80px', width: '140px', height: '260px'}}>
              <img src={img3} alt="person-3" className="w-full h-full object-contain block bg-white"/>
            </div>
          </div>

          {/* decorative spiral at bottom-left of this column */}
          <div className="absolute -bottom-6 left-6">
            {/* <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 40c8-10 24-10 32 0" stroke="#3b3b3b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  )
}
