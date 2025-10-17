import React from 'react'

export default function Nav() {
  return (
    <header className="w-full bg-transparent py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="logo text-2xl font-bold text-gray-800">OPA</div>

        <nav className="hidden md:flex gap-8 text-gray-600">
          <a className="hover:text-gray-900" href="#">Pricing</a>
          <a className="hover:text-gray-900" href="#">Case Studies</a>
          <a className="hover:text-gray-900" href="#">Blog</a>
          <a className="hover:text-gray-900" href="#">Contact Us</a>
          <a className="hover:text-gray-900" href="#">Features</a>
          <a className="hover:text-gray-900" href="#">About Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300">I am an Influencer <span className="ml-2">→</span></button>
          <button className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full">Brand Login <span className="ml-2">→</span></button>
        </div>
      </div>
    </header>
  )
}
