import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight, FaEllipsisH } from 'react-icons/fa';

export const Container = styled.div`
  max-width: 144rem;
  padding: 0 2rem;
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .pagination {
    max-width: 40rem;
    display: flex;
    margin-top: 4rem;

    li {
      border: 1px solid var(--text-color);
      border-radius: 0.4rem;
      padding: 0.4rem;
      margin: 0 0.6rem;

      transition: all 0.2s ease-in-out;

      cursor: pointer;

      &.active,
      &:hover {
        border-color: #a080fa;

        a {
          color: #a070fa;

          > svg > * {
            fill: #a070fa;
          }
        }
      }
    }

    li a {
      font-weight: 600;
      width: 2rem;
      height: 2rem;
      font-size: 1.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      outline: none;

      svg {
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const CountriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  column-gap: 4rem;
  row-gap: 8rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 48.75rem) {
    margin-top: 7rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 65rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 87.5rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PreviousIcon = styled(FaAngleLeft)``;

export const NextIcon = styled(FaAngleRight)``;

export const EllipsisIcon = styled(FaEllipsisH)``;
