import React, { useEffect, useState } from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import CharactersGrid from './CharactersGrid.styled';
import Pagination from '../Pagination/Pagination';
import useCharacters from '../../hooks/useCharacters';
import useFavouritesStore from '../../hooks/useFavouritesStore';
import scrollToTopOfTheList from '../../utils/scrollToTopOfTheList';
import checkIfFavourites from '../../utils/checkIfFavourites';

function Characters() {
  const [page, setPage] = useState(1);
  const favourites = useFavouritesStore((state) => state.favourites);
  const { isLoading, isError, data } = useCharacters({ page });

  useEffect(() => {
    scrollToTopOfTheList(page);
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

export default Characters;
