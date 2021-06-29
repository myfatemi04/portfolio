import React from "react";
import Youtube from "./Youtube";
import Markdown from "react-markdown";
import { ProjectProps } from "../pages/projects/[id]";
import Router from "next/router";

export default function ProjectDetailed({ metadata, content }: ProjectProps) {
  const { name, youtubeId, githubLink } = metadata;
  return (
    <div>
      {/* <button
        style={{
          border: "none",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
        onClick={Router.back}
      >
        Back
      </button> */}
      <h1>{name}</h1>
      {content.blurb && <Markdown className="md">{content.blurb}</Markdown>}
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
