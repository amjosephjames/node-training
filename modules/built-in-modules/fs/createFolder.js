const fs = require("fs");
const os = require("os");

const renameUs = (length) => {
  // set an empty variable to store random character
  result = "";
  let sampleData = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    // store every random character gotten form the for loop
    result += sampleData.charAt(Math.floor(Math.random() * sampleData.length));
  }
  // return the result
  return result;
};

// checks if the folder exist
if (!fs.existsSync("folder")) {
  // make a folder
  fs.mkdir("folder", (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("folder has been created");
    }
  });
} else {
  // rename the folder
  fs.rename("folder", "folder-" + renameUs(3), (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("folder renamed");
    }
  });
}
