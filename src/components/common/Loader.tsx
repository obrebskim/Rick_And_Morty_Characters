import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../../assets/Loading.png';

interface StyledTypes {
  size: string;
}

const StyledLoader = styled.div<StyledTypes>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  gap: 10px;
  & > img {
    width: ${(p) => p.size};
    height: ${(p) => p.size};
  }
  & > p {
    font-size: 1.6rem;
    color: var(--green);
  }
`;

interface PropsTypes {
  size: string;
}

function Loader({ size = '250px' }: PropsTypes) {
  return (
    <StyledLoader size={size}>
      <img src={LoadingImg} alt='' />
      <p>Loading...</p>
    </StyledLoader>
  );
}

export default Loader;
