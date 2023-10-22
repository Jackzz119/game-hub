import { useRef } from "react";
import Head from "../components/Head";
import { Box } from "@chakra-ui/react";
import VideoPlayer from "../components/VideoPlayer";
import Player from "video.js";

const HomePage = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    responsive: true,
    controls: true,
    fluid: false,
    currentWidth: 200,
    poster: "//vjs.zencdn.net/v/oceans.png",
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <Box padding={4}>
      <Head />
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </Box>
  );
};

export default HomePage;
