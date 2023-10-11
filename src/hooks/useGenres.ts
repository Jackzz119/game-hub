import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// what is query parameters?

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
