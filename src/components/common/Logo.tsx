import React from 'react';
import styled from 'styled-components';
import ramLogo from '../../assets/ramLogo.png';

interface StyledProps {
  width: string;
}

const StyledLogo = styled.section<StyledProps>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & img {
    width: ${ props => props.width};
  }
`

interface PropsTypes {
  width: string;
}

function Logo({width}: PropsTypes) {
  return (
    <StyledLogo width={width}>
      <img src={ramLogo} alt='logo'/>
    </StyledLogo>
  );
}

export default Logo;