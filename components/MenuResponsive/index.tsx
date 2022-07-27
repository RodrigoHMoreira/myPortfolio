import React from "react";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { MenuResponsiveContext } from "../../context/MenuResponsiveContext";

type MenuResponsiveProps = {
  toggleMenuResponsive: boolean;
};

const Menu = styled.div<MenuResponsiveProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ toggleMenuResponsive }) =>
    toggleMenuResponsive ? "100%" : "0px"};
  transition: 0.5s;
  height: 110vh;
  grid-gap: 1rem;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8547794117647058) 65%,
    rgba(0, 0, 0, 0.6755077030812324) 100%
  );
  z-index: 10;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  a {
    visibility: ${({ toggleMenuResponsive }) =>
      !toggleMenuResponsive ? "hidden" : "visible"};
    text-decoration: none;
    color: #ffffff;
    padding: 1.5rem;
    transition: 0.1s;
  }
`;

const MenuResponsive = () => {
  const { toggleMenuResponsive, handleMenuResponsive } = useContext(
    MenuResponsiveContext
  );

  return (
    <Menu
      toggleMenuResponsive={toggleMenuResponsive}
      onClick={handleMenuResponsive}
    >
      <Link href="/">
        <a id="link">Inicio</a>
      </Link>
      <Link href="/sobre">
        <a id="link">Sobre</a>
      </Link>
      <Link href="/projetos">
        <a id="link">Projetos</a>
      </Link>
      <Link href="/habilidades">
        <a id="link">Habilidades</a>
      </Link>
    </Menu>
  );
};

export default MenuResponsive;
