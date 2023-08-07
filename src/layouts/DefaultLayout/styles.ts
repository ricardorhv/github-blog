import { styled } from "styled-components";
import headerBackground from '../../assets/header-background.svg'

export const LayoutContainer = styled.div`
  max-width: 54rem;
  margin: -5.5rem auto 2rem;
`

export const HeaderBackground = styled.div`
  background: center center/cover no-repeat url(${headerBackground});
  width: 100%;
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`