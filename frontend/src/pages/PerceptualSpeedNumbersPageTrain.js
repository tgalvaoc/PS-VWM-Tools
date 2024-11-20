import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { genNumber } from "../numberGeneration.js";
import { json } from "../surveys/PS_numbers_train_json.js";

StylesManager.applyTheme("defaultV2");

export function PerceptualSpeedNumbersPageTrain() {
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

  // Get history for route
  const history = useHistory();

  async function onComplete(survey) {
    history.replace("/perceptual-speed-shapes-train/");
  }

  // get survey model
  const model = new Model(json);

  model.onStarted.add(() => {
    model.showNavigationButtons = false;
  });

  return (
    <div className="container">
      <Survey model={model} onComplete={onComplete} />
    </div>
  );
}
