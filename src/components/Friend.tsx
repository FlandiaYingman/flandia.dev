"use client";

import styles from "./Friend.module.css";

import { Card } from "./ui/Card";
import React, { FC, ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { twMerge } from "tailwind-merge";

export interface FriendProps {
  href: string;
  avatar?: string;
  initials?: string;

  name: ReactNode;
  desc: ReactNode;
}

export const Friend: FC<FriendProps> = (props) => {
  const { href, avatar, name, desc } = props;

  const initials =
    props.initials ??
    name
      ?.toString()
      .split(/\W/)
      .map((it) => it.at(0) ?? "")
      .join("");

  return (
    <Card className="-m-1 flex aspect-square flex-col items-center justify-center gap-1 p-2">
      <Avatar className="size-16">
        <AvatarImage src={avatar} className="object-cover" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <a
        href={href}
        target="_blank"
        className="inline-flex font-semibold hover:underline"
      >
        {name}
      </a>
      <span className={twMerge("text-center font-mono text-xs", styles.desc)}>
        {desc}
      </span>
    </Card>
  );
};
