import fetcher from './fetcher';
import { ICharacterResponse } from '../@types/CharacterResponseInterface';

export default async function getCharacters(pageNo: number): Promise<ICharacterResponse> {
  return fetcher
    .get(`?page=${pageNo}`)
    .then((resp) => resp.data)
    .catch((err) => console.error(err));
}
