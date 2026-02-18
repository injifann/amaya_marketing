// Video.jsx  (or VideoPage.jsx)
import React from 'react';

const VideoPage = () => {
  // Sample data — in real project use props / useParams / API
  const video = {
    title: "Behind the Scenes: Crafting the New Era Coffee Brand Identity",
    date: "Nov 15, 2025",
    views: "3.4K",
    videoSrc: "/videos/era-coffee-brand-story.mp4", // ← replace
    poster: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&auto=format&fit=crop&q=80",
    description: `
      Take an exclusive look behind the curtain of how **Amaya Marketing** completely 
      reimagined the visual identity and brand story for Era Coffee — one of Ethiopia's 
      fastest-growing specialty coffee brands.
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
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Header – assuming it's imported in layout or parent */}
      {/* <Header /> */}

      <main className="pt-8 pb-24 lg:pt-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Video Player */}
          <div className="
            rounded-2xl overflow-hidden 
            bg-black 
            border border-gray-200 
            shadow-xl 
            aspect-video
          ">
            <video
              controls
              className="w-full h-full object-cover"
              poster={video.poster}
            >
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Title + Metadata */}
          <div className="mt-10 lg:mt-12">
            <h1 className="
              text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight
              text-gray-900
            ">
              {video.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <time>{video.date}</time>
              </div>
              <span>•</span>
              <span>Amaya Marketing</span>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span>{video.views} views</span>
              </div>
            </div>

            {/* Action buttons */}
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
                Share
              </button>

              <button className="
                px-6 py-3 rounded-xl font-medium 
                text-indigo-700 hover:text-indigo-800 
                bg-indigo-50 hover:bg-indigo-100 
                border border-indigo-200 
                transition-all duration-300
              ">
                Download Case Study
              </button>
            </div>
          </div>

          {/* Two-column content */}
          <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 xl:gap-12">
            {/* Main content */}
            <div className="lg:col-span-8 prose prose-indigo max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                {video.description}
              </p>

              <p className="mt-8 text-gray-700 font-medium">In this video we cover:</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                <li>Brand audit & consumer perception research</li>
                <li>Moodboard & creative direction</li>
                <li>Logo evolution process (7 concepts → final mark)</li>
                <li>Color psychology & custom palette</li>
                <li>Packaging system – retail & export ready</li>
                <li>Photographic style guide & key visuals</li>
              </ul>

              <div className="
                my-12 p-8 rounded-2xl 
                bg-indigo-50 border border-indigo-100 
                shadow-sm
              ">
                <p className="text-lg italic text-gray-800">
                  "Amaya brought our heritage and global ambition together beautifully."
                </p>
                <p className="mt-4 text-gray-600">
                  — Eyerusalem Mekonnen, Founder & CEO, Era Coffee
                </p>
              </div>
            </div>

            {/* Sidebar - Related videos */}
            <aside className="lg:col-span-4">
              <div className="
                rounded-2xl p-6 lg:p-7 
                bg-white border border-gray-200 
                shadow-lg sticky top-24
              ">
                <h3 className="
                  text-2xl font-bold text-gray-900
                ">
                  More from Amaya
                </h3>

                <div className="mt-6 space-y-7">
                  {relatedVideos.map((item, i) => (
                    <a key={i} href="#" className="group block">
                      <div className="
                        aspect-video rounded-xl overflow-hidden 
                        border border-gray-200 
                        shadow-md 
                        group-hover:shadow-lg group-hover:shadow-indigo-100 
                        transition-all duration-400
                      ">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="
                        mt-3 font-semibold text-gray-900 
                        group-hover:text-indigo-700 transition-colors
                      ">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">{item.duration}</p>
                    </a>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <a
                    href="/work"
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    Explore more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;