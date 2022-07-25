const express = require("express");
const path = require("path");
const crypto = require("crypto");
const cors = require("cors");
// const fs = require("fs");
// const {generate} = require('./generateZoomSignature');

const app = express();

app.use(express.static(path.join(__dirname, "build")));
// app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(cors());

app.get("/generateZoomSignature", (req, res) => {
  var apiKey = "_KqJ2LhdS72IEtQxkgIePg";
  var apiSecret = "is6KgZKTYTZDw1Cs1R4RQyYWrkIKNoLH7lPm";
  var meetingNumber = req.query.meetingNumber;
  // console.log('meetingNumbe', meetingNumber);
  var role = 0;
  generateSignature(apiKey, apiSecret, meetingNumber, role)
    .then((sign) => {
      console.log("sign", sign);
      res.json({ sign: sign });
    })
    .catch((e) => console.log(e));
});

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
  return new Promise((resolve, rej) => {
    // Prevent time sync issue between client signature generation and zoom
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = crypto
      .createHmac("sha256", apiSecret)
      .update(msg)
      .digest("base64");
    const signature = Buffer.from(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");

    resolve(signature);
  });
}

app.get("/zoom", function (req, res) {
  res.sendFile(path.join(__dirname, "zoom.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000, () => {
  console.log("server started!!!");
});
