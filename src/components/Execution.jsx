import React from 'react'
import Button from './Button'
import graphic from '../assets/discover-graphic_ahjfsk.png'
import diamond from '../assets/diamond_jwp0xg.png'
import hustle1 from '../assets/hustle1_fjiqi6.png'
import hustle2 from '../assets/hustle2_caggcr.png'

export default function Execution(){
  return (
    <section className="container mx-auto px-6 py-20 relative">
  <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* left: two hustle images (side-by-side on large screens) */}
        <div className="lg:w-1/2 order-1 lg:order-1 flex justify-center lg:justify-start">
          <div className="flex gap-4 items-start">
            <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-lg bg-white">
              <img src={hustle1} alt="hustle-1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-lg bg-white">
              <img src={hustle2} alt="hustle-2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* right: text and bullets */}
        <div className="lg:w-1/2 order-2 lg:order-2">
          <h2 className="text-4xl font-medium text-gray-800 mb-4 relative inline-block">Hassle-free<br/>
            <span className="relative z-10">Execution</span>
            <span className="absolute left-0 bottom-1 z-0 w-40 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm"></span>
          </h2>

          <ul className="space-y-6 text-gray-600 mt-6">
            <li className="flex items-start gap-3">
              <span className="text-xl text-yellow-400 mt-1">✦</span>
              <div>
                <strong>Orienting Influencers</strong>
                <div className="text-sm">Thousands of influencers accept collabs in seconds on our App</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl text-yellow-400 mt-1">✦</span>
              <div>
                <strong>Delivering Products</strong>
                <div className="text-sm">opa delivers products to influencers, handles returns, coordination, etc.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl text-yellow-400 mt-1">✦</span>
              <div>
                <strong>Evaluating Content</strong>
                <div className="text-sm">opa evaluates every content piece basis your guidelines</div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <Button>Get Started</Button>
          </div>
        </div>

        
        {/* decorative diamonds (absolute so they overlap both columns slightly) */}
        <img src={diamond} alt="diamond" className="hidden lg:block absolute -bottom-8 left-12 w-12 opacity-90 pointer-events-none" />
        <img src={diamond} alt="diamond" className="hidden lg:block absolute top-52 right-12 w-10 opacity-80 pointer-events-none" />
      </div>
    </section>
  )
}
