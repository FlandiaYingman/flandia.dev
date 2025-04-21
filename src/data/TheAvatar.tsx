import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar";
import React from "react";

const TheAvatar = () => (
  <Avatar>
    <AvatarImage alt="Avatar" src="/avatar.jpg" />
    <AvatarFallback />
  </Avatar>
);

export default TheAvatar;
