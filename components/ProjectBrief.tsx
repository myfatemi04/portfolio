import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import { ProjectProps } from "../pages/projects/[id]";
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
      <Link href={`/projects/${metadata.id}`}>Read more</Link>
      {githubLink && (
        <p>
          Interested in the code? Check it out on{" "}
          <a href="https://www.github.com/myfatemi04/eyeos">GitHub</a>!
        </p>
      )}
    </div>
  );
}
