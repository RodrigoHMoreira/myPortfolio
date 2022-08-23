import React from "react";
import Image from "../../node_modules/next/image";
import cssImage from "../CSSImage/css3.png";

const CSSImage = (props) => {
  return <Image src={cssImage} alt="CSS" width={"90%"} height={"90%"} />;
};

export default CSSImage;
