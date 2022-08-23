import React from "react";
import { EnvelopeSimple, Gear, House, Palette, User } from "phosphor-react";
import styled from "styled-components";

type MenuMobileProps = {
  isOpen: boolean;
};

const Wrap = styled.menu<MenuMobileProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
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

  a {
    visibility: ${({ isOpen }) => (!isOpen ? "hidden" : "visible")};
    text-decoration: none;
    color: #ffffff;
    padding: 1.5rem;
    transition: 0.1s;
    display: flex;
    grid-gap: 5px;
    font-weight: 300;
  }
`;

const MenuMobile = ({ isOpen }: MenuMobileProps) => {
  return (
    <Wrap isOpen={isOpen}>
      <a href="#inicio">
        <House size={20} />
        Inicio
      </a>
      <a href="#sobre">
        <User size={20} />
        Sobre
      </a>
      <a href="#habilidades">
        <Palette size={20} />
        Habilidades
      </a>
      <a href="#projetos">
        <Gear size={20} />
        Projetos
      </a>
      <a href="#contato">
        <EnvelopeSimple size={20} />
        Contato
      </a>
    </Wrap>
  );
};

export default MenuMobile;
