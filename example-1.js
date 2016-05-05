require('http').createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Your node.js server works...in less than ten lines of code.');
}).listen(3000);
console.log('In your browser, go to: http://localhost:3000');