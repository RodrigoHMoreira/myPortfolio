import React from "react";
import Image from "next/image";
import githubImage from "../GithubImage/github.png";

const GithubImage = (props) => {
  return (
    <Image src={githubImage} alt="Logo" width={"115px"} height={"115px"} style={{borderRadius: '50%'}}/>
  );
};

export default GithubImage;
