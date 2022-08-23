import React from "react";
import styled from "styled-components";
import Carousell from "../../components/Carousel";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  main {
    max-width: 1120px;
    width: 100%;
    padding: 1rem;

    section {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 2.5vh;
        font-size: 2.75rem;
        color: var(--border);
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const Projetos = () => {
  return (
    <Wrap>
      <main>
        <section>
          <h1>PROJETOS</h1>
          <Carousell />
        </section>
      </main>
    </Wrap>
  );
};

export default Projetos;
