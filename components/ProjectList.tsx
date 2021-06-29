import React from "react";
import { ProjectProps } from "../pages/projects/[id]";
import ProjectBrief from "./ProjectBrief";

export default function ProjectList({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectBrief {...project} key={project.metadata.id} />
      ))}
    </div>
  );
}
