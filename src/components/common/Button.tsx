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
`;

interface IButton {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  width?: string;
  height?: string;
  className?: string;
}

function Button({
  label,
  onClick,
  isDisabled = false,
  width = '100%',
  height = '100%',
  className = '',
}: IButton) {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onClick}
      width={width}
      height={height}
      className={className}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
