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
   var papers = [{ paperName: "comp602", preReq: "Pre Requisites: comp603, comp610", coreq: "Co Requisites: comp600", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "ense701", preReq: "Pre Requisites: comp603, comp610", coreq: "There are no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" }
                ]
  
  var speech = "";
  
  if(req.body.result.action == "failedPaper") { 
    var chosenPaper = papers.find(function (obj) { return obj.paperName === req.body.result.parameters.paper; });
    var majorVariable = chosenPaper[req.body.result.parameters.chosenMajor.toLowerCase()];
    
    if(majorVariable == "-") {
      speech = 'Unfortunately, ' + chosenPaper.paperName + ' is a compulsary paper in your major. If you want to graduate in this major you will have to repeat '+ chosenPaper.paperName; 
    }
    else if(majorVariable == "none") {
      speech = 'This paper is not part of your major, you shouldnt have to be doing ' + chosenPaper.paperName;
    }
    else {
      speech = 'Sorry, I only know about papers in the Computer Science Course :('
    }
  }
  
  else if(req.body.result.action == "requestRequisites") {
    var chosenPaper = papers.find(function (obj) { return obj.paperName === req.body.result.parameters.paper; });
    
    if(typeof req.body.result.paramaters.requisites1 == "pre-requisites" && typeof req.body.result.paramaters.requisites2 == "co-requisites") {
      speech = 'chosenPaper.paperName has, ' + chosenPaper.preReq + " and " +  chosenPaper.coReq;
    }
    else if(typeof req.body.result.paramaters.requisites1 == "" && typeof req.body.result.paramaters.requisites2 == "co-requisites") {
      speech = 'chosenPaper.paperName has, ' + chosenPaper.coReq;
    }
    else if(typeof req.body.result.paramaters.requisites1 == "pre-requisites" && typeof req.body.result.paramaters.requisites2 == "") {
      speech = 'chosenPaper.paperName has, ' + chosenPaper.preReq;
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
