import React from 'react';
import Button from '../common/Button';
import SearchBar from './Searchbar';
import clsx from 'clsx';
import useCategoryStore from '../../hooks/useCategoryStore';
import { ECategory } from '../../@types/CategoryEnum';
import StyledNavBar from './Navbar.styled';

function Navbar() {
  const category = useCategoryStore((state) => state.category);
  const changeCategory = useCategoryStore((state) => state.changeCategory);

  return (
    <StyledNavBar>
      <SearchBar />
      <Button
        label='All'
        width='200px'
        className={clsx('button', category === ECategory.all && 'active')}
        onClick={() => changeCategory(ECategory.all)}
      />
      <Button
        label='❤ Favourites'
        width='200px'
        className={clsx('button', category === ECategory.favourites && 'active')}
        onClick={() => changeCategory(ECategory.favourites)}
      />
    </StyledNavBar>
  );
}

export default Navbar;
