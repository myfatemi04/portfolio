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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "1rem",
          backgroundColor: "white",
          width: "30rem",
          padding: "1rem 2rem",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <h1>Projects</h1>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
}
