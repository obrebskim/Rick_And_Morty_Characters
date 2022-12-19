import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface StyledTypes {
  isFilled: boolean;
}

const StyledSearchBar = styled.div<StyledTypes>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;

  & input {
    height: 100%;
    width: 100%;
    padding: 5px 20px;
    background-color: var(--green_dark);
    color: var(--blue);
    font-size: 1.6rem;
    font-weight: bold;
    border: 2px solid var(--blue);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: ${(p) => (p.isFilled ? 'var(--h:ighlight)' : 'var(--shadow)')};
    transition: all 0.2s;

    &:focus {
      outline: none;
      box-shadow: var(--highlight);
    }

    &:hover {
      box-shadow: var(--highlight);
    }

    &::placeholder {
      color: var(--blue);
      font-weight: normal;
      font-size: 1.2rem;
    }
  }

  & > .button {
    position: absolute;
    right: 2px;
    top: 2px;
    transform: none;
    background-color: var(--green_dark);
    border-radius: 0 2px 2px 0;

    &:hover {
      background-color: var(--blue);
    }

    &::before {
      content: '';
      position: absolute;
      top: 15%;
      left: 0;
      bottom: 15%;
      width: 2px;
      background-color: var(--blue);
    }

    &.active {
      color: var(--green_dark);
      background-color: var(--blue);
    }
  }
`;

interface PropsTypes {
  string: string;
  setString: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ setString, string }: PropsTypes) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      return console.log(string);
    }
  };

  return (
    <StyledSearchBar isFilled={string.length > 2}>
      <input
        type='text'
        value={string}
        onChange={(e) => setString(e.target.value)}
        placeholder='Filter by name...'
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button
        className='button'
        label='🔍'
        height='56px'
        width='56px'
        onClick={() => console.log('search')}
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
