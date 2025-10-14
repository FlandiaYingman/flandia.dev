"use client";

/* eslint-disable react/no-unescaped-entities */
import { Friend, FriendProps } from "@/components/Friend";
import React, { FC, useMemo } from "react";
import { shuffle } from "es-toolkit";

const FriendList: FriendProps[] = [
  {
    href: "https://zxiebb.github.io/",
    name: "Zequan Xie",
    desc: (
      <>
        UG in CS+Bio @ HKUST '26 <br />
        Crazy double-major guy expecting to graduate in only 3 years. 😥
      </>
    ),
    avatar: "",
  },
  {
    href: "https://frankchen0205.github.io/",
    name: "Ruiping Chen",
    desc: (
      <>
        UG in Data Sci. @ HKUST '27 <br />
        Exchange @ ETH Zurich <br />
        Research Interest: <br />
        <i>He doesn't know either.</i> 😛
      </>
    ),
    avatar: "https://frankchen0205.github.io/selfie.jpg",
  },
  {
    href: "https://yzhanglp.com/",
    name: "Yuhao Zhang",
    desc: (
      <>
        UG in CS+Math @ HKUST '25 <br />
        3D Computer Vision and Generation Model 😎
      </>
    ),
    avatar: "https://yzhanglp.com/images/profile.png",
  },
  {
    href: "https://matheart.github.io/",
    name: "Matheart",
    desc: (
      <>
        Incoming PhD @ UPenn <br />
        Theory and Empirical Science of Deep Learning and LLMs 🥺
      </>
    ),
    avatar: "https://matheart.github.io/images/profile_blue.png",
  },
  {
    href: "https://galvingao.com/",
    name: "Galvin Gao",
    desc: (
      <>
        Co-founder & Core Maintainer of&nbsp;
        <a href="https://penguin-stats.io/">Penguin Statistics</a>... and more!
        🥰
      </>
    ),
    avatar:
      "https://galvingao.com/content/images/size/w600/2022/04/avatar-2dim-circle_512x512.png",
  },
  {
    href: "https://github.com/LeoZhu6",
    name: "Leo Zhu",
    desc: (
      <>
        UG in ... IDK @ HKUST '27 <br />
        Funny science student who claims to be from the business school 🐽
      </>
    ),
    avatar: "https://avatars.githubusercontent.com/u/142682002?v=4",
  },
  {
    href: "https://www.markng.com/",
    name: "Mark Ng",
    desc: (
      <>
        PhD in CS @ HKUST '29 <br />
        PL & Compiler. Oh no! His{" "}
        <u>
          <i>
            <b>top-quality</b>
          </i>
        </u>{" "}
        <a href="https://github.com/hkust-taco/mlscript/pull/266">lifter</a>{" "}
        breaks my{" "}
        <a href="https://github.com/hkust-taco/mlscript/pull/343">PR</a> again.
        🤧
      </>
    ),
    avatar: "https://avatars.githubusercontent.com/u/55091936?v=4",
  },
  {
    href: "https://kf8311.github.io/",
    name: "Bosco Lam",
    desc: (
      <>
        UG in COMP @ HKUST '28 <br />
        MyGO Mujica 😨.<br />
        Also checkout <a href="https://www.facebook.com/profile.php?id=100077715879412">KD Workshop</a>{" "}
        if you know OMSI 2. 🚍
      </>
    ),
    avatar: "https://avatars.githubusercontent.com/u/182246735?s=400&u=8201c15bdf1680766612714100f171e99781767c&v=4",
  },
];

export const Friends: FC = () => {
  const friends = useMemo(() => shuffle(FriendList), []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 print:hidden">
      {friends.map((f) => (
        <Friend {...f} key={f.href} />
      ))}
      <Friend
        href="https://github.com/FlandiaYingman/flandia.dev/pulls"
        name="Friends..."
        desc={
          <>
            Create a PR on this section for friendship! <br />
            <span className="text-gray-500">
              no idea about a PR? <br />
              create an issue plz 🤡
            </span>
          </>
        }
        initials="PR"
      />
    </div>
  );
};
