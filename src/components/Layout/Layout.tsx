import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.main`
    position: relative;
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 200px 60px auto 100px;
    gap: 40px;
`;
interface PropsTypes {
    children: React.ReactNode;
}

function Layout({ children }: PropsTypes) {
    return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
