"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function FireExtinguisherModel(props: any) {
  const { scene } = useGLTF(
    "/models/fire-extinguisher.glb"
  );

  return (
    <primitive
      object={scene}
      {...props}
      scale={2.2}
      position={[0, -.1, 0]}
      rotation={[0, Math.PI / 6, 0]}
    />
  );
}

useGLTF.preload("/models/fire-extinguisher.glb");