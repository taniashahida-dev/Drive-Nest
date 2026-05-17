import React from 'react';

const Hero = () => {
    return (
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?luxurycar')] bg-cover bg-center">
    <div className="absolute inset-0 bg-gradient-to-r from-[#41431B]/80 via-[#41431B]/60 to-transparent"></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
    <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
      Drive Your <span className="text-[#AEB784]">Adventure</span>
    </h2>
    <p className="text-xl md:text-2xl mb-10 text-[#E3DBBB] max-w-2xl mx-auto">
      Premium cars. Flexible rentals. Unforgettable journeys.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-[#AEB784] hover:bg-[#E3DBBB] text-[#41431B] font-semibold px-10 py-4 rounded-3xl text-lg transition-all duration-300 flex items-center gap-3 mx-auto sm:mx-0">
        Explore Cars <span>→</span>
      </button>
      <button className="border-2 border-white/80 hover:border-white text-white font-medium px-8 py-4 rounded-3xl text-lg transition">
        Learn More
      </button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
      <div className="w-1 h-3 bg-white/70 rounded-full"></div>
    </div>
  </div>
</section>
    );
};

export default Hero;