import "./style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { KeyboardControls } from "@react-three/drei";
import Interface from "./Interface.jsx";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import "./style.css";
import Skybox from "./Skybox.tsx";

const Index = () => {
  return (
    <Box className="gameContainer">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
          { name: "restart", keys: ["r"] },
        ]}
      >
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
        >
          <Experience />
          {/* <Skybox /> */}
        </Canvas>
        <Interface />
      </KeyboardControls>
    </Box>
  );
};

export default Index;
