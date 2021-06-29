import { ProjectProps } from "../pages/projects/[id]";
import getProjectNames from "./getProjectNames";

export default async function getProjectMetadata() {
  const fs = await import("fs/promises");
  const projectNames = await getProjectNames();
  const projects = await Promise.all(
    projectNames.map(
      async (name) =>
        JSON.parse(
          await fs.readFile(`projects/${name}/meta.json`, { encoding: "utf-8" })
        ) as ProjectProps
    )
  );

  return projects;
}
