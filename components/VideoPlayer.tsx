'use client';

import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleToggle() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function handleEnded() {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.load();
    setIsPlaying(false);
  }

  return (
    <div className="flex flex-col items-center mb-8">
      <video
        ref={videoRef}
        src="/intro.mp4"
        poster="/images/thumbnail.jpg"
        playsInline
        preload="none"
        onEnded={handleEnded}
        onClick={handleToggle}
        width={480}
        height={270}
        className="w-full max-w-[480px] aspect-video rounded-md cursor-pointer object-cover"
      />
      <button
        type="button"
        onClick={handleToggle}
        className="mt-3 inline-flex items-center gap-2 font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors underline underline-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 flex-shrink-0"
          aria-hidden="true"
        >
          {isPlaying ? (
            <>
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </>
          ) : (
            <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z" />
          )}
        </svg>
        {isPlaying ? 'Click to pause' : 'Click here to play our welcome message'}
      </button>
    </div>
  );
}
