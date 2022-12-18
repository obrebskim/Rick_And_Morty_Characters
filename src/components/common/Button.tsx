import React from 'react';
import styled from 'styled-components';

interface StyledTypes {
    width: string;
    height: string;
}

const StyledButton = styled.button<StyledTypes>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;

    &:active {
        transform: translateY(2px);
    }
`;

interface PropsTypes {
    label: string;
    onClick: () => any;
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
}: PropsTypes) {
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
