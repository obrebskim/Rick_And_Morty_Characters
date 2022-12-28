import { useQuery, QueryKey } from '@tanstack/react-query';
import getCharacters from '../api/getCharacters';

const queryKey: QueryKey = ['characters'];

interface IProps {
  page: number;
  favourites: number[];
}

function useCharacters({ page, favourites }: IProps) {
  return useQuery(
    [queryKey, page],
    async () =>
      getCharacters(page).then((data) => ({
        info: data.info,
        results: data.results.map((ch) => ({ ...ch, favourite: favourites.includes(ch.id) })),
      })),
    { placeholderData: { info: { next: null, count: 0, pages: 0, prev: null }, results: [] } },
  );
}

export default useCharacters;
