import React from "react";
import Image from "../../node_modules/next/image";
import avatarImage from "../AvatarImage/profile.png";

const AvatarImage = (props) => {
  return (
    <Image src={avatarImage} alt="Avatar" width={"275vh"} height={"275vh"} style={{borderRadius: '50%'}}/>
  );
};

export default AvatarImage;
