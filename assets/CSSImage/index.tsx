import React from "react";
import Image from "../../node_modules/next/image";
import cssImage from "../CSSImage/css3.png";

const CSSImage = (props) => {
  return <Image src={cssImage} alt="CSS" width={"105px"} height={"105px"} />;
};

export default CSSImage;
