
import React from 'react';

interface ModernDotsProps {
  direction: 'left' | 'right';
  delay: number;
  color: string;
}

const ModernDots: React.FC<ModernDotsProps> = ({ direction, delay, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'purple':
        return {
          dots: 'bg-purple-400/60',
          glow: 'shadow-purple-500/30',
          moving: 'bg-purple-300'
        };
      case 'blue':
        return {
          dots: 'bg-blue-400/60',
          glow: 'shadow-blue-500/30',
          moving: 'bg-blue-300'
        };
      case 'green':
        return {
          dots: 'bg-green-400/60',
          glow: 'shadow-green-500/30',
          moving: 'bg-green-300'
        };
      default:
        return {
          dots: 'bg-purple-400/60',
          glow: 'shadow-purple-500/30',
          moving: 'bg-purple-300'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="relative w-40 h-12 overflow-hidden">
      {/* Static dots with modern spacing */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 ${colors.dots} rounded-full`}
          style={{
            left: `${i * 24 + 8}px`,
            top: '50%',
            transform: 'translateY(-50%)',
            animation: `pulse 2s ease-in-out infinite ${delay + i * 0.15}s`
          }}
        />
      ))}
      
      {/* Modern moving dot with glow */}
      <div
        className={`absolute w-4 h-4 ${colors.moving} rounded-full ${colors.glow} shadow-lg`}
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          animation: direction === 'right' 
            ? `modernMoveRight 3s ease-in-out infinite ${delay}s`
            : `modernMoveLeft 3s ease-in-out infinite ${delay}s`
        }}
      />
    </div>
  );
};

export default ModernDots;
