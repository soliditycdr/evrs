
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated Sphere Component
const AnimatedSphere = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

// Animated Cone Component
const AnimatedCone = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position} scale={scale}>
        <coneGeometry args={[0.8, 2, 8]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

// Animated Box Component (replacing the problematic RoundedBox)
const AnimatedBlade = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[0.3, 3, 0.1]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.7}
          transparent
          opacity={0.75}
        />
      </mesh>
    </group>
  );
};

// Main 3D Scene Component
const Scene3D = () => {
  const shapes = useMemo(() => [
    // Spheres
    { type: 'sphere', position: [-4, 2, -2] as [number, number, number], scale: 0.8, color: '#4f46e5' },
    { type: 'sphere', position: [3, -1, -3] as [number, number, number], scale: 1.2, color: '#7c3aed' },
    { type: 'sphere', position: [-2, -3, -1] as [number, number, number], scale: 0.6, color: '#06b6d4' },
    
    // Cones
    { type: 'cone', position: [4, 3, -4] as [number, number, number], scale: 0.7, color: '#ec4899' },
    { type: 'cone', position: [-3, -2, -5] as [number, number, number], scale: 0.9, color: '#f59e0b' },
    
    // Blades
    { type: 'blade', position: [2, 1, -2] as [number, number, number], scale: 0.8, color: '#10b981' },
    { type: 'blade', position: [-1, 3, -3] as [number, number, number], scale: 1.1, color: '#ef4444' },
    { type: 'blade', position: [1, -2, -4] as [number, number, number], scale: 0.6, color: '#8b5cf6' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4f46e5" />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#ec4899" />
      
      {shapes.map((shape, index) => {
        switch (shape.type) {
          case 'sphere':
            return (
              <AnimatedSphere
                key={index}
                position={shape.position}
                scale={shape.scale}
                color={shape.color}
              />
            );
          case 'cone':
            return (
              <AnimatedCone
                key={index}
                position={shape.position}
                scale={shape.scale}
                color={shape.color}
              />
            );
          case 'blade':
            return (
              <AnimatedBlade
                key={index}
                position={shape.position}
                scale={shape.scale}
                color={shape.color}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

// Main Animated Background Component
const AnimatedBackground3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground3D;
