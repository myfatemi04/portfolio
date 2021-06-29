let projectNames: string[] = null!;

export default async function getProjectNames() {
  if (projectNames === null) {
    const { readdir } = await import("fs/promises");
    projectNames = await readdir("projects");
  }
  return projectNames;
}
