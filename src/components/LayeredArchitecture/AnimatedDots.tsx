
import React from 'react';

interface AnimatedDotsProps {
  direction: 'left' | 'right';
  delay: number;
}

const AnimatedDots: React.FC<AnimatedDotsProps> = ({ direction, delay }) => {
  return (
    <div className="relative w-32 h-8 overflow-hidden">
      {/* Animated dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse`}
          style={{
            left: `${i * 16}px`,
            top: '50%',
            transform: 'translateY(-50%)',
            animationDelay: `${delay + i * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
      
      {/* Moving dot */}
      <div
        className={`absolute w-3 h-3 bg-purple-300 rounded-full shadow-lg shadow-purple-500/50`}
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          animation: direction === 'right' 
            ? `moveRight1 2s linear infinite ${delay}s`
            : `moveLeft1 2s linear infinite ${delay}s`
        }}
      />
    </div>
  );
};

export default AnimatedDots;
