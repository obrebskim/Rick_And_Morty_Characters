import fetcher from './fetcher';
import { ICharacterResponse } from '../@types/CharacterResponseInterface';

export default async function getFilteredCharacters(
  pageNo: number,
  filter: string,
): Promise<ICharacterResponse> {
  try {
    const resp = await fetcher.get(`?page=${pageNo}&name=${filter}`);
    return resp.data;
  } catch (err) {
    throw new Error();
  }
}
