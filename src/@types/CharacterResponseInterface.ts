import { Character, Info } from './CharacterInterface';

export interface ICharacterResponse {
  info: Info<Character>;
  results: Character[];
}
