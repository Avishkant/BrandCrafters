import React from 'react'

export default function Footer(){
  return (
    <footer className="w-full bg-white border-t mt-24">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-800 font-bold text-xl">OPA</div>
        <div className="mt-4 md:mt-0 text-gray-600">© {new Date().getFullYear()} OPA — All rights reserved</div>
      </div>
    </footer>
  )
}
