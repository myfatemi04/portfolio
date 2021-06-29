import React from "react";
import Youtube from "./Youtube";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <h2>EyeOS</h2>
      <p>
        A revolutionary tool that enables the disabled to use a computer without
        the use of their hands.
      </p>
      <p>Collaborators: Suhas Nandiraju and Autin Mitra.</p>
      <p>
        Awards:{" "}
        <a href="https://hoohacks20.devpost.com/project-gallery">
          HooHacks 2020 Overall Winner
        </a>
      </p>
      <p>
        Interested in the code? Check it out on{" "}
        <a href="https://www.github.com/myfatemi04/eyeos">GitHub</a>!
      </p>
      <a href=""></a>
      <Youtube id="PvBQVCoy1MQ" style={{ width: "100%" }} />

      <h2>Coronavision</h2>
      <p>
        A robust and feature-filled Coronavirus tracker which pooled data from
        dozens of sources and created detailed data visualations.
      </p>
      <p>
        I maintained the website for two months before I ran out of free credits
        on Google Cloud. ($120 was on a single bill for producing too many logs.
        A costly mistake...)
      </p>
      <Youtube id="kx9RmEfW5oU" style={{ width: "100%" }} />
    </>
  );
}
