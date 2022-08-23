import React from "react";
import Image from "next/image";
import reactImage from "../ReactImage/react-js.png";

const ReactImage = (props) => {
  return (
      <Image
        src={reactImage}
        alt="React"
        width={"90%"}
        height={"90%"}
        style={{ borderRadius: "50%" }}
      />
  );
};

export default ReactImage;
