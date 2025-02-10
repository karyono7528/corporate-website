export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/images/hero-bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-between">
        <div></div>

        <div className="flex justify-between items-end animate-fade-in delay-700">
          <div className="max-w-xl mb-5">
            <h1 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-3 uppercase opacity-90">
              Global Energy Transport
            </h1>
            <p className="text-base md:text-lg font-thin text-gray-200 mb-4 tracking-wider">
              Powering the World: Safe, Efficient Maritime Logistics
            </p>
            <div className="w-16 h-0.5 bg-blue-500 mb-4"></div>
            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Navigating the global economy through precision-engineered maritime solutions, 
              our tanker fleet represents the pinnacle of energy transportation technology.
            </p>
          </div>
          
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-sm hover:bg-white hover:text-blue-600 transition-colors flex items-center group mb-5 text-sm">
            Our Fleet
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
