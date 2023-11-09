import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
// import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
// import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import gameBackground from "../assets/gameCardBackground.png";
import { Link } from "react-router-dom";

// interface Props {
//   game: Game;
// }

const GameCard = () => {
  return (
    <LinkBox as="div">
      <LinkOverlay as={Link} to="/game101">
        <Card>
          <Image src={gameBackground} />
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <CriticScore />
            </HStack>
            <Heading fontSize="2xl">
              Marble race
              <Emoji />
            </Heading>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  );
};

export default GameCard;
