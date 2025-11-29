import React from 'react';
import { SparklesCore } from './ui/sparkles';
import { RainbowButton } from './ui/rainbow-button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center min-h-screen pt-20 font-mono overflow-hidden">
      
      {/* Sparkles Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={1200} // Increased density as requested
          className="w-full h-full"
          particleColors={[
            "#2563eb", // Blue
            "#7c3aed", // Violet
            "#f97316", // Orange
            "#16a34a", // Green
            "#eab308", // Yellow
            "#dc2626", // Red
          ]}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 flex flex-col items-center justify-center w-full">
        {/* Main Heading */}
        <h1 className="font-bold text-[3.5rem] md:text-7xl lg:text-[7rem] leading-[1.05] md:leading-[1.05] text-foreground mb-10 md:mb-12 tracking-[-0.03em]">
          <span className="block">AI Software</span>
          <span className="block">That Transforms</span>
          <span className="block">Businesses</span>
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-lg text-foreground/80 max-w-2xl mb-12 md:mb-16 leading-relaxed md:leading-[1.7] tracking-tight">
          We build custom artificial intelligence solutions that automate processes, optimize decisions, and accelerate your business growth.
        </p>

        {/* CTA Button */}
        <div>
          <a 
            href="https://calendar.notion.so/meet/jose-rb2yx1pyk/fe403pqb" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <RainbowButton className="px-9 py-6 text-sm md:text-[15px]">
              Schedule Call
            </RainbowButton>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;