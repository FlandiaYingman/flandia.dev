import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

type Status = "online" | "wip";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  linkLabel?: string;
  status?: Status;
}

const statusColor = (status: Status) => {
  switch (status) {
    case "online":
      return "green";
    case "wip":
      return "amber";
  }
};

export function ProjectCard({
  title,
  description,
  tags,
  status,
  link,
  linkLabel,
}: Props) {
  if (!status) status = "online";

  const color = statusColor(status);
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className={`h-1 w-1 rounded-full bg-${color}-500`}></span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1">
                {title}{" "}
                <span className={`h-1 w-1 rounded-full bg-${color}-500`}></span>
              </span>
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:block">
            {linkLabel}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
