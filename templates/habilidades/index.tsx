import React from "react";
import ReactImage from "../../assets/ReactImage";
import CSSImage from "../../assets/CSSImage";
import GitImage from "../../assets/GitImage";
import HTMLImage from "../../assets/HTMLImage";
import JSImage from "../../assets/JSImage";
import TSImage from "../../assets/TSImage";
import NodeImage from "../../assets/NodeImage";
import NextImage from "../../assets/NextImage";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  main {
    margin-top: 1rem;
    max-width: 1120px;
    width: 100%;
    padding: 1rem;

    section {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        margin-bottom: 2rem;
        font-size: 2.75rem;
        color: var(--border);
      }

      ul {
        list-style-type: none;
        display: grid;
        align-items: center;
        grid-gap: 0.75rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        li {
          background: var(--card);
          width: 120px;
          padding: 1rem;
          border-radius: 20px;
          border: 1px solid transparent;
          transition: 0.2s;

          @media screen and (min-width: 1024px) {
            width: 230px;
            height: 200px;
          }

          &:hover {
            border: 1px solid var(--border);
          }

          a {
            margin-top: 0.5rem;
            text-decoration: none;
            color: var(--color);
            font-weight: 300;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media screen and (max-width: 912px) {
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }

        @media screen and (min-width: 768px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      margin: 2.5rem 0;
    }
  }
`;

const Habilidades = () => {
  return (
    <Wrap>
      <main>
        <section>
          <h1>HABILIDADES</h1>
          <ul>
            <li>
              <a href="https://www.w3.org/html/" target="_blank">
                <div>
                  <HTMLImage />
                </div>
                <span>
                  HTML?? uma linguagem de marca????o utilizada na constru????o de
                  p??ginas na Web.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target="_blank"
              >
                <div>
                  <CSSImage />
                </div>
                <span>
                  CSS ?? um mecanismo para adicionar estilo a um documento Web.
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.javascript.com/" target="_blank">
                <div>
                  <JSImage />
                </div>
                <span>
                  JavaScript ?? uma linguagem de programa????o para itens complexos
                  em p??ginas Web
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <div>
                  <TSImage />
                </div>
                <span>
                  TypeScript ?? um superconjunto JavaScript que adicona tipagem
                  na linguagem.
                </span>
              </a>
            </li>
            <li>
              <a href="https://pt-br.reactjs.org/" target="_blank">
                <div>
                  <ReactImage />
                </div>
                <span>
                  React ?? uma biblioteca JavaScript que cria interfaces de
                  usu??rio em p??ginas Web.
                </span>
              </a>
            </li>
            <li>
              <a href="https://nextjs.org/" target="_blank">
                <div>
                  <NextImage />
                </div>
                <span>
                  Next.js ?? um framework de para a cria????o aplica????es front-end
                  e back-end.
                </span>
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/en/" target="_blank">
                <div>
                  <NodeImage />
                </div>
                <span>
                  Node.js ?? um ambiente de execu????o que permite executar
                  aplica????es sem um navegador.
                </span>
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="_blank">
                <div>
                  <GitImage />
                </div>
                <span>
                  Git ?? um sistema de controle de vers??es distribu??do, usado
                  para desenvolver software.
                </span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </Wrap>
  );
};
export default Habilidades;
