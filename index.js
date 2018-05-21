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
   var papers = [{ paperName: "comm501", sem: "both", description: "Applied Communication, the focus of communication in written, oral, interpersonal or group conditions", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp500", sem: "both", description: "Programming One, introduction to the basics of programming", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp501", sem: "both", description: "Computing Technology in Society, introduction to the evolution and application of computer systems", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp502", sem: "both", description: "Foundations of IT Infrastructure, introduction to IT infrastructure concepts", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp503", sem: "both", description: "Programming Two, Introduces the process of program design ", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp600", sem: "both", description: "IT project management, core competencies of project management in an information technology context.", preReq: "no pre-requisites", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp602", sem: "both", description: "Software Development Practice, development skills into a team environment.", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 2", coreq: "Co Requisites: comp600", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp603", sem: "both", description: "Program Design & Construction, introduction to the design and construction of object- oriented software.", preReq: "Either Pre Requisite: comp503 or comp610 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp604", sem: "both", description: "Operating Systems, An introduction to the design and construction of object- oriented software.", preReq: "Pre Requisite: comp502 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Infs602" },
                 { paperName: "comp704", sem: "not determined", description: "Research and Development Project,  investigation into a selected area whether that be a specific problem domain, or an area of business opportunity.", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp713", sem: "both", description: "Distributed and Mobile Systems, Investigates the design and implementation of distributed systems", preReq: "Pre Requisite: comp611", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp721" },
                 { paperName: "comp719", sem: "both", description: "Applied Human Computer Interaction, Understanding the factors that determine how people operate and make use of computer technology", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp721", sem: "1", description: "Web Development, knowledge of data communications and internetworking over the World Wide Web", preReq: "Pre Requisite: comp603", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp713" },
                 { paperName: "enel504", sem: "both", description: "Computer Network Principles, provides the knowledge and skills required to build a scalable switched and routed computer network.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "ense701", sem: "both", description: "Contemporary Methods in Software Engineering, develop your understanding of the concepts and methods required for the construction of large software intensive systems.", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 3", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs500", sem: "both", description: "Enterprise Systems, An introduction to enterprise information systems", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs600", sem: "both", description: "Data and Process Modelling, foundation in high-level computer graphics programming", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs601", sem: "both", description: "Logical Database Design, Provides students with the essential concepts, principles, and techniques of database management systems.", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs602", sem: "both", description: "Physical Database Design, Covers database design from a performance perspective.", preReq: "Pre Requisite: infs601 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp604" },
                 { paperName: "math500", sem: "both", description: "Mathematical Concepts, Provides an introduction to the mathematical concepts required for an understanding of the analysis of data and applications in computing, science, and engineering.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math501 or Math502 or Stat500" },
                 { paperName: "math501", sem: "2", description: "Differential and Integral Calculus, Gives the student an understanding of differential and integral calculus", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math502 or Stat500" },
                 { paperName: "math502", sem: "both", description: "Algebra and Discrete Mathematics, Gives the student a solid foundation in algebra and discrete mathematics", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Stat500" },
                 { paperName: "stat500", sem: "both", description: "Applied Statistics, An introduction to applied statistics. Provides techniques for describing and summarising a data set.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Math502" }
                ]
   
  var chosenPaper = ""
  if(req.body.result.parameters.paper != "") {
    chosenPaper = papers.find(function (obj) { return obj.paperName === req.body.result.parameters.paper; });
  }
  else {}
  
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
  
  else if(req.body.result.action == "requestRequisites") {
    var req1 = req.body.result.parameters.requisites1;
    var req2 = req.body.result.parameters.requisites2;
    var req3 = req.body.result.parameters.requisitesFromSmallTalk1;
    var req4 = req.body.result.parameters.requisitesFromSmallTalk2;
    
    if(req1 == "pre-requisites" && req2 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq + " and " +  chosenPaper.coreq;
    }
    else if(req1 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.coreq;
    }
    else if(req1 == "pre-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq;
    }
    else if(req3 == "pre-requisites" && req4 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq + " and " +  chosenPaper.coreq;
    }
    else if(req3 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.coreq;
    }
    else if(req3 == "pre-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq;
    }
  }
  
  else if(req.body.result.action == "requestSemester") {
    speech = "Are you needing to know which semester a paper can be offered in? if so, can you be more specific...";
    
      if(chosenPaper.sem == "both") {
         speech = chosenPaper.paperName + " is actually offered in both semester 1 and 2";
      }
      else if(chosenPaper.sem == "1") {
          speech = "the paper, " + chosenPaper.paperName + " can only be taken in semester one";
      }
      else if(chosenPaper.sem == "2") {
        speech = chosenPaper.paperName + " is a paper that can only be taken in sem 2";
      }

  }
  
  else if(req.body.result.action == "describePaper") {
    if(chosenPaper == null) {
      speech = "are you wanting to know about a paper? if so, i'm not sure what paper you're talking about";
    }
    speech = chosenPaper.paperName + " is a " + chosenPaper.year + " paper known as: " + chosenPaper.description;
  }
  
  else if(req.body.result.action == "requestSuggestedPapers") {
    var paperArray = new Array();
    var chosenMajor = req.body.result.parameters.Major.toLowerCase();    
    var arrayLength = papers.length;
    var currentPaper;
    
    if(req.body.result.parameters.ChosenYear == "All") {
      for (var index = 0; index < arrayLength; ++index) {
        currentPaper = papers[index];
        if(currentPaper[chosenMajor] == "-") {
          paperArray.push(currentPaper.paperName)
        }
        else {}
      }
      var arrayLength2 = paperArray.length;
      var results1 = "";
      var results2 = "";
      var results3 = "";
      var testPaper;
      var currentPaper2;
      for(var index = 0; index < arrayLength2; ++index){
        currentPaper2 = paperArray[index];
        testPaper = papers.find(function (obj) { return obj.paperName === currentPaper2; });
        if(testPaper.year == "Year 1") {
          results1 += currentPaper2 + " ";
        }
        if(testPaper.year == "Year 2") {
          results2 += currentPaper2 + " ";
        }
        if(testPaper.year == "Year 3") {
          results3 += currentPaper2 + " ";
        }
        else {}
      }
      speech = "Nice! for that major, I would suggest taking: \r Year One papers: " + results1 + "\r Year Two papers: " + results2 + "\r Year Three papers: " + results3;
    }
    
    else {
      for (var index = 0; index < arrayLength; ++index) {
        currentPaper = papers[index];
        if(currentPaper[chosenMajor] == "-" && currentPaper["year"] == req.body.result.parameters.ChosenYear) {
          paperArray.push(currentPaper.paperName)
        }
        else {}
      }
      speech = "Here are the papers I would suggest you take for " + req.body.result.parameters.ChosenYear + " of your major: " + paperArray.toString();
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
