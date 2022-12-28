import React from 'react';
import styled from 'styled-components';
import ramLogo from '../../assets/ramLogo.png';

interface IStyled {
  width: string;
}

const StyledLogo = styled.section<IStyled>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & img {
    width: ${(props) => props.width};
  }
`;

interface ILogo {
  width: string;
}

function Logo({ width }: ILogo) {
  return (
    <StyledLogo width={width}>
      <img src={ramLogo} alt='logo' />
    </StyledLogo>
  );
}

export default Logo;
