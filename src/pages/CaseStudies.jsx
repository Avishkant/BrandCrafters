import React, { useState } from 'react'
import Nav from '../components/Nav'

// import many images from assets/case_study
import Banner from '../assets/case_study/Banner_BN_c0ry9h.png'
import BannerImage from '../assets/case_study/Banner_Image_CB_lqxtix.png'
import Colorbar from '../assets/case_study/Banner_Colorbar_synicv.png'
import QuoteImg from '../assets/case_study/quote_mohzup.png'

import CS1 from '../assets/case_study/4f23af1d34c2b19500b8871d0fea1fdf-ag_169-1685610876-0aa20b5a-6ae9-4f9d-9f29-3c485d43eaa8.png'
import Veet from '../assets/case_study/Veet_Banner_eqyn43.png'
import Bewakoof from '../assets/case_study/Bewakoof_Banner_2_oxgbbg.png'
import Wow from '../assets/case_study/Wow_Banner_2_bcch41.png'
import Purplle from '../assets/case_study/Banner_Purplle_2_jyjp12.png'
import Plum from '../assets/case_study/Banner_Plum_bs2xzv.png'
import SD from '../assets/case_study/Banner_SD_ocwo8f.png'
import BH from '../assets/case_study/Banner_BH_fd5tlp.png'
import L from '../assets/case_study/Banner_L_kccryw.png'
import NE from '../assets/case_study/Banner_NE_sj7ji7.png'

const items = [
  { title: 'Sugar Cosmetics', img: CS1, tag: '#MySkinMyChoice', desc: 'Breaking stereotypes by embracing each unique skin tone.', category: 'macro' },
  { title: 'Colorbar', img: L, tag: '#COLORBARxSHRINGAAR', desc: 'Amazing concept & idea combined with great product', category: 'macro' },
  { title: 'Purplle', img: Purplle, tag: '#PurplleDiwaliLook', desc: 'Trendy, Engaging & Creative content with outstanding Reach', category: 'micro' },
  { title: 'Plum', img: Plum, tag: '#LoveEveryInch', desc: 'fun & sassy content', category: 'micro' },
  { title: 'Blue Heaven', img: BH, tag: '#OBeautyBeautyChallenge', desc: "trendy videos generate insane views!", category: 'micro' },
  { title: 'Lavie', img: NE, tag: '#LavieLoving', desc: 'Re-shareable content with 700K+ impression', category: 'macro' },
  { title: 'Sanfe', img: SD, tag: '#BeautyForAll', desc: 'A perfect skin care routine for glowing and healthy skin', category: 'micro' },
  { title: 'Livon', img: Veet, tag: '#LivonHair', desc: 'A perfect hair care solution for millennials', category: 'micro' },
  { title: 'Veet', img: Veet, tag: '#AlwaysReadyWithVeetMen', desc: 'filter for branded content, 5k influencers!', category: 'macro' },
  { title: 'Bewakoof', img: Bewakoof, tag: '#BeBewakoof', desc: 'Creative & trendy videos!', category: 'macro' },
  { title: 'Wow', img: Wow, tag: '#BeWowNaturally', desc: 'content across product categories, regional content', category: 'micro' }
]

export default function CaseStudies(){
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter)

  return (
    <div className="min-h-screen bg-white">
      <Nav />

  <main className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        {/* Header / Title */}
        <div className="flex items-center gap-8 mb-8">
          <div>
            <div className="relative inline-block">
              <h1 className="text-4xl font-semibold text-gray-800 relative z-10">Case Studies</h1>
              {/* decorative gradient bar under the heading */}
              <span className="absolute left-0 bottom-0 h-3 w-44 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 transform translate-y-2 z-0" />
            </div>

            <p className="text-gray-500 mt-6">a glimpse into whats been working for other brands.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded-full text-sm transition-shadow ${filter === 'all' ? 'bg-yellow-400 text-yellow-900 shadow-md' : 'bg-gray-100 text-gray-700'}`}>All</button>
          <button onClick={() => setFilter('macro')} className={`px-3 py-1 rounded-full text-sm transition-shadow ${filter === 'macro' ? 'bg-yellow-400 text-yellow-900 shadow-md' : 'bg-gray-100 text-gray-700'}`}>Macro Influencer Campaigns</button>
          <button onClick={() => setFilter('micro')} className={`px-3 py-1 rounded-full text-sm transition-shadow ${filter === 'micro' ? 'bg-yellow-400 text-yellow-900 shadow-md' : 'bg-gray-100 text-gray-700'}`}>Micro Influencer Campaigns</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 justify-items-center">
          {filtered.map((it, idx) => (
            <article key={idx} className="bg-transparent max-w-xs group">
              <div className="w-56 md:w-64 h-80 md:h-96 bg-gray-100 overflow-hidden rounded-sm transform transition-transform duration-200 ease-out group-hover:translate-x-2">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-gray-800 font-medium text-center">{it.title}</h3>
              <div className="text-sm text-yellow-800 mt-1 text-center">{it.tag}</div>
              <p className="text-gray-500 text-sm mt-2 text-center">{it.desc}</p>
              <div className="mt-3 text-sm text-gray-700 text-center"><a href="/readmore">Read more →</a></div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
