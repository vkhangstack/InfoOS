const os = require('os');


console.log("Platform: "+ os.platform())
console.log("Version: " + os.version())
console.log("Architecture: " + os.arch())
console.log("Number of CPUs: " + os.cpus().length)
console.log("Hostname: "+ os.hostname())
console.log("Release: " + os.release())
console.log("Type: " + os.type())
console.log("Total Memory: " + os.totalmem()/1024/1024/1000 + " GB")
console.log("Memory used: " + os.freemem()/1024/1024/1000 + " GB")