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
    display: flex;
    margin-top: 4rem;

    li {
      padding: 0.4rem;
      margin: 0 0.4rem;

      cursor: pointer;

      &.active,
      &:hover {
        a {
          color: #a070fa;
        }
      }
    }

    li a {
      width: 2.4rem;
      height: 2.4rem;
      font-size: 2.4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      outline: none;
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
