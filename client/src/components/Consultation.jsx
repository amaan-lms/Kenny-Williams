import React, { useState } from 'react'

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const consultationServices = [
    {
      title: 'Custom System Design',
      description: 'Tailored hydroponic solutions for your specific medicinal goals.',
      icon: '🏗️'
    },
    {
      title: 'Plant Pairing',
      description: 'Expert medicinal herb compatibility and synergy recommendations.',
      icon: '🌿'
    },
    {
      title: 'Sterile Setup',
      description: 'Professional clean-room configuration for ozone-purified growth.',
      icon: '🧪'
    },
    {
      title: 'Optimization',
      description: 'Technical nutrient and lighting fine-tuning for maximum potency.',
      icon: '⚡'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="consultation" className="relative py-24 bg-white overflow-hidden">
      {/* Editorial Background Element (Diagonal reference image match) */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#2E6F4E]/5 -skew-x-12 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header: Minimalist & Bold */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-[#C6A24A] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Let's Build Your Vision</p>
            <h3 className="text-4xl md:text-6xl font-serif text-[#2E6F4E] leading-tight italic">
              Design Your <br/>Medicinal Garden
            </h3>
          </div>
          <p className="text-gray-500 font-light max-w-sm border-l border-[#3A8FB7] pl-6 italic">
            Get personalized guidance for your custom hydroponic medicinal grow system from our master cultivators.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Services Grid (Matching Portfolio Cards) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consultationServices.map((service, index) => (
                <div key={index} className="group p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <h4 className="text-sm font-bold text-[#2E6F4E] uppercase tracking-widest mb-3">{service.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">{service.description}</p>
                </div>
              ))}
            </div>
            {/* Contact Brand Accent */}
            <div className="pt-8">
               <span className="text-[10px] font-bold text-[#3A8FB7] tracking-[0.6em] uppercase">Holistic Hydro • 2026</span>
            </div>
          </div>

          {/* Right Column: The "Portfolio" Form */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] p-10 md:p-16 border-t-8 border-[#C6A24A]">
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <div className="relative border-b border-gray-200 py-2 focus-within:border-[#2E6F4E] transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Full Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full bg-transparent text-gray-900 focus:outline-none font-serif italic text-lg"
                    />
                  </div>
                  <div className="relative border-b border-gray-200 py-2 focus-within:border-[#2E6F4E] transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full bg-transparent text-gray-900 focus:outline-none font-serif italic text-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <div className="relative border-b border-gray-200 py-2 focus-within:border-[#2E6F4E] transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Project Type</label>
                    <select
                      name="projectType" value={formData.projectType} onChange={handleInputChange}
                      className="w-full bg-transparent text-gray-900 focus:outline-none font-serif italic text-lg appearance-none cursor-pointer"
                    >
                      <option value="residential">Residential Suite</option>
                      <option value="commercial">Commercial Facility</option>
                      <option value="research">Research Lab</option>
                    </select>
                  </div>
                  <div className="relative border-b border-gray-200 py-2 focus-within:border-[#2E6F4E] transition-colors">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Phone (Optional)</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      className="w-full bg-transparent text-gray-900 focus:outline-none font-serif italic text-lg"
                    />
                  </div>
                </div>

                <div className="relative border-b border-gray-200 py-2 focus-within:border-[#2E6F4E] transition-colors mb-12">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Project Details</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange} rows={3}
                    className="w-full bg-transparent text-gray-900 focus:outline-none font-serif italic text-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-6 bg-[#2E6F4E] text-white px-12 py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#C6A24A] transition-all duration-500 shadow-xl"
                >
                  Request Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-20 bg-[#2E6F4E] text-white text-center shadow-2xl animate-fadeIn">
                <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center mb-8 text-4xl">✓</div>
                <h4 className="text-3xl font-serif italic mb-4">Request Received</h4>
                <p className="text-white/60 font-light max-w-xs">Our system designers will reach out within 24 hours to schedule your briefing.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consultation