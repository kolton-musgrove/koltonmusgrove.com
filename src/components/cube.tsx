import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

extend(THREE);

export function AnimatedCube() {
  {
    const cubeRef = useRef<THREE.Mesh>(null!);
    const [isInitialLoad, setIsInitialLoad] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsInitialLoad(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    useFrame(() => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }
    });

    return (
      <Canvas>
        <mesh ref={cubeRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
          {isInitialLoad && (
            <Text position={[0, 0, 0.51]} fontSize={0.1}>
              K
            </Text>
          )}
        </mesh>
      </Canvas>
    );
  }
}
