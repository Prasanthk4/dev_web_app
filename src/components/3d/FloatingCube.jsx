import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const FloatingCube = ({ position }) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.7}
        roughness={0.2}
        emissive="#3b82f6"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default FloatingCube;
