import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";

import { genShape } from "../shapeGeneration.js";
import { json } from "../surveys/PS_shapes_train_json.js";

StylesManager.applyTheme("defaultV2");

export function PerceptualSpeedShapesPageTrain() {
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

  const history = useHistory();

  // Submit result in the end of survey and redirect
  async function onComplete(survey) {
    history.replace("/introduction-ps/");
  }

  const model = new Model(json);

  // Modify the survey model to hide the previous button
  useEffect(() => {
    model.showPrevButton = false;
  }, []);

  return (
    <div className="container" style={{marginTop: "15px"}}>
      <Survey model={model} onComplete={onComplete} />
    </div>
  );
}
