import React from "react";
import Image from "next/image";
import facebookImage from "../FacebookImage/facebook.png";

const FacebookImage = (props) => {
  return (
    <Image src={facebookImage} alt="Logo" width={"115px"} height={"115px"} />
  );
};

export default FacebookImage;
