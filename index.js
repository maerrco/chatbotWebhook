"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const restService = express();
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



restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.post("/sdpFailed", function(req, res) {
  var speech = "";
  
  var chosenPaper = papers.filter(function( obj ) {
    return obj.paperName == req.body.result.parameters.paper;
  });
  
  if(req.body.result.parameters.paper == chosenPaper.paperName) {
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
          'You have 2 options:';
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

restService.post("/video", function(req, res) {
  return res.json({
    speech:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    displayText:
      '<speak>  <audio src="https://www.youtube.com/watch?v=VX7SSnvpj-8">did not get your MP3 audio file</audio></speak>',
    source: "webhook-echo-sample"
  });
});

restService.post("/slack-test", function(req, res) {
  var slack_message = {
    text: "Details of JIRA board for Browse and Commerce",
    attachments: [
      {
        title: "JIRA Board",
        title_link: "http://www.google.com",
        color: "#36a64f",

        fields: [
          {
            title: "Epic Count",
            value: "50",
            short: "false"
          },
          {
            title: "Story Count",
            value: "40",
            short: "false"
          }
        ],

        thumb_url:
          "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
      },
      {
        title: "Story status count",
        title_link: "http://www.google.com",
        color: "#f49e42",

        fields: [
          {
            title: "Not started",
            value: "50",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          },
          {
            title: "Development",
            value: "40",
            short: "false"
          }
        ]
      }
    ]
  };
  return res.json({
    speech: "speech",
    displayText: "speech",
    source: "webhook-echo-sample",
    data: {
      slack: slack_message
    }
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
