import React, { useEffect, useState } from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import CharactersGrid from './CharactersGrid.styled';
import Pagination from '../Pagination/Pagination';
import useFilteredCharacters from '../../hooks/useFilteredCharacters';
import useSearchString from '../../hooks/useSearchSring';
import useFavouriteStore from '../../hooks/useFavouritesStore';
import scrollToTopOfTheList from '../../utils/scrollToTopOfTheList';
import checkIfFavourites from '../../utils/checkIfFavourites';

function FilteredCharacters() {
  const [page, setPage] = useState(1);
  const favourites = useFavouriteStore((state) => state.favourites);
  const filter = useSearchString((state) => state.string);
  const { isLoading, isError, data } = useFilteredCharacters({ page, filter, favourites });

  useEffect(() => {
    scrollToTopOfTheList();
  }, [data]);

  if (isError) return <Error />;

  if (isLoading) return <Loader size='160px' />;

  return (
    <>
      <CharactersGrid>
        {checkIfFavourites(data?.results, favourites).map((ch) => (
          <CharacterItem key={ch.id} character={ch} />
        ))}
      </CharactersGrid>
      <Pagination page={page} setPage={setPage} lastPage={data.info.pages} />
    </>
  );
}

export default FilteredCharacters;
