import amayaLogo from '../assets/amaya_logo.jpg';
import {Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="
      w-full bg-white
      border-b border-gray-200 
      shadow-sm sticky top-0 z-50 transition-all duration-300
    ">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">

          {/* Logo + Tagline */}
          <div className="flex-shrink-0 relative z-10">
            <Link to="/">
            <a 
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 transition-all duration-400"
            >
              {/* Logo with subtle glow  */}
              <div className="relative">
                <div className="
                  absolute inset-0 rounded-1xl 
                  bg-gradient-to-br from-indigo-400/10 via-purple-400/5 to-transparent
                  blur-lg scale-110 
                  group-hover:scale-125 group-hover:blur-xl 
                  transition-all duration-700 opacity-60 group-hover:opacity-80
                "></div>
                
                <img
                  src={amayaLogo}
                  alt="Amaya Logo"
                  className="
                    relative h-12 w-auto sm:h-16 lg:h-20 object-contain rounded-1xl 
                    group-hover:scale-105 group-hover:rotate-[2deg] 
                    group-hover:shadow-lg group-hover:shadow-indigo-200/40
                  "
                />
              </div>

              <div className="flex flex-col items-start sm:items-start leading-none">
                <span className="
                  text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight
                  bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600
                  bg-clip-text text-transparent 
                  transition-all duration-400
                ">
                  Amaya
                </span>
                <span className="
                  text-xs sm:text-sm lg:text-base font-medium tracking-[0.25em] 
                  text-blue-700 uppercase mt-1.5
                ">
                 for Accelerated Growth    
                 </span>
              </div>
            </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {[
              { label: 'Home', href: '' },
              { label: 'Services', href: 'services' },
              { label: 'Work', href: 'work' },
              { label: 'Why Us', href: 'why-us' },
              { label: 'About', href: 'about' },
              { label: 'Insights', href: 'blog' },
              { 
                label: 'Let’s Talk', 
                href: 'contact',
                isCta: true 
              },
            ].map((item) => (
              <Link key={item.href} to={'/' + item.href}>
              <a
                className={`
                  px-4 py-2.5 rounded-xl text-sm lg:text-base font-medium transition-all duration-300
                  ${item.isCta 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-300/30 transform hover:-translate-y-0.5 font-bold' 
                    : 'text-blue-900 hover:text-indigo-600 hover:bg-indigo-50 font-bold'
                  }
                `}
              >
                {item.label}
              </a>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="
                inline-flex items-center justify-center p-3 rounded-xl 
                text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                transition-all duration-200
              "
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}