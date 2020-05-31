var http = require('http'); // Import Node.js core module
var fs = require('fs');
const PORT=8080;
fs.readFile('/home/iuliana/Documents/Facultate/Licenta/anul2/semestrul1/TehniciWeb/siteProiect/node.js/nod.txt','utf8', function (err, data) {
if (err) throw err;
var s= http.createServer(function (req, res) {   //create web server
      
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    
});
s.listen(PORT);
console.log('Node.js web server at port 8080 is running..')
});
