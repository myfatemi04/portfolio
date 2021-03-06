import React from "react";
import Container from "../components/Container";
import Youtube from "../components/Youtube";

function Right() {
  return (
    <div style={{ float: "right", width: "30%" }}>
      <img
        src="/images/rock_centered.jpg"
        alt="Me, sitting on a rock."
        style={{
          borderRadius: "100%",
          width: "15rem",
          height: "15rem",
          objectFit: "cover",
          padding: "1rem",
        }}
      />
    </div>
  );
}

function OtherThingsAboutMe() {
  return (
    <>
      <h1>Other Things About Me</h1>
      <div className="project-card">
        <h2>Rubik's Cube Club - President</h2>
        <img
          src="/images/rubiks_team_2019.jpg"
          alt="Rubik's Team 2019"
          width="100%"
        />
        <em>
          This photo is from 2019, when our team of eight won fastest in the
          nation for solving 25 Rubik's Cubes in 45 seconds!
        </em>
      </div>
      <div className="project-card">
        <h2>Varsity Track - Middle Distance Co-Captain</h2>
        <img src="/images/track.JPG" alt="Friends from track" width="100%" />
        <em>
          Some people from the track team and I, after going to regionals in
          Spring of 2021.
        </em>
      </div>
    </>
  );
}

function CoolThingsIveMade() {
  return (
    <>
      {" "}
      <h1>Cool Things I've Made</h1>
      <div className="project-card">
        <h2>Cactus Courseware</h2>
        <Youtube
          id="JICyJuVcmh0"
          style={{ width: "100%", aspectRatio: "1920/1080" }}
        />
        <br />
        This is an open-source educational content website that my friends and I
        built. Educational content can be imported from GitHub and is updated
        automatically whenever contributors make changes. It includes animations
        and interactive content to cater to different learning styles. Uses
        React and Express as its frontend and backend frameworks, and MongoDB
        for data persistence. <br />
        <a href="http://github.com/myfatemi04/cactus-courseware-frontend">
          Frontend
        </a>
        <br />
        <a href="http://github.com/myfatemi04/cactus-courseware-backend">
          Backend
        </a>
      </div>
      <div className="project-card">
        <h2>StreetSweep</h2>
        <Youtube
          id="RMDFT7telOo"
          style={{ width: "100%", aspectRatio: "1920/1080" }}
        />
        StreetSweep is an app that my friend and I created for a hackathon with
        the goal of helping policymakers and volunteer organizations by creating
        a heatmap of the prevalence and type of trash at each location. It uses
        class-agnostic object detection with a model adapted from a ResNet
        classifier to automatically detect garbage in photos of street litter.{" "}
        <br />
        <a href="http://github.com/myfatemi04/streetsweep-frontend">Frontend</a>
        <br />
        <a href="http://github.com/myfatemi04/streetsweep">Backend</a>
      </div>
      {/* <div className="project-card">
    <h2>WheelShare</h2>
    <Youtube
      id="xQIsbsgVpas"
      style={{ width: "100%", aspectRatio: "1920/1080" }}
    />
  </div> */}
      <div className="project-card">
        <h2>EyeOS</h2>
        <Youtube
          id="PvBQVCoy1MQ"
          style={{ width: "100%", aspectRatio: "1920/1280" }}
        />
        An app that enables the disabled to control their computer mouse with
        their eyes: after a quick calibration step, the computer would detect
        which section of the screen they were looking at with 90% accuracy and
        move the mouse there. Then, via voice recognition provided by Google
        Cloud, they could click on those parts of the screen, type, search the
        web, and perform other tasks. Won 1st Place at the HooHacks 2020
        Hackathon, an official hackathon organized by students at the University
        of Virginia. Utilized Haar cascades, DLib facial recognition, a custom
        iris detection algorithm made with OpenCV, and voice recognition from
        Google Cloud.
        <br />
        <a href="http://github.com/myfatemi04/eyeos">Code</a>
      </div>
      {/* <div className="project-card">
    <h2>Coronavision</h2>
  </div> */}
    </>
  );
}

export default function About() {
  return (
    <Container>
      <h1>Hey, I'm Michael! ????</h1>
      <section>
        <Right />
        <div style={{ float: "left", width: "70%" }}>
          <p>
            I'm <strong>Michael Fatemi,</strong> an app developer and machine
            learning enthusiast.
          </p>
          <a href="https://github.com/myfatemi04">GitHub</a>
          <br />
          <a href="https://www.youtube.com/channel/UC0CG_oek4RpaqqJlJlFHSKQ">
            YouTube
          </a>
          <br />
          <a href="https://linkedin.com/in/michaelfatemi">LinkedIn</a>
          <h1>Education</h1>
          <b>University of Virginia</b>
          <p>BS Computer Science, 2026</p>
          <b>Thomas Jefferson High School for Science and Technology</b>
          <p>
            Courses: Artificial Intelligence, Computer Vision, Mobile and Web
            App Development, Data Structures
          </p>
          <CoolThingsIveMade />
          <h1>Work Experience</h1>
          <p>
            <div className="project-card">
              <h2>Army Research Lab Intern</h2>
              <img src="/images/lasers.JPG" alt="Lasers!" width="100%" />
              <em>
                Lasers! They cause this crystal to luminesce due to changes in
                the energy states of the atoms.
              </em>
              <br />
              From June 2021 to August 2021, I worked as a research intern for
              Dr. Ei Brown at the{" "}
              <a href="http://arl.army.mil">Army Research Lab</a> in Adelphi,
              Maryland. My primary research goal was to measure the efficiency
              of various laser crystals by detecting the amount and wavelengths
              of emitted light from each crystal. I wrote Python programs to
              automatically detect the decay time of an emitted signal and
              decompose a single decay signal into various component decay
              signals. I also wrote a Java program to interface directly with
              the drivers for a lab spectrometer, setting up a server that piped
              real-time detection events to clients, performed data
              transformations such as noise reduction and signal peak
              identification, and visualized the results in a dashboard.
            </div>
          </p>
          <h1>Volunteering</h1>
          <p>
            From April 2020 to April 2021, I was a founding member and the
            director of events at <a href="https://codefycs.org/">Codefy</a>, a
            computer science tutoring nonprofit. I taught courses in web
            development and Python, built the enrollment system that was used by
            thousands of students, and organized workshops in machine learning,
            game development, and computer vision.
          </p>
          <p>
            As a member of the student government, I{" "}
            <a href="https://sga.tjhsst.edu/">rebuilt</a> the main website with
            Typescript and React and built a website{" "}
            <a href="https://studyguides.sites.tjhsst.edu/login/">
              where students can share study guides
            </a>
            . I also help organize events.
          </p>
          <OtherThingsAboutMe />
          <h1>Contact Me</h1>
          <p>
            Please send me an email at gsk6me [at] virginia.edu, or message me
            on <a href="https://linkedin.com/in/michaelfatemi">LinkedIn</a>.
          </p>
        </div>
      </section>
    </Container>
  );
}
