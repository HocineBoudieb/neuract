"use client";

import React, { useRef, useState, useEffect } from "react";
import TrustCard from "./TrustCard";

const trustCardsData = [
  {
    brand: "Fondateur",
    name: "Luc Foubert",
    title: "Visionnaire derrière NeurAct, expert en neurosciences et technologies cognitives."
  },
  {
    brand: "NeurAct",
    name: "Neuro Acoustic Transduction",
    title: "Entreprise spécialisée dans la conversion de signaux physiologiques en expériences sensorielles innovantes."
  },
  {
    brand: "NeurOwn",
    name: "Système d'audio-thérapie",
    title: "Un dispositif basé sur l'EEG dédié à la relaxation et l'aide à l’endormissement."
  },
  {
    brand: "Sonification EEG",
    name: "Transformer les signaux cérébraux en sons",
    title: "Une approche innovante pour moduler et induire des états cérébraux à travers le son."
  }
];

const TrustCarousel = () => {
  // Refs and states for the auto scroll functionality
  const containerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // States for drag functionality
  // When a user starts dragging, we disable the auto scroll (CSS animation)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Refs to store starting X positions for dragging
  const dragStartXRef = useRef(0);
  const initialDragOffsetRef = useRef(0);

  // Duplicate cards for infinite-loop effect
  const cards = [...trustCardsData, ...trustCardsData];

  // Listen for the first scroll event on the window.
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Intersection Observer to detect if the container is fully visible.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the entire container is visible, intersectionRatio will be 1.
          setIsFullyVisible(entry.intersectionRatio === 1);
        });
      },
      {
        root: null,     // relative to the viewport
        threshold: 1.0, // 100% of the container must be visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Only animate if auto scroll is still enabled
  const isAnimating = autoScrollEnabled && hasScrolled && isFullyVisible;

  // --- DRAG EVENT HANDLERS ---

  // Mouse events
  const handleMouseDown = (e) => {
    // Disable auto scroll once user begins dragging
    setAutoScrollEnabled(false);
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    initialDragOffsetRef.current = dragOffset;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartXRef.current;
    setDragOffset(initialDragOffsetRef.current + diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events (for mobile)
  const handleTouchStart = (e) => {
    setAutoScrollEnabled(false);
    setIsDragging(true);
    dragStartXRef.current = e.touches[0].clientX;
    initialDragOffsetRef.current = dragOffset;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartXRef.current;
    setDragOffset(initialDragOffsetRef.current + diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Define the style for the inner container.
  // When auto scrolling, we use the CSS animation. When the user drags,
  // we remove the animation and apply a transform based on dragOffset.
  const innerStyle = autoScrollEnabled
    ? { animationPlayState: isAnimating ? "running" : "paused" }
    : { animation: "none", transform: `translateX(${dragOffset}px)` };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      // Attach both mouse and touch events
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // Change cursor to indicate draggable behavior
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div
        className="flex space-x-4 whitespace-nowrap py-4 px-10 animate-scroll"
        style={innerStyle}
      >
        {cards.map((data, index) => (
          <div key={index} className="flex-shrink-0">
            <TrustCard brand={data.brand} name={data.name} title={data.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustCarousel;
