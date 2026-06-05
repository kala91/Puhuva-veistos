
import React from 'react';
import { SculptureState } from '../types';

interface VisualizerProps {
  state: SculptureState;
}

export const Visualizer: React.FC<VisualizerProps> = ({ state }) => {
  const getOrbBaseStyles = () => {
    switch (state) {
      case SculptureState.OFF:
        return 'bg-zinc-900 shadow-[0_0_10px_rgba(20,20,20,0.5)] scale-75 opacity-40';
      case SculptureState.LISTENING:
        return 'bg-blue-900/40 shadow-[0_0_70px_rgba(30,58,138,0.6)] scale-110';
      case SculptureState.SPEAKING:
        return 'bg-zinc-100 shadow-[0_0_120px_rgba(255,255,255,0.8)] scale-125';
      case SculptureState.IDLE:
      default:
        return 'bg-zinc-800/80 shadow-[0_0_40px_rgba(40,40,40,0.4)] scale-100';
    }
  };

  const getAnimationClass = () => {
    if (state === SculptureState.OFF) return '';
    if (state === SculptureState.SPEAKING) return 'animate-[pulse_1.5s_infinite_ease-in-out]';
    if (state === SculptureState.LISTENING) return 'animate-[ping_3s_infinite_cubic-bezier(0,0,0.2,1)]';
    return 'animate-[pulse_6s_infinite_ease-in-out]'; // Deep breathing
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[350px]">
      {/* Outer Halo for atmosphere */}
      {state !== SculptureState.OFF && (
        <div className={`absolute w-64 h-64 rounded-full border border-zinc-900/30 transition-all duration-1000 ${state === SculptureState.SPEAKING ? 'scale-150 opacity-10' : 'scale-100 opacity-5'}`} />
      )}
      
      {/* The Core */}
      <div 
        className={`w-40 h-40 rounded-full transition-all duration-1000 ease-in-out orb-glow relative z-10 ${getOrbBaseStyles()} ${getAnimationClass()}`}
      />
      
      {/* Subtle secondary glow */}
      {state === SculptureState.SPEAKING && (
        <div className="absolute w-48 h-48 rounded-full bg-white/5 blur-3xl animate-pulse" />
      )}
    </div>
  );
};
