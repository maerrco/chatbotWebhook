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
   var papers = [{ paperName: "comm501", sem: "both", description: "Applied Communication, the focus of communication in written, oral, interpersonal or group conditions", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "comp500", sem: "both", description: "Programming One, introduction to the basics of programming", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "none", ci: "-", als: "-" },
                 { paperName: "comp501", sem: "both", description: "Computing Technology in Society, introduction to the evolution and application of computer systems", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "comp502", sem: "both", description: "Foundations of IT Infrastructure, introduction to IT infrastructure concepts", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "comp503", sem: "both", description: "Programming Two, Introduces the process of program design ", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "comp600", sem: "both", description: "IT project management, core competencies of project management in an information technology context.", preReq: "no pre-requisites", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "comp601", sem: "both", description: "IT Service Provision, Provides an introduction to IT Service Science and its role in the development and provision of high quality IT services. ", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "none", iss: "-", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp602", sem: "both", description: "Software Development Practice, development skills into a team environment.", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 2", coreq: "Co Requisites: comp600", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp603", sem: "both", description: "Program Design & Construction, introduction to the design and construction of object- oriented software.", preReq: "Either Pre Requisite: comp503 or comp610 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp604", sem: "both", description: "Operating Systems, An introduction to the design and construction of object- oriented software.", preReq: "Pre Requisite: comp502 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Infs602" },
                 { paperName: "comp606", sem: "1", description: "Foundations of Information Science, To lay a foundation for the use and understanding of information from a computational perspective", preReq: "no pre-requisites", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "none", ci: "-", als: "none" },
                 { paperName: "comp609", sem: "both", description: "Network and System Administration, Issues, skills and strategies associated with providing core services over a network in a multi user environment.", preReq: "Pre Requisite: Either Pre-Requisites comp500 or enel504", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "-", iss: "none", cs: "none", ci: "none", als: "none"},
                 { paperName: "comp610", sem: "both", description: "Data Structures and Algorithms, analysis of performance and complexity, data searching and data sorting algorithms, mathematical logic and formal grammars.", preReq: "Pre Requisite: math502 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "-", ci: "none", als: "none"},
                 { paperName: "comp611", sem: "2", description: "Algorithm Design and Analysis, Algorithmic analysis, concurrency algorithms, design patterns, design techniques, advanced data structures, graph algorithms, numerical algorithms.", preReq: "Pre Requisite: comp610", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "-", ci: "none", als: "none"},
                 { paperName: "comp704", sem: "not determined", description: "Research and Development Project,  investigation into a selected area whether that be a specific problem domain, or an area of business opportunity.", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "comp711", sem: "2", description: "Theory of Computation, A rigorous exploration into the Theory of Computer Science providing a mathematically sound presentation of the theory of computer science.", preReq: "Pre Requisite: either one of comp610 or comp613", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "-", ci: "none", als: "none" },
                 { paperName: "comp712", sem: "2", description: "Programming Languages, Surveys the theoretical and practical aspects of modern programming languages", preReq: "Pre Requisite: either one of comp603 or comp610", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "-", ci: "none", als: "none" },
                 { paperName: "comp713", sem: "both", description: "Distributed and Mobile Systems, Investigates the design and implementation of distributed systems", preReq: "Pre Requisite: comp611", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp721" },
                 { paperName: "comp714", sem: "both", description: "Advanced Network Technologies, applies relevant theoretical models for the evaluation, selection and deployment of advanced network technologies providing specified services.", preReq: "Pre Requisite: comp609", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "-", iss: "none", cs: "none", ci: "none", als: "none"},
                 { paperName: "comp715", sem: "both", description: "Network Security, Provides an in-depth understanding of LAN, WAN and Wireless security focusing on the functionality available and configuration of network and link layers.", preReq: "Pre Requisite: enel611", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "-", iss: "none", cs: "none", ci: "none", als: "none"},
                 { paperName: "comp717", sem: "1", description: "Artificial Intelligence, To understand the nature of intelligent systems and how such a system may be implemented.", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "none", ci: "-", als: "none"},
                 { paperName: "comp719", sem: "both", description: "Applied Human Computer Interaction, Understanding the factors that determine how people operate and make use of computer technology", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "comp721", sem: "1", description: "Web Development, knowledge of data communications and internetworking over the World Wide Web", preReq: "Pre Requisite: comp603", year: "Year 3", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp713" },
                 { paperName: "comp723", sem: "2", description: "Data Mining and Knowledge Engineering, Introduces students to the exciting world of Data Mining.", preReq: "Either Pre Requisite: infs601 or infs602", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "none", iss: "none", cs: "none", ci: "-", als: "none" },
                 { paperName: "enel504", sem: "both", description: "Computer Network Principles, provides the knowledge and skills required to build a scalable switched and routed computer network.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "enel611", sem: "both", description: "Computer Network Applications, To provide the knowledge and skills required to build a scalable switched and routed Wide Area Network.", preReq: "Pre Requisite: Either Pre-Requisites comp500 or enel504", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "-", iss: "none", cs: "none", ci: "none", als: "none"},
                 { paperName: "ense701", sem: "both", description: "Contemporary Methods in Software Engineering, develop your understanding of the concepts and methods required for the construction of large software intensive systems.", preReq: "Either Pre Requisite: comp603 or comp610", year: "Year 3", coreq: "no co-requistes", sd: "-", ns: "none", iss: "none", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs500", sem: "both", description: "Enterprise Systems, An introduction to enterprise information systems", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "infs600", sem: "both", description: "Data and Process Modelling, foundation in high-level computer graphics programming", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "-" },
                 { paperName: "infs601", sem: "both", description: "Logical Database Design, Provides students with the essential concepts, principles, and techniques of database management systems.", preReq: "Either Pre Requisite: comp500 or ense501", year: "Year 2", coreq: "no co-requisites", sd: "-", ns: "-", iss: "-", cs: "-", ci: "-", als: "none" },
                 { paperName: "infs602", sem: "both", description: "Physical Database Design, Covers database design from a performance perspective.", preReq: "Pre Requisite: infs601 and either one of comp503 or ense502", year: "Year 2", coreq: "no co-requisites", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Comp604" },
                 { paperName: "infs603", sem: "both", description: "Needs Analysis, Acquisition and Training, Focuses on skills required to identify a user's information technology solution requirements", preReq: "no pre-requisites", year: "Year 2", coreq: "no co-requisites", sd: "none", ns: "none", iss: "-", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs701", sem: "2", description: "IT Strategy and Control, Examines the practice and theory of IT Services Management with a focus on industry best practices in managing information technology in an organisation.", preReq: "no pre-requisites", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "none", iss: "-", cs: "none", ci: "none", als: "none" },
                 { paperName: "infs702", sem: "both", description: "IT Service Management, A critical analysis of the service techniques and procedures required to provide supervision, technical support, IT operations services and customer service in an IT operations environment.", preReq: "Pre Requisite: comp601", year: "Year 3", coreq: "no co-requisites", sd: "none", ns: "none", iss: "-", cs: "none", ci: "none", als: "none" },
                 { paperName: "math500", sem: "both", description: "Mathematical Concepts, Provides an introduction to the mathematical concepts required for an understanding of the analysis of data and applications in computing, science, and engineering.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math501 or Math502 or Stat500" },
                 { paperName: "math501", sem: "2", description: "Differential and Integral Calculus, Gives the student an understanding of differential and integral calculus", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math502 or Stat500" },
                 { paperName: "math502", sem: "both", description: "Algebra and Discrete Mathematics, Gives the student a solid foundation in algebra and discrete mathematics", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Stat500" },
                 { paperName: "stat500", sem: "both", description: "Applied Statistics, An introduction to applied statistics. Provides techniques for describing and summarising a data set.", preReq: "no pre-requisites", year: "Year 1", coreq: "no co-requistes", sd: "+", ns: "none", iss: "none", cs: "none", ci: "none", als: "none", options: "Math500 or Math501 or Math502" },
                 { paperName: "stat600", sem: "2", description: "Probability, Provides an introduction to a branch of statistics that deals with the study of chance.", preReq: "Either Pre-Requisite: math501 or math502", year: "Year 2", coreq: "no co-requistes", sd: "none", ns: "none", iss: "none", cs: "none", ci: "none", als: "-" },
                 { paperName: "stat601", sem: "1", description: "Statistical Methods, A study of statistical methods suitable for a range of applications in science, engineering and business.", preReq: "Pre-Requisite: stat500", year: "Year 2", coreq: "no co-requistes", sd: "none", ns: "none", iss: "none", cs: "none", ci: "-", als: "-" },
                 { paperName: "stat700", sem: "1", description: "Applied Stochastic Models, The focus of this paper is the application of stochastic models to analyse real-life scenarios.", preReq: "Pre-Requisite: stat600", year: "Year 3", coreq: "no co-requistes", sd: "none", ns: "none", iss: "none", cs: "none", ci: "none", als: "-" },
                 { paperName: "stat702", sem: "1", description: "Industrial and Business Analytics, Collection and analysis of data in an industrial and business context.", preReq: "Pre-Requisite: stat601", year: "Year 3", coreq: "no co-requistes", sd: "none", ns: "none", iss: "none", cs: "none", ci: "none", als: "-" }
                ]
   
   var jobs = [{ job: "App Developer", majorsAssociated: "Software Development"},
                { job: "Biostatistician", majorsAssociated: "Analytics"},
                { job: "Business/quality/statistical analyst", majorsAssociated: "Analytics"},
                { job: "Call centre manager", majorsAssociated: "IT Service Science"},
                { job: "Computer Programmer", majorsAssociated: "Software Development"},
                { job: "Database administrator", majorsAssociated: "IT Service Science"},
                { job: "Data analyst", majorsAssociated: "Computational Intelligence"},
                { job: "Entrepreneur", majorsAssociated: "Computer Science"},
                { job: "Government statistician", majorsAssociated: "Analytics"},
                { job: "Industrial researcher", majorsAssociated: "Computer Science"},
                { job: "Industrial forecaster", majorsAssociated: "Analytics"},
                { job: "Information analyst and designer", majorsAssociated: "IT Service Science or Computational Intelligence"},
                { job: "Integration and functional consultant", majorsAssociated: "IT Service Science"},
                { job: "IS operational manager", majorsAssociated: "IT Service Science"},
                { job: "IS services consultant", majorsAssociated: "Computational Intelligence"},
                { job: "IT Security Analyst", majorsAssociated: "Networks and Security"},
                { job: "IT service supervisor", majorsAssociated: "IT Service Science"},
                { job: "IT support role", majorsAssociated: "IT Service Science"},
                { job: "IT supervisor/manager", majorsAssociated: "Computational Intelligence"},
                { job: "Logistics analyst", majorsAssociated: "IT Service Science or Computational Intelligence"},
                { job: "Logistics or quality analyst", majorsAssociated: "Analytics"},
                { job: "Network Analyst", majorsAssociated: "Networks and Security"},   
                { job: "Network Designer", majorsAssociated: "Networks and Security"},
                { job: "Outsourced IT services co-ordinator", majorsAssociated: "IT Service Science"},
                { job: "Project leader", majorsAssociated: "Computational Intelligence"},
                { job: "Project Manager", majorsAssociated: "Software Development"},
                { job: "Research and development manager", majorsAssociated: "Computer Science"},
                { job: "Software architect", majorsAssociated: "Computer Science or IT Service Science"},
                { job: "Software designer and implementer", majorsAssociated: "Computer Science"},
                { job: "Software Developer", majorsAssociated: "Software Development"},
                { job: "Systems Analyst", majorsAssociated: "Software Development"},
                { job: "Systems and Network Administrator", majorsAssociated: "Networks and Security or IT Service Science"},
                { job: "Technical or business analyst", majorsAssociated: "Computational Intelligence"},
                { job: "Technology Consultant", majorsAssociated: "Software Development"},
                { job: "Web Developer", majorsAssociated: "Software Development"},
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
    
    if((req1 == "pre-requisites" && req2 == "co-requisites") || (req1 == "co-requisites" && req2 == "pre-requisites")) {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq + " and " +  chosenPaper.coreq;
    }
    else if(req1 == "co-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.coreq;
    }
    else if(req1 == "pre-requisites") {
      speech = chosenPaper.paperName + ' has \n' + chosenPaper.preReq;
    }
    else if((req3 == "pre-requisites" && req4 == "co-requisites") || (req3 == "co-requisites" && req4 == "pre-requisites")) {
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
    var maj;
    
    switch(chosenMajor) {
      case "sd":
        maj = "Software Development"
        break;
      case "ns":
        maj = "Networks and Security"
        break;
      case "cs":
        maj = "Computer Science"
        break;
      case "iss":
        maj = "IT Service Science"
        break;
      case "als":
        maj = "Analytics"
        break;
      case "ci":
        maj = "Computational Intelligence"
        break;
    }
    
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
      speech = "hmmm, for " + maj + ", I would suggest taking: \n Year One papers: " + results1 + "\n Year Two papers: " + results2 + "\n Year Three papers: " + results3;
    }
    
    else {
      for (var index = 0; index < arrayLength; ++index) {
        currentPaper = papers[index];
        if(currentPaper[chosenMajor] == "-" && currentPaper["year"] == req.body.result.parameters.ChosenYear) {
          paperArray.push(currentPaper.paperName)
        }
        else {}
      }
      var arrayLength2 = paperArray.length;
      var results = "";
      var currentPaper2;
      for(var index = 0; index < arrayLength2; ++index) {
        currentPaper2 = paperArray[index];
        results += currentPaper2 + " ";
      }
      speech = "Here are the papers that are compulsary for " + req.body.result.parameters.ChosenYear + " of " + maj + ": " + results;
    }
  }
  
  
  else if(req.body.result.action == "requestPapersforJob") {
    var chosenJob = req.body.result.parameters.Job;    
    var requestedJob = jobs.find(function (obj) { return obj.job === chosenJob; });
    speech = requestedJob.job + "s are commonly known to be studying papers in a " + requestedJob.majorsAssociated + " Major";
  }
  
  else if(req.body.result.action == "jobsInvolved") {
    var chosenMajor = req.body.result.parameters.Major;
    var requestedJobs = jobs.filter(function(a){return a !== chosenMajor});
    speech = requestedJobs.toString();
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
