import { ProjectProps } from "../pages/projects/[id]";
import ProjectTile from "./ProjectTile";

export default function ProjectList({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {projects.map((project) => (
        <ProjectTile project={project} key={project.id} />
      ))}
    </div>
  );
}
