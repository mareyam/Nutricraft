import { Avatar } from "@chakra-ui/react";
import React from "react";

type ProfileAvatarProps = {
  size?: string;
};
const ProfileAvatar = ({ size }: ProfileAvatarProps) => {
  return (
    <Avatar size={size} name="Ryan Florence" src="https://bit.ly/dan-abramov" />
  );
};

export default ProfileAvatar;
