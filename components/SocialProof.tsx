import React from 'react';

const companies = [
  "Cavyar S.R.L",
  "La Elvira Constructora",
  "Trabajito.com.bo",
  "Bairu.io",
  "Boring Ventures",
  "H2O"
];

const SocialProof: React.FC = () => {
  // We duplicate the array to ensure seamless looping
  // Since the list is shorter now, we might need to duplicate it more times to fill the screen effectively
  const scrollingCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="w-full py-16 border-y border-gray-100 bg-white overflow-hidden">
      <div className="w-full">
        <p className="text-sm text-gray-400 font-medium mb-10 text-center uppercase tracking-widest px-6">
          Trusted by
        </p>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradients to fade edges */}
          <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex animate-scroll whitespace-nowrap w-max hover:[animation-play-state:paused]">
            {scrollingCompanies.map((company, index) => (
              <div 
                key={index} 
                className="mx-8 md:mx-16 flex items-center justify-center"
              >
                <span className="text-xl md:text-2xl font-bold text-gray-300 hover:text-foreground transition-colors duration-300 cursor-default select-none tracking-tight">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;