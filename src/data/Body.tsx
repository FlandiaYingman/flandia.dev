import { Section, SectionText, SectionTitle } from "@/components/ui/Section";
import {
  Entry,
  EntryBadges,
  EntryDescription,
  EntrySubtitle,
  EntryTime,
  EntryTitle,
} from "@/components/Entry";
import { Badges, DarkBadge, LightBadge } from "@/components/ui/Badge";
import {
  ProjectBadges,
  Project,
  ProjectCards,
  ProjectDescription,
  ProjectLabel,
  ProjectTitle,
} from "@/components/Project";
import React from "react";

const Body = () => (
  <>
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionText>
        Highly interested in Computer Science and passionate about learning new
        technologies through hands-on experience. Excellent team player with a
        strong ability to share knowledge and collaborate with others.
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
    </Section>
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <Entry>
        <EntryTitle>CSE, HKUST</EntryTitle>
        <EntrySubtitle>Undergraduate Teaching Assistant</EntrySubtitle>
        <EntryTime>2024 Spring</EntryTime>
        <EntryBadges>
          <LightBadge>Provisional</LightBadge>
          <LightBadge>UGTA</LightBadge>
        </EntryBadges>
        <EntryDescription>
          After taking the course COMP 2011 (Programming with C++) in HKUST in
          2023 fall, an instructor invited me to become an UGTA. I accepted and
          will become a UGTA for this course in the next semester.
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>USThing</EntryTitle>
        <EntrySubtitle>Backend Developer</EntrySubtitle>
        <EntryTime>2023 Fall - Now</EntryTime>
        <EntryBadges>
          <LightBadge>Volunteer</LightBadge>
        </EntryBadges>
        <EntryDescription>
          USThing is a student-developed all-in-one App for HKUST. It is made up
          of passionate and talented students who work towards the continual
          betterment of the app and the HKUST student community.
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
        <Project href="https://flandia.dev">
          <ProjectTitle>the Home Page</ProjectTitle>
          <ProjectDescription>
            A résumé-like home page of myself (this page). It is also a
            collection of some of my projects.
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
        <Project
          href="https://github.com/FlandiaYingman/chatgpt-at-hkust"
          status="wip"
        >
          <ProjectTitle>Chat @ UST</ProjectTitle>
          <ProjectDescription>
            An improved ChatGPT frontend for HKUST’s ChatGPT API. It is
            currently under development.
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Side Project</LightBadge>
            <LightBadge>Work in Progress</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>Mui</LightBadge>
            <LightBadge>Material Design</LightBadge>
            <LightBadge>ChatGPT</LightBadge>
          </ProjectBadges>
          <ProjectLabel>
            github.com
            <br />
            /FlandiaYingman/chatgpt-at-hkust
          </ProjectLabel>
        </Project>
      </ProjectCards>
    </Section>
  </>
);

export default Body;
