import React from 'react'

const specialservices = () => {
  return (
    <div>
        {/* Specialized Services Section */}
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-purple-600">
                Specialized Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Premium offerings for brands looking to create exceptional content experiences
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Podcast Production */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                {/* Badge */}
                <div className="inline-flex items-center bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  End-to-End Solution
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600">
                  Podcast Production
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  Complete podcast solution from script development to final publishing
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What&apos;s Included:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Script Writing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Professional Recording</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Audio Editing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Platform Publishing</span>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="w-full bg-gradient-to-r from-pink-700 to-purple-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:from-pink-800 hover:to-purple-700">
                  Learn More
                </button>
              </div>
            </div>

            {/* Script-to-Screen */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
                {/* Badge */}
                <div className="inline-flex items-center bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Creative Storytelling
                </div>
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:to-purple-600">
                  Script-to-Screen
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  Transforming your ideas into compelling visual narratives
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What&apos;s Included:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Story Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Scriptwriting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Storyboarding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Production</span>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="w-full bg-gradient-to-r from-pink-700 to-purple-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:from-pink-800 hover:to-purple-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default specialservices