import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.main`
  position: relative;
  width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 300px 60px auto 100px;
  gap: 50px;
`;
interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
