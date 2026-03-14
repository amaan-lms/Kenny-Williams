import React from 'react'

const Mission = () => {
  const philosophyPoints = [
    {
      id: 'ancient',
      title: 'Ancient Wisdom',
      description: 'Traditional herbal knowledge passed down through generations.',
      accent: '#C6A24A', // Gold
      number: '01'
    },
    {
      id: 'modern',
      title: 'Modern Precision',
      description: 'Advanced hydroponic technology for optimal growing conditions.',
      accent: '#3A8FB7', // Hydro Blue
      number: '02'
    },
    {
      id: 'sterile',
      title: 'Sterile Environment',
      description: 'Ozone-purified spaces eliminate mold and contaminants.',
      accent: '#8FBF6F', // Soft Herbal Green
      number: '03'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimalist approach */}
        <div className="text-center mb-20">
          <p className="text-[#C6A24A] font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Philosophy</p>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2E6F4E]">Bridging Tradition & Tech</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {philosophyPoints.map((point) => (
            <div key={point.id} className="relative group">
              
              {/* The "Back" Shadow Card - Keeping it consistent gray/black */}
              <div className="absolute inset-0 bg-gray-100 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>

              {/* The Main Card - Now all use Botanical Green */}
              <div className="relative z-10 bg-[#2E6F4E] p-10 h-[400px] flex flex-col justify-between border border-[#2E6F4E]">
                
                <div>
                  {/* Accent Line - The only part that changes color */}
                  <div 
                    className="w-16 h-[1px] mb-8" 
                    style={{ backgroundColor: point.accent }}
                  ></div>
                  
                  <h4 className="text-2xl font-serif text-white mb-4 italic">
                    {point.title}
                  </h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  {/* Subtle numbering */}
                  <span className="text-white/10 font-serif text-6xl leading-none">{point.number}</span>
                  
                  {/* Minimalist Arrow */}
                  <button className="text-white/50 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Corner (Botanical/Gold mix) */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#C6A24A]/30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission