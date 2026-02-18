import heroImage from '../assets/hero5.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left - Text content */}
        <div className="
          flex-1 flex items-center justify-center md:justify-start 
          relative z-10 px-6 py-16 md:py-0 md:px-12 lg:px-20
        ">
          <div className="max-w-xl lg:max-w-3xl space-y-8 md:space-y-12 text-center md:text-left">
            <h1 className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
              tracking-tight leading-tight text-gray-900
            ">
              Marketing That
              <span className="
                block mt-3 md:mt-6 
                bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 
                bg-clip-text text-transparent
              ">
                Moves Markets
              </span>
            </h1>

            <p className="
              text-lg sm:text-xl md:text-2xl lg:text-2.5xl 
              text-gray-700 leading-relaxed font-light max-w-3xl
            ">
              We create high-impact social media strategies that turn attention into revenue 
              and presence into <span className="font-semibold text-indigo-700">dominance</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center md:justify-start pt-6 md:pt-10">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="
                  group relative inline-flex items-center justify-center 
                  px-8 py-5 md:px-10 md:py-6 text-base md:text-xl font-semibold 
                  bg-indigo-600 hover:bg-indigo-700 
                  text-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-300/30 
                  transform hover:-translate-y-1 transition-all duration-300
                "
              >
                <span className="flex items-center gap-3">
                  Get Your Free Strategy Call
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="
                  inline-flex items-center justify-center px-8 py-5 md:px-10 md:py-6 
                  text-base md:text-xl font-semibold 
                  text-indigo-700 border-2 border-indigo-200 
                  hover:border-indigo-400 hover:text-indigo-800 hover:bg-indigo-50 
                  rounded-2xl transition-all duration-300 
                  hover:shadow-md hover:-translate-y-1
                "
              >
                Explore Our Services →
              </a>
            </div>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-0 order-first md:order-last bg-gray-50">
          <img
            src={heroImage}
            alt="Social Media Marketing Success"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Very subtle overlay – only to soften if image is too bright */}
          <div className="
            absolute inset-0 bg-gradient-to-l 
            from-white/30 via-transparent to-transparent
            pointer-events-none
          " />
        </div>
      </section>

      {/* Optional: subtle separator / next section hint */}
      <div className="h-24 bg-gradient-to-b from-white to-gray-50" />
    </main>
  );
}