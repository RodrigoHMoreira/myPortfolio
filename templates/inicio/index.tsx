import AvatarImage from "../../assets/AvatarImage";
import styled from "styled-components";
import Button from "../../components/Button";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  main {
    max-width: 1120px;
    width: 100%;
    display: flex;
    grid-gap: 0.25rem;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      article {
        margin: 1rem 0;

        @media screen and (min-width: 768px) {
          margin: 0 1rem;
          display: flex;
          flex-direction: column;
        }
      }

      div {
        color: var(--color);

        h1 {
          font-size: 2rem;
          color: var(--border);

          @media screen and (min-width: 768px) {
            font-size: 3rem;
          }
        }

        h2 {
          font-size: 1rem;

          @media screen and (min-width: 768px) {
            font-size: 2rem;
          }
        }
      }

      a {
        text-decoration: none;
        color: var(--color);

        &:hover {
          color: var(--hover);
        }
      }

      &:last-child {
        @media screen and (min-width: 768px) {
          flex-direction: row;
        }
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 5rem 0;
    }

  }
`;

const Inicio = () => {
  return (
    <Wrap>
      <main>
        <section>
          <div>
            <h1>Rodrigo Moreira</h1>
            <h2>DESENVOLVEDOR FRONT-END</h2>
          </div>
          <a href="#contato">
            <Button onClick={() => {}} label="Contate-me" />
          </a>
        </section>
        <section>
          <AvatarImage />
          <article>
            <a href="https://www.linkedin.com/in/rodrigohmoreira/" target="_blank">
              <LinkedinLogo size={44} />
            </a>
            <a href="https://github.com/RodrigoHMoreira" target="_blank">
              <GithubLogo size={44} />
            </a>
          </article>
        </section>
      </main>
    </Wrap>
  );
};

export default Inicio;
