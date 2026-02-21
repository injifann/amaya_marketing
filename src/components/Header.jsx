import { useState } from 'react';
import amayaLogo from '../assets/amaya_logo.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: 'services' },
    { label: 'Work', href: 'work' },
    { label: 'WhyUs', href: 'why-us' },
    { label: 'About', href: 'about' },
    { label: 'Articles', href: 'blog' },
    { 
      label: 'Let’s Talk', 
      href: 'contact',
      isCta: true 
    },
  ];

  return (
    <header className="
      w-full bg-white
      border-b border-gray-200 
      shadow-sm sticky top-0 z-50 transition-all duration-300
    ">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between">

          {/* Logo + Tagline - always visible */}
          <div className="flex-shrink-0 relative z-10">
            <Link to="/">
              <div 
                className="
                  group flex items-start sm:items-center 
                  gap-2.5 sm:gap-4 md:gap-2
                  transition-all duration-400
                "
              >
                {/* Logo with subtle glow */}
                <div className="relative flex-shrink-0">
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
                      relative h-10 w-auto sm:h-14 lg:h-20 
                      object-contain rounded-1xl 
                      group-hover:scale-105 group-hover:rotate-[2deg] 
                      group-hover:shadow-lg group-hover:shadow-indigo-200/40
                    "
                  />
                </div>

                {/* Text – stacked on mobile, side-by-side on larger screens */}
                <div className="flex flex-col items-start leading-none min-w-0">
                  <span className="
                    text-xl sm:text-3xl lg:text-4xl md:1xl
                    font-extrabold tracking-tight
                    bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600
                    bg-clip-text text-transparent 
                    transition-all duration-400
                    whitespace-nowrap
                  ">
                    Amaya
                  </span>

                  <span className="
                    text-xs sm:text-sm lg:text-base 
                    font-medium tracking-[0.25em] 
                    text-blue-700 uppercase 
                    mt-0.5 sm:mt-1
                  ">
                    for Accelerated Growth
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:gap-3">
            {navItems.map((item) => (
              <Link key={item.href} to={'/' + item.href}>
                <div
                  className={`
                    px-3 py-2.5 rounded-xl text-sm lg:text-base font-medium 
                    transition-all duration-300 cursor-pointer
                    ${item.isCta 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-300/30 transform hover:-translate-y-0.5 font-bold md:text-sm' 
                      : 'text-blue-900 hover:text-indigo-600 hover:bg-indigo-50 font-bold md:text-sm'
                    }
                  `}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                inline-flex items-center justify-center p-2.5 rounded-xl 
                text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                transition-all duration-200
              "
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu panel */}
      <div 
        className={`
          md:hidden fixed inset-y-0 right-0 z-40 w-4/5 sm:w-72 bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <span className="text-lg font-bold text-indigo-700">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-5 py-8 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={'/' + item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-5 py-4 rounded-xl text-lg font-medium transition-colors
                  ${item.isCta 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'text-gray-800 hover:bg-indigo-50 hover:text-indigo-700'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}