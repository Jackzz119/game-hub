import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  options: any;
  onReady: Function;
}

const VideoPlayer = ({ options, onReady }: Props) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any | null>(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      if (videoRef.current) videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
      player.resetControlBarUI_;
    }
  }, [options, videoRef]);

  return (
    <Box height="auto" width="100%">
      <Flex justifyContent="center" data-vjs-player marginY={10}>
        <Box ref={videoRef} />
      </Flex>
    </Box>
  );
};

export default VideoPlayer;
