import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

type FooterProps = {
  isWidthSize: number;
};

const Wrap = styled.footer<FooterProps>`
  background: var(--header-footer);
  height: 75vh;
  padding: 0.5rem;
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    height: 3rem;
    max-width: 1120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 0.5rem;

    section {
      font-weight: 100;
      font-size: 0.75rem;
      display: flex;
      grid-gap: 0.5rem;

      #logo {
        background: var(--color);
        color: var(--card);
        padding: 0.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;

        &:hover {
          background: transparent;
          color: var(--color);
        }
      }

      a {
        text-decoration: none;
        color: var(--color);
        transition: 0.2s;
        padding: 0.5rem;

        &:hover {
          color: var(--hover);
        }
      }

      nav {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-gap: 0.5rem;
        font-size: 1rem;

        span {
          width: 50%;
          border-top: ${({ isWidthSize }) =>
            isWidthSize < 768 ? "1.5px solid var(--color)" : ""};
        }

        @media screen and (min-width: 768px) {
          grid-gap: 1.5rem;
          flex-direction: row;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    height: 40vh;
  }
`;

const Footer = () => {
  const [isWidthSize, setIsWidthSize] = useState(0);

  useEffect(() => {
    setIsWidthSize(typeof window !== "undefined" && window.screen.width);
  }, []);

  return (
    <Wrap isWidthSize={isWidthSize}>
      <div>
        <main>
          <section>
            <a
              id="logo"
              href="https://www.facebook.com/rodrigo.henrique.37604"
              target="_blank"
            >
              <FacebookLogo size={40} />
            </a>
            <a
              id="logo"
              href="https://www.instagram.com/drigohenri/"
              target="_blank"
            >
              <InstagramLogo size={40} />
            </a>
            <a
              id="logo"
              href="https://twitter.com/Drigohenri05"
              target="_blank"
            >
              <TwitterLogo size={40} />
            </a>
          </section>
          <section>
            <nav>
              <a href="#inicio">Inicio</a>
              <span>{isWidthSize < 768 ? "" : "|"}</span>
              <a href="#sobre">Sobre</a>
              <span>{isWidthSize < 768 ? "" : "|"}</span>
              <a href="#habilidades">Habilidades</a>
              <span>{isWidthSize < 768 ? "" : "|"}</span>
              <a href="#projetos">Projetos</a>
              <span>{isWidthSize < 768 ? "" : "|"}</span>
              <a href="#contato">Contato</a>
            </nav>
          </section>
          <section>&copy; 2022 Rodrigo Moreira</section>
        </main>
      </div>
    </Wrap>
  );
};

export default Footer;
