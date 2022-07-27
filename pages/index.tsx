import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/AvatarImage";
import FacebookImage from "../assets/FacebookImage";
import InstagramImage from "../assets/InstagramImage";
import LinkedinImage from "../assets/LinkedinImage";

const Main = styled.main`
  height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 1rem;
  grid-gap: 1.5rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #image {
    border: 5px solid #9b90fe;
    border-radius: 50%;
    padding: 0.5rem;
  }

  #main {
    text-align: center;
  }
`;

const WrapCard = styled.div`
  padding: 50px;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    grid-gap: 50px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: rgba(255, 255, 255, 1);

  @media only screen and (min-width: 768px) {
    margin-top: 5vh;
  }
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  color: #9b90fe;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    width: 50px;
    height: 80px;
    grid-gap: 10px;

    &:hover {
      color: #9b90fe;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Main>
        <div id="image">
          <AvatarImage />
        </div>
        <div id="main">
          <Title>Rodrigo Moreira</Title>
          <SubTitle>DESENVOLVEDOR FRONT-END</SubTitle>
          <WrapCard>
            <Card>
              <a
                href={"https://www.Cardedin.com/in/rodrigohmoreira/"}
                target="_blank"
              >
                <LinkedinImage />
                Linkedin
              </a>
            </Card>
            <Card>
              <a
                href={"https://www.facebook.com/rodrigo.henrique.37604/"}
                target="_blank"
              >
                <FacebookImage />
                Facebook
              </a>
            </Card>
            <Card>
              <a href={"https://www.instagram.com/drigohenri/"} target="_blank">
                <InstagramImage />
                Instagram
              </a>
            </Card>
          </WrapCard>
        </div>
      </Main>
    </>
  );
};

export default Home;
