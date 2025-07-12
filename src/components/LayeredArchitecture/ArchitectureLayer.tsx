
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ArchitectureLayerProps {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  index: number;
  isReversed: boolean;
}

// Animated Cone Component matching hero section style
const AnimatedCone = ({ color = "#7c3aed" }: { color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <coneGeometry args={[0.8, 2, 8]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4f46e5" />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#ec4899" />
    </group>
  );
};

const ArchitectureLayer: React.FC<ArchitectureLayerProps> = ({
  title,
  description,
  bgColor,
  borderColor,
  index,
  isReversed
}) => {
  const getAccentColor = () => {
    if (title.includes('NFT')) return 'purple';
    if (title.includes('Revenue')) return 'blue';
    return 'green';
  };

  const getConeColor = () => {
    if (title.includes('NFT')) return '#4169e1'; // Royal blue
    if (title.includes('Fleet Performance Analytics')) return '#7c3aed'; // Purple
    return null;
  };

  const accentColor = getAccentColor();
  const coneColor = getConeColor();
  const showAnimation = title.includes('Fleet Performance Analytics') || title.includes('NFT');
  const isNFTLayer = title.includes('NFT');

  return (
    <div className={`flex items-center gap-16 ${isReversed ? 'flex-row-reverse' : ''} max-w-5xl mx-auto`}>
      {/* Animated Cone for NFT Minting (left side) */}
      {showAnimation && coneColor && isNFTLayer && (
        <div className="flex-shrink-0 w-48 h-48">
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            dpr={[1, 2]}
            style={{ background: 'transparent' }}
          >
            <AnimatedCone color={coneColor} />
          </Canvas>
        </div>
      )}

      {/* Content Box */}
      <div className="flex-1 relative">
        {/* Simplified card design */}
        <div className={`relative p-8 rounded-xl bg-gray-900/60 border border-gray-800/30 hover:border-${accentColor}-500/30 transition-all duration-300 group`}>
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-light mb-4 text-white/90 tracking-wide">{title}</h3>
            <p className="text-gray-300/70 text-base leading-relaxed font-light">{description}</p>
          </div>

          {/* Simplified accent line */}
          <div className={`absolute left-0 top-4 bottom-4 w-0.5 bg-${accentColor}-500/50 rounded-full`}></div>
        </div>
      </div>
      
      {/* Animated Cone for Fleet Performance Analytics (right side) */}
      {showAnimation && coneColor && !isNFTLayer && (
        <div className="flex-shrink-0 w-48 h-48">
          <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            dpr={[1, 2]}
            style={{ background: 'transparent' }}
          >
            <AnimatedCone color={coneColor} />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default ArchitectureLayer;
