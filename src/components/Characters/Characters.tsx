import React, { useState } from 'react';
import useCharacters from '../../hooks/useCharacters';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import CharactersGrid from './CharactersGrid.styled';
import Pagination from '../Pagination/Pagination';

function Characters() {
  const [page, setPage] = useState(1);
  const [favourites, setFavourites] = useState<number[]>([22]);
  const { isFetching, isError, data } = useCharacters({ page, favourites });

  if (isError) return <Error />;

  if (isFetching) return <Loader size='160px' />;

  return (
    <>
      <CharactersGrid>
        {data?.results.map((ch) => (
          <CharacterItem key={ch.id} character={ch} />
        ))}
      </CharactersGrid>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default Characters;
