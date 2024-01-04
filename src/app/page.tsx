import { Metadata } from "next";
import React from "react";
import Head from "@/data/Head";
import Body from "@/data/Body";
import Avatar from "@/data/Avatar";
import { str } from "@/lib/utils";

export const metadata: Metadata = {
  title: str(
    <>
      LI, Yu Hong Harry | Enthusiastic software developer with experience in
      developing and maintaining websites and applications. Work hard; play
      hard.
    </>,
  ),
  description: str(
    <>
      Highly interested in Computer Science and passionate about learning new
      technologies through hands-on experience. Excellent team player with a
      strong ability to share knowledge and collaborate with others.
    </>,
  ),
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-6 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <Head />
          </div>
          <Avatar />
        </div>
        <Body />
      </section>
    </main>
  );
}
