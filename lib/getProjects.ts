import { ProjectProps } from "../pages/projects/[id]";
import getProjectNames from "./getProjectNames";
import graymatter from "gray-matter";

export default async function getProjects() {
  const fs = await import("fs/promises");
  const projectNames = await getProjectNames();
  const projects = await Promise.all(
    projectNames.map(async (name) => {
      const text = await fs.readFile(`projects/${name}.md`, {
        encoding: "utf-8",
      });
      const file = graymatter(text);
      console.log(file.data);
      return {
        metadata: file.data as ProjectProps,
        content: file.content,
      };
    })
  );

  return projects;
}
