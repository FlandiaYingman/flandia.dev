/* eslint-disable react/no-unescaped-entities */
import { Section, SectionText, SectionTitle } from "@/components/ui/Section";
import {
  Entry,
  EntryBadges,
  EntryDescription,
  EntryDetails,
  EntryDetailsTooltip,
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
  SubEntryTime,
  SubEntryTitle,
} from "@/components/sub-entry";
import { CustomTooltip } from "@/components/custom-tooltip";

const Body = () => (
  <>
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionText>
        I am highly interested in various fields in computer science,
        particularly in{" "}
        <CustomTooltip
          trigger={
            <u>
              <i>theoretical computer science (theory B)</i>
            </u>
          }
          content={
            <>
              Logic, Semantics and Automata;
              <br />
              Formal Models and Rewriting Systems;
              <br />
              Theory of Programming Languages.
            </>
          }
        />
        . I am methodically experienced in developing and maintaining
        client/server apps and websites. I am also experienced in and currently
        exploring more about data mining, manipulation and visualization.
      </SectionText>
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      <Entry>
        <EntryTitle>Hong Kong University of Science and Technology</EntryTitle>
        <EntrySubtitle>
          Bachelor of Engineering in Computer Science with an Extended Major in
          Artificial Intelligence
        </EntrySubtitle>
        <EntryTime>2023 - 2027 (Pursuing)</EntryTime>
        <EntryDetails>
          <p>
            Cumulative Grade Average: 4.137/4.3 <br />
            Major Cumulative Grade Average: 4.18/4.3 <br />
            Got A+ in <u>all</u> Computer Science courses. <br />
            Got the first place in <u>more than half</u> Computer Science
            courses.
          </p>
          <SubEntry>
            <SubEntryTitle>COMP 4431 Multimedia Computing</SubEntryTitle>
            <SubEntryTime>2024-25 Spring</SubEntryTime>
            <SubEntryBadges></SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 4121 Modern Compiler Construction
            </SubEntryTitle>
            <SubEntryTime>2024-25 Spring</SubEntryTime>
            <SubEntryBadges></SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3711 Design and Analysis of Algorithms
            </SubEntryTitle>
            <SubEntryTime>2024-25 Spring</SubEntryTime>
            <SubEntryBadges></SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 3021 Java Programming</SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3031 Principle of Programming Languages
            </SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 3511 Operating Systems</SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2711 Discrete Mathematical Tools for Computer Science
            </SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2611 Computer Organization</SubEntryTitle>
            <SubEntryTime>2023-24 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2012 Object-Oriented Programming and Data Structures
            </SubEntryTitle>
            <SubEntryTime>2023-24 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2211 Exploring Artificial Intelligence
            </SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2011 Programming with C++</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
        </EntryDetails>
        <EntryDetailsTooltip>Coursework</EntryDetailsTooltip>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Awards & Achievements</SectionTitle>
      <Entry>
        <EntryTitle>AEON Credit Service Scholarships</EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
        <EntryDescription>
          <i>In process of seeking donor's approval.</i>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Mr & Mrs Poon Kuen Seng Memorial Scholarships</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2024-25 Fall</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          University’s Scholarship Scheme for Continuing Undergraduate Students
        </EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          HKUST Alumni Endowment Fund High Flyers Program Scholarship
        </EntryTitle>
        <EntrySubtitle>
          HKUST. Nominated by Department of Computer Science and Engineering
        </EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Best UGTA Award-Honorable Mention</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2023-24 Fall, Spring</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>University Admissions Scholarship</EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>First Prize Scholarship</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>&quot;Fujing Star&quot; Award</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Outstanding Student Award</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2022</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Work Experiences</SectionTitle>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>
          Undergraduate Teaching Assistant for COMP 2011
        </EntrySubtitle>
        <EntryTime>2024-25 Winter / Spring</EntryTime>
        <EntryBadges>
          <LightBadge>UGTA</LightBadge>
          <LightBadge>COMP 2011</LightBadge>
        </EntryBadges>
      </Entry>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>
          Undergraduate Teaching Assistant for COMP 2012
        </EntrySubtitle>
        <EntryTime>2024-25 Fall</EntryTime>
        <EntryBadges>
          <LightBadge>UGTA</LightBadge>
          <LightBadge>COMP 2012</LightBadge>
        </EntryBadges>
        <EntryDescription>
          With all experiences in the previous UGTA courses, I will serve as a
          UGTA for COMP 2012 (Object-Oriented Programming and Data Structures)
          in the next term, helping students with their object-oriented
          programming concepts and understanding of data structures.
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>
          Undergraduate Teaching Assistant for COMP 1023
        </EntrySubtitle>
        <EntryTime>2023-24 Summer</EntryTime>
        <EntryBadges>
          <LightBadge>UGTA</LightBadge>
          <LightBadge>COMP 1023</LightBadge>
        </EntryBadges>
        <EntryDescription>
          After performing outstandingly in COMP 2211 (Exploring Artificial
          Intelligence) and COMP 2012 (Object-Oriented Programming and Data
          Structures), Dr. Desmond Tsoi, the instructor of COMP 2211 and 2012,
          invited me to become a UGTA for his new course, COMP 1023
          (Introduction to Python Programming), helping with designing and
          preparing the course.
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>GREAT Smart Cities Institute, HKUST</EntryTitle>
        <EntrySubtitle>Summer Internship</EntrySubtitle>
        <EntryTime>2023-24 Summer</EntryTime>
        <EntryBadges>
          <LightBadge>Part Time</LightBadge>
        </EntryBadges>
        <EntryDescription>
          I developed and implemented an automated software solution utilizing
          computer vision technology to efficiently process and analyze traffic
          data, and integrated it with GIS software to enhance data
          visualization and spatial analysis capabilities. Additionally, I
          streamlined workflows to improve the accuracy and speed of traffic
          data processing.
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>USThing</EntryTitle>
        <EntrySubtitle>Head of Backend & App Team Leader</EntrySubtitle>
        <EntryTime>2023-24 Fall - Now</EntryTime>
        <EntryBadges>
          <LightBadge>Core Member</LightBadge>
          <LightBadge>Voluntary</LightBadge>
        </EntryBadges>
        <EntryDescription>
          USThing is a student-developed all-in-one app for HKUST. The team
          consists of passionate and talented students who work towards
          continually improving the app and the HKUST student community.
          <ul>
            <li>
              Leading the backend team in refactoring the backend server
              architecture into a containerized microservice architecture, in
              order to improve performance and maintainability.
            </li>
            <li>
              Leading the app team in revamping our old apps, migrating them
              from old native apps for Android and iOS, respectively, into one
              app built with React Native technology.
            </li>
            <li>
              Leading the team in refactoring the CI/CD workflow of the
              development process of both the backend team and the app team,
              automatizing, simplifying and improving the efficiency of the
              integration and deployment / release process.
            </li>
          </ul>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>
          Undergraduate Teaching Assistant for COMP 2011
        </EntrySubtitle>
        <EntryTime>2023-24 Spring</EntryTime>
        <EntryBadges>
          <LightBadge>UGTA</LightBadge>
          <LightBadge>COMP 2011</LightBadge>
        </EntryBadges>
        <EntryDescription>
          Having taken the course and performing extremely well in COMP 2011
          (Programming with C++), I was invited by Dr. Cindy Li to become a
          UGTA. In the next term, I served as a rare freshman UGTA for COMP 2011
          with Prof. Brian Mak as the course coordinator.
        </EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Research Experiences</SectionTitle>
      <Entry>
        <EntryTitle>Independent Work</EntryTitle>
        <EntrySubtitle>
          AI Agents as Dynamic, Adaptive Language Assessors: Building a
          Patentable APP
        </EntrySubtitle>
        <EntryTime>2024-25 Spring</EntryTime>
        <EntryDescription>
          Supervised by Dr. Desmond Tsoi, this project is currently in a early
          stage of development.
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Undergraduate Research Opportunities Program</EntryTitle>
        <EntrySubtitle>
          Programming Language Design and Implementation
        </EntrySubtitle>
        <EntryTime>2024-25 Fall, Spring</EntryTime>
        <EntryDescription>
          <p>
            Supervised by Professor Lionel Parreaux, I implemented the language
            feature <i>type classes</i> in <i>MLscript</i>, an object-oriented
            and functional programming language founded and led by Professor
            Lionel Parreaux. In particular, I implemented:
          </p>
          <ul>
            <li>
              Functions with <i>multiple parameter lists</i>.
            </li>
            <li>
              <i>Module methods</i>, a type of methods (functions) or methods
              that require extra handling by compiler on call site.
            </li>
            <li>
              <i>Type classes</i>, including contextual parameters and given
              instances.
            </li>
          </ul>
          <p>
            A new pass was being added to the compiler to effectively support
            the new features. Now, I am continuing working on the new pass to
            support other features that requires call-site handling.
          </p>
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
            <DarkBadge>Scala</DarkBadge>
            <DarkBadge>MLscript</DarkBadge>
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
            <DarkBadge>React Native</DarkBadge>
            <DarkBadge>Fastify</DarkBadge>
            <DarkBadge>MongoDB</DarkBadge>
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
            <DarkBadge>Typst</DarkBadge>
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
    <Section hiddenPrint>
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
      </ProjectCards>
    </Section>
  </>
);

export default Body;
