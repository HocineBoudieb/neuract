"use client";

import { useState } from "react";
import TrackItem from "./TrackItem"; // Adjust the path as needed
import desert from "../assets/Tracks/img/desert.webp";
import ocean from "../assets/Tracks/img/ocean.webp";
import cosmic from "../assets/Tracks/img/cosmic.webp";

const tracks = [
  {
    id: 1,
    title: "Desert",
    imageUrl: desert,
    audioUrl: "/assets/audio/desert.mp3",
  },
  {
    id: 2,
    title: "Ocean",
    imageUrl: ocean,
    audioUrl: "/assets/audio/ocean.mp3",
  },
  {
    id: 3,
    title: "Cosmic",
    imageUrl: cosmic,
    audioUrl: "/assets/audio/cosmos.mp3",
  },
];

export default function MusicPlayer() {
  const [activeTrackId, setActiveTrackId] = useState(null);

  const handleTrackToggle = (trackId) => {
    if (activeTrackId === trackId) {
      // If the same track is clicked again, hide the player
      setActiveTrackId(null);
    } else {
      // Activate the new track and deactivate the previous one
      setActiveTrackId(trackId);
    }
  };

  return (
    <div className="w-full p-4 h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20 justify-items-center max-w-7xl mx-auto">
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            isActive={activeTrackId === track.id}
            onToggle={() => handleTrackToggle(track.id)}
          />
        ))}
      </div>
    </div>
  );
}