import { GetStaticProps } from "next";
import React from "react";
import getProjectMetadata from "../../lib/getProjectMetadata";
import Project, { ProjectProps } from "./[id]";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      projects: await getProjectMetadata(),
    },
  };
};

export default function Projects({ projects }: { projects: ProjectProps[] }) {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </>
  );
}
