
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated Sphere Component - Silver
const SilverAnimatedSphere = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="#94a3b8"
        roughness={0.05}
        metalness={0.9}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Animated Cone Component - Silver
const SilverAnimatedCone = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.006;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[0.8, 2, 8]} />
      <meshPhysicalMaterial
        color="#cbd5e1"
        roughness={0.1}
        metalness={0.95}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// Animated Blade Component - Silver
const SilverAnimatedBlade = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0025;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.35) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.3, 3, 0.1]} />
      <meshPhysicalMaterial
        color="#e2e8f0"
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Silver 3D Scene Component
const SilverScene3D = () => {
  const shapes = useMemo(() => [
    { type: 'sphere', position: [3, 1.8, -2] as [number, number, number], scale: 0.7 },
    { type: 'sphere', position: [-2, -1.5, -3] as [number, number, number], scale: 0.9 },
    { type: 'cone', position: [-3, 2.2, -4] as [number, number, number], scale: 0.6 },
    { type: 'cone', position: [2, -2.2, -3] as [number, number, number], scale: 0.8 },
    { type: 'blade', position: [-1, 0.8, -2] as [number, number, number], scale: 0.7 },
    { type: 'blade', position: [1, 2.5, -4] as [number, number, number], scale: 0.9 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-8, 8, 5]} intensity={0.4} />
      <pointLight position={[8, -8, -8]} intensity={0.3} color="#94a3b8" />
      
      {shapes.map((shape, index) => {
        switch (shape.type) {
          case 'sphere':
            return <SilverAnimatedSphere key={index} position={shape.position} scale={shape.scale} />;
          case 'cone':
            return <SilverAnimatedCone key={index} position={shape.position} scale={shape.scale} />;
          case 'blade':
            return <SilverAnimatedBlade key={index} position={shape.position} scale={shape.scale} />;
          default:
            return null;
        }
      })}
    </>
  );
};

// Main Silver Animated Background Component
const SilverBackground3D = () => {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-50">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <SilverScene3D />
      </Canvas>
    </div>
  );
};

export default SilverBackground3D;
