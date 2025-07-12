
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Generate sphere points using fibonacci spiral
const generateSpherePoints = (count: number) => {
  const points = [];
  const golden = (1 + Math.sqrt(5)) / 2;
  
  for (let i = 0; i < count; i++) {
    const theta = 2 * Math.PI * i / golden;
    const phi = Math.acos(1 - 2 * i / count);
    
    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);
    
    points.push(new THREE.Vector3(x, y, z));
  }
  
  return points;
};

// City locations (approximate coordinates converted to sphere points)
const cityLocations = [
  { name: 'New York', pos: new THREE.Vector3(0.74, 0.41, 0.53) },
  { name: 'London', pos: new THREE.Vector3(0.0, 0.87, 0.5) },
  { name: 'Tokyo', pos: new THREE.Vector3(-0.61, 0.36, 0.71) },
  { name: 'Sydney', pos: new THREE.Vector3(-0.61, -0.79, 0.0) },
  { name: 'Los Angeles', pos: new THREE.Vector3(0.8, 0.34, -0.5) },
  { name: 'Berlin', pos: new THREE.Vector3(-0.13, 0.86, 0.49) },
];

const RotatingDotSphere: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const points = generateSpherePoints(800);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Slow rotation
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Regular dots */}
      {points.map((point, index) => (
        <mesh key={index} position={[point.x * 2, point.y * 2, point.z * 2]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Highlighted city dots */}
      {cityLocations.map((city, index) => (
        <group key={`city-${index}`}>
          <mesh position={[city.pos.x * 2, city.pos.y * 2, city.pos.z * 2]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial 
              color="#a855f7" 
              transparent 
              opacity={0.9}
            />
          </mesh>
          {/* Pulsing glow effect */}
          <mesh position={[city.pos.x * 2, city.pos.y * 2, city.pos.z * 2]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial 
              color="#a855f7" 
              transparent 
              opacity={0.3}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const DotGlobe: React.FC = () => {
  return (
    <div className="w-96 h-96 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <RotatingDotSphere />
      </Canvas>
    </div>
  );
};

export default DotGlobe;
