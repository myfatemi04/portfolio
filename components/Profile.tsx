import React from "react";
import More from "./More";
import Projects from "./Projects";
import SocialGood from "./SocialGood";
import WantToConnect from "./WantToConnect";

export const getStaticProps = () => ({ props: {} });

const profilePhotoSize = "15rem";

export default function Profile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "1rem",
        backgroundColor: "white",
      }}
    >
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
        src="/images/rock.jpg"
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
        <Projects />
        <More />
      </div>
    </div>
  );
}
