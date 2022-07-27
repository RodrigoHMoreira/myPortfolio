import React from "react";
import Image from "next/image";
import logoloneImage from "../logoloneImage/logolone.png";

const LogoloneImage = (props) => {
  return (
    <Image src={logoloneImage} alt="Logolone" width={300} height={300}/>
  );
};

export default LogoloneImage;
