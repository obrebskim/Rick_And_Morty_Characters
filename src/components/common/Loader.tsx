import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../../assets/Loading.png';

interface IStyled {
  size: string;
}

const StyledLoader = styled.div<IStyled>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > img {
      width: ${(p) => p.size};
      height: ${(p) => p.size};
    }
    & > p {
      font-size: 1.6rem;
      color: var(--blue);
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

interface IProps {
  size: string;
}

function Loader({ size = '250px' }: IProps) {
  return (
    <StyledLoader size={size}>
      <div className='wrapper'>
        <img src={LoadingImg} alt='' />
        <p>Loading...</p>
      </div>
    </StyledLoader>
  );
}

export default Loader;
