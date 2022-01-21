import { GetStaticProps } from "next";
import React from "react";
import ProjectBrief from "../../components/ProjectBrief";
import Container from "../../components/Container";
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
    <Container>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectBrief {...project} />
      ))}
    </Container>
  );
}
