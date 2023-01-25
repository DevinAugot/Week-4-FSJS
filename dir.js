const fs = require("fs");

// checking if the directory exsists and then creating it if it doesnt
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created!");
  });
}

// code to delete a new directory

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory deleted!");
  });
}
