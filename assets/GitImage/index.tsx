import React from "react";
import Image from "next/image";
import gitImage from "../GitImage/git.png";

const GitImage = (props) => {
  return <Image src={gitImage} alt="Git" width={"115px"} height={"115px"} style={{borderRadius: '50%'}}/>;
};

export default GitImage;
