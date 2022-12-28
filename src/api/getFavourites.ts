import fetcher from './fetcher';
import { ICharacterResponse } from '../@types/CharacterResponseInterface';

export default async function getFavourites(favourites: number[]): Promise<ICharacterResponse> {
  return fetcher
    .get(`${favourites}`)
    .then((resp) => resp.data)
    .catch((err) => console.error(err));
}
