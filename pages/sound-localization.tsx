import Container from "../components/Container";

export default function SoundLocalization() {
  return (
    <Container>
      <h1>Sound Localization</h1>
      <section>
        <div style={{ float: "left", width: "60%" }}>
          <p>
            From September 2021 to March 2022, I made a device that can locate
            sound sources and display them on a video feed as part of a research
            project at TJHSST.
          </p>
          It uses{" "}
          <a href="https://wiki.seeedstudio.com/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/#specification">
            six microphones
          </a>{" "}
          to reconstruct where sounds come from, and then a camera
        </div>
      </section>
    </Container>
  );
}
