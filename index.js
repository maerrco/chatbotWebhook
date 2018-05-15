"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());


restService.post("/sdpFailed", function(req, res) {
  var speech = "";
  if(req.body.result.parameters.paper == "comp602") {
    switch (req.body.result.parameters.chosenMajor.toLowerCase()) {
      //Speech Synthesis Markup Language 
      case "software development":
        speech =
          'COMP602 (Software Development Practice) is needed for second year of the Software Development major. Since you failed it, im afraid you will have to repeat it if you want to continue with this major.';
        break;
    }
  }
  else if(req.body.result.parameters.paper == "ense701") {
    switch (req.body.result.parameters.chosenMajor.toLowerCase()) {
      //Speech Synthesis Markup Language 
      case "software development":
        speech =
          'Unfortunately, ENSE701 (Contemporary Methods in Software Engineering) is needed for third year of the Software Development major. You will have to repeat it if you want to continue with the major';
        break;
    }
    else if(req.body.result.parameters.paper == "ense701") {
      switch (req.body.result.parameters.chosenMajor.toLowerCase()) {
        //Speech Synthesis Markup Language 
        case "software development":
          speech =
            'Unfortunately, ENSE701 (Contemporary Methods in Software Engineering) is needed for third year of the Software Development major. You will have to repeat it if you want to continue with the major';
          break;
    }
  }
  else {}
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
