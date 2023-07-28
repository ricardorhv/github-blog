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

  input {
    width: 100%;

    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};

    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: none;
    outline: 1px solid ${props => props.theme['base-border']};

    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }
`

export const PostsSection = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`