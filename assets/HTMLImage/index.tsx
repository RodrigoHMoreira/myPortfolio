import React from "react";
import Image from "../../node_modules/next/image";
import htmlImage from "../HTMLImage/html.png";

const HTMLImage = (props) => {
  return <Image src={htmlImage} alt="HTML" width={"90%"} height={"90%"} />;
};

export default HTMLImage;
