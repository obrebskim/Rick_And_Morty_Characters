import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import StyledSearchBar from './Searchbar.styled';
import useSearchString from '../../hooks/useSearchSring';
import useCategoryStore from '../../hooks/useCategoryStore';
import { ECategory } from '../../@types/CategoryEnum';

function SearchBar() {
  const setFilter = useSearchString((state) => state.setString);
  const filter = useSearchString((state) => state.string);
  const category = useCategoryStore((state) => state.category);
  const changeCategory = useCategoryStore((state) => state.changeCategory);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (category !== ECategory.search) setSearchString('');
  }, [category]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (category === ECategory.all) {
        setFilter(searchString);
        changeCategory(ECategory.search);
      } else {
        setFilter(searchString);
      }
    }
  };

  return (
    <StyledSearchBar isFilled={filter.length > 2} isActive={category === ECategory.search}>
      <input
        type='text'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder='Filter by name...'
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {category !== ECategory.favourites ? (
        <Button
          className='button'
          label='🔍'
          height='56px'
          width='56px'
          onClick={() => changeCategory(ECategory.search)}
        />
      ) : null}
    </StyledSearchBar>
  );
}

export default SearchBar;
