import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { genNumber } from "../numberGeneration.js";
import { updateParticipantPSNumbers } from "../updateParticipantPS.js";
import { json } from "../surveys/PS_numbers_json.js";
import { user_id } from "../App";

StylesManager.applyTheme("defaultV2");

let answers = [];
let numbers = [];

  // Get numbers for comparison
  for (let index = 1; index < json.pages.length; index++) {
    numbers.push(String(genNumber()));
    let n = numbers[index - 1].split("‎");
    let n1 = parseInt(n[0]);
    let n2 = parseInt(n[5]);

    if (n1 === n2) {
      answers.push(true);
    } else {
      answers.push(false);
    }

    json.pages[index].elements[0].title = String(numbers[index - 1]);
  }

/** Timestamps for test duration */
var finish = 0;
var duration = 0;

/** Computes final score. */
function calcScore(ans, res) {
  let score = 0;
  let qname = "question1_";

  for (let index = 0; index < 48; index++) {
    let name = qname + String(index + 1);

    if (ans[index] === res[name]) {
        score++;
    }
  }
  return score;
}

export function PerceptualSpeedNumbersPage() {

  const [begin, setBegin] = useState(0);

  useEffect(() => {
      const beginTimestamp = new Date().getTime();
      setBegin(beginTimestamp);
  }, []);

  // Get history for route
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

  async function onComplete(survey) {
    finish = new Date().getTime();

    let results = JSON.stringify(survey.data);

    const score = calcScore(answers, survey.data);

    duration = (finish - begin) / 1000;

    updateParticipantPSNumbers(score, duration, user_id);
    history.replace("/perceptual-speed-shapes/");
  }

  // get survey model
  const [model] = useState(() => new Model(json));

  model.onStarted.add(() => {
    model.showNavigationButtons = false;
  });

  return (
    <>
      <div className="container">
        <Survey model={model} onStarted={onStarted} onComplete={onComplete} onCurrentPageChanged={onCurrentPageChanged} />
      </div>
    </>
  );
}
