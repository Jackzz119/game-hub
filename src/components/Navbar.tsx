import { HStack, Image, Text } from '@chakra-ui/react'
import coldGame from '../assets/coldGame.webp'

const Navbar = () => {
  return (
    <HStack>
        <Image src={coldGame} boxSize='60px'/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default Navbar