import fetcher from './fetcher';
import { Character } from '../@types/CharacterInterface';

export default async function getFavourites(favourites: number[]): Promise<Character[]> {
  try {
    if (favourites.length < 1) return [];
    else if (favourites.length === 1) {
      const single: Character = await fetcher.get(`/${favourites}`);
      return [single];
    } else {
      return await fetcher.get(`/${favourites}`);
    }
  } catch (err) {
    throw new Error();
  }
}
