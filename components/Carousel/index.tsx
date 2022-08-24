import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 475px;
  width: 100%;
  width: 100%;
  padding: 1rem;
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
        <div>
          <img src="../project1.png" />
        </div>
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
