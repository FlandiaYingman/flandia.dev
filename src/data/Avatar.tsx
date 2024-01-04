import {
  InternalAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar";
import React from "react";

const Avatar = () => (
  <InternalAvatar>
    <AvatarImage alt="Avatar" src="/avatar.jpg" />
    <AvatarFallback />
  </InternalAvatar>
);

export default Avatar;
