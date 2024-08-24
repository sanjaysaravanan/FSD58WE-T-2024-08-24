const os = require("os");

console.log("Version", os.version());
console.log("Total RAM", os.totalmem());
console.log("Free RAM", os.freemem());
console.log("Cores", os.cpus());
