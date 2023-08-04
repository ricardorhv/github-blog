import { styled } from "styled-components";

export const PostContent = styled.article`
  padding: 2.5rem 2rem;
  
  & > * {
    margin-bottom: 1.5rem
  }

  ul, ol {
    padding: 0 2rem;
  }

  pre {
    padding: 1rem;
    background: ${props => props.theme['base-post']};
  }
`