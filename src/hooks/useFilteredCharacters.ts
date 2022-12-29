import { useQuery, QueryKey } from '@tanstack/react-query';
import getFilteredCharacters from '../api/getFilteredCharacters';

const queryKey: QueryKey = ['filtered'];

interface IProps {
  page: number;
  filter: string;
  favourites: number[];
}

function useFilteredCharacters({ page, filter }: IProps) {
  return useQuery(
    [queryKey, page, filter],
    async () =>
      getFilteredCharacters(page, filter).then((data) => ({
        info: data.info,
        results: data.results,
      })),
    {
      placeholderData: { info: { next: null, count: 0, pages: 0, prev: null }, results: [] },
      refetchOnWindowFocus: false,
    },
  );
}

export default useFilteredCharacters;
