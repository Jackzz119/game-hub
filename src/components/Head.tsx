import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
// import ThreeCube from "./3d-object/ThreeCube";
// import demoObject from './3d-object/demo'

const Head = () => {
  return (
    <Box>
      <Grid
        paddingTop={180}
        paddingRight={270}
        paddingLeft={450}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={3}
      >
        <GridItem rowSpan={1} colSpan={2} letterSpacing={1} paddingTop="40px">
          <Text color="#15D7FF">Play together</Text>
          <Text as="b" fontSize="4xl" letterSpacing={1}>
            Unveiling the magic of game development.
          </Text>
        </GridItem>

        <GridItem rowSpan={2} colSpan={3}>
          {/* <ThreeCube /> */}
        </GridItem>

        <GridItem rowSpan={1} colSpan={2}>
          <Text fontSize="xl" letterSpacing={1}>
            Dive into my world of JS games, where creativity meets logic, and
            every line of code tells a story. Join me on a coding adventure,
            explore pixelated realms, conquer coding challenges, and together,
            let's bring our gaming imaginations to life.
          </Text>
          <HStack marginY={15}>
            <Button>Play now</Button>
            <Button marginLeft={15}>Learn more</Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Head;
