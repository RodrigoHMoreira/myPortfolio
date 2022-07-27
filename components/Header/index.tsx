import Link from "next/link";
import { List } from "phosphor-react";
import { useContext } from "react";
import styled from "styled-components";
import LogolabelImage from "../../assets/LogolabelImage";
import { MenuResponsiveContext } from "../../context/MenuResponsiveContext";

const Wrap = styled.div`
  background: #252525;
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

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  #link {
    text-decoration: none;
    color: #ffffff;
    font-size: 3vh;

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
      <LogolabelImage />
      <Menu>
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
    </Wrap>
  );
};

export default Header;
