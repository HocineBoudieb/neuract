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
  // Use a ref for the outer container (which is actually clipped by overflow-hidden)
  const containerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // Duplicate cards to create an infinite loop effect
  const cards = [...trustCardsData, ...trustCardsData];

  // Listen for the first scroll event.
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Use Intersection Observer on the outer container
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the entire container is visible, intersectionRatio will be 1
          setIsFullyVisible(entry.intersectionRatio === 1);
        });
      },
      {
        root: null,       // relative to the viewport
        threshold: 1.0,   // 100% of the container must be visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation should run only if the user has scrolled and the outer container is fully visible.
  const isAnimating = hasScrolled && isFullyVisible;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        className="flex space-x-4 whitespace-nowrap py-4 px-10 animate-scroll"
        style={{ animationPlayState: isAnimating ? "running" : "paused" }}
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
