import { useQuery, QueryKey } from '@tanstack/react-query';
import getCharacters from '../api/getCharacters';

const queryKey: QueryKey = ['characters'];

interface IProps {
  page: number;
}

function useCharacters({ page }: IProps) {
  return useQuery(
    [queryKey, page],
    async () =>
      getCharacters(page).then((data) => ({
        info: data.info,
        results: data.results,
      })),
    {
      placeholderData: { info: { next: null, count: 0, pages: 0, prev: null }, results: [] },
      refetchOnWindowFocus: false,
    },
  );
}

export default useCharacters;
