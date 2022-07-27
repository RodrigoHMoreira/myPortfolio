import React from "react";
import Image from "next/image";
import logolabelImage from "../LogolabelImage/logolabel.png";

const LogolabelImage = (props) => {
  return <Image src={logolabelImage} alt="logolabel"  width={'200px'} height={'50px'}/>;
};

export default LogolabelImage;
