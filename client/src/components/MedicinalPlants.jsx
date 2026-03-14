import React, { useState } from 'react'

const MedicinalPlants = () => {
  const [selectedPlant, setSelectedPlant] = useState(null)

  const medicinalPlants = [
    {
      name: 'Lemon Balm',
      scientific: 'Melissa officinalis',
      benefits: 'Calming, digestive support, stress relief',
      image: 'https://i.pinimg.com/1200x/3a/11/1c/3a111cc9394e0be0d16aed118b2e2210.jpg'
    },
    {
      name: 'Chamomile',
      scientific: 'Matricaria chamomilla',
      benefits: 'Sleep aid, anti-inflammatory, relaxation',
      image: 'https://i.pinimg.com/1200x/df/d5/23/dfd523673a409c8b11381362bc2be429.jpg'
    },
    {
      name: 'Peppermint',
      scientific: 'Mentha × piperita',
      benefits: 'Digestive health, headache relief, mental clarity',
      image: 'https://i.pinimg.com/1200x/4c/f0/89/4cf08991098c7f16d6aeed8382491446.jpg'
    },
    {
      name: 'Tulsi',
      scientific: 'Ocimum sanctum',
      benefits: 'Adaptogen, immune support, stress reduction',
      image: 'https://i.pinimg.com/1200x/c4/cb/a3/c4cba3061c8709d588b2ada779d50322.jpg'
    },
    {
      name: 'Skullcap',
      scientific: 'Scutellaria lateriflora',
      benefits: 'Nervous system support, anxiety relief',
      image: 'https://i.pinimg.com/1200x/d1/de/cb/d1decb6b826793b9dcbd76897ec26dc1.jpg'
    },
    {
      name: 'Echinacea',
      scientific: 'Echinacea purpurea',
      benefits: 'Immune system boost, cold prevention',
      image: 'https://i.pinimg.com/1200x/82/40/c9/8240c9b2ec6615cc683bfd44b62cf22e.jpg'
    }
  ]

  return (
    <section id="plants" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="h-[1px] w-20 bg-[#C6A24A] mb-8"></div>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2E6F4E] uppercase tracking-widest mb-4">
            Botanical Portfolio
          </h3>
          <p className="text-gray-500 font-light max-w-xl">
            Clean, consistent medicinal herbs cultivated in our sterile, ozone-purified hydroponic environments.
          </p>
        </div>

        {/* Portfolio Grid (Minimal Gutters) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {medicinalPlants.map((plant, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-gray-100"
              onClick={() => setSelectedPlant(selectedPlant === index ? null : index)}
            >
              {/* Main Image */}
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Top Overlay Label (Reference Match: "INTERIOR") */}
              <div className="absolute top-6 left-6 z-20">
                <span className="text-white text-xs font-bold uppercase tracking-[0.3em] bg-[#2E6F4E] px-3 py-1 bg-opacity-80">
                  Medicinal
                </span>
              </div>

              {/* Hover/Selected Content Overlay */}
              <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-8 transition-opacity duration-300 ${selectedPlant === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className="border-l-2 border-[#C6A24A] pl-4">
                  <h4 className="text-white text-2xl font-serif italic mb-1">{plant.name}</h4>
                  <p className="text-[#8FBF6F] text-sm italic mb-4">{plant.scientific}</p>
                  <p className="text-white/80 text-sm font-light leading-relaxed mb-6">
                    {plant.benefits}
                  </p>
                  
                  {/* Detailed Specs (Visible when selected) */}
                  <div className={`overflow-hidden transition-all duration-500 ${selectedPlant === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/20 text-[10px] text-white uppercase tracking-widest">
                      <div>PH: 5.5-6.5</div>
                      <div>Temp: 18-24°C</div>
                      <div>Cycle: 16H Light</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Footer Accent */}
        <div className="mt-12 flex justify-center">
          <p className="text-[#3A8FB7] text-[10px] font-bold uppercase tracking-[0.5em]">
            Holistic Hydro Habitat — 2026
          </p>
        </div>

      </div>
    </section>
  )
}

export default MedicinalPlants
