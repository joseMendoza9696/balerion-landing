import React from 'react';
import ShaderGradient from './ShaderGradient';
import { RainbowButton } from './ui/rainbow-button';

const CTA: React.FC = () => {
  return (
    <section className="relative w-full h-[450px] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Shader */}
      <div className="absolute inset-0 z-0">
        <ShaderGradient />
        {/* Gradient overlay to fade top into black if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
          Future Proof<br />
          Your Business
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-300 font-medium max-w-2xl mb-10 leading-relaxed">
          Unleashing potential through bold AI solutions, seamless integrations, and limitless scalability.
        </p>

        {/* Button */}
        <div>
          <a 
            href="https://calendar.notion.so/meet/jose-rb2yx1pyk/fe403pqb" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <RainbowButton className="px-10 py-5 text-base md:text-lg bg-white text-black hover:bg-gray-200 active:scale-95 transition-all">
              Schedule Call
            </RainbowButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;