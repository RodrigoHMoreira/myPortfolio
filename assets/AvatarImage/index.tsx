import React from "react";
import styled from "styled-components";
import Image from "../../node_modules/next/image";
import avatarImage from "../AvatarImage/profile.png";

const AvatarImageStyles = styled.div`
  width: 375px;
  height: 375px;
  border: 0.5rem solid var(--border);
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

const AvatarImage = (props) => {
  return (
    <AvatarImageStyles>
      <Image
        id="avatar-image"
        src={avatarImage}
        alt="Avatar"
        style={{borderRadius: "50%" }}
      />
    </AvatarImageStyles>
  );
};

export default AvatarImage;
