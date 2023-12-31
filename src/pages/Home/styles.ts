import { styled } from "styled-components";


export const SearchSection = styled.section`
  margin: 4.5rem 0 3rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    font-size: 1.125rem;
    font-weight: 900;
    color: ${props => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
  }
`

export const PostsSection = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`