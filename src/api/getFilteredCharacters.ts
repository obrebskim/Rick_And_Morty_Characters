import fetcher from './fetcher';
import { ICharacterResponse } from '../@types/CharacterResponseInterface';

export default async function getFilteredCharacters(
  pageNo: number,
  filter: string,
): Promise<ICharacterResponse> {
  return fetcher
    .get(`?page=${pageNo}&name=${filter}`)
    .then((resp) => resp.data)
    .catch((err) => console.error(err));
}
