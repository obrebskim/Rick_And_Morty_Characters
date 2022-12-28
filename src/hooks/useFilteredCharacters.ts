import { useQuery, QueryKey } from '@tanstack/react-query';
import getFilteredCharacters from '../api/getFilteredCharacters';

const queryKey: QueryKey = ['filtered'];

interface IProps {
  page: number;
  filter: string;
  favourites: number[];
}

function useFilteredCharacters({ page, filter, favourites }: IProps) {
  return useQuery(
    [queryKey, page, filter],
    async () =>
      getFilteredCharacters(page, filter).then((data) => ({
        info: data.info,
        results: data.results.map((ch) => ({ ...ch, favourite: favourites.includes(ch.id) })),
      })),
    { placeholderData: { info: { next: null, count: 0, pages: 0, prev: null }, results: [] } },
  );
}

export default useFilteredCharacters;
