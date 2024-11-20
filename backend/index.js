const express = require("express");
var cors = require("cors");
const http = require("http");

const app = express();
const port = 3001;
const participant_model_ps = require("./modelPS");
const participant_model_vwm = require("./modelVWM");

var server;
var restarting;

app.use(cors());

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

// Heartbeat
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.post("/table-ps", (req, res) => {
  participant_model_ps
    .createTable(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/table-vwm", (req, res) => {
  participant_model_vwm
    .createTable(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/", (req, res) => {
  participant_model_ps
    .getParticipant()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/ps", (req, res) => {
  participant_model_ps
    .createParticipant(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/ps/ps-letter-a", (req, res) => {
  participant_model_ps
    .updateParticipantPSLetterA(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/ps/ps-numbers", (req, res) => {
  participant_model_ps
    .updateParticipantPSNumbers(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/ps/ps-shapes", (req, res) => {
  participant_model_ps
    .updateParticipantPSShapes(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/vwm", (req, res) => {
  participant_model_vwm
    .createParticipant(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/vwm/vwm_score_trial", (req, res) => {
  participant_model_vwm
    .updateParticipantVWMTrial(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

server = app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// Heartbeat mechanism
const healthCheckUrl = `http://localhost:${port}/health`;
const checkInterval = 5000; // Check every 5 seconds

function restartApp() {
  restarting = true;
  console.log("Closing server...");
  server.close(() => {
    console.info("Server closed. Restarting.");
    server = app.listen(port, () => {
      console.log(`Server restarted on port ${port}.`);
      restarting = false;
    });
  });
}

function checkHealth() {
  if (!restarting) {
    http.get(healthCheckUrl, (res) => {
      const { statusCode } = res;
      if (statusCode !== 200) {
        console.error(`Unexpected status code: ${statusCode}`);
        restartApp();
      }
    }).on("error", (e) => {
      console.error(`Health check failed: ${e.message}`);
      restartApp();
    });
  }
}

setInterval(checkHealth, checkInterval);
