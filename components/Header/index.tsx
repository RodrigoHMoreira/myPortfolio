import Link from "next/link";
import { Gear, House, List, Palette, User } from "phosphor-react";
import { useContext } from "react";
import styled from "styled-components";
import LogolabelImage from "../../assets/LogolabelImage";
import { MenuResponsiveContext } from "../../context/MenuResponsiveContext";

const Wrap = styled.div`
  background: #161616;
  height: 15vh;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  grid-gap: 2rem;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  #link {
    text-decoration: none;
    color: #ffffff;
    font-size: 3vh;
    display: flex;
    align-items: center;
    grid-gap: 5px;

    &:hover {
      color: #9b90fe;
    }
  }
`;

const MenuResponsive = styled.div`
  display: flex;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { handleMenuResponsive } = useContext(MenuResponsiveContext);

  return (
    <Wrap>
      <MenuResponsive>
        <List
          size={30}
          color="#fafafa"
          weight="bold"
          onClick={handleMenuResponsive}
        />
      </MenuResponsive>
      <a href="https://www.rodrigomoreira.dev/" target="_blank">
        <LogolabelImage />
      </a>
      <Menu>
        <Link href="/">
          <a id="link">
            <House size={20} weight="bold" />
            Inicio
          </a>
        </Link>
        <Link href="/sobre">
          <a id="link">
            <User size={20} weight="bold" />
            Sobre
          </a>
        </Link>
        <Link href="/projetos">
          <a id="link">
            <Gear size={20} weight="bold" />
            Projetos
          </a>
        </Link>
        <Link href="/habilidades">
          <a id="link">
            <Palette size={20} weight="bold" />
            Habilidades
          </a>
        </Link>
      </Menu>
    </Wrap>
  );
};

export default Header;
