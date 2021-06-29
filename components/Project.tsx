import { ProjectProps } from "../pages/projects/[id]";
import Youtube from "./Youtube";

export default function Project({
  id,
  name,
  githubLink,
  images,
  youtubeId,
}: ProjectProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h2>{name}</h2>
      {youtubeId && <Youtube id={youtubeId} />}
    </div>
  );
}
