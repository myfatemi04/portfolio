import React from "react";
import More from "../components/More";
import ProjectList from "../components/ProjectList";
import SocialGood from "../components/SocialGood";
import WantToConnect from "../components/WantToConnect";
import Whitebox from "../components/Whitebox";
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
    <Whitebox>
      <h1
        style={{
          fontSize: "4rem",
          marginBlockStart: "1rem",
          marginBlockEnd: "1rem",
          textAlign: "center",
        }}
      >
        Michael
        <br />
        Fatemi
      </h1>
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
      <em>Wow, it's me!</em>
      <div
        style={{
          padding: "1rem",
          color: "black",
          maxWidth: "30rem",
        }}
      >
        <SocialGood />
        <WantToConnect />
        <h1>Projects</h1>
        <ProjectList projects={projects} />
        <More />
      </div>
    </Whitebox>
  );
}
