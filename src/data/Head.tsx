import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import React, { createElement, FC, PropsWithChildren } from "react";
import { Button } from "@/components/ui/Button";
import {
  SiGithub,
  SiInstagram,
  SiThreads,
} from "@icons-pack/react-simple-icons";

const Name = ({ children }: PropsWithChildren) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

const About = ({ children }: PropsWithChildren) => (
  <div className="max-w-xl text-pretty font-mono text-sm text-muted-foreground">
    {children}
  </div>
);

const Location = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
    <a
      className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
      href={href}
      target="_blank"
    >
      <GlobeIcon className="h-3 w-3" />
      {children}
    </a>
  </p>
);

type SocialProps = {
  url: string;
  icon: FC<{ className?: string }>;
} & (
  | {
      label: string;
      labelPrefix?: string;
      printHidden?: false;
    }
  | {
      printHidden: true;
    }
);

const Social = (props: SocialProps) => {
  const { url, icon } = props;
  return (
    <>
      <Button
        className="h-8 w-8 print:hidden"
        variant="outline"
        size="icon"
        asChild
      >
        <a href={url} target="_blank">
          {createElement(icon, { className: "h-4 w-4" })}
        </a>
      </Button>
      {props.printHidden || (
        <span className="hidden basis-full print:block">
          {props.labelPrefix}
          <span className="underline">{props.label}</span>
        </span>
      )}
    </>
  );
};

const Socials = ({ children }: PropsWithChildren) => (
  <div className="flex flex-row flex-wrap gap-x-1 gap-y-1 pt-1 font-mono text-sm text-muted-foreground">
    {children}
  </div>
);

const Head = () => (
  <>
    <Name>LI, Yu Hong Harry</Name>
    <About>
      Enthusiastic learner and developer, passionate about learning new
      technologies, practices and methodologies through intuition and hands-on
      experience.
      <blockquote>Work hard. Play hard.</blockquote>
      <blockquote>Humans pursue knowledge not to surpass others.</blockquote>
    </About>
    <Location href="https://maps.app.goo.gl/YZuY7rM4Mf9mvP9i8">
      HKUST, Hong Kong SAR
    </Location>
    <Socials>
      <Social
        url={"mailto:me@flandia.dev"}
        icon={MailIcon}
        label="me@flandia.dev"
      />
      <Social
        url="tel:+852-8403-0974"
        icon={PhoneIcon}
        label="+852 8403 0974"
        labelPrefix="TEL: "
      />
      <Social
        url="https://github.com/FlandiaYingman"
        icon={SiGithub}
        label="@FlandiaYingman"
        labelPrefix="GitHub: "
      />
      <Social
        url={"https://www.instagram.com/flandia_dev/"}
        icon={SiInstagram}
        printHidden
      />
      <Social
        url={"https://www.threads.net/@flandia_dev/"}
        icon={SiThreads}
        printHidden
      />
    </Socials>
  </>
);

export default Head;
