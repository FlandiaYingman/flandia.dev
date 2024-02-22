"use client";

import { createHost, createSlot } from "create-slots";
import React, { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badges } from "@/components/ui/Badge";

export const SubEntryTitle = createSlot();
export const SubEntrySubtitle = createSlot();
export const SubEntryTime = createSlot();
export const SubEntryBadges = createSlot();
export const SubEntryDescription = createSlot();

export const SubEntry = ({ children }: PropsWithChildren) =>
  createHost(children, (Slots) => {
    const title = Slots.getProps(SubEntryTitle);
    const subtitle = Slots.getProps(SubEntrySubtitle);
    const time = Slots.getProps(SubEntryTime);
    const badges = Slots.getProps(SubEntryBadges);
    const description = Slots.getProps(SubEntryDescription);
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between text-base">
            <h3 className="inline-flex flex-wrap items-center gap-2 font-semibold leading-none">
              <span {...title} />
              <Badges {...badges} />
            </h3>
            <div
              className="flex-shrink-0 text-sm tabular-nums text-gray-500"
              {...time}
            />
          </div>
          {subtitle && (
            <h4 className="font-mono text-sm leading-none" {...subtitle} />
          )}
        </CardHeader>
        <CardContent className="mt-2 space-y-1 text-xs" {...description} />
      </Card>
    );
  });
