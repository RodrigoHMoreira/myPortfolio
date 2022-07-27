import React from "react";
import Image from "next/image";
import reactImage from "../ReactImage/react-js.png";

const ReactImage = (props) => {
  return (
    <Image src={reactImage} alt="React" width={"115px"} height={"115px"} style={{borderRadius: '50%'}}/>
  );
};

export default ReactImage;
