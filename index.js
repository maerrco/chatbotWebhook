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
   var papers = [{ paperName: "comm501", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp500", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp501", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp502", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp503", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp600", preReq: "no pre-requisites", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp602", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 2", coreq: "Co Requisites: comp600", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp603", preReq: "Either Pre Requisite: comp503 or comp610 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp604", preReq: "Pre Requisite: comp502 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Infs602" },
                 { paperName: "comp704", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp713", preReq: "Pre Requisite: comp611", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp721" },
                 { paperName: "comp719", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp721", preReq: "Pre Requisite: comp603", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp713" },
                 { paperName: "enel504", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "ense701", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 3", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs500", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs600", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs601", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs602", preReq: "Pre Requisite: infs601 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp604" },
                 { paperName: "math500", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math501 or Math502 or Stat500" },
                 { paperName: "math501", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math502 or Stat500" },
                 { paperName: "math502", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Stat500" },
                 { paperName: "stat500", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Math502" }
                ]
   
   var chosenPaper = papers.find(function (obj) { return obj.paperName === req.body.result.parameters.paper; });
  
  var speech = "";
  
  if(req.body.result.action == "failedPaper") { 
    var majorVariable = chosenPaper[req.body.result.parameters.chosenMajor.toLowerCase()];
    
    if(majorVariable == "-") {
      speech = 'Unfortunately, ' + chosenPaper.paperName + ' is a compulsary paper for ' + chosenPaper.year + ' of your major. If you want to graduate in this major you will have to repeat '+ chosenPaper.paperName; 
    }
    else if(majorVariable == "none") {
      speech = 'This paper is not part of your major, you shouldnt have to be doing ' + chosenPaper.paperName;
    }
    else if(majorVariable == "+") {
      speech = chosenPaper.paperName + ' is not compulsary for your major. you can still take a different ' + chosenPaper.year + ' paper if you want to continue with your major, such as: ' + chosenPaper.options;
    }      
    else {
      speech = 'Sorry, I only know about papers in the Computer Science Course :('
    }
  }
  
  if(req.body.result.action == "requestRequisites") {
    var req1 = req.body.result.parameters.requisites1;
    var req2 = req.body.result.parameters.requisites2;
    
    if(req1 == "pre-requisites" && req2 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq + " and " +  chosenPaper.coreq;
    }
    else if(req1 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.coreq;
    }
    else if(req1 == "pre-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq;
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
