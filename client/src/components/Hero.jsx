import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16 min-h-screen bg-white overflow-hidden flex items-center">
      
      {/* 1. Adjusted Green Side Shape for alignment */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#2E6F4E] clip-path-diagonal hidden lg:block" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Main Content Card with aligned components */}
          <div className="w-full lg:w-11/12 xl:w-5/6 bg-white flex flex-col lg:flex-row border border-gray-100 mx-auto">
            
            {/* 2. Optimized Left Section for seamless alignment */}
              <div className="w-full lg:w-1/2 relative min-h-[500px] bg-gray-200 order-1 lg:order-1">
              <img 
                src="https://plus.unsplash.com/premium_photo-1679921582421-f770b37cd4d5?q=80&w=687&auto=format&fit=crop" 
                alt="Hydroponic Garden" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8"> {/* Added padding for text within the box */}
                <div className="p-8 border-2 border-[#C6A24A] text-center bg-white/60 backdrop-blur-sm">
                   <h1 className="text-[#2E6F4E] text-5xl font-serif font-bold tracking-tighter">
                    Holistic<br/>Hydro<br/>Habitat
                  </h1>
                </div>
              </div>
              {/* 3. Re-aligned Gold Accent Line */}
              <div className="absolute bottom-4 left-0 w-24 h-1 bg-[#C6A24A]"></div> {/* Changed from left-4 to left-0 for full alignment */}
            </div>

            {/* Right Text Content Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#3A8FB7]"></span>
                <p className="text-[#3A8FB7] uppercase tracking-widest text-sm font-bold">Nature Perfected Indoors</p>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Cultivating medicinal plants in controlled hydroponic environments. 
                Combining traditional herbal knowledge with modern indoor cultivation techniques 
                to produce clean, consistent medicinal herbs in sterile, ozone-purified environments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('plants')}
                  className="bg-[#2E6F4E] text-white px-8 py-4 font-semibold hover:bg-[#8FBF6F] transition-all duration-300"
                >
                  Explore Plants
                </button>
                <button 
                  onClick={() => scrollToSection('systems')}
                  className="border-2 border-[#3A8FB7] text-[#3A8FB7] px-8 py-4 font-semibold hover:bg-[#3A8FB7] hover:text-white transition-all duration-300"
                >
                  Design Grow System
                </button>
              </div>

              {/* Decorative Secondary Accent */}
              <div className="mt-12 text-[#8FBF6F] font-light italic">
                "Clean. Consistent. Medicinal."
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Corner Accent - now properly aligned */}
      <div className="absolute bottom-10 left-4 lg:left-8 w-16 lg:w-20 h-16 lg:h-20 border-l-4 border-b-4 border-[#8FBF6F] opacity-30"></div>
    </section>
  );
};

export default Hero;