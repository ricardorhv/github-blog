import { styled } from "styled-components";

export const PostContent = styled.article`
  padding: 2.5rem 2rem;
  
  & > * {
    margin-bottom: 1.5rem
  }

  pre {
    padding: 1rem;
    background: ${props => props.theme['base-post']};
    overflow-x: scroll;
    min-width: 300px;
  }
`