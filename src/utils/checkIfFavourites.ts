import { Character } from '../@types/CharacterInterface';

export default function checkIfFavourites(
  characters: Character[],
  favourites: number[],
): Character[] {
  return characters.map((ch) =>
    favourites.includes(ch.id) ? { ...ch, favourite: true } : { ...ch },
  );
}
