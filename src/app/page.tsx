import { Comments } from "@/components/Comments";
import Body from "@/data/Body";
import Head from "@/data/Head";
import { str } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry Li | 李裕康",
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
      <Head />
      <Body />
      <Comments />
    </main>
  );
}
