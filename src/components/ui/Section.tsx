import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  newPage?: boolean;
  hiddenPrint?: boolean;
}

export function Section({ className, newPage, hiddenPrint, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "flex min-h-0 flex-col gap-y-3",
        className,
        newPage && "print-force-new-page",
        hiddenPrint && "print:hidden"
      )}
      {...props}
    />
  );
}

export function SectionTitle(props: PropsWithChildren<{}>) {
  return <h2 className="text-xl font-bold" {...props} />;
}

export function SectionText(props: PropsWithChildren<{}>) {
  return (
    <p
      className="text-pretty font-mono text-sm"
      {...props}
    />
  );
}
