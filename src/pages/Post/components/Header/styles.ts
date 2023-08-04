import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${props => props.theme.blue};
      text-transform: uppercase;

      font-size: 0.75rem;
      font-weight: 700;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${props => props.theme.blue};
        transition: border-bottom 0.4s;
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const HeaderInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 0;

    span {
      color: ${props => props.theme['base-span']};
    }

    svg {
      color: ${props => props.theme['base-label']};
    }
  }
`