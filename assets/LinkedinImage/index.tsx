import React from "react";
import Image from "next/image";
import linkedinImage from "../LinkedinImage/linkedin.png";

const LinkedinImage = (props) => {
  return (
    <Image src={linkedinImage} alt="Logo" width={"115px"} height={"115px"} style={{borderRadius: '50%'}}/>
  );
};

export default LinkedinImage;
