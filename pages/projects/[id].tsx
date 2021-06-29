import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ProjectDetailed from "../../components/ProjectDetailed";
import Whitebox from "../../components/Whitebox";
import getProjectNames from "../../lib/getProjectNames";

export interface Image {
  file: string;
  alt: string;
}

type ImageColumn = Image[];

export interface ProjectMetadata {
  id: string;
  name: string;
  youtubeId?: string;
  githubLink?: string;
  liveLink?: string;
  images: ImageColumn[];
}

export interface ProjectProps {
  metadata: ProjectMetadata;
  content: {
    content: string;
    blurb?: string;
  };
}

export default function ProjectPage(props: ProjectProps) {
  return (
    <Whitebox>
      <ProjectDetailed {...props} />
    </Whitebox>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: (await getProjectNames()).map((name) => `/projects/${name}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params!;
  const id = params.id as string;

  const parseProject = (await import("../../lib/parseProject")).parseProject;

  return {
    props: await parseProject(id),
  };
};
