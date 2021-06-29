import { ProjectProps } from "../pages/projects/[id]";
import Youtube from "./Youtube";
import Markdown from "react-markdown";

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
      {githubLink && (
        <p>
          Interested in the code? Check it out on{" "}
          <a href="https://www.github.com/myfatemi04/eyeos">GitHub</a>!
        </p>
      )}
      {youtubeId && <Youtube id={youtubeId} style={{ maxWidth: "30rem" }} />}
      <Markdown>{content}</Markdown>
    </div>
  );
}
