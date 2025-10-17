import React from 'react'
import Button from './Button'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-light leading-tight text-gray-900">
            <span className="inline-block relative">
              <span className="relative z-10">
                <Typewriter words={["Frictionless", "Data-driven", "Fictionless"]} />
                <span className="ml-2">Influencer</span>
              </span>
              <span className="absolute left-0 bottom-0 z-0 w-40 h-3 rounded-sm bg-gradient-to-r from-yellow-300 to-orange-400" style={{transform: 'translateY(12px)'}} aria-hidden />
            </span>

            <span className="inline-block relative">
              <span className="relative z-10">Marketing at Scale</span>
              <span className="absolute left-0 bottom-0 z-0 w-36 h-3 rounded-sm bg-gradient-to-r from-yellow-300 to-orange-400" style={{transform: 'translateY(12px)'}} aria-hidden />
            </span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">Generate word of mouth on social media in minutes!</p>

          <div className="mt-8 flex items-center gap-6">
            <Button>Get Started</Button>
            <img src=".\src\assets\hero-arrow_jiirdh.png" alt="arrow doodle" className="h-20" />
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-700">
            <div>
              <div className="text-2xl font-semibold">300k+</div>
              <div className="text-sm">Influencers</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">500+</div>
              <div className="text-sm">Brands</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">2,000+</div>
              <div className="text-sm">Campaigns</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">4L+</div>
              <div className="text-sm">Collaborations</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <img src="/opa-assets/hero-illustration.png" alt="hero illustration" className="w-full block" />
          </div>
        </div>
      </div>
    </section>
  )
}
