// read and write json file practice

const fs = require("fs");

// const customer = require("./customer.json");
// console.log(customer.address);

// using fs.readFile()

// fs.readFile("./customer.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log(err);
//   } else {
//     try {
//       const data = JSON.parse(jsonString);
//       console.log(data.address);
//     } catch (err) {
//       console.log("ERROR parsing JSON data!", err);
//     }
//   }

//   console.log(jsonString);
// });

// helper function to pass data to JSON file and a call back to handles the parsed JSON data

function jsonReader(filePath, cb) {
  fs.readFile(filePath, "utf8", (err, fileData) => {
    if (err) {
      return cd && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cd && cd(err);
    }
  });
}
jsonReader("./customer.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.address);
  }
});

// ========= Best way HERE!================
// when reading files its preffered to use the async

// async version of fs.readFileSync() needs to be wrapped in a try/catch below to catch errors also json data needs to be parsed

try {
  const jsonString = fs.readFileSync("./customer.json", "utf8");
  const customer = JSON.parse(jsonString);
  console.log(customer.address);
} catch (err) {
  console.log(err);
}

// writing data to the file and creating a new json object

const newObj = {
  name: "Newbie Corp",
  order_count: 0,
  address: "P0 Box City",
};
//  we pass null and 2 as the optional objects in stringify here we used 2 spaces of white space
fs.writeFile("./newCustomer.json", JSON.stringify(newObj, null, 2), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Successfully written!");
  }
});

// updating a json file

jsonReader("./customer.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.order_count += 1; // incrementing order count by one and writing it back
    fs.writeFile("./customer.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});


// in order to update data in a JSON file  you need first read it,prase it, alter it and write it back to the JSON file