import React from "react";
import Container from "../components/Container";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Youtube from "../components/Youtube";

function OtherThingsAboutMe() {
  return (
    <div
      style={{
        padding: "4rem",
        // backgroundColor: "rgb(32, 32, 32)",
        // color: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Other Things About Me</h1>

      <div
        className="project-grid"
        style={{ maxWidth: "80rem", margin: "0 auto" }}
      >
        <div className="project-quadrant">
          <h2>TJ Rubik's Cube Club - President</h2>
          <div className="content">
            <div className="col">
              <img
                src="/images/rubiks_team_2019.jpg"
                alt="Rubik's Team 2019"
                style={{ maxWidth: "100%" }}
              />
              <p>
                This photo is from 2019. We had a lot of fast people in our
                year, and our team of eight won fastest in the nation for
                solving 25 Rubik's Cubes in 45 seconds!
              </p>
            </div>
          </div>
        </div>
        <div className="project-quadrant">
          <h2>Varsity Track - Middle Distance Co-Captain</h2>
          <div className="content">
            <div className="col">
              <img
                src="/images/track.JPG"
                alt="Friends from track"
                style={{ maxWidth: "100%" }}
              />
              <p>
                Some people from the track team and I, after going to regionals
                in Spring of 2021.
              </p>
            </div>
          </div>
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
      <h1 style={{ textAlign: "center" }}>Cool Things I've Made</h1>
      <div
        className="project-grid"
        style={{ maxWidth: "80rem", margin: "0 auto" }}
      >
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

function CoolThingsIveMadeTextbased() {
  return (
    <>
      <h2>Projects</h2>
      {/* AugmateAI */}
      <h3>AugmateAI</h3>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Youtube id="ML0Cg_UaSq4" />
        <Youtube id="kQdTL_l-16w" style={{ marginLeft: "0.5rem" }} />
      </div>
      <em>Early November &mdash; Late December 2022; 10 paid users</em>
      <br />
      <p>
        In this project, I sought to create a way to use language models for
        research-oriented writing. It provided the following primary features:
        <ul>
          <li>
            A writing assistant with drag-and-drop text completions from
            external documents, with an integrated Bing search tab that enabled
            quick access (Left video, above)
          </li>
          <li>
            A research assistant that enabled a natural language summary of top
            Bing search results with citations (Right video, above)
          </li>
        </ul>
        This was implemented as a React app (code is{" "}
        <a href="https://github.com/myfatemi04/amai-playground/">here</a>) and a
        set of AWS Lambda functions (code is{" "}
        <a href="https://github.com/myfatemi04/AMAI-Lambda/">here</a>). The
        backend used OAuth2 for authentication and a MongoDB database to store
        user profiles. I used OpenAI's (now-deprecated){" "}
        <code>text-davinci-003</code> model for text generation. I eventually
        reached 10 paid users (yay!), and I shut down the project when ChatGPT
        was released.
      </p>
      {/* Sound Camera */}
      <h3>Sound Camera</h3>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <img
          src="/images/Sound-Camera-Example.png"
          alt="Sound camera: Example image"
          style={{ maxWidth: "50%" }}
        />
        <img
          src="/images/soundcamera.png"
          alt="Sound camera: Hexagonal microphone array with a camera on the top face and a Raspberry Pi below that."
          style={{ maxWidth: "50%", marginLeft: "0.5rem" }}
        />
      </div>
      <br />
      <em>
        Left: An image generated by the sound camera, of my phone playing music.
        Right: Hexagonal microphone array with a camera on the top face and a
        Raspberry Pi below.
      </em>
      <p>
        For a year-long student research project in high school, I made a "sound
        camera" with a Raspberry Pi, an embedded webcam, and a microphone array.
        It is capable of detecting the locations of sounds within 8º of accuracy
        purely through a grid of microphones, and displaying them in real-time.
      </p>
      <p>
        To handle conflicting sounds from multiple frequencies, I improved upon
        an existing algorithm (Steered-Response Power Phase Transform/SRP-PHAT)
        by using a Discrete Fourier Transform to separate a measured signal into
        segmented frequency bounds and then convert those back into the time
        domain with an inverse transform. This was helpful because loud,
        low-frequency sounds (such as ambient noise) would sometimes drown out
        higher-frequency, meaningful sounds (such as voices).
      </p>
      <p>
        I then created an algorithm written in C to assess potential directions
        of arrival and connected a webcam to enable visualization . Most of my
        code is on my own repository,{" "}
        <a href="https://github.com/myfatemi04/sound-camera">
          <code>sound-camera</code>
        </a>
        , but I also added some tools I created to another open-source library,{" "}
        <a href="https://github.com/introlab/odas">
          <code>ODAS</code>
        </a>
        , which has 700 stars.
      </p>
      <p>
        If you want to read more about how I made it, see{" "}
        <a href="https://docs.google.com/document/d/1do7sj8hAGTIEzs5tjTuxz3jxNuWoCZ0ob-_WXh10-J8/edit?usp=sharing">
          this document
        </a>{" "}
        or this <a href="https://youtu.be/otgCmeRIEo4">video</a>.
      </p>
      {/* CCW */}
      {/* <h3>Cactus Courseware</h3>
      <Youtube
        id="JICyJuVcmh0"
        style={{ width: "100%", aspectRatio: "1920/1080" }}
      />
      <br />
      This is an open-source educational content website that my friends and I
      built. Educational content can be imported from GitHub and is updated
      automatically whenever contributors make changes. It includes animations
      and interactive content to cater to different learning styles. Uses React
      and Express as its frontend and backend frameworks, and MongoDB for data
      persistence. <br />
      <div className="link-row">
        <a href="http://github.com/myfatemi04/cactus-courseware-frontend">
          Frontend
        </a>
        <a href="http://github.com/myfatemi04/cactus-courseware-backend">
          Backend
        </a>
      </div> */}
      {/* StreetSweep */}
      {/* <h3>StreetSweep</h3>
      <Youtube
        id="RMDFT7telOo"
        style={{ width: "100%", aspectRatio: "1920/1080" }}
      />
      StreetSweep is an app that my friend and I created for a hackathon with
      the goal of helping policymakers and volunteer organizations by creating a
      heatmap of the prevalence and type of trash at each location. It uses
      class-agnostic object detection with a model adapted from a ResNet
      classifier to automatically detect garbage in photos of street litter.{" "}
      <br />
      <div className="link-row">
        <a href="http://github.com/myfatemi04/streetsweep-frontend">Frontend</a>
        <a href="http://github.com/myfatemi04/streetsweep">Backend</a>
      </div> */}
      {/* WheelShare */}
      <h3>WheelShare</h3>
      <Youtube
        id="xQIsbsgVpas"
        style={{ width: "100%", aspectRatio: "1920/1080" }}
      />
      An app to simplify carpooling: students can easily find people to carpool
      with for after-school events, eventually getting 300+ users. Worked with
      school administration and sports coaches to get schoolwide adoption. Helps
      students who live far away from a school to have the same access to
      after-school activities as people who live nearby, especially if they are
      unable to drive themselves. Stack used: Frontend: Typescript React
      Backend: Node.js/Express, Prisma ORM, PostgreSQL database Hosting:
      DigitalOcean droplets, VPC for database security
      <div className="link-row">
        <a href="https://www.youtube.com/watch?v=wJrC0Eozu6Y">Demo</a>
        <a href="http://github.com/myfatemi04/wheelshare-frontend">Frontend</a>
        <a href="http://github.com/myfatemi04/wheelshare-altbackend">Backend</a>
      </div>
      {/* EyeOS */}
      <h3>EyeOS</h3>
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
      <div className="link-row">
        <a href="http://github.com/myfatemi04/eyeos">Code</a>
      </div>
    </>
  );
}

function ClubsAndTeamsTextbased() {
  return (
    <>
      <h2>Clubs and Project Teams</h2>
      <h3>University of Virginia Autonomous Racing</h3>
      <p>
        We are competing in the{" "}
        <a href="https://www.indyautonomouschallenge.com/">
          Indy Autonomous Challenge
        </a>
        , where teams from around the world (UVA, MIT, CMU, KAIST, TUM) put
        their algorithms head to head in an autonomous Indy 500. We're using
        LiDAR sensors, cameras, and GPS to navigate the track. I am implementing
        algorithms to accurately detect other cars and plan methods to overtake
        opponents in real-time.
      </p>
      <h3>University of Virginia Solar Car Team</h3>
      <p>
        Working to develop a solar-powered car. Recently, I contributed to the
        development of a regenerative braking system to improve the car's
        battery efficiency. I mostly developed embedded software using Mbed OS
        and C++. I also gained experience using Docker as a simulated build
        environment.
      </p>
      <h3>Virginia Entrepreneurship Organization</h3>
      <p>
        I help organize events and workshops to help maintain a strong and dense
        community of builders at UVA.
      </p>
    </>
  );
}

function Experience() {
  return (
    <div style={{ paddingLeft: "4rem" }}>
      <h1>Experience</h1>
      <div className="project-row">
        <h2>University of Virginia Autonomous Racing</h2>
        <em>August 2023 &ndash; Present</em>
        <div className="content">
          <div className="col">
            <p>
              We are competing in the{" "}
              <a href="https://www.indyautonomouschallenge.com/">
                Indy Autonomous Challenge
              </a>
              , where teams from around the world (UVA, MIT, CMU, KAIST, TUM)
              put their algorithms head to head in an autonomous Indy 500. We're
              using LiDAR sensors, cameras, and GPS to navigate the track. I am
              implementing algorithms to accurately detect other cars and plan
              methods to overtake opponents in real-time.
            </p>
          </div>
          <div className="col">
            <img
              src="/images/CavalierAutonomousRacing.JPG"
              alt="Photo of us with the car in front of the Rotunda."
            />
            <br />
            <em>A photo of us with the car in front of the Rotunda.</em>
          </div>
        </div>
      </div>
      <div className="project-row">
        <h2>Reinforcement Learning Research with University of Maryland</h2>
        <em>May 2023 &ndash; August 2023</em>
        <div className="content">
          <div className="col">
            <p>
              Some existing techniques for robotic path planning use algorithmic
              optimizers to find the best path. However, as the length and
              constraints applied to the path become more complex, it becomes
              impractical to try to find a globally optimal solution.
            </p>
            <ul>
              <li>
                To address this, I used reinforcement learning to train a neural
                network to generate paths for an agent moving along a grid with
                obstacles to increase the amount of ambiguity as to its final
                goal.
              </li>
              <li>
                My approach reduces the time to generate a path by up to 97%
                without a significant decrease in path quality. My work is
                currently under review at a conference.
              </li>
            </ul>
          </div>
          <div className="col">
            <img
              src="/images/arl-robotics-1.png"
              alt="A visual depicting robotic paths through a graph."
              style={{ height: "15rem" }}
            />
            <br />
            <em>
              Each path indicates a simulated robotic path through a forest. A
              few paths are sampled for different levels of ambiguity. Higher
              ambiguity paths are less efficient but less revealing about future
              plans.
            </em>
          </div>
        </div>
      </div>
      <div className="project-row">
        <h2>Independent Contracting with Kyron Learning</h2>
        <em>
          December 2022 &ndash; October 2023; Natural Language Processing Intern
        </em>
        <div className="content">
          <div className="col">
            <p>
              Developing natural language processing techniques to scale up the
              world's best teachers. I had a great time exploring meta-prompting
              techniques. Some of the things I did were:
            </p>
            <ul>
              <li>
                Improve response quality through self-revision, step-by-step
                reasoning, and automatic prompt optimization.
              </li>
              <li>
                Increased quantitative accuracy by incorporating a code
                interpreter and WolframAlpha access.
              </li>
              <li>
                Added the ability for models to render visual aids to help
                students learn math concepts more effectively than text-only
                models like GPT-4.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project-row">
        <h2>Embedded Systems Development with Solar Car Team</h2>
        <em>August 2022 &ndash; May 2023; Embedded Systems</em>
        <div className="content">
          <div className="col">
            <p>
              Working to develop a solar-powered car. Recently, I contributed to
              the development of a regenerative braking system to improve the
              car's battery efficiency. I mostly developed embedded software
              using Mbed OS and C++. I also gained experience using Docker as a
              simulated build environment.
            </p>
          </div>
          <div className="col">
            <img
              src="/images/solar_car.png"
              alt="A friend and I working to debug an electrical issue."
              style={{ height: "15rem" }}
            />
            <br />
            <em>A friend and I working to debug an electrical issue.</em>
          </div>
        </div>
      </div>
      <div className="project-row">
        <h2>
          Computer Vision Research with Dartmouth-Hitchcock Medical Center
        </h2>
        <em>
          June 2022 &ndash; August 2023; with the{" "}
          <a href="https://jlevy44.github.io/levylab/projects/">Levy Lab</a>
        </em>
        <div className="content">
          <div className="col">
            <p>
              I implemented machine learning models to classify microscope
              images for the presence of cancer-related genes. I also conducted
              the majority of the analyses to evaluate the results. This work
              resulted in three journal papers, two of which are under review,
              one of which is available here:{" "}
              <a href="https://www.sciencedirect.com/science/article/pii/S2153353923001220">
                Inferring spatial transcriptomics markers from whole slide
                images to characterize metastasis-related spatial heterogeneity
                of colorectal tumors: A pilot study
              </a>
            </p>
            <p>What I did specifically:</p>
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
          </div>
        </div>
        <img
          src="/images/journal_paper_figure.jpg"
          alt="A figure illustrating one of the workflows I used."
          style={{ maxWidth: "40rem" }}
        />
        <p>
          <em>One of the workflows I created.</em>
        </p>
      </div>
      <div className="project-row">
        <h2>
          Materials Science Research with Energy and Light Management Group
        </h2>
        <em>October 2022 &ndash; February 2023</em>
        <div className="content">
          <div className="col">
            <p>
              I trained machine learning models to predict the forces between
              atoms in molecular simulations.
            </p>
            <ul>
              <li>
                I created a branch of the library{" "}
                <a href="https://gpumd.org/">GPUMD</a>, which uses Nvidia CUDA
                to accelerate molecular simulations. My extension added support
                for deep neural networks of arbitrary size using the CUDA
                kernel.
              </li>
              <li>
                I implemented custom optimizers for neural networks including
                gradient descent, genetic algorithms, and simulated annealing.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project-row">
        <h2>Sound Camera</h2>
        <em>August 2021 &ndash; May 2022 (student research project)</em>
        <div className="content">
          <div className="col">
            <p>
              For a year-long student research project in high school, I made a
              "sound camera" with a Raspberry Pi, an embedded webcam, and a
              microphone array.
            </p>
            <ul>
              <li>
                To do this, I implemented a beamforming algorithm in C and wrote
                code to stream information from the microphone array to a
                processing server.
              </li>
              <li>
                Single sound directions of arrival could be distinguished within
                8 degrees of accuracy.
              </li>
              <li>
                If you want to read more about how I made it, see{" "}
                <a href="https://docs.google.com/document/d/1do7sj8hAGTIEzs5tjTuxz3jxNuWoCZ0ob-_WXh10-J8/edit?usp=sharing">
                  here
                </a>
                !
              </li>
            </ul>
          </div>
          <div className="col">
            <img
              src="/images/soundcamera.png"
              alt="Sound camera: Hexagonal microphone array with a camera on the top face and a Raspberry Pi below that."
            />
            <br />
            <em>
              Hexagonal microphone array with a camera on the top face and a
              Raspberry Pi below that
            </em>
          </div>
        </div>
      </div>
      <div className="project-row">
        <h2>Internship with Army Research Lab</h2>
        <em>June 2021 &ndash; August 2021; with Dr. Ei Brown</em>
        <div className="content">
          <div className="col">
            <p>
              My primary research goal was to measure the efficiency of various
              laser crystals by detecting the amount and wavelengths of emitted
              light from each crystal. <br />
              What I did specifically:
            </p>
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
          </div>
          <div className="col">
            <img src="/images/lasers.JPG" alt="Lasers!" />
            <br />
            <em>My laser setup.</em>
          </div>
        </div>
      </div>
      {/* <div className="project-row">
        <h2>Project Caelus</h2>
        <em>November 2020 &ndash; November 2021</em>
        <div className="content">
          <p>
            Project Caelus is aiming to be the first high school team to create
            a liquid-fueled rocket. I wrote C++ code to interface between
            Arduino and remote ground control software and integrate low-level
            sensor data in a read-control-actuate loop. I also helped optimize
            some printed circuit boards with KiCAD. The software was used to
            control valves during cold flow tests.
          </p>
        </div>
      </div> */}
    </div>
  );
}

function Education() {
  return (
    <div style={{ paddingLeft: "4rem" }}>
      <h1>Education</h1>
      <div className="project-row">
        <div className="content">
          <div className="col">
            <div className="edu-row">
              <div className="image">
                <img src="/images/uva_logo.png" alt="University of Virginia" />
              </div>
              <div className="educontent">
                <b>University of Virginia</b>
                <p>
                  <em>2022 &ndash; 2026</em>
                </p>
                <p>Bachelor's of Science in Computer Science and Mathematics</p>
                <p>
                  Coursework: Advanced Algorithms, Neuroscience, Probability,
                  First-Order Optimization Techniques, Operating Systems,
                  Partial Differential Equations, Complex Variables, Real
                  Analysis
                </p>
                <p>
                  Activities: Cavalier Autonomous Racing, Virginia
                  Entrepreneurship Organization, Chinese Student Association,
                  Korean Student Association
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="edu-row">
              <div className="image">
                <img
                  src="/images/TJ_logo.png"
                  alt="Thomas Jefferson High School for Science and Technology"
                />
              </div>
              <div className="educontent">
                <b>Thomas Jefferson High School for Science and Technology</b>
                <p>
                  <em>2018 &ndash; 2022</em>
                </p>
                <p>
                  Coursework: Artificial Intelligence, Computer Vision,
                  Web/Mobile Development, Data Structures, Macro/Microeconomics,
                  Multivariable Calculus
                </p>
                <p>
                  Activities: Student Government, Rubik's Cube Club, Track and
                  Field, Cross Country, Urban Dance Movement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Volunteering() {
  return (
    <div style={{ padding: "4rem", maxWidth: "40rem", margin: "0 auto" }}>
      <h1>Volunteering</h1>
      <h2>Virginia Entrepreneurship Organization</h2>
      <p>
        I help organize events and workshops to help maintain a strong and dense
        community of builders at UVA.
      </p>
      <img
        src="/images/veo.png"
        alt="A photo from October 2023, in which we hosted a UVA alum for a fireside chat about startups and life after college."
        style={{ maxWidth: "100%" }}
      />
      <p>
        <em>
          A photo from October 2023, in which we hosted a UVA alum for a
          fireside chat about startups and life after college.
        </em>
      </p>
      <h2>Computer Science Tutoring</h2>
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
      <h2>Student Government</h2>
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
    <div
      style={{
        display: "flex",
        height: "25vh",
        width: "100%",
        backgroundColor: "rgb(255, 85, 69)",
        color: "white",
      }}
    >
      <div style={{ flex: 1 }}>
        <img src="/images/IMG_1448.small.png" style={{ height: "100%" }} />
      </div>
      <div style={{ flex: 4, verticalAlign: "center" }}>
        <h1>Michael Fatemi</h1>

        <p>
          Hey! I'm Michael Fatemi, a software developer and machine learning
          enthusiast. I have some experience with natural language processing
          and full-stack development, and I'm interested in biotech, robotics,
          aerospace, and quantum computing.
        </p>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div style={{ display: "flex", maxWidth: "60rem", margin: "10rem auto 0" }}>
      {/* First column */}
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <h1>Michael Fatemi</h1>
        <img
          src="/images/FB.jpeg"
          alt="Michael Fatemi"
          style={{ width: "100%" }}
        />
        <p>
          Let's chat!
          <br />
          michael [at] michaelfatemi.com
          <br />
          Or connect with me on{" "}
          <a href="https://linkedin.com/in/michaelfatemi">LinkedIn</a>
        </p>
      </div>

      {/* Second column */}
      <div style={{ flex: 2, padding: "1rem" }}>
        <p>
          I'm Michael Fatemi, a software developer and machine learning
          enthusiast. I'm currently an undergraduate studying Computer Science
          and Mathematics at the University of Virginia/UVA.
        </p>
        <p>
          I am researching robotic intelligence with the{" "}
          <a href="https://collabrobotics.com/">
            UVA Collaborative Robotics lab
          </a>
          , with a specific focus on semantically-grounded motion planning and
          human-robot interaction.
          <br />
          <img src="/images/sized_cubes.png" style={{ width: "50%" }} />
        </p>

        <p>
          I am also a member of UVA's{" "}
          <a href="https://autonomousracing.dev/">Autonomous Racing Team</a>,
          where I work on algorithms to detect and overtake opponents in
          real-time.
          <br />
          <img src="/images/CAR.jpeg" style={{ width: "50%" }} />
        </p>

        <p>
          Previously, I was a student researcher at{" "}
          <a href="https://jlevy44.github.io/levylab/people/">
            Dartmouth's Emerging Diagnostic and Investigative Technologies lab
          </a>
          , where I used deep computer vision and statistical techniques to
          predict cellular activity using spatially-resolved transcriptomics for
          colorectal cancer tissue slides.
          <br />
          <img src="/images/journal_paper_figure.jpg" style={{ width: "100%" }} />
        </p>
        <p>
          I also developed robotic path planning techniques using deep
          reinforcement learning with graph neural networks at the US Army
          Research Lab. I improved upon a prior version of a robotic path
          planning algorithm by enabling inference at a 30x higher speed on 100x
          larger environments. I will be presenting this as a{" "}
          <u>poster at AAMAS 2024</u> (International Conference on Autonomous
          Agents and Multiagent Systems).
          <br />
          <img src="/images/arl-robotics-1.png" style={{ width: "50%" }} />
        </p>
        <p>
          Additionally, I worked as a contractor with{" "}
          <a href="https://www.kyronlearning.com/">Kyron Learning</a>, where I
          developed methods to improve the factual accuracy and tutoring
          capabilities of language models. This included creating a Python API
          and React website to demonstrate novel language modeling techniques,
          and the implementation of pipelines like ReAct/chain of thought and
          decomposing lessons into subgoals to improve an LLM's ability to
          adhere to a coherent lesson plan.
        </p>
        <p>
          I am currently an undergraduate at the University of Virginia,
          graduating in 2026. I am majoring in computer science and mathematics.
          I went to the Thomas Jefferson High School for Science and Technology.
        </p>

        <CoolThingsIveMadeTextbased />
        <Publications />
        <ClubsAndTeamsTextbased />
      </div>
    </div>
  );
}

function Publications() {
  return (
    <>
      <h2>Publications</h2>
      <h3>Robotics</h3>
      <div>
        <b>
          Deceptive Path Planning via Reinforcement Learning with Graph Neural
          Networks.
        </b>{" "}
        <u>Michael Y. Fatemi</u>, Wesley A. Suttle, Brian M. Sadler.{" "}
        <em>Poster presentation at AAMAS 2024.</em>
      </div>
      <h3>Bioinformatics</h3>
      <div>
        <b>
          Spatial Omics Driven Crossmodal Pretraining Applied to Graph-based
          Deep Learning for Cancer Pathology Analysis.
        </b>{" "}
        Zarif Azher, <u>Michael Y. Fatemi</u>, Yunrui Lu, Gokul Srinivasan, Alos
        Diallo, Brock Christensen, Lucas Salas, Fred Kolling IV, Laurent
        Perrard, Scott Palisoul, Louis Vaickus, Joshua Levy.{" "}
        <em>Pacific Symposium on Biocomputing, 2024.</em> (
        <a href="https://psb.stanford.edu/psb-online/proceedings/psb24/azher.pdf">
          Paper
        </a>
        )
      </div>
      <br />
      <div>
        <b>
          Potential to Enhance Large Scale Molecular Assessments of Skin
          Photoaging through Virtual Inference of Spatial Transcriptomics from
          Routine Staining.
        </b>{" "}
        Gokul Srinivasan, Matthew Davis, Matthew LeBoeuf,{" "}
        <u>Michael Y. Fatemi</u>, Zarif Azher, Yunrui Lu, Alos Diallo, Marietta
        Saldias Montivero, Fred Kolling IV, Laurent Perrard, Lucas Salas, Brock
        Christensen, Thomas Palys, Margaret Karagas, Scott Palisoul, Gregory
        Tsongalis, Louis Vaickus, Sarah Preum, Joshua Levy.{" "}
        <em>Pacific Symposium on Biocomputing, 2024.</em> (
        <a href="https://psb.stanford.edu/psb-online/proceedings/psb24/srinivasan.pdf">
          Paper
        </a>
        )
      </div>
      <br />
      <div>
        <b>
          The Overlooked Role of Specimen Preparation in Bolstering Deep
          Learning-Enhanced Spatial Transcriptomics Workflows.
        </b>{" "}
        <u>Michael Y. Fatemi</u>, Yunrui Lu, Alos B. Diallo, Gokul Srinivasan,
        Zarif L. Azher, Brock C. Christensen, Lucas A. Salas, Gregory J.
        Tsongalis, Scott M. Palisoul, Laurent Perreard, Fred W. Kolling IV,
        Louis J. Vaickus, Joshua J. Levy. Submitted for review. August 2023. (
        <a href="https://www.medrxiv.org/content/10.1101/2023.10.09.23296700v1">
          Preprint
        </a>
        )
      </div>
      <br />
      <br />
      <b>
        Inferring Spatially-Resolved Transcriptomics from Cell Detections.
      </b>{" "}
      <u>Michael Y. Fatemi</u>, Yunrui Lu, Cyril Sharma, Eric Feng, Zarif L.
      Azher, Alos B. Diallo, Gokul Srinivasan, Grace M. Rosner, Kelli B.
      Pointer, Brock C. Christensen, Lucas A. Salas, Gregory J. Tsongalis, Scott
      M. Palisoul, Laurent Perreard, Fred W. Kolling IV, Louis J. Vaickus,
      Joshua J. Levy Submitted for review. August 2023. (
      <a href="https://www.medrxiv.org/content/10.1101/2023.10.09.23296701v1">
        Preprint
      </a>
      )
      <br />
      <br />
      <b>
        Inferring spatial transcriptomics markers from whole slide images to
        characterize metastasis-related spatial heterogeneity of colorectal
        tumors: A pilot study.
      </b>{" "}
      <u>Michael Y. Fatemi</u>, Eric Feng, Cyril Sharma, Zarif Azher, Tarushii
      Goel, Ojas Ramwala, Scott M. Palisoul, Rachael E. Barney, Laurent
      Perreard, Fred W. Kolling, Lucas A. Salas, Brock C. Christensen, Gregory
      J. Tsongalis, Louis J. Vaickus, Joshua J. Levy. March 2023.
      <em>Journal of Pathology Informatics</em>. (
      <a href="https://www.sciencedirect.com/science/article/pii/S2153353923001220">
        Paper
      </a>
      , <a href="https://www.youtube.com/watch?v=yG-7DrbGoCI">Video</a>)
    </>
  );
}

function MainOld() {
  return (
    <Container>
      <GoogleAnalytics />
      <MainImage />
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <Education />
        <Experience />
      </div>
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
