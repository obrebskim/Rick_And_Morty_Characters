import React from 'react';
import clsx from 'clsx';
import Button from '../common/Button';
import SearchBar from './Searchbar';
import StyledNavBar from './Navbar.styled';
import useSearchString from '../../hooks/useSearchSring';
import useCategoryStore from '../../hooks/useCategoryStore';
import { ECategory } from '../../@types/CategoryEnum';

function Navbar() {
  const category = useCategoryStore((state) => state.category);
  const changeCategory = useCategoryStore((state) => state.changeCategory);
  const setFilter = useSearchString((state) => state.setString);

  const handleCategoryChange = (category: ECategory) => {
    setFilter('');
    changeCategory(category);
  };

  return (
    <StyledNavBar>
      <SearchBar />
      <Button
        label='All'
        width='200px'
        className={clsx('button', category === ECategory.all && 'active')}
        onClick={() => handleCategoryChange(ECategory.all)}
      />
      <Button
        label='❤ Favourites'
        width='200px'
        className={clsx('button', category === ECategory.favourites && 'active')}
        onClick={() => handleCategoryChange(ECategory.favourites)}
      />
    </StyledNavBar>
  );
}

export default Navbar;
