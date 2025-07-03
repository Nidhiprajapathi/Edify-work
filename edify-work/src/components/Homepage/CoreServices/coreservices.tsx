import React from 'react'

const coreservices = () => {
  return (
    <div>
        {/* Services Section */}
      <section className="w-full bg-black text-white py-20">
        {/* SVG Gradient Definitions */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                Our Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to creation, we deliver comprehensive creative solutions that drive engagement and growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Video Shoot */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40 h-64 w-72 flex flex-col items-center justify-center text-center">
                <div className="bg-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-8 h-8 transition-all duration-300" style={{stroke: 'url(#gradient1)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600">
                  Video Shoot
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300">
                  On-location Reels, Ads, BTS
                </p>
              </div>
            </div>

            {/* Video Editing */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40 h-64 w-72 flex flex-col items-center justify-center text-center">
                <div className="bg-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-8 h-8 transition-all duration-300" style={{stroke: 'url(#gradient2)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600">
                  Video Editing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300">
                  YouTube, Shorts, Podcasts, Vlogs
                </p>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40 h-64 w-72 flex flex-col items-center justify-center text-center">
                <div className="bg-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-8 h-8 transition-all duration-300" style={{stroke: 'url(#gradient3)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600">
                  Graphic Design
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300">
                  Thumbnails, Carousels, Branding
                </p>
              </div>
            </div>

            {/* Social Media Management */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40 h-64 w-72 flex flex-col items-center justify-center text-center">
                <div className="bg-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-8 h-8 transition-all duration-300" style={{stroke: 'url(#gradient4)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600 whitespace-nowrap">
                  Social Media Management
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300">
                  Strategy, Scheduling, Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default coreservices