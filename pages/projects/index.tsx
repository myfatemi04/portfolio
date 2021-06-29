import { GetStaticProps } from "next";
import React from "react";
import ProjectBrief from "../../components/ProjectBrief";
import Whitebox from "../../components/Whitebox";
import getProjects from "../../lib/getProjects";
import { ProjectProps } from "./[id]";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      projects: await getProjects(),
    },
  };
};

export default function Projects({ projects }: { projects: ProjectProps[] }) {
  return (
    <Whitebox>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectBrief {...project} />
      ))}
    </Whitebox>
  );
}
