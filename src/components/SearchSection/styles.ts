import styled from 'styled-components';
import { FaSearch, FaAngleDown, FaTimes } from 'react-icons/fa';

export const Container = styled.div`
  max-width: 144rem;
  padding: 0 2rem;
  margin: 2.8rem auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 52.5rem) {
    margin-top: 5rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputBlock = styled.div`
  background: var(--element);
  max-width: 144rem;
  padding: 0 4rem;
  box-shadow: var(--shadow);
  border-radius: 0.6rem;
  border: 2px solid transparent;

  display: flex;
  align-items: center;

  transition: all 0.2s ease-in-out;

  input {
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.6rem;
    padding: 2rem 0;
    width: 100%;

    outline: none;

    &::placeholder {
      color: var(--input-text);
    }
  }

  &:focus-within {
    border-color: var(--text-color);
  }

  @media (min-width: 52.5rem) {
    width: 52.5rem;
  }
`;

export const SelectRegion = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  margin-top: 4.6rem;
  max-width: 64%;
  background: var(--element);

  box-shadow: var(--shadow);
  border-radius: 0.6rem;
  border: 2px solid transparent;

  > button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: none;
    padding: 2rem;
    cursor: pointer;

    span {
      font-weight: 600;
      font-size: 1.6rem;
    }
  }

  > ul {
    z-index: 10;
    position: absolute;
    top: 70px;
    left: 0;
    background: var(--element);
    width: 100%;
    padding: 2rem;

    box-shadow: var(--shadow);
    border-radius: 0.6rem;

    transform: translateY(-10px);
    opacity: 0;
    animation: appear 0.4s forwards;

    @keyframes appear {
      to {
        transform: initial;
        opacity: 1;
      }
    }

    li {
      font-weight: 600;
      font-size: 1.6rem;
      padding: 0.4rem 0;

      cursor: pointer;

      & + li {
        margin-top: 0.6rem;
      }

      &:hover {
        color: #a070fa;
      }
    }
  }

  &.active {
    border-color: var(--text-color);

    > button > svg {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 52.5rem) {
    margin-top: 0;
    width: 23rem;
  }
`;

export const ArrowDown = styled(FaAngleDown)`
  width: 1.6rem;
  height: 1.6rem;

  transition: 0.2s;
`;

export const SearchIcon = styled(FaSearch)`
  width: 2rem;
  height: 2rem;

  margin-right: 2rem;

  > * {
    fill: var(--input-text);
  }
`;

export const CloseIcon = styled(FaTimes)`
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 0.6rem;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    > * {
      fill: #a070fa;
    }
  }
`;
