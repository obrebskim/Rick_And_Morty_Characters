import fetcher from './fetcher';
import { Character } from '../@types/CharacterInterface';

export default async function getFavourites(favourites: number[]): Promise<Character[]> {
  try {
    if (favourites.length < 1) return [];
    else if (favourites.length === 1) {
      const single = await fetcher.get(`/${favourites}`);
      return [single.data];
    } else {
      const multi = await fetcher.get(`/${favourites}`);
      return multi.data;
    }
  } catch (err) {
    throw new Error();
  }
}
