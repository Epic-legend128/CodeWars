const solution = _ => {
  var express = require("express");
  var app = express();
  app.listen(process.env.PORT, process.env.HOST, _ => {
    console.log("Listening on port "+process.env.PORT);
  });
};
