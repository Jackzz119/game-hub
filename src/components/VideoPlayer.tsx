import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { Box, Flex, Button, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
    <>
      {/* <button onClick={scrollToVideo}>Go to Video</button> */}
      <Box position="relative">
        <Flex
          justifyContent="center"
          data-vjs-player
          marginY={10}
          position="absolute"
          inset="0px"
          left="20%"
          right="20%"
          margin="1.5%"
        >
          <div ref={videoRef} />

          <LinkBox as="div">
            <LinkOverlay
              as={Link}
              to="/game101"
              style={{
                color: "inherit",
              }}
            >
              <Button
                marginY={6}
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="red.500"
                transform={"translateY(700px)"}
                borderRadius={15}
              >
                Play
              </Button>
            </LinkOverlay>
          </LinkBox>
        </Flex>
      </Box>
    </>
  );
};

export default VideoPlayer;
