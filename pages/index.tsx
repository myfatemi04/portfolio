import Image from "next/image";

import Footer from "../components/Footer";
import Profile from "../components/Profile";
import ProjectList from "../components/ProjectList";
import getProjectMetadata from "../lib/getProjectMetadata";
import { ProjectProps } from "./projects/[id]";

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjectMetadata(),
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
