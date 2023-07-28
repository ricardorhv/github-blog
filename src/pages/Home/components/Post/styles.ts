import styled from "styled-components";

export const PostContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${props => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;  
  cursor: pointer;

  outline: 2px solid transparent;

  div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    h4 {
      font-size: 1.25rem;
      font-weight: 900;
      color: ${props => props.theme['base-title']};
      flex: 0.75;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']};
      flex: 0.25;
      text-align: right;
    }
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    white-space: pre-wrap; 
  }

  &:hover {
    outline: 2px solid ${props => props.theme['base-label']};
    transition: 0.4s outline;
  }
`