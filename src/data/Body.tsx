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
  SubEntryDescription,
  SubEntryTime,
  SubEntryTitle,
} from "@/components/sub-entry";
import { toTable } from "@/utils/table";
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
          <SubEntry>
            <SubEntryTitle>COMP 2011 Programming with C++</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
            <SubEntryDescription>
              <p>
                COMP 2011 is a good but challenging course teaching basic
                knowledge of C++ programming. Students without prior programming
                experience (or only with minimal experience, like COMP 1021) may
                find it difficult to catch up with the course. The key to this
                course is to understand all concepts and ask the instructor team
                questions on Piazza when needed.
              </p>
              <p>
                With a passing result of the C-Placement Test, I was exempted
                from taking the pre-requisite course COMP 1021, and was able to
                directly enroll in COMP 2011 as a freshman. I performed
                extremely well in the course, with full marks in the midterm and
                eventually an A+ grade. After the final exam, I was invited by
                the instructor, Dr. Cindy Li, to become a UGTA for the course in
                the next semester.
              </p>
              {toTable(
                [
                  "_",
                  "Score",
                  "Z-Score",
                  "Low",
                  "LQ",
                  "Mean",
                  "Mean*",
                  "Median",
                  "Median*",
                  "UQ",
                  "High",
                  "SD*",
                ],
                [
                  {
                    _: "Midterm",
                    Score: 100,
                    "Z-Score": (100 - 61.18) / 20.31,
                    Low: 0,
                    LQ: 48.69,
                    Mean: 61.23,
                    Median: 62.13,
                    UQ: 76.5,
                    High: 100,
                    "Mean*": 61.18,
                    "Median*": 61.75,
                    "SD*": 20.31,
                  },
                  {
                    _: "Final",
                    Score: 97,
                    "Z-Score": (97 - 54.51) / 22.32,
                    Low: 0,
                    LQ: 37.75,
                    Mean: 53.21,
                    Median: 54,
                    UQ: 72.25,
                    High: 98.5,
                    "Mean*": 54.51,
                    "Median*": 54.63,
                    "SD*": 22.32,
                  },
                ],
                "Stats (*: Released by Instructor Team)",
              )}
            </SubEntryDescription>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2211 Exploring Artificial Intelligence
            </SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
            <SubEntryDescription>
              <p>
                COMP 2211 is a course that introduces the basic concepts of
                Artificial Intelligence. It is a great beginner course for
                computer science students, with good grading, a reasonable
                workload, and one of the best instructors in the department.
              </p>
              <p>
                I performed extremely well in the course, with the 2nd ranking
                in midterm, 1st in the final and eventually an A+ grade.
              </p>
              {toTable(
                [
                  "_",
                  "Score",
                  "Z-Score",
                  "Low",
                  "LQ",
                  "Mean",
                  "Mean*",
                  "Median",
                  "Median*",
                  "UQ",
                  "High",
                  "SD*",
                ],
                [
                  {
                    _: "Midterm",
                    Score: 91,
                    "Z-Score": (91 - 60.19) / 14.89,
                    Low: 0,
                    LQ: 52,
                    Mean: 58.48,
                    Median: 60.63,
                    UQ: 70.5,
                    High: 96,
                    "Mean*": 60.19,
                    "Median*": 61.0,
                    "SD*": 14.89,
                  },
                  {
                    _: "Final",
                    Score: 91.4,
                    "Z-Score": (91.4 - 52.5) / 15.86,
                    Low: 0,
                    LQ: 43.41,
                    Mean: 51.59,
                    Median: 53.2,
                    UQ: 63.71,
                    High: 91.4,
                    "Mean*": 52.5,
                    "Median*": 53.4,
                    "SD*": 15.86,
                  },
                ],
                "Stats (*: Released by Instructor Team)",
              )}
            </SubEntryDescription>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2012 Object-Oriented Programming and Data Structures
            </SubEntryTitle>
            <SubEntryTime>2023-24 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
            <SubEntryDescription>
              <p>
                COMP 2012 is the continuation of COMP 2011, teaching advanced
                C++ with object-oriented programming and some basic data
                structures. This course is even more challenging than COMP 2011,
                with a heavier workload and more difficult concepts.
              </p>
              <p>
                I performed extremely well in the course, with the{" "}
                <del>1st (before paper-checking)</del>
                2nd ranking in the midterm and eventually an A+ grade.
              </p>
              {toTable(
                [
                  "_",
                  "Score",
                  "Z-Score",
                  "Low",
                  "LQ",
                  "Mean",
                  "Mean*",
                  "Median",
                  "Median*",
                  "UQ",
                  "High",
                  "SD*",
                ],
                [
                  {
                    _: "Midterm",
                    Score: 90,
                    "Z-Score": (90 - 45.04) / 15.12,
                    Low: 0,
                    LQ: 34.9,
                    Mean: 45.69,
                    Median: 45.7,
                    UQ: 55.75,
                    High: 91,
                    "Mean*": 45.04,
                    "Median*": 45.0,
                    "SD*": 15.12,
                  },
                  {
                    _: "Final",
                    Score: 91.75,
                    "Z-Score": (91.75 - 54.62) / 16.47,
                    Low: 0,
                    LQ: 43.38,
                    Mean: 54.68,
                    Median: 55.5,
                    UQ: 67.63,
                    High: 95,
                    "Mean*": 54.62,
                    "Median*": 55.25,
                    "SD*": 16.47,
                  },
                  {
                    _: "Total",
                    Score: 94.1,
                    Low: 0,
                    LQ: 54.8,
                    Mean: 63.41,
                    Median: 65.59,
                    UQ: 73.9,
                    High: 95.56,
                  },
                ],
                "Stats (*: Released by Instructor Team)",
              )}
            </SubEntryDescription>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2611 Computer Organization</SubEntryTitle>
            <SubEntryTime>2023-24 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
            <SubEntryDescription>
              <p>
                COMP 2611 is a course that teaches the basic concepts of
                computer organization, including the structure of a computer,
                assembly language, and some basic knowledge of computer
                processor. This is another good course for computer science
                students, with a reasonable workload, good grading and one of
                the best instructors in the department.
              </p>
              <p>
                I performed extremely well in the course, with full marks in the
                midterm, 1st in the overall score, and eventually an A+ grade.
                After the final exam, I was invited by the instructor, Dr.
                Desmond Tsoi, to become a UGTA for the course in the next
                semester.
              </p>
              {toTable(
                [
                  "_",
                  "Score",
                  "Z-Score",
                  "Low",
                  "LQ",
                  "Mean",
                  "Mean*",
                  "Median",
                  "Median*",
                  "UQ",
                  "High",
                  "SD*",
                ],
                [
                  {
                    _: "Midterm",
                    Score: 100,
                    "Z-Score": (100 - 73.5) / 14.8,
                    Low: 17,
                    LQ: 66,
                    Mean: 74.58,
                    Median: 76,
                    UQ: 86,
                    High: 100,
                    "Mean*": 73.5,
                    "SD*": 14.8,
                  },
                  {
                    _: "Final",
                    Score: 99,
                    "Z-Score": (99 - 66.62) / 18.75,
                    Low: 19.5,
                    LQ: 53.25,
                    Mean: 66.67,
                    Median: 69.5,
                    UQ: 81,
                    High: 100,
                    "Mean*": 66.62,
                    "SD*": 18.75,
                  },
                  {
                    _: "Total",
                    Score: 99.6,
                    Low: 26.35,
                    LQ: 69.45,
                    Mean: 76.05,
                    Median: 79.54,
                    UQ: 85.85,
                    High: 99.6,
                  },
                ],
                "Stats (*: Released by Instructor Team)",
              )}
            </SubEntryDescription>
          </SubEntry>
        </EntryDetails>
        <EntryDetailsTooltip>Showoff!</EntryDetailsTooltip>
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
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2023-24 Fall, Spring</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Best UGTA Award-Honorable Mention</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
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
        <EntryTitle>
          University’s Scholarship Scheme for Continuing Undergraduate Students
        </EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2024-25 Fall</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
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
          Undergraduate Teaching Assistant for COMP 2011
        </EntrySubtitle>
        <EntryTime>2024-25 Winter / Spring</EntryTime>
        <EntryBadges>
          <LightBadge>UGTA</LightBadge>
          <LightBadge>COMP 2011</LightBadge>
        </EntryBadges>
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
