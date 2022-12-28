import React from 'react';
import Button from '../common/Button';
import StyledPagination from './Pagination.styled';

interface IPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ page, setPage }: IPagination) {
  const handlePageChange = (modifier: 'up' | 'down') => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    switch (modifier) {
      case 'up':
        return setPage((prevState) => prevState + 1);
      case 'down':
        return setPage((prevState) => prevState - 1);
      default:
        return;
    }
  };

  return (
    <StyledPagination>
      <Button
        label='◀'
        isDisabled={page <= 1}
        className='button'
        onClick={() => handlePageChange('down')}
      />
      <div className='page-info'>{page}</div>
      <Button label='▶' className='button' onClick={() => handlePageChange('up')} />
    </StyledPagination>
  );
}

export default Pagination;
