/* eslint-disable react/no-unescaped-entities */
import { Section, SectionText, SectionTitle } from "@/components/ui/Section";
import {
  Entry,
  EntryBadges,
  EntryDescription,
  EntryDetails,
  EntrySubtitle,
  EntryTime,
  EntryTitle
} from "@/components/Entry";
import { Badges, DarkBadge, LightBadge } from "@/components/ui/Badge";
import {
  Project,
  ProjectBadges,
  ProjectCards,
  ProjectDescription,
  ProjectLabel,
  ProjectTitle
} from "@/components/Project";
import React from "react";
import { SubEntry, SubEntryBadges, SubEntryDescription, SubEntryTime, SubEntryTitle } from "@/components/sub-entry";

function a(href: string) {
  // eslint-disable-next-line react/display-name
  return (children: string) => (
    <a href={href} target="_blank" className="underline">
      {children}
    </a>
  );
}

const COMP2211_NOTES = a("https://www.overleaf.com/read/vxpjvbsxqfxm#43f239");

const Body = () => (
  <>
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionText>
        I am highly interested in Computer Science and passionate about learning
        new technologies through hands-on experience. I am also an excellent
        team player with a strong ability to share knowledge and collaborate
        with others.
      </SectionText>
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      <Entry>
        <EntryTitle>Hong Kong University of Science and Technology</EntryTitle>
        <EntrySubtitle>
          Bachelor of Engineering with an Extended Major in AI (Discipline
          Undeclared)
        </EntrySubtitle>
        <EntryTime>2023 - 2027 (pursuing)</EntryTime>
        <EntryDetails>
          <SubEntry>
            <SubEntryTitle>COMP 2011 Programming with C++</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>
                MT: 100/100 1<sup>nd</sup>
              </LightBadge>
              <LightBadge>F: 97/100</LightBadge>
            </SubEntryBadges>
            <SubEntryDescription>
              Currently, I am serving as an Undergraduate Teaching Assistant
              (UGTA) for this course, dedicating my efforts to assisting fellow
              students, following the example set by those who previously helped
              me.
            </SubEntryDescription>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2211 Exploring AI</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>
                MT: 91/100 2<sup>nd</sup>
              </LightBadge>
              <LightBadge>
                F: 91.4/100 1<sup>st</sup>
              </LightBadge>
            </SubEntryBadges>
            <SubEntryDescription>
              I plan to serve as a UGTA for this course in the next semester. If
              you want to know more about this course, you can refer to{" "}
              {COMP2211_NOTES("my notes")}.
            </SubEntryDescription>
          </SubEntry>
        </EntryDetails>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Awards & Achievements</SectionTitle>
      <Entry>
        <EntryTitle>Outstanding Student Award</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2022</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>&quot;Fujing Star&quot; Award</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>First Prize Scholarship</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>University Admissions Scholarship</EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2023-24 Fall</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <Entry>
        <EntryTitle>CSE, HKUST</EntryTitle>
        <EntrySubtitle>Undergraduate Teaching Assistant</EntrySubtitle>
        <EntryTime>2023-24 Spring</EntryTime>
        <EntryBadges>
          <LightBadge>UGTA</LightBadge>
        </EntryBadges>
        <EntryDescription>
          After taking the course COMP 2011 (Programming with C++) at HKUST in
          Fall 2023, an instructor invited me to become a UGTA. I accepted the
          offer and will serve as a UGTA for this course in the semester.
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>USThing</EntryTitle>
        <EntrySubtitle>Backend Developer</EntrySubtitle>
        <EntryTime>2023-24 Fall - Now</EntryTime>
        <EntryBadges>
          <LightBadge>Volunteer</LightBadge>
        </EntryBadges>
        <EntryDescription>
          USThing is a student-developed all-in-one app for HKUST. The team
          consists of passionate and talented students who work towards
          continually improving the app and the HKUST student community.
        </EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <Entry>
        <EntryTitle>Programming Languages</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Java</DarkBadge>
            <DarkBadge>Kotlin</DarkBadge>
            <DarkBadge>Golang</DarkBadge>
            <DarkBadge>C / C++</DarkBadge>
            <DarkBadge>HTML</DarkBadge>
            <DarkBadge>CSS</DarkBadge>
            <DarkBadge>JavaScript</DarkBadge>
            <DarkBadge>TypeScript</DarkBadge>
            <DarkBadge>Python</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Libraries / Frameworks / DBMS</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Spring</DarkBadge>
            <DarkBadge>Vue</DarkBadge>
            <DarkBadge>React</DarkBadge>
            <DarkBadge>NumPy</DarkBadge>
            <DarkBadge>Keras</DarkBadge>
            <DarkBadge>TensorFlow</DarkBadge>
            <DarkBadge>PostgreSQL</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Misc</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Git</DarkBadge>
            <DarkBadge>Linux</DarkBadge>
            <DarkBadge>Microsoft Word</DarkBadge>
            <DarkBadge>Microsoft Excel</DarkBadge>
            <DarkBadge>LaTeX</DarkBadge>
            <DarkBadge>ChatGPT</DarkBadge>
            <DarkBadge>GenAI</DarkBadge>
            <DarkBadge>Video Games</DarkBadge>
            <DarkBadge>Mobile Games</DarkBadge>
            <DarkBadge>Adobe Photoshop</DarkBadge>
            <DarkBadge>Adobe Premiere Pro</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
    </Section>
    <Section newPage>
      <SectionTitle>Projects</SectionTitle>
      <ProjectCards>
        <Project href="https://arkwaifu.cc">
          <ProjectTitle>Arkwaifu</ProjectTitle>
          <ProjectDescription>
            A website arranging and providing almost all artworks extracted from
            Arknights (a mobile game).
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Golang</LightBadge>
            <LightBadge>Python</LightBadge>
            <LightBadge>Vue</LightBadge>
            <LightBadge>Vuetify</LightBadge>
            <LightBadge>Material Design</LightBadge>
            <LightBadge>PostgreSQL</LightBadge>
            <LightBadge>Docker</LightBadge>
            <LightBadge>Arknights</LightBadge>
          </ProjectBadges>
          <ProjectLabel>arkwaifu.cc</ProjectLabel>
        </Project>
        <Project href="https://ust-rankings.com">
          <ProjectTitle>UST Rankings</ProjectTitle>
          <ProjectDescription>
            UST Rankings provides a basic rankings for instructors at HKUST,
            based on their teaching performance... and more!
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Contributor</LightBadge>
            <LightBadge>Beta Phase</LightBadge>
            <LightBadge>Next.js</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>Vercel</LightBadge>
            <LightBadge>shadcn/ui</LightBadge>
            <LightBadge>Tailwind CSS</LightBadge>
          </ProjectBadges>
          <ProjectLabel>ust-rankings.com</ProjectLabel>
        </Project>
        <Project href="https://flandia.dev">
          <ProjectTitle>the Home Page</ProjectTitle>
          <ProjectDescription>
            A résumé-like home page for myself (this page). This page also
            showcases a collection of some of my projects.
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Side Project</LightBadge>
            <LightBadge>Next.JS</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>HTML</LightBadge>
            <LightBadge>CSS</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>TSX</LightBadge>
            <LightBadge>shadcn/ui</LightBadge>
            <LightBadge>Tailwind CSS</LightBadge>
          </ProjectBadges>
          <ProjectLabel>flandia.dev</ProjectLabel>
        </Project>
        <Project href="https://chat-at-ust.flandia.dev/">
          <ProjectTitle>Chat @ UST</ProjectTitle>
          <ProjectDescription>
            An improved ChatGPT frontend for HKUST’s ChatGPT API. It is
            currently under beta testing phase.
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Side Project</LightBadge>
            <LightBadge>Beta Phase</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>Mui</LightBadge>
            <LightBadge>Material Design</LightBadge>
            <LightBadge>ChatGPT</LightBadge>
          </ProjectBadges>
          <ProjectLabel>chat-at-ust.flandia.dev</ProjectLabel>
        </Project>
      </ProjectCards>
    </Section>
    <Section>
      <SectionTitle>Gratitude to Educators</SectionTitle>
      <Entry>
        <EntryTitle>
          Dr. ALTMAN, Micheal Scott
        </EntryTitle>
        <EntrySubtitle>
          Department of Physics, HKUST
        </EntrySubtitle>
        <EntryTime>2023-24 Fall</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          Dr. LI, Xin Cindy
        </EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2023-24 Fall, Spring</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          Dr TSOI, Yau Chat Desmond
        </EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2023-24 Fall, Spring</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          Ms. WANG, Hannah
        </EntryTitle>
        <EntrySubtitle>
          ...
        </EntrySubtitle>
        <EntryTime>Anytime</EntryTime>
      </Entry>
    </Section>

  </>
);

export default Body;
