import React from "react";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { MenuResponsiveContext } from "../../context/MenuResponsiveContext";
import {
  Gear,
  House,
  HouseLine,
  Palette,
  User,
  UserFocus,
} from "phosphor-react";

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
  font-size: 1.1rem;
  font-weight: 700;

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
    display: flex;
    grid-gap: 5px;
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
        <a id="link">
          <House size={20} color="#fafafa" weight="bold" />
          Inicio
        </a>
      </Link>
      <Link href="/sobre">
        <a id="link">
          <User size={20} color="#fafafa" weight="bold" />
          Sobre
        </a>
      </Link>
      <Link href="/projetos">
        <a id="link">
          <Gear size={20} color="#fafafa" weight="bold" />
          Projetos
        </a>
      </Link>
      <Link href="/habilidades">
        <a id="link">
          <Palette size={20} color="#fafafa" weight="bold" />
          Habilidades
        </a>
      </Link>
    </Menu>
  );
};

export default MenuResponsive;
