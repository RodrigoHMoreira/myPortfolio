import React from "react";
import styled from "styled-components";

const Main = styled.div`
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
    display: grid;
    gap: 0 30px;
    grid-template-columns: 180px 180px 180px;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 280px 280px 280px;
  }
`;

const Title = styled.h1`
  font-size: 8vh;
  padding: 1rem 0 0 0;
  text-align: center;
  color: #9b90fe;

`;

const Card = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: #252525;
  border: 1px solid transparent;

  @media only screen and (min-width: 768px) {
    width: 180px;
  }

  @media only screen and (min-width: 1024px) {
    width: 280px;
  }

  &:hover {
    border: 1px solid #9b90fe;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    height: 130px;
  }
`;

const Projetos = () => {
  return (
    <>
      <Title>PROJETOS</Title>
      <Main>
        <Card>
          <a href="">EM BREVE</a>
        </Card>
        <Card>
          <a href="">EM BREVE</a>
        </Card>
        <Card>
          <a href="">EM BREVE</a>
        </Card>
        <Card>
          <a href="">EM BREVE</a>
        </Card>
        <Card>
          <a href="">EM BREVE</a>
        </Card>
        <Card>
          <a href="">EM BREVE</a>
        </Card>
      </Main>
    </>
  );
};

export default Projetos;
