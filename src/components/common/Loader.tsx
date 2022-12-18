import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../../assets/Loading.png';

const StyledLoader = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    gap: 10px;
`;

function Loader() {
    return (
        <StyledLoader>
            <img src={LoadingImg} alt='' />
            <p>Loading...</p>
        </StyledLoader>
    );
}

export default Loader;
