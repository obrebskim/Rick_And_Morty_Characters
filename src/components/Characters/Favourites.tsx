import React, { useState } from 'react';
import Error from '../common/Error';
import Loader from '../common/Loader';
import CharacterItem from './CharacterItem';
import useFavourites from '../../hooks/useFavourites';
import CharactersGrid from './CharactersGrid.styled';

function Favourites() {
  const [favourites, setFavourites] = useState<number[]>([22]);
  const { isLoading, isError, data } = useFavourites({ favourites });

  if (isError) return <Error />;

  if (isLoading) return <Loader size='160px' />;

  return (
    <>
      <CharactersGrid>
        {data?.results.map((ch) => (
          <CharacterItem key={ch.id} character={ch} />
        ))}
      </CharactersGrid>
    </>
  );
}

export default Favourites;
