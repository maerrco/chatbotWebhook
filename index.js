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
   var papers = [{ paperName: "comp602", preReq: "comp603, comp610", coreq: "comp600", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "ense701", preReq: "comp603, comp610", coreq: "There are no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" }
                ]
  
  var speech = "";
  var chosenPaper = papers.find(function (obj) { return obj.paperName === req.body.result.parameters.paper; });
  var majorVariable = chosenPaper[req.body.result.parameters.chosenMajor.toLowerCase()];
  
  if(req.body.result.action == "failedPaper") { 
    if(majorVariable == "-") {
          speech = 'unfortunately, ' + chosenPaper.paperName + ' is a compulsary paper in your major. If you want to graduate in this major you will have to repeat '+ chosenPaper.paperName; 
    }
    else {
          speech = 'Sorry, I only know about papers in the Computer Science Course :('
    }
  }
  
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
