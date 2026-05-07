// Robot.jsx

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Robot(props) {
  const { scene } = useGLTF("/models/arm.glb");

  return (
    <primitive
      object={scene}
      scale={6}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
      {...props}
    />
  );
}