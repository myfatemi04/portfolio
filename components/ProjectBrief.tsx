import React from "react";
import Markdown from "react-markdown";
import { ProjectProps } from "../pages/projects/[id]";
import ProjectModal from "./ProjectModal";
import Youtube from "./Youtube";

export default function Project({ metadata, content }: ProjectProps) {
  const { name, youtubeId, githubLink } = metadata;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h2>{name}</h2>
      {youtubeId && <Youtube id={youtubeId} style={{ maxWidth: "30rem" }} />}
      {content.blurb && <Markdown className="md">{content.blurb}</Markdown>}
      {githubLink && (
        <p>
          Interested in the code? Check it out on{" "}
          <a href="https://www.github.com/myfatemi04/eyeos">GitHub</a>!
        </p>
      )}
      <ProjectModal project={{ metadata, content }} />
    </div>
  );
}
