import fetcher from './fetcher';
import { Character } from '../@types/CharacterInterface';

export default async function getFavourites(favourites: number[]): Promise<Character[]> {
  if (favourites.length > 0) {
    return fetcher
      .get(`/${favourites}`)
      .then((resp) => resp.data)
      .catch((err) => console.error(err));
  } else {
    return Promise.resolve([]);
  }
}
