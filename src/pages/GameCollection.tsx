import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
// import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

// export interface GameQuery {
//   genre: Genre | null;
//   platform: Platform | null;
//   sortOrder: string;
//   searchText: string;
// }

const GameCollection = () => {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={4}>
          {/* <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          /> */}
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* <GameGrid gameQuery={gameQuery} /> */}
      </GridItem>
    </Grid>
  );
};

export default GameCollection;
