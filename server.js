
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// afin d'afficher les images
app.use(express.static(__dirname+'/public'));
// Website working time 

const workingTime = (req, res, next) => {
  let openDay = new Date();

  if (
    openDay.getHours() > 09 &&
    openDay.getHours() < 17 &&
    openDay.getDay() > 0 &&
    openDay.getDay() < 6
  ) {
    next();
  } else {
    console.log("Our office is closed !!!");
    res.send("<h1>Sorry, Our office is closed, please retry in working hours ! ");
  }
};

app.get("/",workingTime, function (req, res) {
    res.sendFile(__dirname + "/public/home.html");
  });
  app.get("/contact", workingTime, function (req, res) {
    res.sendFile(__dirname + "/public/contact.html");
  });
  app.get("/service", function (req, res) {
    res.sendFile(__dirname + "/public/ourServices.html");
  });


app.listen(5000, function () {
    console.log("Listening on port 5000 ");
  });