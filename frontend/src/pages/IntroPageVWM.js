import { React, useEffect } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export function IntroPageVWM() {
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
        <h3 className="header"> Visual Working Memory Assessment</h3>
        <p className="text">
          {" "}
          Visual Working Memory (VWM) is the short-term memory associated with
          cognitive tasks, namely the retention of visual information between
          eye fixations.
        </p>
        <p className="text">
          This test will measure VWM
          through an Image Change Detection task adapted from Fukuda and Vogel's study.
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
            history.replace("/vwm-instructions/");
          }}
          style={{ marginLeft: "1em" }}
        >
          Instructions
        </Button>
      </div>
    </div>

  );
}
