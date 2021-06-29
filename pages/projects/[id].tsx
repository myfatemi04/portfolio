import { GetStaticPaths, GetStaticProps } from "next";
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
  content: string;
}

export { default } from "../../components/Project";

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: (await getProjectNames()).map((name) => `/projects/${name}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params!.id;
  const fs = await import("fs/promises");
  const filename = `projects/${id}/meta.json`;
  try {
    const stat = await fs.stat(filename);
    if (stat.isFile()) {
      const text = await fs.readFile(filename, { encoding: "utf-8" });
      return {
        props: JSON.parse(text),
      };
    }
  } catch (e) {}
  return {
    notFound: true,
  };
};
