import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar";
import React from "react";
import { twMerge } from "tailwind-merge";

const TheAvatar = ({className}: {className?: string}) => (
  <Avatar className={twMerge("size-32 rounded-xl ml-2", className)}>
    <AvatarImage alt="Avatar" src="/avatar.jpg" />
    <AvatarFallback />
  </Avatar>
);

export default TheAvatar;
