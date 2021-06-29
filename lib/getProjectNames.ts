let projectNames: string[] = null!;

export default async function getProjectNames() {
  if (projectNames === null) {
    const { readdir } = await import("fs/promises");
    projectNames = (await readdir("projects"))
      .filter((s) => s.endsWith(".md"))
      .map((s) => {
        // Chop off the .md ending
        return s.slice(0, s.length - ".md".length);
      });
  }
  return projectNames;
}
