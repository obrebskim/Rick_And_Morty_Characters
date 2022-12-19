import { useQuery, QueryKey } from '@tanstack/react-query';
import getCharacters from '../api/getCharacters';

const queryKey: QueryKey = ['characters'];

function useCharacters() {
  return useQuery(queryKey, getCharacters, {});
}

export default useCharacters();
