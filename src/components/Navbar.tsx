import { HStack, Image } from "@chakra-ui/react";
import coldGame from "../assets/coldGame.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={coldGame} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
