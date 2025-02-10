"use client";

import React, { useRef, useState, useEffect } from "react";
import CommentCard from "./CommentCards";

// Sample data for comment cards
const commentData = [
  {
    username: "Alice",
    date: "2025-02-01",
    comment: "Great work on the project! Really impressed with the design."
  },
  {
    username: "Bob",
    date: "2025-02-02",
    comment: "I love this feature. It's intuitive and user-friendly."
  },
  {
    username: "Carol",
    date: "2025-02-03",
    comment: "The layout is fantastic, and the responsiveness is top-notch."
  },
  {
    username: "Dave",
    date: "2025-02-04",
    comment: "Keep up the good work. Looking forward to more updates!"
  }
];

// Duplicate comments for an infinite-loop effect
const comments = [...commentData, ...commentData];

const CommentsCarousel = () => {
  // Refs and states for auto-scroll functionality
  const containerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // States for drag functionality
  // Auto scroll is disabled when the user starts dragging.
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Refs to store starting X positions for dragging
  const dragStartXRef = useRef(0);
  const initialDragOffsetRef = useRef(0);

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
          // When 100% of the container is visible, intersectionRatio === 1.
          setIsFullyVisible(entry.intersectionRatio === 1);
        });
      },
      {
        root: null,     // relative to the viewport
        threshold: 1.0, // 100% visibility
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Only animate if auto scroll is enabled and the container is visible.
  const isAnimating = autoScrollEnabled && hasScrolled && isFullyVisible;

  // --- DRAG EVENT HANDLERS ---

  // Mouse events
  const handleMouseDown = (e) => {
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

  // When auto scrolling, we rely on the CSS animation. When the user drags,
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
        {comments.map((data, index) => (
          <div key={index} className="flex-shrink-0">
            <CommentCard
              username={data.username}
              date={data.date}
              comment={data.comment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsCarousel;
