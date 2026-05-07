// Robot.jsx

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Robot2(props) {
  const { scene } = useGLTF("/models/man.glb");

  return (
    <primitive
      object={scene}
      scale={0.8}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
      {...props}
    />
  );
}