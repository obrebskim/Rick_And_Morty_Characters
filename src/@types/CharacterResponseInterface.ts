import { Character } from './CharacterInterface';

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharacterResponse {
  info: Info;
  results: Character[];
}
