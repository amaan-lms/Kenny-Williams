import React, { useState } from 'react'

const HabitatTools = () => {
  const [activeTool, setActiveTool] = useState(0)

  const habitatTools = [
    {
      id: 'wheel',
      title: 'Medicinal Habitat Wheel',
      subtitle: 'COMPATIBILITY ANALYSIS',
      description: 'A professional-grade visual tool designed for pairing compatible medicinal plants based on nutrient uptake and growth cycles.',
      color: '#2E6F4E',
      features: ['Plant compatibility matrix', 'Growth pattern analysis', 'Seasonal planning'],
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'pyramid',
      title: 'Habitat Pyramid',
      subtitle: 'RESOURCE ALLOCATION',
      description: 'An architectural hierarchy for your growing environment, prioritizing atmospheric control, nutrient delivery, and space optimization.',
      color: '#3A8FB7',
      features: ['Environmental zones', 'Resource allocation', 'Space optimization'],
      image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'guide',
      title: 'Compatibility Guide',
      subtitle: 'GROWTH HARMONIES',
      description: 'Our proprietary companion planting database for medicinal herbs, featuring conflict warnings and symbiotic growth harmonies.',
      color: '#C6A24A',
      features: ['Companion planting database', 'Conflict warnings', 'Growth harmonies'],
      image: 'https://i.pinimg.com/1200x/e5/d6/b5/e5d6b5b04ada488b904f9e009b904edd.jpg'
    }
  ]

  return (
    <section id="tools" className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Background Split - Matching the Diagonal Image Reference */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] bg-[#2E6F4E] transition-colors duration-700" 
             style={{ backgroundColor: habitatTools[activeTool].color }}>
        </div>
        <div className="w-full lg:w-[55%] relative">
          <img 
            src={habitatTools[activeTool].image}
            alt="Tool Background"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply transition-opacity duration-1000"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center py-20">
        
        {/* Header Label */}
        <div className="mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 border border-white/20 text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
            Interactive Tools
          </div>
          <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tighter italic">
            Design Your <br/>Habitat
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* 1. The Interactive Selector (Left Side) */}
          <div className="space-y-6">
            {habitatTools.map((tool, index) => (
              <button
                key={tool.id}
                onMouseEnter={() => setActiveTool(index)}
                className={`w-full text-left p-8 transition-all duration-500 border-l-4 ${
                  activeTool === index 
                  ? 'bg-white shadow-2xl border-[#C6A24A] translate-x-4' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <p className={`text-[10px] font-bold tracking-widest mb-2 transition-colors ${
                   activeTool === index ? 'text-[#3A8FB7]' : 'text-white/40'
                }`}>
                  {tool.subtitle}
                </p>
                <h4 className={`text-2xl font-serif transition-colors ${
                   activeTool === index ? 'text-[#2E6F4E]' : 'text-white'
                }`}>
                  {tool.title}
                </h4>
              </button>
            ))}
          </div>

          {/* 2. The Detailed Display (Right Side) */}
          <div className="bg-white p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Background Accent Shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8FBF6F]/5 clip-path-diagonal" 
                 style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            
            <p className="text-gray-400 text-xs font-bold tracking-[0.2em] mb-8 uppercase">Description</p>
            <p className="text-gray-700 text-xl font-light leading-relaxed mb-10">
              {habitatTools[activeTool].description}
            </p>

            <div className="space-y-4">
              <p className="text-[#C6A24A] text-[10px] font-bold tracking-widest uppercase">Key Features —</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {habitatTools[activeTool].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-500 italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FBF6F]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-12 group flex items-center gap-4 text-[#2E6F4E] font-bold uppercase tracking-widest text-xs border-b border-[#2E6F4E] pb-2 hover:text-[#C6A24A] hover:border-[#C6A24A] transition-all">
              Launch Interactive Tool
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Footer Branding Alignment */}
      <div className="absolute bottom-10 left-6 z-20 hidden lg:block">
         <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.8em] vertical-text transform -rotate-90">
           Habitat Portfolio 2026
         </p>
      </div>
    </section>
  )
}

export default HabitatTools
