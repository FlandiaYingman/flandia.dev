"use client";

import React, { ReactElement, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type CustomTooltipProps = {
  trigger: ReactElement;
  content: ReactElement;
};

export const CustomTooltip = ({ trigger, content }: CustomTooltipProps) => {
  const [open, setOpen] = useState(false);
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip onOpenChange={setOpen} open={open}>
        <TooltipTrigger
          asChild
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          {trigger}
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
