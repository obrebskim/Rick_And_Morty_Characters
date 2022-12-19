import React from 'react';
import styled from 'styled-components';
import PortalPistolImg from '../../assets/portal_pistol.png';

interface StyledTypes {
  size: string;
}

const StyledError = styled.div<StyledTypes>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    font-weight: bold;
    & > img {
      width: ${(p) => p.size};
    }
    & > p {
      font-size: 2rem;
      color: var(--blue);
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

interface PropsTypes {
  size?: string;
}

function Error({ size = '250px' }: PropsTypes) {
  return (
    <StyledError size={size}>
      <div className='wrapper'>
        <img src={PortalPistolImg} alt='' />
        <p>Something went terribly wrong and your data hitted to another portal!</p>
      </div>
    </StyledError>
  );
}

export default Error;
