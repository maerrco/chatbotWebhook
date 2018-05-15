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

    var comp602 = { paperName: "comp602",
                    preReq: "comp603, comp610",
                    coreq: "comp600",
                    softwareDevelopment: "-",
                    networking: "none",
                    iss: "none",
                    computerScience: "none",
                    ci: "none",
                    analytics: "none" };
    var ense701 = { paperName: "ense701",
                    preReq: "comp603, comp610",
                    coreq: "comp600",
                    softwareDevelopment: "-",
                    networking: "none",
                    iss: "none",
                    computerScience: "none",
                    ci: "none",
                    analytics: "none" };

     
var papers = new Array();
papers.push(comp602);
papers.push(ense701);


restService.post("/sdpFailed", function(req, res) {
  //store papers with their corresponding papers
  var speech = "";
  
  var chosenPaper = papers.filter(function( obj ) {
    return obj. == 6;
  });
  
  
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
