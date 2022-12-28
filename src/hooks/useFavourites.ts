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
      getFavourites(favourites).then((data) => data.map((ch) => ({ ...ch, favourite: true }))),
    { placeholderData: [] },
  );
}

export default useCharacters;
