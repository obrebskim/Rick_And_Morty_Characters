import { useQuery, QueryKey } from '@tanstack/react-query';
import getFavourites from '../api/getFavourites';

const queryKey: QueryKey = ['favourites'];

interface IProps {
  favourites: number[];
}

function useCharacters({ favourites }: IProps) {
  return useQuery(
    [queryKey, favourites],
    async () => {
      const fav = await getFavourites(favourites);
      return fav.map((ch) => ({ ...ch, favourite: true }));
    },
    { placeholderData: [], refetchOnWindowFocus: false },
  );
}

export default useCharacters;
