import { useQuery, QueryKey } from '@tanstack/react-query';
import getCharacters from '../api/getCharacters';

const queryKey: QueryKey = ['characters'];

interface IDependencies {
  page: number;
  favourites: number[];
}

function useCharacters({ page, favourites }: IDependencies) {
  return useQuery(
    [queryKey, page],
    async () =>
      getCharacters(page).then((data) => ({
        info: data.info,
        results: data.results.map((ch) => ({ ...ch, favourite: favourites.includes(ch.id) })),
      })),
    { placeholderData: { info: {}, results: [] } },
  );
}

export default useCharacters;
