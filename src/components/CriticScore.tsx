import { Badge } from "@chakra-ui/react";

// interface Props {
//     score: number;
// }

const CriticScore = () => {
  // let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  let color: string = "green";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      75
    </Badge>
  );
};

export default CriticScore;
