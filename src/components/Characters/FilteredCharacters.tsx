import React, { useState } from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import CharactersGrid from './CharactersGrid.styled';
import Pagination from '../Pagination/Pagination';
import useFilteredCharacters from '../../hooks/useFilteredCharacters';
import useSearchString from '../../hooks/useSearchSring';
import useFavouriteStore from '../../hooks/useFavouritesStore';

function FilteredCharacters() {
  const [page, setPage] = useState(1);
  const favourites = useFavouriteStore((state) => state.favourites);
  const filter = useSearchString((state) => state.string);
  const { isLoading, isError, data } = useFilteredCharacters({ page, filter, favourites });

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

export default FilteredCharacters;
