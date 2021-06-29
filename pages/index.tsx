import Profile from "../components/Profile";
import getProjects from "../lib/getProjects";
import { ProjectProps } from "./projects/[id]";

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

export default function MainPage({ projects }: { projects: ProjectProps[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Profile />
    </div>
  );
}
