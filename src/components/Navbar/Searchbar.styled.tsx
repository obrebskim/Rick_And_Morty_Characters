import styled from 'styled-components';

interface IStyled {
  isFilled: boolean;
  isActive: boolean;
}

const StyledSearchBar = styled.div<IStyled>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;

  & input {
    height: 100%;
    width: 100%;
    padding: 5px 20px;
    background-color: ${(p) => (p.isActive ? 'var(--blue)' : 'var(--green_dark)')};
    color: ${(p) => (p.isActive ? 'var(--green_dark)' : 'var(--blue)')};
    font-size: 1.6rem;
    font-weight: bold;
    border: 2px solid var(--blue);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: ${(p) => (p.isFilled ? 'var(--h:ighlight)' : 'var(--shadow)')};
    transition: all 0.2s;

    &:focus {
      outline: none;
      box-shadow: var(--highlight);
    }

    &:hover {
      box-shadow: var(--highlight);
    }

    &::placeholder {
      color: var(--blue);
      font-weight: normal;
      font-size: 1.2rem;
    }
  }

  & > .button {
    position: absolute;
    right: 2px;
    top: 2px;
    transform: none;
    background-color: ${(p) => (p.isActive ? 'var(--blue)' : 'var(--green_dark)')};
    border-radius: 0 2px 2px 0;

    &:hover {
      background-color: var(--blue);
    }

    &::before {
      content: '';
      position: absolute;
      top: 15%;
      left: 0;
      bottom: 15%;
      width: 2px;
      background-color: var(--blue);
    }

    &.active {
      color: var(--green_dark);
      background-color: var(--blue);
    }
  }
`;

export default StyledSearchBar;
