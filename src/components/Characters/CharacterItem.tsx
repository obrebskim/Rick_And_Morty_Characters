import React, { useState } from 'react';
import Button from '../common/Button';
import { Character } from '../../@types/CharacterInterface';
import StyledCharacter from './CharacterItem.styled';
import useFavouritesStore from '../../hooks/useFavouritesStore';

interface ICharacter {
  character: Character;
}

function CharacterItem({ character }: ICharacter) {
  const toggleFavourites = useFavouritesStore((state) => state.toggleFavourites);
  const [isFavourite, setIsFavourite] = useState<boolean>(character.favourite);
  const handleFavouriteChange = (id: number) => {
    toggleFavourites(id);
    setIsFavourite((prevState) => !prevState);
  };
  return (
    <StyledCharacter url={character.image} favourite={isFavourite} number={character.id}>
      <figure className='avatar' />
      <div className='info'>
        <p className='name'>{character.name}</p>
        <Button
          label='❤'
          height='36px'
          width='36px'
          className='button'
          onClick={() => handleFavouriteChange(character.id)}
        />
      </div>
    </StyledCharacter>
  );
}

export default CharacterItem;
