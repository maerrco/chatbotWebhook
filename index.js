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
   var papers = [{ paperName: "comm501", description: "Applied Communication, the focus of communication in written, oral, interpersonal or group conditions", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp500", description: "Programming One, introduction to the basics of programming", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp501", description: "Computing Technology in Society, introduction to the evolution and application of computer systems", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp502", description: "Foundations of IT Infrastructure, introduction to IT infrastructure concepts", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp503", description: "Programming Two, Introduces the process of program design ", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp600", description: "IT project management, core competencies of project management in an information technology context.", preReq: "no pre-requisites", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp602", description: "Software Development Practice, development skills into a team environment.", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 2", coreq: "Co Requisites: comp600", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp603", description: "Program Design & Construction, introduction to the design and construction of object- oriented software.", preReq: "Either Pre Requisite: comp503 or comp610 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp604", description: "Operating Systems, An introduction to the design and construction of object- oriented software.", preReq: "Pre Requisite: comp502 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Infs602" },
                 { paperName: "comp704", description: "Research and Development Project,  investigation into a selected area whether that be a specific problem domain, or an area of business opportunity.", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp713", description: "Distributed and Mobile Systems, Investigates the design and implementation of distributed systems", preReq: "Pre Requisite: comp611", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp721" },
                 { paperName: "comp719", description: "Applied Human Computer Interaction, Understanding the factors that determine how people operate and make use of computer technology", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp721", description: "Web Development, knowledge of data communications and internetworking over the World Wide Web", preReq: "Pre Requisite: comp603", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp713" },
                 { paperName: "enel504", description: "Computer Network Principles, provides the knowledge and skills required to build a scalable switched and routed computer network.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "ense701", description: "Contemporary Methods in Software Engineering, develop your understanding of the concepts and methods required for the construction of large software intensive systems.", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 3", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs500", description: "Enterprise Systems, An introduction to enterprise information systems", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs600", description: "Data and Process Modelling, foundation in high-level computer graphics programming", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs601", description: "Logical Database Design, Provides students with the essential concepts, principles, and techniques of database management systems.", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs602", description: "Physical Database Design, Covers database design from a performance perspective.", preReq: "Pre Requisite: infs601 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp604" },
                 { paperName: "math500", description: "Mathematical Concepts, Provides an introduction to the mathematical concepts required for an understanding of the analysis of data and applications in computing, science, and engineering.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math501 or Math502 or Stat500" },
                 { paperName: "math501", description: "Differential and Integral Calculus, Gives the student an understanding of differential and integral calculus", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math502 or Stat500" },
                 { paperName: "math502", description: "Algebra and Discrete Mathematics, Gives the student a solid foundation in algebra and discrete mathematics", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Stat500" },
                 { paperName: "stat500", description: "Applied Statistics, An introduction to applied statistics. Provides techniques for describing and summarising a data set.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Math502" }
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
  
  if(req.body.result.action == "describePaper") {
    if(chosenPaper == null) {
      speech = "are you wanting to know about a paper? if so, i'm not sure what paper you're talking about";
    }
    speech = chosenPaper.paperName + " is a " + chosenPaper.year + " paper known as: " + chosenPaper.description;
  }
  
  if(req.body.result.action == "requestSemester") {
	    if(chosenPaper == null) {
	      speech = "are you needing to know the semesters for a specific paper? if so, please specify that paper mate."\;
	    }
	    if(chosenPaper.sem == "both") {
	       speech = chosenPaper.paperName + " is actually offered in both semester 1 and 2";
	    }
	    if(chosenPaper.sem == "1") {
	        speech = "the paper, " + chosenPaper.paperName + " can only be taken in semester one";
	    }
	    if(chosenPaper.sem == "2") {
	      speech = chosenPaper.paperName + " is a paper that can only be taken in sem 2";
	    }
	    else {
	      speech = "I didn't quite understand your question, could you please be more specific?";
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
