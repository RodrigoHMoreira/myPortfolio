import { EnvelopeSimple, WhatsappLogo } from "phosphor-react";
import React from "react";
import styled from "styled-components";
import Form from "../../components/Form";

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
      margin-bottom: 2rem;
      font-size: 2.75rem;
      color: var(--border);
    }

    section {
      max-width: 1120px;
      width: 100%;
      color: var(--color);
      display: flex;
      grid-gap: 1rem;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
      }
    }

    article {
      padding: 2rem;
      display: flex;
      align-items: center;
      grid-gap: 1rem;
      flex-direction: column;

      a {
        display: flex;
        align-items: center;
        grid-gap: 0.5rem;
        color: var(--var);
        text-decoration: none;
        transition: 0.2s;

        &:hover {
          color: var(--hover);
        }

        div {
          display: flex;
          flex-direction: column;
          grid-gap: 0.5rem;
        }
      }
    }

    @media screen and (min-width: 768px) {
      margin: 2.5rem 0;
    }

  }
`;

const Contato = () => {
  return (
    <Wrap>
      <main>
        <h1>CONTATO</h1>
        <section>
          <Form />
          <article>
            <a
              href="https://api.whatsapp.com/send?phone=5519994229926&text=Olá!"
              target="_blank"
            >
              <WhatsappLogo size={44} />
              <div>
                <h2>Whatsapp</h2>
                <p>+55 (19) 9 9422-9926</p>
              </div>
            </a>
            <a href="mailto:drigohenri@gmail.com?subject=Olá!" target="_blank">
              <EnvelopeSimple size={44} />
              <div>
                <h2>E-mail</h2>
                <p>drigohenri@gmail.com</p>
              </div>
            </a>
          </article>
        </section>
      </main>
    </Wrap>
  );
};

export default Contato;
