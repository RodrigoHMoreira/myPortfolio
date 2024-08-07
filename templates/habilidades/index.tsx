import React from "react";
import styled from "styled-components";
import { habilities } from "../../data/habilities";
import Image from "next/image";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  main {
    margin-top: 1rem;
    max-width: 1120px;
    width: 100%;
    padding: 1rem;

    section {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        margin-bottom: 2rem;
        font-size: 2.75rem;
        color: var(--border);
      }

      h2 {
        margin-top: 2rem;
        font-size: 1.25rem;
        color: var(--color);

          @media screen and (min-width: 1024px) {
          display: none
        }
      }

      ul {
        list-style-type: none;
        display: grid;
        align-items: center;
        grid-gap: 0.75rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        li {
          background: var(--card);
          width: 100%;
          height: 250px;
          padding: 1rem;
          border-radius: 20px;
          border: 1px solid transparent;
          transition: 0.2s;
          

          @media screen and (min-width: 1024px) {
            max-width: 230px;
          }

          &:hover {
            border: 1px solid var(--border);
          }

          a {
            margin-top: 0.5rem;
            text-decoration: none;
          

              span {
                color: var(--color);
                font-weight: 300;
                display: flex;
                flex-direction: column;
                align-items: center;

                @media screen and (max-width: 768px) {
                display: none
              }
            }
          
          }
        }

        @media screen and (min-width: 768px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      margin: 2.5rem 0;
    }
  }
`;

const Habilidades = () => {
  return (
    <Wrap>
      <main>
        <section>
          <h1>HABILIDADES</h1>
          <ul>
            {habilities.map((item, index)=>{
              return (
              <li key={index}>
                <a href={item.link} target="_blank">
                  <Image src={item.image} alt="logolabel"  width={'100px'} height={'100px'}/>
                    <span style={{marginTop:"25px"}}>
                      {item.description}
                    </span>
                    <h2>
                      {item.name}
                    </h2>
                </a>
              </li>)
            })}
          </ul>
        </section>
      </main>
    </Wrap>
  );
};
export default Habilidades;
