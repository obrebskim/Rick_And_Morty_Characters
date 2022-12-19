import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledPagination = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  & .button {
    width: 140px;
    height: 60px;
    font-size: 3rem;
    color: var(--blue);
    background-color: var(--green_dark);
    box-shadow: var(--shadow);
    border: 2px solid var(--blue);
    &:hover {
      box-shadow: var(--highlight);
    }
    &:disabled {
      opacity: 0.2;
    }
  }

  & .page-info {
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
    background-color: var(--blue);
    border-radius: 5px;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--green_dark);
    box-shadow: var(--shadow);
  }
`;

function Pagination() {
  return (
    <StyledPagination>
      <Button
        label='◀'
        isDisabled={true}
        className='button'
        onClick={() => console.log('side-down')}
      />
      <div className='page-info'>1</div>
      <Button label='▶' className='button' onClick={() => console.log('side-up')} />
    </StyledPagination>
  );
}

export default Pagination;
