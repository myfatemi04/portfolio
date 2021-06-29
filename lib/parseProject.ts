import graymatter from "gray-matter";
import { ProjectMetadata, ProjectProps } from "../pages/projects/[id]";
import splitContent from "./splitContent";

export default async function parseProject(id: string) {
  const fs = await import("fs/promises");
  const text = await fs.readFile(`projects/${id}.md`, {
    encoding: "utf-8",
  });
  const file = graymatter(text);
  return {
    metadata: file.data as ProjectMetadata,
    content: splitContent(file.content),
  } as ProjectProps;
}
