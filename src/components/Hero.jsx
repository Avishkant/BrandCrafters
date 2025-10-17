import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extralight leading-tight text-gray-900">
            <span className="block">Frictionless Influencer</span>
            <span className="block">Marketing at Scale</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">Generate word of mouth on social media in minutes!</p>

          <div className="mt-8 flex items-center gap-6">
            <Button>Get Started</Button>
            <img src="/opa-assets/arrow-doodle.png" alt="arrow doodle" className="h-20" />
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
