import { PropsWithChildren } from "react";

import { createHost, createSlot } from "@/lib/slots";

import { EntryClient } from "./EntryClient";

export const EntryTitle = createSlot();
export const EntrySubtitle = createSlot();
export const EntryTime = createSlot();
export const EntryBadges = createSlot();
export const EntryDescription = createSlot();
export const EntryDetails = createSlot();

export const Entry = ({ children }: PropsWithChildren) =>
  createHost(children, (Slots) => (
    <EntryClient
      title={Slots.getProps(EntryTitle)}
      subtitle={Slots.getProps(EntrySubtitle)}
      time={Slots.getProps(EntryTime)}
      badges={Slots.getProps(EntryBadges)}
      description={Slots.getProps(EntryDescription)}
      details={Slots.getProps(EntryDetails)}
    />
  ));
