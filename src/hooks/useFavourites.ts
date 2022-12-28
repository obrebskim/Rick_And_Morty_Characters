import { useQuery, QueryKey } from '@tanstack/react-query';
import getFavourites from '../api/getFavourites';

const queryKey: QueryKey = ['favourites'];

interface IDependencies {
  favourites: number[];
}

function useCharacters({ favourites }: IDependencies) {
  return useQuery(
    [queryKey, favourites],
    async () =>
      getFavourites(favourites).then((data) => ({
        info: data.info,
        results: data.results.map((ch) => ({ ...ch, favourite: true })),
      })),
    { placeholderData: { info: {}, results: [] } },
  );
}

export default useCharacters;
