"use client";

import { useRef } from "react";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function TrackItem({ track, isActive, onToggle }) {
  const audioRef = useRef(null);

  const handleImageClick = () => {
    onToggle(); // Call the parent handler to toggle the active track
    if (!isActive && audioRef.current?.audio.current) {
      // Play the audio if this track becomes active
      audioRef.current.audio.current.play();
    } else if (isActive && audioRef.current?.audio.current) {
      // Pause the audio if this track is being deactivated
      audioRef.current.audio.current.pause();
    }
  };

  return (
    <div className="flex items-center flex-col space-x-4 relative">
      <div className="p-4 rounded-md bg-gray-1000 cursor-pointer flex justify-center items-center flex-col border border-white/20 hover:border-white/40 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        <div
          className="w-44 h-44 rounded-md cursor-pointer relative group"
          onClick={handleImageClick}
        >
          <Image
            src={track.imageUrl}
            alt={track.title}
            layout="responsive"
            width={200}
            height={200}
            className="rounded-md w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
            {!isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            )}
          </div>
        </div>
        <p className={`${poppins.className} text-white font-bold mt-4`}>
          {track.title}
        </p>
      </div>

      {isActive && (
        <div className="fixed bottom-0 left-0 w-full p-4 z-50">
          <AudioPlayer
            ref={audioRef}
            src={track.audioUrl}
            showJumpControls={false}
            showDownloadProgress={false}
            customAdditionalControls={[]}
            customVolumeControls={[]}
            layout="horizontal-reverse"
            className="bg-transparent"
            autoPlay // Starts playing automatically when visible
          />
        </div>
      )}
    </div>
  );
}