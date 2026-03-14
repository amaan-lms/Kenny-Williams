import React, { useState } from 'react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Plants', href: '#plants' },
    { name: 'Systems', href: '#systems' },
    { name: 'Tools', href: '#tools' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2E6F4E] flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Holistic Hydro</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-600 hover:text-[#2E6F4E] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#consultation"
              className="bg-[#2E6F4E] text-white px-4 py-2 font-medium hover:bg-[#8FBF6F] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-[#2E6F4E] font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#2E6F4E] text-white px-4 py-2 font-medium text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation