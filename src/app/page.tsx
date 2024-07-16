/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import React from "react";
import Head from "@/data/Head";
import Body from "@/data/Body";
import Avatar from "@/data/Avatar";
import { str } from "@/lib/utils";

export const metadata: Metadata = {
  title: "LI, Yu Hong Harry | 李裕康",
  description: str(
    <>
      Enthusiastic software developer with experience in developing and
      maintaining apps, websites and server software. Work hard. Play hard.
    </>,
  ),
};

export default function Page() {
  return (
    <main className="container relative mx-auto w-full max-w-4xl space-y-6 p-6 lg:p-16">
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-1.5">
          <Head />
        </div>
        <Avatar />
      </div>
      <Body />
    </main>
  );
}
