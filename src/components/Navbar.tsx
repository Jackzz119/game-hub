import { HStack, Image } from "@chakra-ui/react";
import coldGame from "../assets/coldGame.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={coldGame} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
