
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated Sphere Component - Purple
const PurpleAnimatedSphere = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="#7c3aed"
        roughness={0.1}
        metalness={0.7}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Animated Cone Component - Purple
const PurpleAnimatedCone = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <coneGeometry args={[0.8, 2, 8]} />
      <meshPhysicalMaterial
        color="#a855f7"
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// Animated Blade Component - Purple
const PurpleAnimatedBlade = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.25) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[0.3, 3, 0.1]} />
      <meshPhysicalMaterial
        color="#8b5cf6"
        roughness={0.15}
        metalness={0.6}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// Purple 3D Scene Component
const PurpleScene3D = () => {
  const shapes = useMemo(() => [
    { type: 'sphere', position: [-3, 1.5, -2] as [number, number, number], scale: 0.6 },
    { type: 'sphere', position: [2, -1.2, -3] as [number, number, number], scale: 0.8 },
    { type: 'cone', position: [3, 2, -4] as [number, number, number], scale: 0.5 },
    { type: 'cone', position: [-2, -2, -3] as [number, number, number], scale: 0.7 },
    { type: 'blade', position: [1, 0.5, -2] as [number, number, number], scale: 0.6 },
    { type: 'blade', position: [-1, 2, -4] as [number, number, number], scale: 0.8 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[8, 8, 5]} intensity={0.4} />
      <pointLight position={[-8, -8, -8]} intensity={0.3} color="#7c3aed" />
      
      {shapes.map((shape, index) => {
        switch (shape.type) {
          case 'sphere':
            return <PurpleAnimatedSphere key={index} position={shape.position} scale={shape.scale} />;
          case 'cone':
            return <PurpleAnimatedCone key={index} position={shape.position} scale={shape.scale} />;
          case 'blade':
            return <PurpleAnimatedBlade key={index} position={shape.position} scale={shape.scale} />;
          default:
            return null;
        }
      })}
    </>
  );
};

// Main Purple Animated Background Component
const PurpleBackground3D = () => {
  return (
    <div className="absolute left-0 top-0 w-1/2 h-full opacity-50">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <PurpleScene3D />
      </Canvas>
    </div>
  );
};

export default PurpleBackground3D;
