import { React } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

export function IntroPage() {

  const history = useHistory();

  localStorage.setItem("nTestTrials", 50);
  localStorage.setItem("nTrainTrials", 10);
  localStorage.setItem("sameKey", "j");
  localStorage.setItem("diffKey", "f");

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
        <h3 className="header"> Welcome to the Perceptual Speed and Visual Working Memory test tools!</h3>
        <h3 className="text" style={{ marginTop: "2em", fontSize: "20px" }}>
          Perceptual Speed
        </h3>
        <p style={{ fontSize: "17px" }}>
          Perceptual Speed (PS) is the cognitive ability that assesses an individual's ability to rapidly scan, compare
          figures, and execute simple visual perception tasks. A higher Perceptual Speed
          means greater accuracy in identifying different objects or patterns. This Perceptual Speed Test Tool
          PS through a set of questions adapted from Ekstrom et al. "Manual for Kit of Reference Tests for Cognitive
          Factors", featuring three tests: identification of words with certain letters, number comparison, and shape recognition.
        </p>
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
              history.replace("/introduction-ps/");
            }}
            style={{ marginBottom: "1em" }}
          >
            Go to PS test
          </Button>
        </div>
        <h3 className="text" style={{ fontSize: "20px" }}>
          Visual Working Memory
        </h3>
        <p style={{ fontSize: "17px" }}>
          Visual Working Memory (VWM) is the short-term memory associated with cognitive tasks, namely the retention of
          visual information between eye fixations. This Visual Working Memory Test Tool measures VWM through an Image
          Change Detection task adapted from Luck and Vogel's study.
        </p>
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
              history.replace("/introduction-ps/");
            }}
            style={{ marginBottom: "1em" }}
          >
            Go to VWM test
          </Button>
        </div>
      </div>
    </div>
  );
}