import fetcher from './fetcher';

export default async function getCharacters() {
  return fetcher.get('');
}
