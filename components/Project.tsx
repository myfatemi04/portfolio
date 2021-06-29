import { ProjectProps } from "../pages/projects/[id]";

export default function Project({
  id,
  name,
  githubLink,
  images,
}: ProjectProps) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
