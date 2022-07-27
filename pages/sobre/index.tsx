import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: calc(68vh - 2rem);
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 1rem;
  grid-gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 8vh;
  padding: 1rem 0 0 0;
  text-align: center;
  color: #9b90fe;

`;

const Text = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 3.5vh;
  width: calc(100% - 10vh);
  padding: 4vh;
  border-radius: 10px;
  background: #252525;


  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Sobre = () => {
  return (
    <>
        <Title>SOBRE MIM</Title>
        <Main>
          <Text>
            <p>
              Me chamo Rodrigo e venho me especializando como DESENVOLVEDOR
              FRONT-END desde 2019.
            </p>
            <p>
              Comecei minha carreira em Administração, porém me encantei pela
              area de Tecnologia de Informação, especificamente por Programação.
            </p>
            <p>
              Atualmente meu maior objetivo é continuar me dedicando ao
              Desenvolvimento Web e entregar um resultado de qualidade, a todos
              os que confiarem no meu trabalho.
            </p>
          </Text>
        </Main>
    </>
  );
};

export default Sobre;
