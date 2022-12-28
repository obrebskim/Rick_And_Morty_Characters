import styled from 'styled-components';

const CharactersGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 350px;
  gap: 40px;

  & > .button {
    font-size: 30px;
    height: 350px;
    &.prev {
      grid-column: -2 / -3;
    }
    &.next {
      grid-column: -1 / -2;
    }
  }
`;

export default CharactersGrid;
