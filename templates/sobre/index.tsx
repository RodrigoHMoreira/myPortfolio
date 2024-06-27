import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  main {
    margin-top: 1rem;
    max-width: 1120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      margin-bottom: 1rem;
      font-size: 2.75rem;
      color: var(--border);
    }

    section {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: justify;

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

    @media screen and (min-width: 768px) {
      margin: 5rem 0;
    }
  }
`;

const Sobre = () => {
  return (
    <Wrap>
      <main>
        <h1>SOBRE MIM</h1>
       <section>
  <p>
    Me chamo Rodrigo e tenho mais de um ano de experiência em programação web. Inicialmente especializado em desenvolvimento front-end, evoluí para um desenvolvedor de software completo, atuando tanto no front-end quanto no back-end e na gestão de bancos de dados.
  </p>
  <p>
    Sou formado em Gestão Empresarial e migrei minha carreira para a área de Tecnologia da Informação, onde encontrei minha verdadeira paixão. Estou constantemente me atualizando e aprimorando minhas habilidades através de cursos e projetos práticos. Tenho planos futuros de me graduar também em Análise e Desenvolvimento de Sistemas para aprofundar ainda mais meus conhecimentos e habilidades como programador.
  </p>
  <p>
    No meu trabalho, valorizo a qualidade do código, a eficiência dos sistemas e a usabilidade das interfaces. Adoto metodologias ágeis para garantir entregas rápidas e iterativas, sempre focado em atender às necessidades dos usuários e clientes.
  </p>
  <p>
    Meu objetivo é continuar me dedicando ao setor tecnológico, utilizando as principais tecnologias do mercado e entregando resultados de alta qualidade. Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e contribuir de maneira significativa para os projetos em que estou envolvido.
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
