import styled from 'styled-components';

interface IStyled {
  url: string;
  favourite: boolean;
  number: number;
}

const StyledCharacter = styled.li<IStyled>`
  position: relative;
  height: 350px;
  padding: 10px;
  background-color: var(--green_dark);
  box-shadow: ${(props) => (props.favourite ? 'var(--highlight)' : 'var(--shadow)')};
  border: 2px solid ${(props) => (props.favourite ? 'var(--green)' : 'var(--blue)')};
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  gap: 10px;
  grid-template-rows: 65% 35%;
  object-fit: fill;

  &::after {
    content: '${(props) => props.number}';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: ${(props) => (props.favourite ? 'var(--green)' : 'var(--blue)')};
    border-radius: 0 0 5px 0;
    box-shadow: 0 0 10px ${(props) => (props.favourite ? 'var(--green)' : 'none')};
  }

  & .avatar {
    margin: 0;
    background-image: url(${(props) => props.url});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    border-radius: 3px 3px 0 0;
  }

  & .name {
    padding-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => (props.favourite ? 'var(--green)' : 'var(--blue)')};
  }

  & .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    & .button {
      margin-right: 10px;
      background-color: ${(props) => (props.favourite ? 'var(--green)' : 'var(--green_dark)')};
      font-size: 16px;
      color: ${(props) => (props.favourite ? 'var(--green_dark)' : 'var(--blue)')};
      border: 2px solid ${(props) => (props.favourite ? 'var(--green)' : 'var(--blue)')};
      box-shadow: 0 0 10px ${(props) => (props.favourite ? 'var(--green)' : 'none')};
    }
  }
`;

export default StyledCharacter;
