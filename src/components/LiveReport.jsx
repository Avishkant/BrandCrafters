import React from 'react'
import cards from '../assets/live-report_xjzbow.png'
import diamond from '../assets/diamond2_ppimiv.png'

export default function LiveReport(){
  return (
    <section className="container mx-auto px-6 py-20 relative">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-medium text-gray-800 mb-4 relative inline-block">Detailed<br/>
            <span className="relative z-10">Live Report</span>
            <span className="absolute left-0 bottom-1 z-0 w-44 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm"></span>
          </h2>

          <ul className="space-y-6 text-gray-600 mt-6">
            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Social Metrics</strong>
                <div className="text-sm">measure reach, engagement, etc. in real time</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Guidelines Obeyed</strong>
                <div className="text-sm">check which guidelines are being followed and working</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-lg">✦</span>
              <div>
                <strong>Sales ROI</strong>
                <div className="text-sm">measure link clicks & sales (for shopify & woocommerce)</div>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full">Get Started <span className="ml-2">→</span></button>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="w-96 h-64 rounded-2xl overflow-visible flex items-center justify-center">
            <img src={cards} alt="live-report-cards" className="w-full h-full object-contain drop-shadow-lg"/>
          </div>
          <img src={diamond} alt="diamond" className="absolute -bottom-6 left-12 w-12 opacity-90 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
