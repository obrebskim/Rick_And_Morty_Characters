import React from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import useFavourites from '../../hooks/useFavourites';
import CharactersGrid from './CharactersGrid.styled';
import useFavouritesStore from '../../hooks/useFavouritesStore';
import useSearchString from '../../hooks/useSearchSring';

function Favourites() {
  const filter = useSearchString((state) => state.string);
  const favourites = useFavouritesStore((state) => state.favourites);
  const { isFetching, isError, data } = useFavourites({ favourites });

  if (isError) return <Error />;

  if (isFetching) return <Loader size='160px' />;

  return (
    <>
      {data && data.length > 0 ? (
        <CharactersGrid>
          {data
            ?.filter((ch) => ch.name.toUpperCase().includes(filter.toUpperCase()))
            .map((ch) => (
              <CharacterItem key={ch.id} character={ch} />
            ))}
        </CharactersGrid>
      ) : (
        <p>You have not favourite characters</p>
      )}
    </>
  );
}

export default Favourites;
