'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, RotateCw, Settings
} from 'lucide-react';

const formatTime = (seconds: number) => {
  if (isNaN(seconds) || !isFinite(seconds)) {
    return '0:00';
  }
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const CustomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('Setting up video event listeners');

    const handlePlay = () => {
      console.log('🎬 Video started playing');
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      console.log('⏸️ Video paused');
      setIsPlaying(false);
    };
    
    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const duration = video.duration;
      console.log('⏰ Time update - Current:', currentTime.toFixed(2), 'Duration:', duration?.toFixed(2));
      setCurrentTime(currentTime);
      if (duration && !isNaN(duration)) {
        setDuration(duration);
      }
    };
    
    const handleLoadedMetadata = () => {
      console.log('📊 Metadata loaded - Duration:', video.duration);
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
      setCurrentTime(video.currentTime || 0);
      setIsPlaying(!video.paused);
    };
    
    const handleLoadedData = () => {
      console.log('📁 Data loaded - Duration:', video.duration);
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };
    
    const handleCanPlay = () => {
      console.log('✅ Can play - Duration:', video.duration, 'Paused:', video.paused);
      setIsPlaying(!video.paused);
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    // Add all event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);

    // Force initial setup
    video.muted = true;
    video.volume = volume;
    
    // Try to get initial duration and time
    if (video.duration && !isNaN(video.duration)) {
      setDuration(video.duration);
    }
    setCurrentTime(video.currentTime || 0);
    
    // Start playing
    const playVideo = async () => {
      try {
        await video.play();
        console.log('✅ Video started successfully');
        setIsPlaying(true);
      } catch (error) {
        console.log('❌ Autoplay failed:', error);
        setIsPlaying(false);
      }
    };
    
    playVideo();

    // Polling fallback for time updates (in case timeupdate events don't fire)
    const pollInterval = setInterval(() => {
      if (video && !video.paused && video.currentTime !== undefined) {
        console.log('📱 Polling - Current:', video.currentTime.toFixed(2), 'Duration:', video.duration?.toFixed(2));
        setCurrentTime(video.currentTime);
        if (video.duration && !isNaN(video.duration) && duration !== video.duration) {
          setDuration(video.duration);
        }
      }
    }, 250); // Update every 250ms

    return () => {
      console.log('🧹 Cleaning up event listeners and polling');
      clearInterval(pollInterval);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    const video = videoRef.current;
    if (!video) return;

    video.volume = vol;
    video.muted = vol === 0;
    setVolume(vol);
    setIsMuted(vol === 0);
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (video) video.currentTime = Math.max(0, video.currentTime - 10);
  };

  const handleForward = () => {
    const video = videoRef.current;
    if (video) video.currentTime = Math.min(video.duration, video.currentTime + 10);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video?.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSettings(false);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const getProgressPercentage = () => {
    if (!duration || duration === 0 || isNaN(duration)) {
      console.log('🚫 Progress: No duration available');
      return 0;
    }
    const percentage = (currentTime / duration) * 100;
    console.log('📈 Progress: ', currentTime.toFixed(2), '/', duration.toFixed(2), '=', percentage.toFixed(2), '%');
    return Math.min(100, Math.max(0, percentage));
  };


  return (
    <>
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #9333ea);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ec4899, #9333ea);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
      <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-black mt-10">
      <video
        ref={videoRef}
        src="/Creator/hitler.mp4"
        className="w-full"
        playsInline
        autoPlay
        muted
        loop
        controls={false}
      />

      {/* Controls Overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 py-4">
        {/* Progress Bar */}
        <div className="relative w-full group mb-4">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-150 ease-out"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={getProgressPercentage()}
            onChange={handleProgressChange}
            className="absolute top-0 left-0 w-full h-1 opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-200"
            style={{
              background: 'transparent',
              WebkitAppearance: 'none',
              appearance: 'none',
            }}
          />
          {/* Progress Bar Thumb */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            style={{ left: `calc(${getProgressPercentage()}% - 6px)` }}
          />
        </div>
        
        <div className="flex justify-between items-center">
          {/* Left Controls */}
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button 
              onClick={togglePlay}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl transform"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            
            {/* Replay Button */}
            <button 
              onClick={handleReplay}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <RotateCcw size={16} />
            </button>
            
            {/* Forward Button */}
            <button 
              onClick={handleForward}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <RotateCw size={16} />
            </button>
            
            {/* Mute Button */}
            <button 
              onClick={toggleMute}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            
            {/* Volume Slider */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, rgb(236, 72, 153) 0%, rgb(147, 51, 234) ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
            </div>
            
            {/* Time Display */}
            <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
              <span className="text-xs font-medium text-white whitespace-nowrap">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 relative">
            {/* Settings Button */}
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <Settings size={16} />
            </button>
            
            {/* Settings Dropdown */}
            {showSettings && (
              <div className="absolute bottom-12 right-0 bg-black/80 backdrop-blur-md border border-white/20 text-white text-sm rounded-xl shadow-2xl p-3 space-y-2 z-20 min-w-[120px]">
                <div className="text-xs text-gray-300 font-medium mb-2">Playback Speed</div>
                {[0.5, 1, 1.5, 2].map(rate => (
                  <button
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className={`w-full px-3 py-2 text-left cursor-pointer hover:bg-white/10 rounded-lg transition-all duration-200 ${
                      playbackRate === rate 
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            )}
            
            {/* Fullscreen Button */}
            <button 
              onClick={toggleFullscreen}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CustomVideoPlayer;
