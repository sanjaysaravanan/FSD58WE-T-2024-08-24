import fs from "fs";

// read the contents of a file
/* console.log("Starting to read a file"); */

// asynchronous/ non-blocking reading of a file content with encoding
// error first callback
/* fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("There is some error while reading the file", err);
  } else {
    console.log(data);
  }
}); */

// convert the file content to array lines in the file
/* fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("There is some error while reading the file", err);
  } else {
    console.log(data.split("\n"));
  }
}); */

// synchronous / blocking i/o operation
// const data = fs.readFileSync("./sample.txt", "utf-8"); // with encoding
/* const data = fs.readFileSync("./sample.txt");
console.log(data);

console.log("File Reading Done"); */

// Creating new file
// folder creation - asynchronous
/* if (!fs.existsSync("./files")) {
  fs.mkdir("files", (err) => {
    if (err) {
      console.log("Something went wrong", err);
    } else {
      console.log("Folder Created Successfully");
    }
  });
} else {
  console.log("Folder already exists");
} */

// create files
/* fs.writeFile(
  "./files/test-1.txt",
  "Very First Test File content for Testing",
  () => {
    console.log("Files created successfully");
  }
); */

// Create files test-3, test-4, test-5 ... test-10 with similar content above
/* for (let i = 3; i <= 10; i++) {
  fs.writeFile(
    `./files/test-${i}.txt`,
    `${i} Test File content for Testing`,
    () => {
      console.log("Files created successfully");
    }
  );
} */

// Append some content to the existing file
/* fs.appendFile("./files/test-1.txt", "Some more Content Testing", () => {
  console.log("Content Appended Successfully");
}); */

// try with a non existing file
/* fs.appendFile("./files/test-11.txt", "Some more Content Testing", () => {
  console.log("Content Appended Successfully");
}); */

// appending content from the new line
/* fs.appendFile("./files/test-1.txt", "\nSome more Content Testing", () => {
  console.log("Content Appended Successfully");
}); */

// delete the test-11.txt from files folder
/* fs.unlink("./files/test-11.txt", () => {
  console.log("Deleted File Content or No File Found");
}); */

// Current Timestamp:

const milliseconds = Date.now();
console.log(milliseconds); // number of milliseconds since Jan 1 1970
console.log((milliseconds / 1000).toFixed(0)); // number of seconds since Jan 1 1970

// DateTime Formats
const date = new Date();
console.log("Normal Readable Format", date.toString());
console.log("ISO Format", date.toISOString());
