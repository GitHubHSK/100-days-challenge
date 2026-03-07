const fs = require("fs");

function readFile() {
  let fileData;

  fileData = fs.readFile("data.txt", function (error, fileData) {
    console.log("FIle parsing done!");
    console.log(fileData.toString());
  });

  console.log("Hi there!");
}

readFile();