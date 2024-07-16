"use client";

import { createHost, createSlot } from "create-slots";
import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badges } from "@/components/ui/Badge";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const EntryTitle = createSlot();
export const EntrySubtitle = createSlot();
export const EntryTime = createSlot();
export const EntryBadges = createSlot();
export const EntryDescription = createSlot();
export const EntryDetails = createSlot();
export const EntryDetailsTooltip = createSlot();

export const Entry = ({ children }: PropsWithChildren) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return createHost(children, (Slots) => {
    const title = Slots.getProps(EntryTitle);
    const subtitle = Slots.getProps(EntrySubtitle);
    const time = Slots.getProps(EntryTime);
    const badges = Slots.getProps(EntryBadges);
    const description = Slots.getProps(EntryDescription);
    const details = Slots.getProps(EntryDetails);
    const detailsTooltip = Slots.getProps(EntryDetailsTooltip);

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
              <span {...title} />
              <Badges {...badges} />
            </h3>
            <div className="text-sm tabular-nums text-gray-500" {...time} />
          </div>
          <h4 className="font-mono text-sm leading-none" {...subtitle} />
        </CardHeader>
        {description && (
          <CardContent className="mt-2 text-xs flex flex-col gap-y-2" {...description} />
        )}
        {details && (
          <>
            <div
              className="ml-auto h-4 w-4 cursor-pointer select-none print:hidden"
              onClick={() => {
                setCollapseOpen(!collapseOpen);
              }}
            >
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger>
                    {collapseOpen ? (
                      <ChevronsDownUp className="h-4 w-4" />
                    ) : (
                      <ChevronsUpDown className="h-4 w-4" />
                    )}
                  </TooltipTrigger>
                  <TooltipContent {...detailsTooltip} />
                </Tooltip>
              </TooltipProvider>
            </div>
            <Collapsible open={collapseOpen}>
              <CollapsibleContent>
                <CardContent className="mt-2 space-y-2 text-sm" {...details} />
              </CollapsibleContent>
            </Collapsible>
          </>
        )}
      </Card>
    );
  });
};
