import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import React, { cloneElement, PropsWithChildren, ReactElement } from "react";
import { Button } from "@/components/ui/Button";

const Name = ({ children }: PropsWithChildren) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

const About = ({ children }: PropsWithChildren) => (
  <p className="max-w-xl text-pretty font-mono text-sm text-muted-foreground">
    {children}
  </p>
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

const Social = ({
  url,
  icon,
  label,
  labelPrefix = "",
}: {
  url: string;
  icon: ReactElement;
  label: string;
  labelPrefix?: string;
}) => {
  icon = cloneElement(icon, { className: "h-4 w-4" });
  return (
    <>
      <Button
        className="h-8 w-8 print:hidden"
        variant="outline"
        size="icon"
        asChild
      >
        <a href={url} target="_blank">
          {icon}
        </a>
      </Button>
      <span className="hidden basis-full print:block">
        {labelPrefix}
        <span className="underline">{label}</span>
      </span>
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
      Enthusiastic software developer with experience in developing and
      maintaining websites and applications.
      <br />
      Work hard; play hard.
    </About>
    <Location href="https://maps.app.goo.gl/YZuY7rM4Mf9mvP9i8">
      HKUST, Hong Kong SAR
    </Location>
    <Socials>
      <Social
        url={"mailto:me@flandia.dev"}
        icon={<MailIcon />}
        label="me@flandia.dev"
      />
      <Social
        url="tel:+852-8403-0974"
        icon={<PhoneIcon />}
        label="+852-8403-0974"
      />
      <Social
        url="https://github.com/FlandiaYingman"
        icon={<GitHubIcon />}
        label="@FlandiaYingman"
        labelPrefix="GitHub: "
      />
    </Socials>
  </>
);

export default Head;
