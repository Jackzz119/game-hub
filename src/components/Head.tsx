import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import ThreeCube from "./3d-object/ThreeCube";
import { Link } from "react-router-dom";

interface Props {
  onButtonClick: () => void;
}

const Head = ({ onButtonClick }: Props) => {
  return (
    <Box>
      <Grid
        paddingTop={180}
        paddingRight="10%"
        paddingLeft="20%"
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
          <ThreeCube />
        </GridItem>

        <GridItem width="630px" rowSpan={1} colSpan={2}>
          <Text fontSize="xl" letterSpacing={1} marginTop={-6}>
            Dive into my world of JS games, where creativity meets logic, and
            every line of code tells a story. Join me on a coding adventure,
            explore pixelated realms, conquer coding challenges, and together,
            let's bring our gaming imaginations to life.
          </Text>
          <HStack marginY="25px">
            <LinkBox as="div">
              <LinkOverlay as={Link} to="/game101">
                <Button letterSpacing={0.8} fontSize="xl">
                  Play now
                </Button>
              </LinkOverlay>
            </LinkBox>
            <Button
              marginLeft={15}
              onClick={onButtonClick}
              letterSpacing={0.8}
              fontSize="xl"
            >
              Learn more
            </Button>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Head;
