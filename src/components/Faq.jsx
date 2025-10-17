import React, {useState} from 'react'
import faqImg from '../assets/faq_rvlham.png'
import diamond from '../assets/diamond_jwp0xg.png'

function Item({q, a, open, onToggle}){
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button onClick={onToggle} className="w-full text-left px-6 py-4 flex justify-between items-center">
        <span className="text-gray-700">{q}</span>
        <span className="text-gray-400">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-6 pb-6 text-sm text-gray-600">{a}</div>}
    </div>
  )
}

export default function Faq(){
  const [openIndex, setOpenIndex] = useState(0)
  const items = [
    {q: "What is OPA's magic sauce?", a: "Our proprietary tech-stack sets us apart. We have productized, automated and standardized influencer marketing..."},
    {q: "Do influencers perform better with OPA?", a: "Yes. Our data-driven matching and guidelines result in higher engagement."},
    {q: "What kind of influencers does OPA have?", a: "We have nano to macro influencers across categories and cities."},
    {q: "Why activate Nano or Micro-Influencers?", a: "They deliver high engagement and are cost-effective for targeted campaigns."},
  ]

  return (
    <section className="container mx-auto px-6 py-20 relative">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-72 h-96 overflow-hidden rounded-b-full">
            <img src={faqImg} alt="faq" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-4xl font-medium text-gray-800 mb-2">Frequently<br/>Asked Questions</h2>
          <div className="w-40 h-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-sm mb-6 mx-auto"></div>

          <div className="space-y-4 mt-6">
            {items.map((it, i) => (
              <Item key={i} q={it.q} a={it.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
            ))}
          </div>

          <div className="mt-6">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full">More <span className="ml-2">+</span></button>
          </div>
        </div>

        <img src={diamond} alt="diamond" className="hidden lg:block absolute top-12 right-12 w-10 opacity-80 pointer-events-none" />
      </div>
    </section>
  )
}
