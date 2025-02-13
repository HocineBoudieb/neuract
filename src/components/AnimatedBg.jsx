import { useState, useEffect } from 'react';
import bg from '../assets/nebula.png';
export default function AnimatedBackground() {
  const totalFrames = 10;     // Total frames in your sprite sheet
  const frameWidth = 50;      // Pixel width of each frame in your sprite sheet
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down: next frame
        setFrame(prev => (prev + 1) % totalFrames);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up: previous frame (using mod math for wrap-around)
        setFrame(prev => (prev - 1 + totalFrames) % totalFrames);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: `-${frame * frameWidth}px 0`
      }}
    >
      {/* Your content here */}
    </div>
  );
}
