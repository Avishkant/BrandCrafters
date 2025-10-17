import React from 'react'
import quote from '../assets/quote_mohzup.png'
import instagram from '../assets/instagram_jc1jx1.png'
import linkedin from '../assets/react.svg'

export default function Footer(){
  return (
  <footer className="bg-[#3f3735] text-gray-200 mt-auto" style={{position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw'}}>
      <div className="w-full px-0">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* left: quote */}
            <div className="lg:w-1/2 flex items-start gap-6">
              <img src={quote} alt="quote" className="w-12 opacity-30" />
              <div>
                <p className="text-2xl leading-relaxed">Brand is not what companies tell consumers, it's what consumers tell each other</p>
                <div className="mt-4 text-sm text-gray-400">- Mark Schaefer</div>
              </div>
            </div>

            {/* right: columns */}
            <div className="lg:w-1/2 flex justify-between">
              <div>
                <h4 className="text-sm font-semibold mb-4">Registered Office</h4>
                <div className="text-sm text-gray-400">F10/111, Moongipa Arcade, DN Nagar, Mumbai - 400053</div>
                <div className="flex gap-3 mt-4">
                  <img src={instagram} alt="ig" className="w-8 h-8 bg-white rounded-full p-1" />
                  <img src={linkedin} alt="ln" className="w-8 h-8 bg-white rounded-full p-1" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4">Headquarters</h4>
                <div className="text-sm text-gray-400">1st Floor, Star Co-working, MIDC, Andheri (E), Mumbai - 400093</div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-4">Warehouse</h4>
                <div className="text-sm text-gray-400">Unit 5, Dharam Supreme, Mankoli Anjruhpata Road, Bhiwandi - 421302</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#4b4442] py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-300 w-full">
          <div>Terms & Conditions &nbsp; • &nbsp; Privacy Policy</div>
          <div>©{new Date().getFullYear()} OPA Marketing Tech Pvt. Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

