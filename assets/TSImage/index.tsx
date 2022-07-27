import React from "react";
import Image from "next/image";
import tsImage from "../TSImage/typescript.png";

const TSImage = (props) => {
  return <Image src={tsImage} alt="TS" width={"115px"} height={"115px"} style={{borderRadius: '50%'}}/>;
};

export default TSImage;
