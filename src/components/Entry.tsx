"use client";

import { createHost, createSlot } from "create-slots";
import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badges } from "@/components/ui/Badge";

export const EntryTitle = createSlot();
export const EntrySubtitle = createSlot();
export const EntryTime = createSlot();
export const EntryBadges = createSlot();
export const EntryDescription = createSlot();

export const Entry = ({ children }: PropsWithChildren) =>
  createHost(children, (Slots) => {
    const title = Slots.getProps(EntryTitle);
    const subtitle = Slots.getProps(EntrySubtitle);
    const time = Slots.getProps(EntryTime);
    const badges = Slots.getProps(EntryBadges);
    const description = Slots.getProps(EntryDescription);
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
        <CardContent className="mt-2 text-xs" {...description} />
      </Card>
    );
  });
