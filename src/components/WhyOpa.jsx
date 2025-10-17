import React from 'react'
import why from '../assets/why-opa_uvwrqx.png'

export default function WhyOpa(){
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Why
          <span className="block">OPA</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 px-6">
          <h3 className="text-4xl font-medium text-gray-800">With OPA</h3>
          <p className="mt-4 text-gray-600">You only have to focus on the important tasks like - setting campaign guidelines, selecting influencers and analyzing performance. Rest is taken care by OPA.</p>
          <div className="mt-6">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full">Get Started <span className="ml-2">→</span></button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <img src={why} alt="Why OPA" className="max-w-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
