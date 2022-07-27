import React from "react";
import ReactImage from "../../assets/ReactImage";
import CSSImage from "../../assets/CSSImage";
import GithubImage from "../../assets/GithubImage";
import GitImage from "../../assets/GitImage";
import HTMLImage from "../../assets/HTMLImage";
import JSImage from "../../assets/JSImage";
import TSImage from "../../assets/TSImage";
import NodeImage from "../../assets/NodeImage";
import styled from "styled-components";

const Main = styled.main`
  height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 1rem;
  grid-gap: 1.5rem;
`;

const WrapCard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  grid-gap: 1rem;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    justify-content: center;
    display: grid;
    gap: 0 25px;
    grid-template-columns: 120px 120px 120px 120px;
  }

  @media only screen and (min-width: 1440px) {
    grid-template-columns: 150px 150px 150px 150px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding: 1rem 0 0 0;
  text-align: center;
  color: #9b90fe;
`;

const Card = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1440px) {
    width: 150px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    grid-gap: 10px;
    padding: 15px;
    border-radius: 10px;
    background: #292929;
    color: #ffffff;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid #9b90fe;
    }
  }
`;

const Habilidades = () => {
  return (
    <>
      <Main>
        <Title>HABILIDADES</Title>
        <WrapCard>
          <Card>
            <a href="https://www.w3.org/html/" target="_blank">
              <HTMLImage />
              HTML
            </a>
          </Card>
          <Card>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="_blank"
            >
              <CSSImage />
              CSS
            </a>
          </Card>
          <Card>
            <a href="https://www.javascript.com/" target="_blank">
              <JSImage />
              JavaScript
            </a>
          </Card>
          <Card>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <TSImage />
              TypeScript
            </a>
          </Card>
          <Card>
            <a href="https://pt-br.reactjs.org/" target="_blank">
              <ReactImage />
              React
            </a>
          </Card>
          <Card>
            <a href="https://nodejs.org/en/" target="_blank">
              <NodeImage />
              Node.js
            </a>
          </Card>
          <Card>
            <a href="https://git-scm.com/" target="_blank">
              <GitImage />
              Git
            </a>
          </Card>
          <Card>
            <a href="https://github.com/" target="_blank">
              <GithubImage />
              Github
            </a>
          </Card>
        </WrapCard>
      </Main>
    </>
  );
};
export default Habilidades;
