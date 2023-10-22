import { Grid, GridItem, Text } from "@chakra-ui/react";
// import demoObject from './3d-object/demo'

const Head = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={3}>
        <Text as="b" fontSize="4xl">
          Unveiling the magic of game development.
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2} bg="papayawhip">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="FREE 1975 Porsche 911 (930) Turbo"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/8568d9d14a994b9cae59499f0dbed21e/embed"
          ></iframe>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "normal",
              margin: "5px",
              color: "#4A4A4A",
            }}
          >
            <a
              href="https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e?utm_medium=embed&utm_campaign=share-popup&utm_content=8568d9d14a994b9cae59499f0dbed21e"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              FREE 1975 Porsche 911 (930) Turbo
            </a>
            by
            <a
              href="https://sketchfab.com/karolmiklas?utm_medium=embed&utm_campaign=share-popup&utm_content=8568d9d14a994b9cae59499f0dbed21e"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Karol Miklas
            </a>
            on
            <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8568d9d14a994b9cae59499f0dbed21e"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>
          </p>
        </div>
      </GridItem>

      <GridItem rowSpan={1} colSpan={3}>
        <Text fontSize="lg">
          Dive into my world of JS games and join me on a coding adventure.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Head;
