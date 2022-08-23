import React from "react";
import Image from "next/image";
import tsImage from "../TSImage/typescript.png";

const TSImage = (props) => {
  return (
      <Image
        src={tsImage}
        alt="TS"
        width={"90%"}
        height={"90%"}
        style={{ borderRadius: "50%" }}
      />
  );
};

export default TSImage;
