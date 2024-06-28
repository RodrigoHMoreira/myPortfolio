import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 1.5rem;
  border-radius: 20px;
  background: var(--card);

    img {
        border-radius: 20px;
      }
`;

const Carousell = () => {
  return (
    <Wrap className="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <a
          href="https://project-verena-weikert-web.vercel.app/"
          target="_blank"
        >
          <div>
            <img
              src="../project-1.png" />
          </div>
        </a>
        <div>
          <img src="../project2.png" />
        </div>
        <div>
          <img src="../project3.png" />
        </div>
      </Carousel>
    </Wrap>
  );
};

export default Carousell;
