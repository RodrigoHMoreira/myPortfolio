import React from "react";
import Image from "next/image";
import instagramImage from "../InstagramImage/instagram.png";

const InstagramImage = (props) => {
  return <Image src={instagramImage} alt="Logo" />;
};

export default InstagramImage;
