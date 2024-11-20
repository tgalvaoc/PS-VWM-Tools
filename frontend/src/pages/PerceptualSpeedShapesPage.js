import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { genShape } from "../shapeGeneration.js";
import { json } from "../surveys/PS_shapes_json.js";
import { updateParticipantPSShapes } from "../updateParticipantPS.js";
import { user_id } from "../App";

StylesManager.applyTheme("defaultV2");

let ans = [];

// Populate options with shapes
const shapes = genShape();
for (let index = 1; index < json.pages.length; index++) {
  for (let j = 0; j < 5; j++) {
    json.pages[index].elements[0].imageLink = shapes[index - 1][0];
    json.pages[index].elements[1].choices[j].imageLink =
      shapes[index - 1][1][j];
  }
  if (shapes[index - 1][0] === shapes[index - 1][1][0]) {
    ans.push("A");
  } else if (shapes[index - 1][0] === shapes[index - 1][1][1]) {
    ans.push("B");
  } else if (shapes[index - 1][0] === shapes[index - 1][1][2]) {
    ans.push("C");
  } else if (shapes[index - 1][0] === shapes[index - 1][1][3]) {
    ans.push("D");
  } else {
    ans.push("E");
  }
}

/** Timestamps for test duration */
var finish = 0;
var duration = 0;

/** Computes final score. */
function calcScore(ans, res) {
  let score = 0;
  let questionName = "question";

  for (let index = 0; index < 48; index++) {
    let name = questionName + String(index + 1);

    if (res[name]) {
      if (ans[index] === res[name]) {
        score++;
      }
    }
  }
  return score;
}

export function PerceptualSpeedShapesPage() {

  const [begin, setBegin] = useState(0);

  useEffect(() => {
    const beginTimestamp = new Date().getTime();
    setBegin(beginTimestamp);
  }, []);

  const history = useHistory();

  // State to store current page name
  const [currentPage, setCurrentPage] = useState(1);
  const [changedOnce, setChangedOnce] = useState(false)

  // Event handler for current page change
  function onCurrentPageChanged(sender, options) {
    setCurrentPage(currentPage + 1);
  }

  function onStarted() {
    setChangedOnce(true)
  }

  // Submit result in the end of survey and redirect
  async function onComplete(survey) {

    finish = new Date().getTime();

    let results = JSON.stringify(survey.data);

    const score = calcScore(ans, survey.data);

    duration = (finish - begin) / 1000;

    updateParticipantPSShapes(score, duration, user_id);

    history.replace("/");
  }

  const [model] = useState(() => new Model(json));

  // Modify the survey model to hide the previous button
  useEffect(() => {
    model.showPrevButton = false;
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "15px" }}>
        <Survey model={model} onStarted={onStarted} onComplete={onComplete} onCurrentPageChanged={onCurrentPageChanged} />
      </div>
    </>
  );
}
