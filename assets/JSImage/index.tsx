import React from "react";
import Image from "../../node_modules/next/image";
import jsImage from "../JSImage/javascript.png";

const JSImage = (props) => {
  return (
    <Image
      src={jsImage}
      alt="JS"
      width={"90%"}
      height={"90%"}
  style={{ borderRadius: "50%" }}
    />
  );
};

export default JSImage;
