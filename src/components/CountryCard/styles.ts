import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  opacity: 0;
  transform: translateX(-60px);
  animation: appear 0.7s forwards;

  @keyframes appear {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const CardWrapper = styled.div`
  width: 30rem;
  height: 50rem;
  background: var(--element);
  border-radius: 0.8rem;
  box-shadow: var(--shadow);
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (min-width: 48.75rem) {
    margin: 0;
    width: 100%;
  }
`;

export const FlagBlock = styled.div`
  img {
    width: 100%;
    height: 21.3rem;
    display: block;
    object-fit: cover;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
`;

export const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;

  h1 {
    font-size: 2.6rem;
  }

  ul {
    margin-top: 2rem;

    li {
      font-size: 1.7rem;
      margin-bottom: 0.4rem;
      letter-spacing: 0.1rem;

      strong {
        font-weight: 600;
      }

      span {
        margin-left: 0.2rem;
        font-weight: 300;
      }
    }
  }
`;
