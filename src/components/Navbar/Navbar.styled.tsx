import styled from 'styled-components';

const StyledNavBar = styled.nav`
  height: 220px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 60px 60px;
  gap: 20px;

  & > .button {
    color: var(--blue);
    background-color: var(--green_dark);
    box-shadow: var(--shadow);
    border: 2px solid var(--blue);
    width: 100%;
    &:hover {
      box-shadow: var(--highlight);
    }
    &.active {
      color: var(--green_dark);
      background-color: var(--blue);
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 60px 60px;
  }

  @media (min-width: 912px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`;

export default StyledNavBar;
