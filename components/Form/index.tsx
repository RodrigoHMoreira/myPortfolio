import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Wrap = styled.form`
  background: var(--card);
  max-width: 300px;
  width: 100%;
  height: 80vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

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
    padding: 0.75rem;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
      border: 1px solid var(--border);
    }
  }

  div {
    margin-top: 0.1rem;
  }

  #submit {
    margin-top: 1rem;
    width: 200px;
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
      background: var(--hover);
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
      <textarea style={{ height: "100px" }} name="descrition" />
      <div>
        <input id="submit" type="submit" value="Enviar" />
      </div>
    </Wrap>
  );
};

export default Form;
