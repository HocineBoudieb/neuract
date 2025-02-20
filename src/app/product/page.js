"use client";
import Image from 'next/image';
import { ReactNebula } from "@flodlc/nebula";
import Header from '@/components/header';
import ProductContent from '@/components/ProductContent';
import mainImage from "../../assets/neurown_main.png";
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400", "700"],
});

export default function ProductPage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Actions à effectuer lorsque les particules sont chargées
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className='h-[100vh] w-full relative overflow-hidden'>
        <div className="absolute inset-0 z-10">
            <Header />
            <div className="absolute flex flex-col inset-0 items-center justify-center z-0 px-4">
            <Image
                src={mainImage.src}
                alt="Neuract"
                className="w-[90vw] md:w-[80vw] lg:w-[80vw] max-h-[60vh] animate-fadeIn" 
                width={700}
                height={300}          
            />

            {/* Conteneur du texte Responsive */}
            <div className="relative mt-6 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg text-center 
                            w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <p className={`text-base md:text-lg lg:text-xl text-white font-light leading-relaxed ${poppins.className}`}>
                Le premier dispositif d’audio-thérapie personnalisé dédié à la relaxation et à l’aide 
                à l’endormissement basé sur l’activité cérébrale !
                </p>
            </div>
            </div>
        </div>
      </div>

      {/* Nebula Background */}
      <div className="absolute inset-0 z-0">
        <ReactNebula
          config={{
            starsCount: 200,
            starsRotationSpeed: 2,
            nebulasIntensity: 8,
            sunScale: 0,
            planetsScale: 0,
          }}
        />
      </div>
        
      <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-b from-transparent to-black w-full z-10"></div>
      {/* Flèche animée pour inciter à scroller */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

        <ProductContent />
    </div>
  );
}

