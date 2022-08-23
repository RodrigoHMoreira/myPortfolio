import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  main {
    max-width: 1120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 2.5vh;
      font-size: 2.75rem;
      color: var(--border);
    }

    section {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.5rem;
        color: var(--color);
        font-weight: 300;
        padding: 0.5rem;
      }
    }

    a {
        text-decoration: none;
      }
  }
  @media screen and (min-width: 768px) {
  }
`;

const Sobre = () => {
  return (
    <Wrap>
      <main>
        <h1>SOBRE MIM</h1>
        <section>
          <p>
            Me chamo Rodrigo, tenho mais de 1 ano de experiência em programação
            web e minha especialidade é orientada para o Desenvolvimento
            FRONT-END.
          </p>
          <p>
            Formado em Gestão Empresarial, migrei minha carreira profissional
            para Tecnologia da Informação, por me identificar bastante com a
            área. Futuramente tenho planos de me graduar também Análise e
            Desenvolvimento de Sistemas, afim de aprimorar ainda mais meus
            conhecimentos como programador.
          </p>
          <p>
            Meu objetivo é continuar me dedicando ao setor tecnológico, atuar
            com as principais tecnologias do mercado e entregar um resultado de
            qualidade, a todos que confiarem no meu trabalho.
          </p>
        </section>
        <a download href="../curriculo.pdf">
          <Button onClick={() => {}} label="Download CV" />
        </a>
      </main>
    </Wrap>
  );
};

export default Sobre;
