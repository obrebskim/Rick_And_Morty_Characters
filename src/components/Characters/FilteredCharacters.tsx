import React, { useEffect, useState } from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import InfoBar from '../common/InfoBar';
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
  const { isFetching, isError, data } = useFilteredCharacters({ page, filter, favourites });

  useEffect(() => {
    scrollToTopOfTheList(page);
  }, [data]);

  if (isError) return <Error />;

  if (isFetching) return <Loader size='160px' />;

  return (
    <>
      {data && data.results.length > 0 ? (
        <>
          <CharactersGrid>
            {checkIfFavourites(data?.results, favourites).map((ch) => (
              <CharacterItem key={ch.id} character={ch} />
            ))}
          </CharactersGrid>
          <Pagination page={page} setPage={setPage} lastPage={data.info.pages} />
        </>
      ) : (
        <InfoBar text={`There is no character named '${filter}'`} />
      )}
    </>
  );
}

export default FilteredCharacters;
