import React from 'react';
import heroImage from '../assets/hero5.png';
import { Link } from 'react-router-dom';

export default function Home() {
  // Featured video data
  const featuredVideo = {
    title: "Amaya Founder: How Amaya Helps Businesses Grow",
    date: "February 15, 2026",
    views: "3.4K",
    videoSrc: "/videos/era-coffee-brand-story.mp4", 
    poster: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&auto=format&fit=crop&q=80",
    description: `
      In this video, you'll learn what we provide to businesses, how we can help you grow, and the services you can get from us.
    `,
  };

  const relatedVideos = [
    {
      title: "Zoma – Luxury Ethiopian Resort Brand Launch",
      duration: "2:48",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Commercial – Habesha Airways Safety Video",
      duration: "1:12",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left - Text content */}
        <div className="
          flex-1 flex justify-center md:justify-start 
          relative z-10 px-6 py-5 md:px-12 py-8 lg:px-20 py-10
        ">
          <div className="max-w-xl lg:max-w-3xl space-y-8 md:space-y-12 text-center md:text-left">
            <h1 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold 
              tracking-tight leading-tight text-gray-900
            ">
              Smart Marketing for
              <span className="
                block mt-3 md:mt-6 
                bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 
                bg-clip-text text-transparent
              ">
                Accelarated Growth.
              </span>
            </h1>

            <p className="
              text-lg sm:text-xl md:text-2xl lg:text-2.5xl 
              text-gray-700 leading-relaxed font-light max-w-3xl
            ">
              We create high-impact social media strategies that turn attention into revenue 
              and presence into <span className="font-semibold text-indigo-700">dominance</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start pt-1 md:pt-2">
              {/* Primary CTA */}
              <Link to="/contact">
              <a
                className="
                  group relative inline-flex items-center justify-center 
                  px-5 py-3 sm:px-6 sm:py-3.5 md:px-7 md:py-4 
                  text-sm sm:text-base md:text-lg font-semibold 
                  bg-indigo-600 hover:bg-indigo-700 
                  text-white rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-300/40 
                  transform hover:-translate-y-0.5 transition-all duration-300
                "
              >
                <span className="flex items-center gap-2.5">
                  Get in touch here
                  <svg 
                    className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>  
              </Link>            
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
          <div className="
            absolute inset-0 bg-gradient-to-l 
            from-white/30 via-transparent to-transparent
            pointer-events-none
          " />
        </div>
      </section>

      {/* Featured Video / Case Study Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
               Discover how Amaya accelerates your business growth    
              </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real Ethiopian and global brands we've helped dominate.
            </p>
          </div>

          {/* Video Player */}
          <div className="
            mx-auto max-w-5xl rounded-2xl overflow-hidden 
            bg-black border border-gray-200 shadow-2xl aspect-video
          ">
            <video
              controls
              className="w-full h-full object-cover"
              poster={featuredVideo.poster}
            >
              <source src={featuredVideo.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Title + Metadata + Actions */}
          <div className="mt-10 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              {featuredVideo.title}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <time>{featuredVideo.date}</time>
              </div>
              <span>•</span>
              <span>Amaya Marketing</span>
            </div>

            <p className="mt-6 text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl">
              {featuredVideo.description}
            </p>

            {/* Quick actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="
                inline-flex items-center gap-2 px-6 py-3 
                bg-indigo-600 hover:bg-indigo-700 
                text-white font-medium rounded-xl 
                shadow-md hover:shadow-lg hover:shadow-indigo-300/30 
                transform hover:-translate-y-0.5 
                transition-all duration-300
              ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share Video
              </button>
            </div>
          </div>

          {/* Related Videos Teaser */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              More Stories
            </h4>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {relatedVideos.map((item, i) => (
                <a key={i} href="#" className="group block">
                  <div className="
                    aspect-video rounded-xl overflow-hidden 
                    border border-gray-200 shadow-md 
                    group-hover:shadow-lg group-hover:shadow-indigo-100 
                    transition-all duration-300
                  ">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h5 className="
                    mt-3 font-semibold text-gray-900 
                    group-hover:text-indigo-700 transition-colors
                  ">
                    {item.title}
                  </h5>
                  <p className="mt-1 text-sm text-gray-600">{item.duration}</p>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to ="work">
              <a
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-lg transition-colors"
              >
                See All Our Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Optional subtle footer gradient */}
      <div className="h-24 bg-gradient-to-b from-gray-50 to-white" />
    </main>
  );
}