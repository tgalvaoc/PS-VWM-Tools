import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { findA } from "../findA.js";
import { updateParticipantPSLetterA } from "../updateParticipantPS.js";
import { json } from "../surveys/PS_find_A_json.js";
import { user_id } from "../App";

StylesManager.applyTheme("defaultV2");

/** Timestamps for test duration */
var finish = 0;
var duration = 0;

/** Computes final score. */
function calcScore(results) {
  let score = 0;
  let qname = "question1_";
  const jsonRes = JSON.parse(results);

  for (let index = 1; index < 26; index++) {
    let name = qname + String(index);

    if (jsonRes[name])
      for (let e = 0; e < jsonRes[name].length; e++) {
        const element = jsonRes[name][e];
        if (element.includes("a")) {
          score++;
        }
      }
  }
  return score;
}

export function PerceptualSpeedFindAPage() {

  const [begin, setBegin] = useState(0);

  useEffect(() => {
    const beginTimestamp = new Date().getTime();
    setBegin(beginTimestamp);
  }, []);

  // Populate choices with words
  for (let index = 1; index < json.pages.length; index++) {
    json.pages[index].elements[0].choices = findA();
  }

  // Get survey model
  const [model] = useState(() => new Model(json));

  // Modify the survey model to hide the previous button
  useEffect(() => {
    model.showPrevButton = false;
  }, [model]);

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

  // Submit on end of survey and redirect for next step
  async function onComplete(survey) {

    finish = new Date().getTime();

    let results = JSON.stringify(survey.data);

    const score = calcScore(results);

    duration = (finish - begin) / 1000;

    updateParticipantPSLetterA(score, duration, user_id);

    history.replace("/perceptual-speed-numbers/");

  }

  return (
    <>
      <div className="container">
        <Survey model={model} onStarted={onStarted} onComplete={onComplete} onCurrentPageChanged={onCurrentPageChanged} />
      </div>
    </>
  );
}
