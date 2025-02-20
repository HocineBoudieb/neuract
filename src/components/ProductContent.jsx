import Image from 'next/image';
import AnimatedBackground from './AnimatedBg';
import { Rambla, Poppins } from 'next/font/google';
import woman from '../assets/sleeping_woman.jpg';
import brain from '../assets/1-dark.png';
import { Button } from './ui/button';
import MusicPlayer from './MusicPlayer';
import { useEffect, useRef } from 'react';

const rambla = Rambla({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
});

const ProductContent = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <section className="bg-black flex flex-col items-center min-h-screen w-full">
            {/* First Section */}
            <div 
                ref={addToRefs}
                className="w-full bg-black-500 px-4 py-8 md:p-20 text-white flex flex-col fade-slide-in"
            >
                <h1 className={`${rambla.className} text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold w-full mb-12 md:mb-24`}>
                    Écoutez votre cerveau et dormez mieux
                </h1>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="flex flex-col w-full md:w-3/5 gap-6">
                        <div className="space-y-4">
                            <p className={`${poppins.className} text-base sm:text-lg md:text-xl lg:text-2xl`}>
                                Le dispositif de relaxation et d'aide au sommeil de relaxation et d'aide au sommeil
                            </p>
                            <p className={`${poppins.className} text-base sm:text-lg md:text-xl lg:text-2xl`}>
                                Le dispositif de relaxation et d'aide au sommeil relaxation et d'aide au sommeil
                            </p>
                        </div>
                        <Button 
                            variant="ghost" 
                            className="bg-white text-black w-full sm:w-1/2 md:w-2/5 h-12 text-base md:text-lg mt-4 md:mt-6"
                        >
                            En savoir plus
                        </Button>
                    </div>
                    <div className="w-full md:w-2/5 h-[30vh] sm:h-[40vh] md:h-[50vh] rounded-lg bg-no-repeat bg-cover bg-center" 
                         style={{backgroundImage: `url(${brain.src})`}}>
                    </div>
                </div>
            </div>

            {/* Music Player Section */}
            <div 
                ref={addToRefs}
                className="w-full bg-black-500 px-4 py-8 md:p-20 text-white flex flex-col fade-slide-in"
            >
                <h1 className={`${rambla.className} text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold w-full mb-12 md:mb-24`}>
                    Testez le paysage sonore
                </h1>
                <div className="w-full max-w-2xl mx-auto">
                    <MusicPlayer />
                </div>
            </div>

            {/* Audio Therapy Section */}
            <div 
                ref={addToRefs}
                className="w-full bg-black-500 px-4 py-8 md:p-20 text-white flex flex-col fade-slide-in"
            >
                <h1 className={`${rambla.className} text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold w-full mb-12 md:mb-24`}>
                    L'Audio-Thérapie c'est quoi ?
                </h1>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="flex flex-col w-full md:w-3/5 gap-6">
                        <div className="space-y-4">
                            <p className={`${poppins.className} text-base sm:text-lg md:text-xl lg:text-2xl`}>
                                Le dispositif de relaxation et d'aide au sommeil de relaxation et d'aide au sommeil
                            </p>
                            <p className={`${poppins.className} text-base sm:text-lg md:text-xl lg:text-2xl`}>
                                Le dispositif de relaxation et d'aide au sommeil
                            </p>
                        </div>
                        <Button 
                            variant="ghost" 
                            className="bg-white text-black w-full sm:w-1/2 md:w-2/5 h-12 text-base md:text-lg mt-4 md:mt-6"
                        >
                            En savoir plus
                        </Button>
                    </div>
                    <div className="w-full md:w-2/5 h-[30vh] sm:h-[40vh] md:h-[50vh] rounded-lg bg-no-repeat bg-cover bg-center" 
                         style={{backgroundImage: `url(${woman.src})`}}>
                    </div>
                </div>
            </div>

            <style jsx>{`
    .fade-slide-in {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .fade-slide-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .fade-slide-in > * {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .fade-slide-in.visible > * {
        opacity: 1;
        transform: translateY(0);
    }

    .fade-slide-in.visible > :nth-child(1) {
        transition-delay: 0.1s;
    }
    .fade-slide-in.visible > :nth-child(2) {
        transition-delay: 0.2s;
    }
    .fade-slide-in.visible > :nth-child(3) {
        transition-delay: 0.3s;
    }
`}</style>
        </section>
    );
};

export default ProductContent;