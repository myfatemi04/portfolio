import getProjectNames from "./getProjectNames";
import parseProject from "./parseProject";

export default async function getProjects() {
  const projectNames = await getProjectNames();
  const projects = await Promise.all(projectNames.map(parseProject));

  return projects;
}
