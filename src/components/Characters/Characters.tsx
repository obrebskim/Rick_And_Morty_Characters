import React, { useState } from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import CharactersGrid from './CharactersGrid.styled';
import Pagination from '../Pagination/Pagination';
import useCharacters from '../../hooks/useCharacters';
import useFavouritesStore from '../../hooks/useFavouritesStore';

function Characters() {
  const favourites = useFavouritesStore((state) => state.favourites);
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useCharacters({ page, favourites });

  if (isError) return <Error />;

  if (isLoading) return <Loader size='160px' />;

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
