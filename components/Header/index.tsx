import { List } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import LogolabelImage from "../../assets/LogolabelImage";

type HeaderProps = {
  handleOpen: () => void;
};

const Wrap = styled.header`
  background: var(--header-footer);
  margin-bottom: 2rem;
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
      font-size: 1rem;

      a {
        display: inline-block;
        position: relative;
        height: 5rem;
        width: 100%;
        line-height: 5rem;
        text-decoration: none;
        color: var(--color);
        padding: 0 0.75rem;
        border-bottom: 1px solid transparent;

        transition: 0.2s;

        &:hover {
          color: var(--hover);
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

const Header = ({ handleOpen }: HeaderProps) => {
  return (
    <Wrap>
      <section>
        <a href="https://www.rodrigomoreira.dev/">
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
