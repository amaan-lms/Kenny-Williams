import React, { useState } from 'react'

const HydroponicSystems = () => {
  const [selectedSystem, setSelectedSystem] = useState(null)

  const hydroponicSystems = [
    {
      name: 'Deep Water Culture',
      description: 'Plants suspended in nutrient-rich water with air stone oxygenation.',
      bestFor: 'Leafy greens, herbs',
      complexity: 'Beginner',
      image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Ebb & Flow',
      description: 'Periodic flooding and draining of growing medium for root health.',
      bestFor: 'Most medicinal plants',
      complexity: 'Intermediate',
      image: 'https://i.pinimg.com/1200x/b3/8d/25/b38d25d4c687ea46e5290d2eaca147b7.jpg'
    },
    {
      name: 'Nutrient Film Technique',
      description: 'Thin film of nutrient solution flowing over roots in sloped channels.',
      bestFor: 'Lightweight plants',
      complexity: 'Advanced',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Vertical Rack Systems',
      description: 'Stacked growing layers for maximum space efficiency and yield.',
      bestFor: 'Small spaces, commercial',
      complexity: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800'
    }
  ]

  return (
    <section id="systems" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header - Aligned to the design language of previous sections */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#3A8FB7]"></span>
              <span className="text-[#3A8FB7] uppercase tracking-[0.3em] text-xs font-bold">System Selection</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2E6F4E]">Hydroponic Systems</h3>
          </div>
          <p className="text-gray-500 font-light max-w-sm italic">
            Educational guidance for selecting the perfect system for your medicinal garden.
          </p>
        </div>

        {/* Overlapping Split-Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
          {hydroponicSystems.map((system, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedSystem(selectedSystem === index ? null : index)}
            >
              <div className="flex flex-col md:flex-row items-center">
                
                {/* 1. The Image Panel (The Background Layer) */}
                <div className="w-full md:w-3/5 aspect-video overflow-hidden shadow-xl">
                  <img 
                    src={system.image} 
                    alt={system.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* 2. The Content Panel (The Overlapping Foreground Layer) */}
                <div className="w-full md:w-1/2 mt-[-40px] md:mt-0 md:ml-[-10%] relative z-10 bg-white p-8 shadow-2xl border-t-4 border-[#3A8FB7]">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-serif italic text-[#2E6F4E]">{system.name}</h4>
                    <span className="text-[10px] font-bold text-[#C6A24A] tracking-tighter bg-[#C6A24A]/10 px-2 py-1 uppercase">
                      {system.complexity}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                    {system.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest border-t border-gray-100 pt-4">
                    <span className="text-gray-400">Best for: <span className="text-gray-900 font-bold">{system.bestFor}</span></span>
                    <div className="text-[#3A8FB7] font-bold group-hover:translate-x-2 transition-transform">
                      {selectedSystem === index ? 'Close Details —' : 'View Specs +'}
                    </div>
                  </div>

                  {/* Expandable Technical Detail (Reference Match: Interior portfolio text blocks) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${selectedSystem === index ? 'max-h-60 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 bg-gray-50 grid grid-cols-2 gap-4 text-[10px]">
                      <div>
                        <p className="text-gray-400 mb-1">MAINTENANCE</p>
                        <p className="font-bold text-[#2E6F4E]">{system.complexity === 'Beginner' ? 'LOW' : 'MEDIUM'}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 mb-1">SETUP TIME</p>
                        <p className="font-bold text-[#2E6F4E]">4-8 HOURS</p>
                      </div>
                      <div className="col-span-2 border-t border-gray-200 pt-2">
                        <p className="text-gray-400 mb-1 italic text-[9px]">"Optimized for sterile, ozone-purified medicinal cultivation."</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Background Number */}
              <div className="absolute -top-10 right-0 text-9xl font-serif text-gray-50 z-0 pointer-events-none select-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HydroponicSystems
