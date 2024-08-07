import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Wrap = styled.form`
  background: var(--card);
  max-width: 300px;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--border);
  }

  label {
    width: 100%;
    padding: 1rem 0 0.5rem 0;
    color: var(--color);
    font-weight: 300;
  }

  input,
  textarea {
    background: var(--color);
    width: 100%;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 5px;
  }

  textarea {
    background: var(--color);
    width: 100%;
    maxwidth: 100%;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 5px;
    height: 75px;
    box-sizing: border-box;
    resize: vertical;
  }

  div {
    margin-top: 0.1rem;
  }

  #submit {
    margin-top: 1rem;
    height: 2.5rem;
    background: var(--button);
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    border: none;
    font-weight: 300;

    &:hover {
      background: var(--hover-button);
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 400px;
  }
`;

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7svajtn",
        "template_19phfxe",
        e.target,
        "boPlxy3xvo59iUu2O"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <Wrap onSubmit={sendEmail}>
      <label>Nome:</label>
      <input type="text" name="name" />
      <label>E-mail:</label>
      <input type="text" name="email" />
      <label>Título do projeto:</label>
      <input type="text" name="title" />
      <label>Descrição:</label>
      <textarea name="descrition" />
      <div style={{ width: "100%" }}>
        <input id="submit" type="submit" value="Enviar" />
      </div>
    </Wrap>
  );
};

export default Form;
