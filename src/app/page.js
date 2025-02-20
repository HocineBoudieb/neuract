"use client"; // Ce composant est un Client Component

import React, { useEffect, useRef } from "react";
import background from "../assets/background4k.jpg";
import neurown from "../assets/neurown.png";
import Header, { rambla, poppins } from "@/components/header";
import { Button } from "@/components/ui/button";
import TrustCarousel from "@/components/Carousel";
import PresentationCard from "@/components/PresCard";
import CardsGrid from "@/components/PurposeCard";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import CommentsCarousel from "@/components/CommentCarousel";
import { ReactNebula } from "@flodlc/nebula";
import Link from "next/link";

export default function Home() {
  // Refs for sections to observe
  const heroRef = useRef(null);
  const trustCarouselRef = useRef(null);
  const presentationTitleRef = useRef(null);
  const presentationCardRef = useRef(null);
  const purposeRef = useRef(null);
  const cardsGridRef = useRef(null);
  const commentsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optionally unobserve after triggering to run animation only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe each section
    const sections = [
      heroRef,
      trustCarouselRef,
      presentationTitleRef,
      presentationCardRef,
      purposeRef,
      cardsGridRef,
      commentsRef,
    ];
    sections.forEach((ref) => ref.current && observer.observe(ref.current));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Section */}
      <div className="relative h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background.src})` }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 md:h-3/4 bg-gradient-to-b from-transparent to-black"></div>
        <Header />
        <main
          ref={heroRef}
          className="relative z-10 flex flex-col items-center justify-center h-3/4 px-4 md:px-8 opacity-0"
        >
          <div className="text-center">
            <h1
              className={`text-white mt-8 text-6xl md:text-8xl font-extrabold font-serif ${rambla.className}`}
              style={{ transitionDelay: "0.2s" }}
            >
              Bienvenue dans l'ère de l'Audio-Thérapie
            </h1>
            <p
              className={`mt-8 text-white text-xl md:text-2xl font-thin max-w-md mx-auto ${poppins.className}`}
              style={{ transitionDelay: "0.4s" }}
            >
              Solution d’aide à l’endormissement personnalisée basée sur votre activité cérébrale de sommeil !
            </p>
            <div className="mt-8" style={{ transitionDelay: "0.6s" }}>
              <Link href="/product">
                <Button
                  className={`text-black bg-white ${rambla.className} text-xl hover:bg-white`}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
      {/* TrustCarousel overlay */}
      <div
        ref={trustCarouselRef}
        className="absolute left-0 right-0 z-10 opacity-0"
        style={{ top: "calc(90vh - 50px)" }}
      >
        <TrustCarousel />
      </div>
      {/* Présentation Section with Starry Background */}
      <div className="bg-black py-8 pt-64 relative">
        <div className="absolute inset-0 opacity-50">
          <ReactNebula
            config={{
              starsCount: 600,
              starsRotationSpeed: 2,
              nebulasIntensity: 8,
              sunScale: 0,
            }}
          />
        </div>
        <div ref={presentationTitleRef} className="text-center opacity-0">
          <p
            className={`mt-16 text-white text-5xl font-semibold relative z-10 ${rambla.className}`}
            style={{ transitionDelay: "0.2s" }}
          >
            L'ère de
          </p>
          <p
            className={`text-5xl font-semibold relative z-10 ${rambla.className} bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent`}
            style={{ transitionDelay: "0.4s" }}
          >
            l'Audio-Thérapie
          </p>
        </div>
        <div
          ref={presentationCardRef}
          className="flex flex-col justify-center items-center gap-8 mt-16 px-4 relative z-10 opacity-0"
        >
          <PresentationCard
            imageUrl={neurown.src}
            title="NeurOwn"
            tagline="Chacun son rythme !"
            description="NeurOwn est le premier dispositif d'audio-thérapie personnalisé. Basé sur l'activité cérébrale, il favorise la relaxation et l'aide à l'endormissement."
            features={[
              "Votre activité cérébrale nocturne est enregistrée au cours d’une nuit de sommeil à l'aide d'un petit capteur posé sur le front.",
              "Vos séquences sonores sont générées dans les 24h via notre application mobile.",
              "Vos séquences audio personnalisées peuvent être jouées sur tous les types de dispositifs audio (écouteurs, enceinte connectée...).",
              "Différentes ambiances et paysages sonores sont proposés pour s’adapter aux préférences de chacun."
            ]}
            ctaText="En savoir plus"
            ctaLink="/product"
          />
        </div>
        <div ref={purposeRef} className="flex flex-col justify-center items-center gap-8 mt-32 px-4 relative z-10 opacity-0">
          <div className="flex flex-row">
            <p
              className={`text-white text-5xl font-semibold relative z-10 ${rambla.className}`}
              style={{ transitionDelay: "0.2s" }}
            >
              À quoi ça sert
            </p>
            <p
              className={`ml-4 text-5xl font-semibold relative z-10 ${rambla.className} bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent`}
              style={{ transitionDelay: "0.4s" }}
            >
              ?
            </p>
          </div>
        </div>
        <div ref={cardsGridRef} className="opacity-0">
          <CardsGrid />
        </div>
        <div
          ref={commentsRef}
          className="flex justify-center items-center mt-64 mb-32 w-full opacity-0"
        >
          <CommentsCarousel />
        </div>
      </div>
      <Footer />
      {/* CSS for animations */}
      <style jsx>{`
        .opacity-0 {
          opacity: 0;
        }
        .is-visible {
          opacity: 1;
          animation: fadeInUp 0.8s ease-in-out forwards;
        }
        .is-visible > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-in-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}