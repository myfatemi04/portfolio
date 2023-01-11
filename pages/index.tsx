import Container from "../components/Container";
import Youtube from "../components/Youtube";
import GoogleAnalytics from "./GoogleAnalytics";

function OtherThingsAboutMe() {
  return (
    <div
      style={{
        padding: "4rem",
        // backgroundColor: "rgb(32, 32, 32)",
        // color: "white",
      }}
    >
      <h1>Other Things About Me</h1>
      <div className="project-row">
        <div className="image">
          <img src="/images/rubiks_team_2019.jpg" alt="Rubik's Team 2019" />
        </div>
        <div className="content">
          <h2>TJ Rubik's Cube Club - President</h2>
          <p>
            This photo is from 2019. We had a lot of fast people in our year,
            and our team of eight won fastest in the nation for solving 25
            Rubik's Cubes in 45 seconds!
          </p>
        </div>
      </div>
      <div className="project-row">
        <div className="image">
          <img src="/images/track.JPG" alt="Friends from track" />
        </div>
        <div className="content">
          <h2>Varsity Track - Middle Distance Co-Captain</h2>
          <p>
            Some people from the track team and I, after going to regionals in
            Spring of 2021.
          </p>
        </div>
      </div>
    </div>
  );
}

function CoolThingsIveMade() {
  return (
    <div
      style={{
        backgroundColor: "rgb(32, 32, 32)",
        color: "white",
        padding: "4rem",
        width: "100%",
      }}
    >
      <h1>Cool Things I've Made</h1>
      <div className="project-grid">
        {/* CCW */}
        <div className="project-quadrant">
          <h2>Cactus Courseware</h2>
          <Youtube
            id="JICyJuVcmh0"
            style={{ width: "100%", aspectRatio: "1920/1080" }}
          />
          <br />
          This is an open-source educational content website that my friends and
          I built. Educational content can be imported from GitHub and is
          updated automatically whenever contributors make changes. It includes
          animations and interactive content to cater to different learning
          styles. Uses React and Express as its frontend and backend frameworks,
          and MongoDB for data persistence. <br />
          <div className="link-row">
            <a href="http://github.com/myfatemi04/cactus-courseware-frontend">
              Frontend
            </a>
            <a href="http://github.com/myfatemi04/cactus-courseware-backend">
              Backend
            </a>
          </div>
        </div>
        {/* StreetSweep */}
        <div className="project-quadrant">
          <h2>StreetSweep</h2>
          <Youtube
            id="RMDFT7telOo"
            style={{ width: "100%", aspectRatio: "1920/1080" }}
          />
          StreetSweep is an app that my friend and I created for a hackathon
          with the goal of helping policymakers and volunteer organizations by
          creating a heatmap of the prevalence and type of trash at each
          location. It uses class-agnostic object detection with a model adapted
          from a ResNet classifier to automatically detect garbage in photos of
          street litter. <br />
          <div className="link-row">
            <a href="http://github.com/myfatemi04/streetsweep-frontend">
              Frontend
            </a>
            <a href="http://github.com/myfatemi04/streetsweep">Backend</a>
          </div>
        </div>
        {/* WheelShare */}
        <div className="project-quadrant">
          <h2>WheelShare</h2>
          <Youtube
            id="xQIsbsgVpas"
            style={{ width: "100%", aspectRatio: "1920/1080" }}
          />
          An app to simplify carpooling: students can easily find people to
          carpool with for after-school events. 300+ users. Worked with school
          administration and sports coaches to get schoolwide adoption. Helps
          students who live far away from a school to have the same access to
          after-school activities as people who live nearby, especially if they
          are unable to drive themselves. Stack used: Frontend: Typescript React
          Backend: Node.js/Express, Prisma ORM, PostgreSQL database Hosting:
          DigitalOcean droplets, VPC for database security
          <div className="link-row">
            <a href="https://www.youtube.com/watch?v=wJrC0Eozu6Y">Demo</a>
            <a href="http://github.com/myfatemi04/wheelshare-frontend">
              Frontend
            </a>
            <a href="http://github.com/myfatemi04/wheelshare-altbackend">
              Backend
            </a>
          </div>
        </div>
        {/* EyeOS */}
        <div className="project-quadrant">
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
          Hackathon, an official hackathon organized by students at the
          University of Virginia. Utilized Haar cascades, DLib facial
          recognition, a custom iris detection algorithm made with OpenCV, and
          voice recognition from Google Cloud.
          <br />
          <div className="link-row">
            <a href="http://github.com/myfatemi04/eyeos">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div style={{ paddingLeft: "4rem" }}>
      <h1>Experience</h1>
      <div className="project-row">
        <div className="image"></div>
        <div className="content">
          <h2>Kyron Learning</h2>
          <em>
            December 2022 &ndash; Present; Natural Language Processing Intern
          </em>
          <p>
            Developing natural language processing techniques to scale up the
            world's best teachers. Using large language models and reinforcement
            learning with human feedback.
          </p>
        </div>
      </div>
      <div className="project-row">
        <div className="image"></div>
        <div className="content">
          <h2>Solar Car Team</h2>
          <em>August 2022 &ndash; Present; Embedded Systems</em>
          <p>
            Working to develop a solar-powered car. Recently, I contributed to
            the development of a regenerative braking system to improve the
            car's battery efficiency.
          </p>
        </div>
      </div>
      <div className="project-row">
        <div className="image"></div>
        <div className="content">
          <h2>Energy and Light Management Group</h2>
          <em>October 2022 &ndash; Present</em>
          <p>
            Optimizing the training of neuroevolution potentials (NEPs) to
            predict properties of complex alloys. Using GPUMD and UVA's Rivanna
            cluster.
          </p>
        </div>
      </div>
      <div className="project-row">
        <div className="image">
          {/* <img src="/images/visium_small.png" alt="Visium" /> */}
        </div>
        <div className="content">
          <h2>Internship with Dartmouth-Hitchcock Medical Center</h2>
          <em>
            June 2022 &ndash; Present; with the{" "}
            <a href="https://jlevy44.github.io/levylab/projects/">Levy Lab</a>
          </em>
          <p>
            Here, the goal is to use spatially-resolved transcriptomics to
            improve the diagnosis accuracy of cancer metastasis. <br />
            What I did specifically:
            <ul>
              <li>
                Analyzed spatial autocorrelation of colorectal cancer genomics
                data in Python with SpatialDE and SPARK-X
              </li>
              <li>
                Developed convolutional neural networks and graph attention
                networks with Python/Pytorch to predict spatial expression of
                cancer-related genes with an AUROC of up to 0.89
              </li>
            </ul>
            Also developed some experience with Slurm/high performance
            computing. Work soon to be submitted to a conference.
          </p>
        </div>
      </div>
      <div className="project-row">
        <div className="image">
          {/* <img src="/images/lasers.JPG" alt="Lasers!" /> */}
        </div>
        <div className="content">
          <h2>Internship with Army Research Lab</h2>
          <em>June 2021 &ndash; August 2021; with Dr. Ei Brown</em>
          <p>
            My primary research goal was to measure the efficiency of various
            laser crystals by detecting the amount and wavelengths of emitted
            light from each crystal. <br />
            What I did specifically:
            <ul>
              <li>
                Write Python programs to automatically detect the decay time of
                an emitted signal. This automation reduced analysis time by
                ~90%.
              </li>
              <li>
                Create a real-time spectrum analyzer that enabled us to discover
                emissions peaks more efficiently, and decompose a single decay
                signal into various component decay signals
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="project-row">
        <div className="image"></div>
        <div className="content">
          <h2>Project Caelus</h2>
          <em>November 2020 &ndash; November 2021</em>
          <p>
            Project Caelus is aiming to be the first high school team to create
            a liquid-fueled rocket. I wrote C++ code to interface between
            Arduino and remote ground control software and integrate low-level
            sensor data in a read-control-actuate loop. I also helped optimize
            some printed circuit boards with KiCAD. The software was used to
            control valves during cold flow tests.
          </p>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div style={{ paddingLeft: "4rem", maxWidth: "40rem" }}>
      <h1>Education</h1>
      <div className="edu-row">
        <div className="image">
          <img src="/images/uva_logo.png" alt="University of Virginia" />
        </div>
        <div className="content">
          <b>University of Virginia</b>
          <p>
            <em>2022 &ndash; 2026</em>
            <br />
            BS Computer Science
          </p>
        </div>
      </div>
      <div className="edu-row">
        <div className="image">
          <img
            src="/images/TJ_logo.png"
            alt="Thomas Jefferson High School for Science and Technology"
          />
        </div>
        <div className="content">
          <b>Thomas Jefferson High School for Science and Technology</b>
          <p>
            <em>2018 &ndash; 2022</em>
          </p>
          <p>
            Artificial Intelligence, Computer Vision, Web/Mobile Development,
            Data Structures, Macro/Microeconomics, Multivariable Calculus
          </p>
        </div>
      </div>
    </div>
  );
}

function Volunteering() {
  return (
    <div style={{ padding: "4rem" }}>
      <h1>Volunteering</h1>
      <p>
        From April 2020 to April 2021, I volunteered at a computer science
        tutoring nonprofit called <a href="https://codefycs.org/">Codefy</a>. I
        taught courses in Python and web development, and hosted workshops where
        students learned the fundamentals of machine learning, detected and
        classified traffic signs using computer vision, and developed games. I
        also served as a mentor, individually helping students learn Python, as
        well as leading courses in website development. I also developed an
        enrollment system that served thousands of students.
      </p>
      <p>
        As a member of the student government, I{" "}
        <a href="https://sga.tjhsst.edu/">rebuilt</a> the main website with
        Typescript and React and built a website{" "}
        <a href="https://studyguides.sites.tjhsst.edu/login/">
          where students can share study guides
        </a>
        . I also choreographed a hiphop dances for my year and organized other
        homecoming events.
      </p>
    </div>
  );
}

function MainImage() {
  return (
    <div className="main-image">
      <div className="background-pseudo"></div>
      <div className="main-card">
        <div style={{ maxWidth: "33vw" }}>
          <h1>Michael Fatemi</h1>

          <p style={{ display: "inline-block" }}>
            Hey! I'm Michael Fatemi, a software developer and machine learning
            enthusiast. I have some experience with natural language processing
            and full-stack development, and I'm interested in biotech, robotics,
            aerospace, and quantum computing.
          </p>

          <div className="link-row">
            <a href="https://github.com/myfatemi04">GitHub</a>

            <a href="https://www.youtube.com/channel/UC0CG_oek4RpaqqJlJlFHSKQ">
              YouTube
            </a>

            <a href="https://linkedin.com/in/michaelfatemi">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <Container>
      <GoogleAnalytics />
      <MainImage />
      <Education />
      <Experience />
      <Volunteering />
      <CoolThingsIveMade />
      <OtherThingsAboutMe />
      <div
        style={{
          paddingLeft: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <h1>Contact Me</h1>
        <span style={{ position: "relative", display: "inline-block" }}>
          michael [at] michaelfatemi.com
        </span>
        <p>
          Or connect with me on{" "}
          <a href="https://linkedin.com/in/michaelfatemi">LinkedIn</a>
        </p>
      </div>
    </Container>
  );
}
