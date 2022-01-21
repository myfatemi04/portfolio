import React from "react";
import Container from "../components/Container";
import More from "../components/More";
import ProjectList from "../components/ProjectList";
import SocialGood from "../components/SocialGood";
import WantToConnect from "../components/WantToConnect";
import getProjects from "../lib/getProjects";
import { ProjectProps } from "./projects/[id]";

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

const profilePhotoSize = "15rem";

export default function MainPage({ projects }: { projects: ProjectProps[] }) {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <p></p>
        <img
          src="/images/rock_centered.jpg"
          style={{
            borderRadius: "100%",
            width: profilePhotoSize,
            height: profilePhotoSize,
            objectFit: "cover",
            padding: "1rem",
          }}
        />
      </div>
      <div>
        <SocialGood />
        <WantToConnect />
        <h1>Projects</h1>
        <ProjectList projects={projects} />
        <More />
      </div>
    </Container>
  );
}
