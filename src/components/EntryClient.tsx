"use client";

import { PropsWithChildren, useCallback, useState } from "react";

import { Badges } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { RichContent } from "@/components/ui/rich-content";
import { useBeforePrint } from "@/utils/useBeforePrint";

type EntrySlotProps = PropsWithChildren<Record<string, unknown>>;

interface EntryClientProps {
  title?: EntrySlotProps;
  subtitle?: EntrySlotProps;
  time?: EntrySlotProps;
  badges?: EntrySlotProps;
  description?: EntrySlotProps;
  details?: EntrySlotProps;
}

export const EntryClient = ({
  title,
  subtitle,
  time,
  badges,
  description,
  details,
}: EntryClientProps) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  useBeforePrint(
    useCallback(() => {
      setCollapseOpen(true);
    }, []),
  );

  const { children: titleChildren, ...titleProps } = title ?? {};
  const { children: subtitleChildren, ...subtitleProps } = subtitle ?? {};
  const { children: timeChildren, ...timeProps } = time ?? {};
  const { children: badgesChildren, ...badgesProps } = badges ?? {};
  const detailsChildren = details?.children;
  const descriptionChildren = description?.children;
  const hasDetails = Boolean(details);

  const headerContent = (isInteractive: boolean) => (
    <>
      <div className="flex items-center justify-between gap-x-2 text-base">
        <h3
          className={[
            "inline-flex items-center justify-center gap-x-1 leading-none font-semibold",
            isInteractive
              ? "group-hover:underline group-focus-visible:underline"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span {...titleProps}>{titleChildren}</span>
          <Badges {...badgesProps}>{badgesChildren}</Badges>
        </h3>
        <div className="text-sm text-gray-500 tabular-nums" {...timeProps}>
          {timeChildren}
        </div>
      </div>
      <h4 className="font-mono text-sm leading-none" {...subtitleProps}>
        {subtitleChildren}
      </h4>
    </>
  );

  return (
    <Card className="break-inside-avoid">
      <CardHeader>
        {hasDetails ? (
          <button
            type="button"
            className="group flex w-full flex-col gap-y-1 text-left outline-hidden"
            onClick={() => {
              setCollapseOpen((open) => !open);
            }}
            aria-expanded={collapseOpen}
          >
            {headerContent(true)}
          </button>
        ) : (
          headerContent(false)
        )}
      </CardHeader>
      {description && (
        <CardContent className="mt-2 flex flex-col gap-y-2 text-xs">
          <RichContent>{descriptionChildren}</RichContent>
        </CardContent>
      )}
      {details && (
        <Collapsible open={collapseOpen}>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <CardContent className="mt-2 space-y-2 text-sm">
              <RichContent>{detailsChildren}</RichContent>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      )}
    </Card>
  );
};
