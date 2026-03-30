import { twMerge } from "tailwind-merge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TheAvatar = ({ className }: { className?: string }) => (
  <Avatar className={twMerge("ml-2 size-32 rounded-xl", className)}>
    <AvatarImage alt="Avatar" src="/avatar.jpg" />
    <AvatarFallback />
  </Avatar>
);

export default TheAvatar;
