import React from 'react';
import styled from 'styled-components';

interface IStyled {
  width: string;
  height: string;
}

const StyledButton = styled.button<IStyled>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 376px) {
    width: 100%;
  }
`;

interface IProps {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  width?: string;
  height?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  label,
  onClick = () => null,
  isDisabled = false,
  width = '100%',
  height = '100%',
  className = '',
  type = 'button',
}: IProps) {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onClick}
      width={width}
      height={height}
      className={className}
      type={type}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
