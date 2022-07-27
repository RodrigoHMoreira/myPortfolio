import React from "react";
import Image from "../../node_modules/next/image";
import jsImage from "../JSImage/javascript.png";

const JSImage = (props) => {
  return <Image src={jsImage} alt="JS" width={"115px"} height={"115px"} style={{borderRadius: '50%'}}/>;
};

export default JSImage;
