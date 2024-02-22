/* eslint-disable react/no-unescaped-entities */
import { Section, SectionText, SectionTitle } from "@/components/ui/Section";
import {
  Entry,
  EntryBadges,
  EntryDescription,
  EntryDetails,
  EntrySubtitle,
  EntryTime,
  EntryTitle,
} from "@/components/Entry";
import { Badges, DarkBadge, LightBadge } from "@/components/ui/Badge";
import {
  Project,
  ProjectBadges,
  ProjectCards,
  ProjectDescription,
  ProjectLabel,
  ProjectTitle,
} from "@/components/Project";
import React from "react";
import {
  SubEntry,
  SubEntryBadges,
  SubEntryDescription,
  SubEntrySubtitle,
  SubEntryTime,
  SubEntryTitle,
} from "@/components/sub-entry";

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
          Courses
          <SubEntry>
            <SubEntryTitle>COMP 2011 Programming with C++</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>MT: 100/100</LightBadge>
              <LightBadge>F: 97/100</LightBadge>
            </SubEntryBadges>
            <SubEntrySubtitle>Trust in yourself.</SubEntrySubtitle>
            <SubEntryDescription>
              Previously, although I had some experience in writing code, I
              seldom used C++ to write programs. I have never thought I could
              perform so well in this course (if I did, I would have taken COMP
              2012H). The instructors said I was the only one who got full marks
              ^^. Now, I serve as a UGTA for this course, devoting myself to
              helping more students.
            </SubEntryDescription>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2211 Exploring AI</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>
                A+ / 1<sup>st</sup>
              </LightBadge>
              <LightBadge>
                MT: 91/100 2<sup>st</sup>
              </LightBadge>
              <LightBadge>
                F: 91.4/100 1<sup>st</sup>
              </LightBadge>
            </SubEntryBadges>
            <SubEntrySubtitle>
              You can do it if you have the will.
            </SubEntrySubtitle>
            <SubEntryDescription>
              <p>
                Just as the name suggests, this course does not require any
                prior knowledge to artificial intelligence. I believe that I was
                one of the random students who have just intermediate prior
                knowledge to AI:
              </p>
              <ul>
                <li>Python without Third Party Libraries: Skilled</li>
                <li>Python with Third Party Libraries: 0</li>
                <li>Single Variable Calculus & Basic Linear Algebra: Brief</li>
                <li>Multivariable Calculus: 0</li>
                <li>Artificial Intelligence: 0</li>
              </ul>
              <p>
                However, I still performed well (very well!) in this course. I
                believe it should be attributed to good instructors, willingness
                to learn and ask, and a brave heart to discover.
              </p>
              <p>
                I plan to serve as a UGTA for this course in the next semester.
              </p>
              <p>
                If you want to know more about this course, you can refer to{" "}
                <a
                  href="https://www.overleaf.com/project/65bb73df16e78bd0c65553ad"
                  target="_blank"
                  className="underline"
                >
                  my notes
                </a>
                .
              </p>
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
    </Section>
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <Entry>
        <EntryTitle>CSE, HKUST</EntryTitle>
        <EntrySubtitle>Undergraduate Teaching Assistant</EntrySubtitle>
        <EntryTime>2024 Spring</EntryTime>
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
        <EntryTime>2023 Fall - Now</EntryTime>
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
  </>
);

export default Body;
