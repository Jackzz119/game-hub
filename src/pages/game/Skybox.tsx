import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Skybox() {
  const { scene } = useGLTF("/stylized_cloudy_sky/scene.gltf");

  return <primitive object={scene} />;
}

export default Skybox;
