import React from 'react';
import styled from 'styled-components';
import ramLogo from '../../assets/ramLogo.png';
import ramLogoS from '../../assets/ram_logo_s.png';

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
    display: none;

    &.mobile {
      display: block;
    }
  }

  @media (min-width: 575px) {
    & img {
      display: block;

      &.mobile {
        display: none;
      }
    }
  }
`;

interface IProps {
  width: string;
}

function Logo({ width }: IProps) {
  return (
    <StyledLogo width={width}>
      <img className='mobile' src={ramLogoS} alt='logo' />
      <img src={ramLogo} alt='logo' />
    </StyledLogo>
  );
}

export default Logo;
