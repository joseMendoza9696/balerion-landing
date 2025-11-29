import React from 'react';

const GradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Top Left - Pink/Red */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-[#ffc4d6] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-70 animate-blob"></div>
      
      {/* Top Right - Yellow/Orange */}
      <div className="absolute top-[0%] -right-[10%] w-[50vw] h-[50vw] bg-[#ffe4bc] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Center/Bottom - Cyan/Blue */}
      <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-[#a8edea] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60 animate-blob animation-delay-4000"></div>
      
      {/* Bottom Right - Purple */}
      <div className="absolute bottom-[0%] right-[10%] w-[50vw] h-[50vw] bg-[#d4c4fa] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60"></div>
      
      {/* Overlay to ensure text readability if needed (very subtle white wash) */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default GradientBackground;