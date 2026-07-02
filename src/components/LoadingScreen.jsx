import React from 'react';

const LoadingScreen = ({ progress, isReady }) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 ease-in-out ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center w-64 max-w-[80vw]">
        <img src="/logo.svg" alt="Apple Logo" className="w-12 h-12 mb-8 opacity-80 invert" />
        <h2 className="text-sm font-semibold mb-6 tracking-widest uppercase opacity-60">
          Loading Experience
        </h2>
        
        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
          />
        </div>
        
        <p className="mt-4 text-xs text-neutral-500 font-mono">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
