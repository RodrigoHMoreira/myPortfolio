import { ArrowUp, CaretUp } from "phosphor-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import Contato from "../templates/contato";
import Habilidades from "../templates/habilidades";
import Inicio from "../templates/inicio";
import Projetos from "../templates/projetos";
import Sobre from "../templates/sobre";

type HomeProps = {
  isScroll: boolean;
};

const Wrap = styled.div<HomeProps>`
  #btn-up {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 999;

    a {
      display: ${({ isScroll }) => (isScroll ? "flex" : "none")};
      background: var(--button);
      color: var(--color);
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsScroll = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setIsScroll(true);
    } else if (scrolled <= 300) {
      setIsScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);
  }, []);

  return (
    <Wrap isScroll={isScroll}>
      {isOpen && (
        <div onClick={handleOpen}>
          <MenuMobile isOpen={isOpen} />
        </div>
      )}
      <div id="btn-up">
        <a href="#inicio">
          <CaretUp size={20} weight="bold" onClick={scrollToTop} />
        </a>
      </div>
      <div id="inicio">
        <Header handleOpen={handleOpen} />
      </div>
      <div>
        <Inicio />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <div id="habilidades">
        <Habilidades />
      </div>
      <div id="projetos">
        <Projetos />
      </div>
      <div id="contato">
        <Contato />
      </div>
      <div>
        <Footer />
      </div>
    </Wrap>
  );
};

export default Home;
