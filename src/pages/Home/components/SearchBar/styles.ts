import { styled } from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.75rem; 

  input {
    flex: 1;
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};

    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: none;
    outline: 1px solid ${props => props.theme['base-border']};

    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }

  button {
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    cursor: pointer;

    padding: 0.75rem 1.5rem;
    border-radius: 6px;

    border: none;
    outline: none;

    &:not(&:disabled):hover {
      filter: brightness(0.8);
      transition: filter 0.4s;
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(0.7);
    }
  }
`