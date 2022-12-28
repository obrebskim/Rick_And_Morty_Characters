import React from 'react';
import Button from '../common/Button';
import StyledPagination from './Pagination.styled';

interface IProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage: number;
}

enum EModifier {
  up = 'up',
  down = 'down',
}

function Pagination({ page, setPage, lastPage }: IProps) {
  const handlePageChange = (modifier: EModifier) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    switch (modifier) {
      case EModifier.up:
        return setPage((prevState) => prevState + 1);
      case EModifier.down:
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
        onClick={() => handlePageChange(EModifier.down)}
      />
      <div className='page-info'>{page}</div>
      <Button
        label='▶'
        className='button'
        isDisabled={page >= lastPage}
        onClick={() => handlePageChange(EModifier.up)}
      />
    </StyledPagination>
  );
}

export default Pagination;
