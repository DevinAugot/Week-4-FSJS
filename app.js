// practicing read and writing files

// const fs = require("fs");

// const readMe = fs.readFileSync("readMe.txt", "utf8"); // this is where you specify the file path

// fs.writeFileSync('writeMe.txt', readMe) // this makes a txt file from the read file readMe

// // check to see if reading file
// console.log(readMe)




// code for ansynchronous versions (better version )

const fs = require("fs");

fs.readFile("readMe.txt", "utf8", function (err, data) {
  console.log(data);
  fs.writeFileSync("writeMe.txt",data);
});

// fs.writeFile('writeMe.txt', readMe)


// reading and wiriting JSON files


// quick tips for reading a json file

// 1) is passing in the the file path through to the require('./file.json') this would return the javascript object and cache result
// 2) you can also read a json file by using fs.readFile('./file.json') this would read the current state of the file and you then must parse the data into a JS object
