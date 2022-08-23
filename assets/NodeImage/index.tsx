import React from "react";
import Image from "next/image";
import nodeImage from "../NodeImage/node-js.png";

const NodeImage = (props) => {
  return (
      <Image
        src={nodeImage}
        alt="Node"
        width={"90%"}
        height={"90%"}
        style={{ borderRadius: "50%" }}
      />
  );
};

export default NodeImage;
