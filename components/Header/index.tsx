import { List } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import LogolabelImage from "../../assets/LogolabelImage";

type HeaderProps = {
  handleOpen: () => void;
};

const Wrap = styled.header`
  background: var(--header-footer);
  margin-bottm: 2rem;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  section {
    max-width: 1120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      height: 5rem;
      display: none;
      grid-gap: 0.5rem;
      align-items: center;
      font-weight: 300;
      font-size: 1rem;

      a {
        height: 5rem;
        width: 25%;
        text-decoration: none;
        color: var(--color);
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 0.25rem;
        padding: 0 0.75rem;
        transition: 0.2s;
        border-bottom: 0.25rem solid transparent;

        &:hover {
          border-bottom: 0.25rem solid var(--hover);
          cursor: pointer;
        }
      }
      @media screen and (min-width: 768px) {
        display: flex;
      }
    }

    button {
      border: none;
      background: transparent;

      @media screen and (min-width: 768px) {
        display: none;
      }
    }

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
`;

const Header = ({handleOpen }: HeaderProps) => {
  return (
    <Wrap>
      <section>
        <a href="#inicio">
          <LogolabelImage />
        </a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <button onClick={handleOpen}>
          <List size={24} color="#ffffff" />
        </button>
      </section>
    </Wrap>
  );
};

export default Header;
