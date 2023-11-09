import { useRef } from "react";
import Head from "../components/Head";
import cutes from "../assets/cutes.webp";
import {
  Box,
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import VideoPlayer from "../components/VideoPlayer";
import logo from "../assets/logo.webp";
import Carousel from "../components/Carousel";
import avatar from "../assets/avatar.webp";

const HomePage = () => {
  const playerRef = useRef(null);
  // const videoRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    responsive: true,
    controls: true,
    fluid: true,
    loop: true,
    aspectRatio: "16:9",
    // fill: true,
    currentWidth: 200,
    poster: "/gameVideoCover.png",
    sources: [
      {
        src: "/gameVideo.mp4",
        type: "video/mp4",
      },
    ],
  };

  // const scrollToVideo = () => {
  //   if (videoRef.current) {
  //     const topPos = 100;

  //     window.scrollTo({
  //       top: topPos,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scrollToVideo = () => {
    const top = 1500;
    console.log("scrolling!");

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    const top = 0;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
      <Box
        width="100%"
        height="400px"
        overflow="hidden"
        top="60px"
        position="fixed"
        zIndex={-1}
      >
        <Image src={cutes} objectFit="cover" width="100%" height="100%" />
      </Box>

      <Box
        marginTop={350} // pull the 'window' space for cutes
        style={{
          background:
            "radial-gradient(200% 100% at 100% 0,#0d1015 31.96%,rgba(1,10,48,0) 64.77%),radial-gradient(200% 100% at 0 100%,#0d1015 29.86%,rgba(1,10,48,0) 67.84%),#020b31",
          position: "relative",
        }}
      >
        <Box
          style={{
            height: "64px",
            position: "absolute",
            top: "-32px",
            width: "100%",
          }}
        >
          <Box
            style={{
              background:
                "radial-gradient(100% 100% at 100% 100%,#6929ff .21%,rgba(105,41,255,0) 100%)",
              height: "32px",
              width: "100%",
            }}
          ></Box>
          <Box
            style={{
              background:
                "linear-gradient(90deg,#174291 -.04%,#39a0ff 52.07%,#174291)",
              height: "2px",
              width: "100%",
              boxShadow: "0 0 8px #0084ff",
            }}
          ></Box>
          <Box
            style={{
              background:
                "radial-gradient(50% 100% at 50% 100%,#6929ff 0,rgba(30,84,183,0) 100%)",
              height: "32px",
              transform: "matrix(1,0,0,-1,0,0)",
              width: "100%",
            }}
          ></Box>
        </Box>
        <Head onButtonClick={scrollToVideo} />
        <Carousel />
        <VideoPlayer
          options={videoJsOptions}
          onReady={handlePlayerReady}
          // ref={videoRef}
        />
        <Box height="900px"></Box>
        <Flex justifyContent="center">
          <Box width={470}>
            <Text
              textAlign="center"
              lineHeight="50px"
              fontStyle="italic"
              fontSize="2xl"
              margin={10}
            >
              "Thanks for playing through to the end! Remember, like any good
              game, our site gets better with every visit. Game on and high
              scores to you, player!"
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Avatar name="Cheng Zheng" src={avatar} />
          <Text textAlign="center" paddingX={35} lineHeight={10} fontSize="2xl">
            Cheng Zheng{" "}
            <span style={{ color: "rgb(156, 37, 212)", fontStyle: "bold" }}>
              /
            </span>{" "}
            Developer
          </Text>
        </Flex>
        <Flex justifyContent="space-around" paddingTop={10}>
          <button onClick={scrollToTop}>
            <HStack>
              <Image src={logo} boxSize="60px" />
              <Text fontSize="xl" color="inherit" isTruncated>
                JSverse
              </Text>
            </HStack>
          </button>
          <Grid
            h="200px"
            w="400px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={2}>
              <Text textAlign={"center"} transform="translateY(50%)">
                Email:
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <Text textAlign={"center"} transform="translateY(50%)">
                jackzhenghw@gmail.com
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Text textAlign={"center"} transform="translateY(50%)">
                Tel:
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <Text textAlign={"center"} transform="translateY(50%)">
                216-421-5176
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Text textAlign={"center"} transform="translateY(50%)">
                LinkedIn:
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <a href="https://www.linkedin.com/in/cheng-zheng-7ab763279/">
                <Text textAlign={"center"} transform="translateY(50%)">
                  Linkedin profile
                </Text>
              </a>
            </GridItem>
          </Grid>
        </Flex>
        <Box>
          <Text textAlign="center" opacity=".5">
            © 2023 JS game Portfolio. All rights reserved.
          </Text>
        </Box>
        <Box height="20px"></Box>
      </Box>
    </>
  );
};

export default HomePage;
