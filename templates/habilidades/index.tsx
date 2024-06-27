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
                </div>
                <span>
                  HTMLé uma linguagem de marcação utilizada na construção de
                  páginas na Web.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target="_blank"
              >
                <span>
                  CSS é um mecanismo para adicionar estilo a um documento Web.
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.javascript.com/" target="_blank">
                <div>
                  <JSImage />
                </div>
                <span>
                  JavaScript é uma linguagem de programação para itens complexos
                  em páginas Web
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <span>
                  TypeScript é um superconjunto JavaScript que adicona tipagem
                  na linguagem.
                </span>
              </a>
            </li>
            <li>
              <a href="https://pt-br.reactjs.org/" target="_blank">
                <span>
                  React é uma biblioteca JavaScript que cria interfaces de
                  usuário em páginas Web.
                </span>
              </a>
            </li>
            <li>
              <a href="https://nextjs.org/" target="_blank">
                <span>
                  Next.js é um framework de para a criação aplicações front-end
                  e back-end.
                </span>
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/en/" target="_blank">
                <span>
                  Node.js é um ambiente de execução que permite executar
                  aplicações sem um navegador.
                </span>
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="_blank">
                <span>
                  Git é um sistema de controle de versões distribuído, usado
                  para desenvolver software.
                </span>
              </a>
            </li>
              <li>
              <a href="https://www.mongodb.com/" target="_blank">
                <span>
                MongoDB é um banco de dados NoSQL que armazena dados em documentos JSON.
                </span>
              </a>
            </li>  
            <li>
              <a href="https://www.mysql.com/" target="_blank">
                <span>
                 MySQL é um banco de dados relacional popular que utiliza SQL para gerenciar dados.
                </span>
              </a>
            </li>  
            <li>
              <a href="https://www.prisma.io/" target="_blank">
                <span>
                 Prisma é um ORM que simplifica a interação com bancos de dados SQL e NoSQL.
                </span>
              </a>
            </li>  
            <li>
              <a href="https://jestjs.io/" target="_blank">
                <span>
                  Jest é um framework de teste em JavaScript, usado para testar aplicações front-end e back-end.
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
