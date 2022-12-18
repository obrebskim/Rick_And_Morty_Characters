import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../common/Logo';
import Button from '../common/Button';

const StyledSearchBar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  & input {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 5px 20px;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: #181c25;
    color: #24db93;
    overflow: hidden;
    &:focus {
      border-left: 2px solid #12b1ca;
      border-top: 2px solid #12b1ca;
      border-bottom: 2px solid #12b1ca;
      outline: none;
      &:focus + .button {
        border-right: 2px solid #12b1ca;
        border-top: 2px solid #12b1ca;
        border-bottom: 2px solid #12b1ca;
      }
    }
  }

  & > .button {
    position: relative;
    background-color: #181c25;
    border-radius: 0 5px 5px 0;
    &::before {
      content: '';
      position: absolute;
      top: 15%;
      left: 0;
      bottom: 15%;
      width: 2px;
      background-color: #0aa3be;
    }
    &.active {
      color: #181c25;
      background-color: #12b1ca;
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
    <StyledSearchBar>
      <input
        type='text'
        value={string}
        onChange={(e) => setString(e.target.value)}
        placeholder='Filter by name...'
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button label='🔍' height='60px' width='60px' onClick={() => console.log('search')} />
    </StyledSearchBar>
  );
}

export default SearchBar;
