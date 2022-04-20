"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // defining port and host

var PORT = process.env.PORT || "3000";
var HOST = "localhost"; // request 

app.get("/", function (req, res) {
  res.send("<h1> Home Page </h1>");
});
app.get("/about", function (req, res) {
  res.send("<h1> About US </h1>");
});
app.get("/login", function (req, res) {
  res.send("Login Form");
}); // listening on port

app.listen(PORT, HOST, function () {
  console.log("Listening on port : ".concat(PORT));
});