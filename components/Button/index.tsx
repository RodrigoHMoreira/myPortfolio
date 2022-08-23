import styled from "styled-components";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Wrap = styled.div`
  button {
    margin-top: 1rem;
    width: 200px;
    height: 2.5rem;
    padding: 1rem;
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
`;

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <Wrap>
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </Wrap>
  );
};

export default Button;
