import styled from 'styled-components';

const CharactersGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 350px;
  gap: 40px;

  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default CharactersGrid;
