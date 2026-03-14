import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const footerSections = [
    {
      title: 'Services',
      links: [
        { text: 'Custom System Design', href: '#consultation' },
        { text: 'Plant Consultation', href: '#consultation' },
        { text: 'Setup Guidance', href: '#systems' },
        { text: 'Optimization Services', href: '#consultation' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Growing Guides', href: '#' },
        { text: 'Plant Database', href: '#plants' },
        { text: 'System Tutorials', href: '#systems' },
        { text: 'Community Forum', href: '#' }
      ]
    },
    {
      title: 'Future Expansion',
      links: [
        { text: 'Medicinal Seed Packs', href: '#' },
        { text: 'Companion Kits', href: '#' },
        { text: 'Online Booking', href: '#consultation' },
        { text: 'Workshop Programs', href: '#' }
      ]
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a2e23] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gold Line at Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C6A24A]"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-[#C6A24A] flex items-center justify-center">
                <span className="text-[#C6A24A] font-serif italic text-2xl">H</span>
              </div>
              <div>
                <h4 className="text-2xl font-serif italic tracking-tight">Holistic Hydro</h4>
                <p className="text-[10px] text-[#3A8FB7] uppercase tracking-[0.4em] font-bold">Nature Perfected Indoors</p>
              </div>
            </div>

            <p className="text-gray-300 font-light leading-relaxed mb-10 max-w-sm italic">
              Cultivating medicinal plants in sterile, ozone-purified hydroponic environments. Combining traditional wisdom with modern automation.
            </p>

            {/* Premium Newsletter Form */}
            <div className="max-w-md">
              <p className="text-[#C6A24A] text-[10px] font-bold uppercase tracking-widest mb-4">The Botanical Brief —</p>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0 border-b border-white/20 focus-within:border-[#3A8FB7] transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL"
                    className="flex-1 bg-transparent py-4 text-xs tracking-widest outline-none placeholder:text-white/40 text-white"
                    required
                  />
                  <button
                    type="submit"
                    className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#3A8FB7] transition-colors"
                  >
                    Subscribe +
                  </button>
                </form>
              ) : (
                <div className="py-4 text-[#8FBF6F] text-xs font-bold tracking-widest animate-pulse">
                  ✓ ACCESS GRANTED. CHECK YOUR INBOX.
                </div>
              )}
            </div>
          </div>

          {/* Nav Sections - Using the Vertical Editorial look */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h5 className="text-[10px] font-bold text-[#C6A24A] uppercase tracking-[0.3em] mb-8 border-l-2 border-[#C6A24A] pl-4">
                  {section.title}
                </h5>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-all text-xs font-light hover:translate-x-2 inline-block italic"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">
              &copy; {currentYear} Holistic Hydro Habitat • Sterile Grow Systems
            </div>
            
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-[10px] text-gray-400 hover:text-[#3A8FB7] transition uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>

            {/* Decorative Blue Dot (Water Reference) */}
            <div className="hidden md:flex items-center gap-2">
               <span className="text-[9px] text-gray-400 uppercase tracking-tighter">Ozone Active</span>
               <div className="w-2 h-2 rounded-full bg-[#3A8FB7] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic: Subdued large text (Ref: 01 Backgrounds) */}
      <div className="absolute -bottom-10 -right-10 text-[15rem] font-serif italic text-white/[0.02] pointer-events-none select-none">
        Botanical
      </div>
    </footer>
  )
}

export default Footer