import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.main`
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 200px 220px auto 100px;
  gap: 50px;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-rows: 300px 140px auto 100px;
  }

  @media (min-width: 912px) {
    grid-template-rows: 300px 60px auto 100px;
  }
`;
interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
