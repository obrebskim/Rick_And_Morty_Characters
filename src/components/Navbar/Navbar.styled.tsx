import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;

  & > .button {
    color: var(--blue);
    background-color: var(--green_dark);
    box-shadow: var(--shadow);
    border: 2px solid var(--blue);
    &:hover {
      box-shadow: var(--highlight);
    }
    &.active {
      color: var(--green_dark);
      background-color: var(--blue);
    }
  }
`;

export default StyledNavBar;
