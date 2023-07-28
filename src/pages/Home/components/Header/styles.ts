import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;

  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  p {
    text-align: justify;
    margin: 0.5rem 0;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme['base-title']};
    text-transform: capitalize;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-weight: 900;

    color: ${props => props.theme.blue};
    text-transform: uppercase;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
      transition: border-bottom 0.4s;
    }
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme['base-subtitle']};

    svg {
      color: ${props => props.theme['base-label']};
    }
  }
`