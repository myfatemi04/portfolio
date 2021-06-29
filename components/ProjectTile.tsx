import Link from "next/link";
import { ProjectProps } from "../pages/projects/[id]";

export default function ProjectTile({ project }: { project: ProjectProps }) {
  const { id, name, githubLink, liveLink } = project;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "30rem",
        margin: "0.5rem 0",
        padding: "0.5rem",
        borderRadius: "0.5rem",
      }}
    >
      <h2 style={{ marginBlockEnd: 0, marginBlockStart: 0 }}>
        <Link href={`/projects/${id}`}>{name}</Link>
      </h2>
      <Link href={`/projects/${id}`}>More Details</Link>
      <div className="code-icons">
        {githubLink && (
          <a target="_blank" href="{{githubLink}}">
            <i className="fa fa-github"></i>Github
          </a>
        )}
        {liveLink && (
          <a target="_blank" href="{{liveLink}}">
            <i className="fas fa-eye"></i>Live
          </a>
        )}
      </div>
    </div>
  );
}
