import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import WhyOpa from '../components/WhyOpa'
import Discover from '../components/Discover'
import Execution from '../components/Execution'
import LiveReport from '../components/LiveReport'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import discoverGraphic from '../assets/discover-graphic_ahjfsk.png'
                 
export default function Home(){
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* background bubble graphic */}
      {/* <img src={discoverGraphic}
        alt="bg-bubble"
        className="pointer-events-none absolute -right-40 -top-20 opacity-30 w-1/2 transform rotate-6"
      /> */}

      <Nav />
      <Hero />
  <Brands />
  <WhyOpa />
  <Discover />
  <Execution />
  <LiveReport />
  <Pricing />
  <Footer />
    </div>
  )
}
