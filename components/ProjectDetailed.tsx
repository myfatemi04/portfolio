import React from "react";
import Youtube from "./Youtube";
import Markdown from "react-markdown";
import { ProjectProps } from "../pages/projects/[id]";

export default function ProjectDetailed({ metadata, content }: ProjectProps) {
  const { name, youtubeId, githubLink } = metadata;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1>{name}</h1>
      {content.blurb && <Markdown>{content.blurb}</Markdown>}
      {githubLink && (
        <p>
          Interested in the code? Check it out on{" "}
          <a href="https://www.github.com/myfatemi04/eyeos">GitHub</a>!
        </p>
      )}
      {youtubeId && <Youtube id={youtubeId} style={{ maxWidth: "30rem" }} />}
      <Markdown>{content.content}</Markdown>
    </div>
  );
}
