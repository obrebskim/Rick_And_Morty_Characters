import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import SearchBar from './Searchbar';

const StyledNavBar = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;

  & > .button {
    color: var(--blue);
    background-color: var(--green_dark);
    box-shadow: var(--shadow);
    border: 2px solid var(--blue);
    &:hover {
      box-shadow: var(--highlight);
    }
    &.active {
      color: var(--green_dark);
      background-color: var(--blue);
    }
  }
`;
function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <StyledNavBar>
      <SearchBar string={search} setString={setSearch} />
      <Button label='All' width='200px' className='button' onClick={() => console.log('all')} />
      <Button
        label='❤ Favourites'
        width='200px'
        className='button active'
        onClick={() => console.log('favourites')}
      />
    </StyledNavBar>
  );
}

export default Navbar;
