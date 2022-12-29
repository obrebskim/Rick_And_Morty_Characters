import fetcher from './fetcher';
import { ICharacterResponse } from '../@types/CharacterResponseInterface';

export default async function getCharacters(pageNo: number): Promise<ICharacterResponse> {
  try {
    const resp = await fetcher.get(`?page=${pageNo}`);
    return resp.data;
  } catch (err) {
    throw new Error();
  }
}
