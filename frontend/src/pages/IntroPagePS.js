import { React, useEffect } from "react";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function IntroPagePS() {

  /** History for route. */
  const history = useHistory();

  return (
    <div>
      <div
        style={{
          width: "800px",
          margin: "auto",
          fontFamily: "Calibri",
          textAlign: "justify",
        }}
      >
        <h3 className="header"> Perceptual Speed Assessment</h3>
        <p className="text">
          {" "}
          Perceptual Speed (PS) is the cognitive ability related to comparison
          tasks. Having a higher Perceptual Speed means greater accuracy in identifying
          different objects or patterns.
        </p>
        <p className="text">
          This test measures PS through a set of questions adapted from Ekstrom et al.'s "Manual for
          Kit of Reference Tests for Cognitive Factors", featuring <b>3 types of tests</b>: identification of words with certain letters, number comparison, and
          shape recognition.
        </p>
        <p className="text">
          Before the test run, you may complete a training session to become familiar with the test format where each test is presented for a shorter duration.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            history.replace("/perceptual-speed-find-a-train/");
          }}
          style={{ marginRight: "1em" }}
        >
          Train
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            history.replace("/perceptual-speed-find-a/");
          }}
          style={{ marginLeft: "1em" }}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
