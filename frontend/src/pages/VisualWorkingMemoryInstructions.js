import { React, useEffect } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export function VisualWorkingMemoryInstructionsPage() {

    const history = useHistory();

    var instructionsTitle = "Please pay attention to the instructions below:";
    var middleText = "The middle column of squares does not count. Due to the high speed of the image sequence, we recommend to perform a training set before the actual test. ";

    var trainClick =
        `Click "Train" to start a set of training trials before starting. There will be ${localStorage.getItem("nTrainTrials")} repetitions of the exercise.`;
    var startText = `If you have already trained, click "Start" to be evaluated. There will be ${localStorage.getItem("nTestTrials")} repetitions of this exercise.`;
    var trainBtn = "Train";
    var startBtn = "Start";
    var delayText = "The test will begin 3 seconds after clicking the button.";

    var sameKey = localStorage.getItem("sameKey").toUpperCase();
    var diffKey = localStorage.getItem("diffKey").toUpperCase();

    return (
        <div>
            <p
                style={{
                    display: "flex",
                    marginLeft: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "0em",
                }}
                className="header"
            >
                {instructionsTitle}
            </p>
            <div
                style={{
                    display: "flex",
                    marginLeft: "auto",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingTop: "0em",
                    marginTop: "-30px"
                }}
                className="row"
            >
                <div className="col-3" style={{ textAlign: "center" }}>
                    <p className="instructionsCaptions">
                        Pay attention to the cue. The arrow indicates the side of the screen
                        you must pay attention to.
                    </p>
                    <img
                        src={require("../img/vwm/1-Cue.png")}
                        alt="instructions"
                        width={300}
                        style={{ paddingRight: "15px" }}
                    />
                </div>
                <div className="col-3">
                    <p className="instructionsCaptions">
                        Memorize the colors of the squares on the side of the screen cued
                        before. This will flash very quickly.
                    </p>
                    <img
                        src={require("../img/vwm/2-Memory_Array.png")}
                        alt="instructions"
                        width={300}
                        style={{ paddingRight: "15px" }}
                    />
                </div>
                <div className="col-3">
                    <p className="instructionsCaptions">
                        The screen will go blank for almost a second. Keep focusing on the
                        +.
                    </p>
                    <img
                        src={require("../img/vwm/3-Retention.png")}
                        alt="instructions"
                        width={300}
                        style={{ paddingRight: "15px" }}
                    />
                </div>
                <div className="col-3">
                    <p className="instructionsCaptions">
                        Squares will show up again in the same places. Press "{sameKey}"" if
                        the colors of the squares in the cued side of the screen differed
                        from the initial ones, or "{diffKey}" if they stayed the same (regardless of their position).
                    </p>
                    <img
                        src={require("../img/vwm/4-Test_Array.png")}
                        alt="instructions"
                        width={300}
                        style={{ paddingRight: "15px" }}
                    />
                </div>
            </div>

            <div className="instructionsText">
                <p className="text">{middleText}</p>
                <p className="text">{trainClick}</p>
                <p className="text">{startText}</p>
                <p className="text">{delayText}</p>
                <div style={{ display: "inline", marginTop: "2rem", }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => {
                            history.replace("/vwm-train/");
                        }}
                        style={{ marginRight: "1em" }}
                    >
                        {trainBtn}
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => {
                            history.replace("/vwm-test-trial/");

                        }}
                        style={{ marginLeft: "1em" }}
                    >
                        {startBtn}
                    </Button>
                </div>
            </div>
        </div>
    );
}
