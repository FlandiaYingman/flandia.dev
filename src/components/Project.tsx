"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import React, { PropsWithChildren } from "react";
import { createHost, createSlot } from "create-slots";
import { twMerge } from "tailwind-merge";

type Status = "online" | "wip";

const statusColor = (status: Status) => {
  switch (status) {
    case "online":
      return "green";
    case "wip":
      return "amber";
  }
};

export const ProjectTitle = createSlot("span");
export const ProjectDescription = createSlot("span");
export const ProjectBadges = createSlot("div");
export const ProjectLabel = createSlot("span");

interface Props {
  status?: Status;
  href: string;
  hiddenPrint?: boolean;
}

export function Project({
  children,
  status = "online",
  hiddenPrint = false,
  href,
}: PropsWithChildren<Props>) {
  const color = statusColor(status);
  return createHost(children, (Slots) => {
    const titleProps = Slots.getProps(ProjectTitle);
    const descriptionProps = Slots.getProps(ProjectDescription);
    const badgesProps = Slots.getProps(ProjectBadges);
    const labelProps = Slots.getProps(ProjectLabel);
    return (
      <Card
        className={twMerge(
          "flex flex-col overflow-hidden border border-muted p-3",
          hiddenPrint && "print:hidden",
        )}
      >
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              <a
                href={href}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                <span {...titleProps} />
                <span
                  className={`mx-1 h-1 w-1 rounded-full bg-${color}-500`}
                ></span>
              </a>
            </CardTitle>
            <div className="hidden font-mono text-xs underline print:block">
              <span {...labelProps} />
            </div>
            <CardDescription className="font-mono text-xs">
              <span {...descriptionProps}></span>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="my-auto flex">
          <div className="mt-2 flex flex-wrap gap-1" {...badgesProps} />
        </CardContent>
      </Card>
    );
  });
}

export const ProjectCards = ({ children }: PropsWithChildren) => (
  <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
    {children}
  </div>
);
