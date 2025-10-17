import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import WhyOpa from '../components/WhyOpa'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Nav />
  <Hero />
  <Brands />
  <WhyOpa />
      <Footer />
    </div>
  )
}
