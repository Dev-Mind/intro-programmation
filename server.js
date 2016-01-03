var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic("src")).listen(9000);
console.log("HTTP server started : http://localhost:9000");