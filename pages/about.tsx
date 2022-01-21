import React from "react";
import Container from "../components/Container";

export default function About() {
  return (
    <Container>
      <h1>Hey, I'm Michael! 👋</h1>
      <p>
        I'm <strong>Michael Fatemi,</strong> a app developer and machine
        learning enthusiast.
      </p>
      <p>
        I'm a student at the Thomas Jefferson High School for Science and
        Technology, where I'm an active member of the machine learning club,
        student government, varsity track, and the Rubik's Cube Club. I'm
        currently working on a research project to locate and classify sounds
        and display them in augmented reality. I have taken courses in computer
        vision, artificial intelligence, mobile and web app development, and
        machine learning.
      </p>
      <p>
        I build apps like{" "}
        <a href="https://github.com/myfatemi04/wheelshare-frontend">
          WheelShare
        </a>
        , a carpool discovery app for school,{" "}
        <a href="https://github.com/myfatemi04/eyeos">EyeOS</a>, an app that
        makes it possible to control a computer through eye movements, and{" "}
        <a href="https://github.com/myfatemi04/corona-vision">Coronavision</a>,
        a website with maps, charts, and predictions for COVID-19 cases.
      </p>
      <p>
        From April 2020 to April 2021, I was a founding member and the director
        of events at <a href="https://codefycs.org/">Codefy</a>, a computer
        science tutoring nonprofit. I taught courses in web development and
        Python, built the enrollment system that was used by thousands of
        students, and organized workshops in machine learning, game development,
        and computer vision.
      </p>
    </Container>
  );
}
