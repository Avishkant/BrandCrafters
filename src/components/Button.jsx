import React from 'react'

export default function Button({children, onClick}){
  return (
    <button onClick={onClick} className="inline-flex items-center bg-[#3f3735] text-white rounded-full px-6 py-3 shadow-md">
      <span className="mr-4 text-lg font-medium">{children}</span>
      <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3f3735]">→</span>
    </button>
  )
}
