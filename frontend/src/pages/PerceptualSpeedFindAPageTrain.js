import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { findA } from "../findA.js";
import { json } from "../surveys/PS_find_A_train_json.js";

StylesManager.applyTheme("defaultV2");

export function PerceptualSpeedFindAPageTrain() {

  // Populate choices with words
  for (let index = 1; index < json.pages.length; index++) {
    json.pages[index].elements[0].choices = findA();
  }

  // Get survey model
  const model = new Model(json);

  // Modify the survey model to hide the previous button
  useEffect(() => {
    model.showPrevButton = false;
  }, []);

  // Get history for route
  const history = useHistory();

  // Submit on end of survey and redirect for next step
  async function onComplete(survey) {

    history.replace("/perceptual-speed-numbers-train/");
  }

  return (
    <div className="container">
      <Survey model={model} onComplete={onComplete} />
    </div>
  );
}
