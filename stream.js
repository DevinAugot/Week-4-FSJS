const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/new-lorem.txt");

// now we need to listen for the data comming into the stream

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });


// more eficient

rs.pipe(ws)