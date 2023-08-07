import { Outlet } from "react-router-dom";
import { HeaderBackground, LayoutContainer } from "./styles";
import logoImg from '../../assets/logo.svg'

export function DefaultLayout() {
  return (
    <>
      <HeaderBackground>
        <img src={logoImg} alt="" />
      </HeaderBackground>
      <LayoutContainer>
        <Outlet/>
      </LayoutContainer>
    </>
  )
}