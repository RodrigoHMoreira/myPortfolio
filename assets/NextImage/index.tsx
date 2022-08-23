import React from "react";
import Image from "next/image";
import nextImage from "../NextImage/next.png";

const NextImage = (props) => {
  return (
    <Image
      src={nextImage}
      alt="TS"
      width={"90%"}
      height={"90%"}
  style={{ borderRadius: "50%" }}
    />
  );
};

export default NextImage;
