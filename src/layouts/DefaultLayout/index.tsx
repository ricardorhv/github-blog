import { Outlet } from "react-router-dom";
import { HeaderBackground, LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <HeaderBackground/>
      <LayoutContainer>
        <Outlet/>
      </LayoutContainer>
    </>
  )
}