import React from 'react';
import Button from '../common/Button';
import { Character } from '../../@types/CharacterInterface';
import StyledCharacter from './CharacterItem.styled';

interface ICharacter {
  character: Character;
}

function CharacterItem({ character }: ICharacter) {
  return (
    <StyledCharacter url={character.image} favourite={character.favourite} number={character.id}>
      <figure className='avatar' />
      <div className='info'>
        <p className='name'>{character.name}</p>
        <Button label='❤' height='36px' width='36px' className='button' onClick={() => 1} />
      </div>
    </StyledCharacter>
  );
}

export default CharacterItem;
