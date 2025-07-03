'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, RotateCw, Settings
} from 'lucide-react';

const formatTime = (seconds: number) => {
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    video.muted = true;
    video.volume = volume;
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play() : video.pause();
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

  return (
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
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white flex flex-col gap-2">
        <div className="flex justify-between items-center gap-4 text-sm">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button onClick={togglePlay}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button onClick={handleReplay}><RotateCcw size={20} /></button>
            <button onClick={handleForward}><RotateCw size={20} /></button>
            <button onClick={toggleMute}>
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 accent-pink-500"
            />
            <span className="text-xs whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 relative">
            <button onClick={() => setShowSettings(!showSettings)}>
              <Settings size={20} />
            </button>
            {showSettings && (
              <div className="absolute bottom-10 right-0 bg-zinc-800 text-white text-xs rounded shadow-lg p-2 space-y-1 z-10">
                {[0.5, 1, 1.5, 2].map(rate => (
                  <div
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className={`px-2 py-1 cursor-pointer hover:bg-zinc-700 rounded ${playbackRate === rate ? 'bg-pink-500' : ''}`}
                  >
                    {rate}x
                  </div>
                ))}
              </div>
            )}
            <button onClick={toggleFullscreen}><Maximize2 size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
