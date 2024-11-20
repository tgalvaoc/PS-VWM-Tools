import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { IntroPage } from "./pages/IntroPage";
import { IntroPagePS } from "./pages/IntroPagePS";
import { PerceptualSpeedFindAPage } from "./pages/PerceptualSpeedFindAPage";
import { PerceptualSpeedNumbersPage } from "./pages/PerceptualSpeedNumbersPage";
import { PerceptualSpeedShapesPage } from "./pages/PerceptualSpeedShapesPage";
import { PerceptualSpeedFindAPageTrain } from "./pages/PerceptualSpeedFindAPageTrain";
import { PerceptualSpeedNumbersPageTrain } from "./pages/PerceptualSpeedNumbersPageTrain";
import { PerceptualSpeedShapesPageTrain } from "./pages/PerceptualSpeedShapesPageTrain";
import { IntroPageVWM } from "./pages/IntroPageVWM";
import { VisualWorkingMemoryTestPageTrial } from "./pages/VisualWorkingMemoryTestTrial";
import { VisualWorkingMemoryTrainPage } from "./pages/VisualWorkingMemoryTrain";
import { VisualWorkingMemoryInstructionsPage } from "./pages/VisualWorkingMemoryInstructions";
import { VWMSettingsPage } from "./pages/VWMSettingsPage";
import NavBar from './navBar';

import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import { v4 as uuid } from "uuid";
import * as Survey from "survey-core";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";
import { createParticipantVWM, createParticipantPS, createParticipantGI, createParticipantPT } from "./createParticipant";
import { createTablePS, createTableVWM } from "./createTable";

export { user_id, startTime };
window["$"] = window["jQuery"] = $;
require("jquery-ui/ui/widgets/datepicker.js");
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

var startTime = new Date().getTime();

const user_id = uuid();
localStorage.setItem("uid", user_id);

export default function App() {

  if (location.pathname == "/")
    localStorage.clear();

  createTableVWM();
  createTablePS();

  if (localStorage.getItem('firstLoadDone') === null) {

    createParticipantVWM(user_id)
    createParticipantPS(user_id);

    localStorage.setItem('firstLoadDone', 1);
  }

  return (
    <Router>
      <NavBar></NavBar>
      <div className="app-content">
        <Switch>
          <Route exact path="/">
            <IntroPage />
          </Route>
          <Route path="/home">
            <IntroPage />
          </Route>
          <Route path="/introduction-ps">
            <IntroPagePS />
          </Route>
          <Route path="/perceptual-speed-find-a">
            <PerceptualSpeedFindAPage />
          </Route>
          <Route path="/perceptual-speed-numbers">
            <PerceptualSpeedNumbersPage />
          </Route>
          <Route path="/perceptual-speed-shapes">
            <PerceptualSpeedShapesPage />
          </Route>
          <Route path="/perceptual-speed-find-a-train">
            <PerceptualSpeedFindAPageTrain />
          </Route>
          <Route path="/perceptual-speed-numbers-train">
            <PerceptualSpeedNumbersPageTrain />
          </Route>
          <Route path="/perceptual-speed-shapes-train">
            <PerceptualSpeedShapesPageTrain />
          </Route>
          <Route path="/introduction-vwm">
            <IntroPageVWM />
          </Route>
          <Route path="/vwm-instructions">
            <VisualWorkingMemoryInstructionsPage />
          </Route>
          <Route path="/vwm-train">
            <VisualWorkingMemoryTrainPage />
          </Route>
          <Route path="/vwm-test-trial">
            <VisualWorkingMemoryTestPageTrial />
          </Route>
          <Route path="/vwm-settings">
            < VWMSettingsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}