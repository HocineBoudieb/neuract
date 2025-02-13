"use client"; // Ce composant est un Client Component

import React, { useEffect } from "react";
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

  return (
    <div className="min-h-screen relative">
      {/* Background Section */}
      <div className="relative h-[100vh]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background.src})` }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 md:h-3/4 bg-gradient-to-b from-transparent to-black"></div>
        {/* Header */}
        <Header />
        {/* Centered content */}
        <main className="relative z-10 flex flex-col items-center justify-center h-3/4 px-4 md:px-8">
          <div className="text-center">
            <h1
              className={`text-white text-7xl md:text-9xl font-extrabold font-serif ${rambla.className}`}
            >
              Sounds of your Mind
            </h1>
            <p className={`mt-8 text-white text-xl md:text-2xl font-thin max-w-md mx-auto ${poppins.className}`}>
            Solution d’aide à l’endormissement personnalisée 
            basée sur votre activité cérébrale de sommeil !
            </p>
            <div className="mt-8">
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
      {/* TrustCarousel overlay (positioned over both sections) */}
      <div
        className="absolute left-0 right-0 z-10"
        style={{
          top: "calc(90vh - 50px)",
        }}
      >
        <TrustCarousel />
      </div>
      {/* Présentation Section with Starry Background */}
      <div className="bg-black py-8 pt-64 relative">
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-50">
        <ReactNebula config={{
               starsCount: 600,
               starsRotationSpeed: 2,
               nebulasIntensity: 8,
               sunScale:0,
           }}/>
        </div>
        {/* Content */}
        <p className={` mt-16 text-white text-5xl font-semibold text-center relative z-10 ${rambla.className}`}>L'ère de</p>
        <p className={`text-5xl font-semibold text-center relative z-10 ${rambla.className} bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent`}>
          l'Audio-Thérapie
        </p>
        {/* Cards Section */}
        <div className="flex flex-col justify-center items-center gap-8 mt-16 px-4 relative z-10">
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
        <div className="flex flex-col justify-center items-center gap-8 mt-32 px-4 relative z-10">
          <div className="flex flex-row">
            <p className={`text-white text-5xl font-semibold text-center relative z-10 ${rambla.className}`}>À quoi ça sert </p> 
            <p className={`ml-4 text-5xl font-semibold text-center relative z-10 ${rambla.className} bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent`}>? </p>
          </div>
        </div>
        <CardsGrid />
        <div className="flex justify-center items-center mt-64 mb-32 w-full">
          <CommentsCarousel />
        </div>
       
      </div>
      <Footer />
    </div>
    
  );
}