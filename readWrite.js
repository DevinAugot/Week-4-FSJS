// dave grey video node.js practice

const fsPromises = require("fs").promises;
const path = require("path"); // much better approach

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    // deleteing a file
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWriter.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWriter.txt"),
      "\n\n Nice to meet you!."
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWriter.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};
// bringing the function into action
fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// // writing a file
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you!",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete!");

//     // appending or updating a file will also create file if it doesnt exsist (this would be better suited inside the writeFile() if the file already exsists)

//     fs.appendFile(
//       path.join(__dirname, "files", "test.txt"),
//       "testing text ",

//       (err) => {
//         if (err) throw err;
//         console.log("Append complete!");
//       }
//     );
//   }
// );

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an error: ${err}`);
  process.exit(1);
});

// // renaming a file

// fs.rename(
//   path.join(
//     __dirname,
//     "files",
//     "reply.txt",
//     path.join(__dirname, "files", "Newreply.txt"),
//     (err) => {
//       if (err) throw err;
//       console.log("Rename Complete!");
//     }
//   )
// );
