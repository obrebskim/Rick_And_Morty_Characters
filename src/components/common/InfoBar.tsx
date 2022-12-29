import React from 'react';
import styled from 'styled-components';

const StyledInfoBar = styled.p`
  width: 100%;
  height: 300px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  color: var(--blue);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

interface IProps {
  text: string;
}

function InfoBar({ text }: IProps) {
  return <StyledInfoBar>{text}</StyledInfoBar>;
}

export default InfoBar;
