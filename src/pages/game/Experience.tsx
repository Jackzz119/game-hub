import { Physics } from "@react-three/rapier";
import useGame from "./stores/useGame";
import Lights from "./Lights";
import { Level } from "./Level";
import Player from "./Player";
import { Environment } from "@react-three/drei";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  // const skybox: any = useGLTF("/stylized_cloudy_sky/scene.gltf");
  return (
    <>
      {/* <color args={["#bdedfc"]} attach="background" /> */}
      <Environment
        files={"Sky.hdr"}
        // path={"/Sky_trim/"}
        ground={{ height: 1, radius: 44, scale: 50 }}
      />
      <Physics debug={false}>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
}
